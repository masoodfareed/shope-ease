import { useState } from 'react'
import './ProductImage.css'

function ProductImage({ src, alt, className = '' }) {
  const [failedSrc, setFailedSrc] = useState(null)

  // Show the fallback if there is no src, or if this src already failed
  if (!src || failedSrc === src) {
    return (
      <div
        className={`image-fallback ${className}`}
        role="img"
        aria-label={alt}
      >
        No image available
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailedSrc(src)}
    />
  )
}

export default ProductImage