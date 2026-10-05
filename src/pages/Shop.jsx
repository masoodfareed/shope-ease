import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import SortDropdown from '../components/SortDropdown'
import EmptyState from '../components/EmptyState'
import { products, categories } from '../data/products'
import './Page.css'
import './Shop.css'

function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')

  // Read the category from the URL. If it is missing or invalid, use 'All'.
  const categoryParam = searchParams.get('category')
  const category = categories.includes(categoryParam) ? categoryParam : 'All'

  function handleCategoryChange(newCategory) {
    if (newCategory === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: newCategory })
    }
  }

  function clearFilters() {
    setSearch('')
    setSort('default')
    setSearchParams({})
  }

  // Calculate the products to show (derived data, not stored in state)
  const visibleProducts = products
    .filter((p) => category === 'All' || p.category === category)
    .filter((p) =>
      p.name.toLowerCase().includes(search.trim().toLowerCase())
    )
    .sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="container page">
      <h1 className="page-title">Shop</h1>
      <p className="page-subtitle">
        {visibleProducts.length}{' '}
        {visibleProducts.length === 1 ? 'product' : 'products'}
      </p>

      <div className="shop-toolbar">
        <SearchBar value={search} onChange={setSearch} />
        <div className="shop-toolbar-row">
          <CategoryFilter
            categories={categories}
            selected={category}
            onSelect={handleCategoryChange}
          />
          <SortDropdown value={sort} onChange={setSort} />
        </div>
      </div>

      {visibleProducts.length === 0 ? (
        <div>
          <EmptyState
            title="No products found"
            message="Try a different search word or category."
          />
          <div className="clear-wrap">
            <button className="clear-btn" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        </div>
      ) : (
        <ProductGrid products={visibleProducts} />
      )}
    </div>
  )
}

export default Shop