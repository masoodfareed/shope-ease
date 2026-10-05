import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import QuantityControl from './QuantityControl'
import './CartItem.css'
import ProductImage from './ProductImage'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <article className="cart-item">
      <Link to={`/products/${item.id}`} className="cart-item-image-wrap">
        <ProductImage
  src={item.image}
  alt={item.name}
  className="cart-item-image"
/>
      </Link>

      <div className="cart-item-info">
        <h3 className="cart-item-name">
          <Link to={`/products/${item.id}`}>{item.name}</Link>
        </h3>
        <p className="cart-item-price">{formatPrice(item.price)} each</p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          Remove
        </button>
      </div>

      <div className="cart-item-right">
        <QuantityControl
          quantity={item.quantity}
          max={item.stock}
          onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
          onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
        />
        <p className="cart-item-total">
          {formatPrice(item.price * item.quantity)}
        </p>
      </div>
    </article>
  )
}

export default CartItem