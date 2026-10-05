import './CategoryFilter.css'

function CategoryFilter({ categories, selected, onSelect }) {
  const options = ['All', ...categories]

  return (
    <div className="category-filter">
      {options.map((category) => (
        <button
          key={category}
          className={category === selected ? 'chip active' : 'chip'}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter