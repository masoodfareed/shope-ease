import './SortDropdown.css'

function SortDropdown({ value, onChange }) {
  return (
    <select
      className="sort-dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label="Sort products"
    >
      <option value="default">Sort: Default</option>
      <option value="price-low">Price: Low to High</option>
      <option value="price-high">Price: High to Low</option>
      <option value="name">Name: A to Z</option>
    </select>
  )
}

export default SortDropdown