import { Link, useParams } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import { formatPrice } from '../utils/formatPrice'
import './Page.css'
import './ProductDetails.css'
import ProductImage from '../components/ProductImage';

function ProductDetails() {
  const { addToCart } = useCart()
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  // If no product matches the URL, show a friendly message
  if (!product) {
    return (
      <div className="container page details-missing">
        <h1>Product not found</h1>
        <p>We couldn't find the product you were looking for.</p>
        <Link to="/products" className="details-btn">
          Back to Shop
        </Link>
      </div>
    )
  }

  const outOfStock = product.stock === 0

  return (
    <div className="container page">
      <Link to="/products" className="back-link">
        ← Back to Shop
      </Link>

      <div className="details">
        <div className="details-image-wrap">
          <ProductImage
  src={product.image}
  alt={product.name}
  className="details-image"
/>
        </div>

        <div className="details-info">
          <span className="details-category">{product.category}</span>
          <h1 className="details-name">{product.name}</h1>
          <p className="details-rating">★ {product.rating} rating</p>
          <p className="details-price">{formatPrice(product.price)}</p>

          <p className={outOfStock ? 'stock out' : 'stock in'}>
            {outOfStock ? 'Out of stock' : `In stock (${product.stock} available)`}
          </p>

          <p className="details-description">{product.description}</p>

          <button
            className="details-btn"
            disabled={outOfStock}
            onClick={() => addToCart(product)}
            >
            {outOfStock ? 'Sold out' : 'Add to Cart'}
           </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails