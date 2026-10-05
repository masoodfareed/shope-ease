import { createContext, useContext, useEffect, useState } from 'react'
import { products } from '../data/products'

const CartContext = createContext()

// New key because the saved format changed (we now save only id + quantity)
const STORAGE_KEY = 'shopease-cart-v2'

// Reads the saved cart and rebuilds every item from the CURRENT product list.
// Invalid or outdated entries are dropped or corrected.
function loadCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    const parsed = saved ? JSON.parse(saved) : []

    if (!Array.isArray(parsed)) return []

    return parsed.flatMap((entry) => {
      // Skip anything that isn't a proper { id, quantity } object
      if (!entry || !Number.isInteger(entry.id)) return []
      if (!Number.isInteger(entry.quantity)) return []

      // Does this product still exist?
      const product = products.find((p) => p.id === entry.id)
      if (!product) return []

      // Skip products that are now out of stock
      if (product.stock <= 0) return []

      // Keep quantity between 1 and the current stock
      const quantity = Math.max(1, Math.min(entry.quantity, product.stock))

      return [{ ...product, quantity }]
    })
  } catch {
    // Saved data was corrupted, so start with an empty cart
    return []
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCart)

  // Save ONLY the id and quantity of each item
  useEffect(() => {
    const minimal = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(minimal))
  }, [cartItems])

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id)

      if (existing) {
        if (existing.quantity >= product.stock) {
          return prevItems
        }
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  function updateQuantity(id, newQuantity) {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== id) return item
        const safeQuantity = Math.max(1, Math.min(newQuantity, item.stock))
        return { ...item, quantity: safeQuantity }
      })
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const value = {
    cartItems,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  return useContext(CartContext)
}