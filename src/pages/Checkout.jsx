import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import CheckoutForm from '../components/CheckoutForm'
import EmptyState from '../components/EmptyState'
import './Page.css'
import './Checkout.css'

function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  function handlePlaceOrder(formData) {
    // Mock checkout: nothing is sent to a server.
    const order = {
      orderNumber: 'SE-' + Date.now().toString().slice(-6),
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      items: cartItems,
      total: cartTotal,
    }

    navigate('/order-success', { state: { order } })
    clearCart()
  }

  if (cartItems.length === 0) {
    return (
      <div className="container page">
        <h1 className="page-title">Checkout</h1>
        <EmptyState
          title="Your cart is empty"
          message="Add some products before checking out."
          actionText="Start Shopping"
          actionTo="/products"
        />
      </div>
    )
  }

  return (
    <div className="container page">
      <h1 className="page-title">Checkout</h1>
      <p className="page-subtitle">Complete your order below.</p>

      <div className="checkout-layout">
        <CheckoutForm onSubmit={handlePlaceOrder} />

        <aside className="checkout-summary">
          <h2>Your Order</h2>
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <span>Total</span>
            <span>{formatPrice(cartTotal)}</span>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Checkout