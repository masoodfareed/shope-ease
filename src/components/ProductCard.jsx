import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/formatPrice'
import './ProductCard.css'
import ProductImage from './ProductImage'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const outOfStock = product.stock === 0

  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <ProductImage
  src={product.image}
  alt={product.name}
  className="product-image"
/>
        {outOfStock && <span className="stock-badge">Out of stock</span>}
      </Link>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="product-rating">★ {product.rating}</p>

        <div className="product-footer">
          <span className="product-price">{formatPrice(product.price)}</span>
          <button
            className="add-btn"
            disabled={outOfStock}
            onClick={() => addToCart(product)}
          >
            {outOfStock ? 'Sold out' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard