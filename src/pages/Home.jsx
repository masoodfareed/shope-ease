import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import { products, categories } from '../data/products'
import './Home.css'

function Home() {
  // Well-rated, in-stock products, limited to the first 4
  const featured = products
    .filter((p) => p.rating >= 4.5 && p.stock > 0)
    .slice(0, 4)

  return (
    <div>
      {/* Hero banner */}
      <section className="hero">
        <div className="container hero-inner">
          <h1>Find products you'll love</h1>
          <p>Quality items across electronics, clothing, home, and more.</p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container home-section">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-list">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="category-card"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container home-section">
        <h2 className="section-title">Featured Products</h2>
        <ProductGrid products={featured} />
      </section>
    </div>
  )
}

export default Home