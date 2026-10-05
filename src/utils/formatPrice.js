// Turns a number like 69 into the text "$69.00"
export function formatPrice(price) {
  return `$${price.toFixed(2)}`
}