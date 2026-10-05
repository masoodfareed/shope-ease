import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import EmptyState from '../components/EmptyState'
import './Page.css'
import './Cart.css'

function Cart() {
  const { cartItems } = useCart()

  if (cartItems.length === 0) {
    return (
      <div className="container page">
        <h1 className="page-title">Your Cart</h1>
        <EmptyState
          title="Your cart is empty"
          message="Looks like you haven't added anything yet."
          actionText="Start Shopping"
          actionTo="/products"
        />
      </div>
    )
  }

  return (
    <div className="container page">
      <h1 className="page-title">Your Cart</h1>
      <p className="page-subtitle">
        {cartItems.length} {cartItems.length === 1 ? 'product' : 'products'}
      </p>

      <div className="cart-layout">
        <div className="cart-list">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <CartSummary />
      </div>
    </div>
  )
}

export default Cart