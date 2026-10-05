import { Link, useLocation } from 'react-router-dom'
import { formatPrice } from '../utils/formatPrice'
import EmptyState from '../components/EmptyState'
import './Page.css'
import './OrderSuccess.css'

function OrderSuccess() {
  const location = useLocation()
  const order = location.state?.order

  // Opened directly without placing an order
  if (!order) {
    return (
      <div className="container page">
        <h1 className="page-title">Order Confirmation</h1>
        <EmptyState
          title="No recent order found"
          message="Place an order first and your confirmation will appear here."
          actionText="Start Shopping"
          actionTo="/products"
        />
      </div>
    )
  }

  return (
    <div className="container page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Thank you, {order.name}!</h1>
        <p className="success-message">
          Your order <strong>{order.orderNumber}</strong> has been placed. A
          confirmation would be sent to <strong>{order.email}</strong>.
        </p>

        <ul className="success-items">
          {order.items.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{formatPrice(item.price * item.quantity)}</span>
            </li>
          ))}
        </ul>

        <div className="success-total">
          <span>Total paid</span>
          <span>{formatPrice(order.total)}</span>
        </div>

        <Link to="/products" className="success-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default OrderSuccess