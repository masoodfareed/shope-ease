import './QuantityControl.css'

function QuantityControl({ quantity, max, onDecrease, onIncrease }) {
  return (
    <div className="quantity-control">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <span className="quantity-value">{quantity}</span>
      <button
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}

export default QuantityControl