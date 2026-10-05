import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './CartSummary.css'

function CartSummary() {
  const { cartCount, cartTotal } = useCart()

  return (
    <aside className="cart-summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Items</span>
        <span>{cartCount}</span>
      </div>
      <div className="summary-row">
        <span>Shipping</span>
        <span className="free">Free</span>
      </div>
      <div className="summary-row summary-total">
        <span>Total</span>
        <span>{formatPrice(cartTotal)}</span>
      </div>

      <Link to="/checkout" className="checkout-btn">
        Proceed to Checkout
      </Link>
      <Link to="/products" className="continue-link">
        Continue Shopping
      </Link>
    </aside>
  )
}

export default CartSummary