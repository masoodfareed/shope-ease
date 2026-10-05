// Mock data: a list of products. This is NOT a real database.
// Images come from picsum.photos (placeholder photos). You can swap
// any "image" value for your own image URL later.

export const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 79.99,
    category: 'Electronics',
    description:
      'Over-ear Bluetooth headphones with deep bass, noise isolation, and up to 30 hours of battery life.',
    image: 'https://picsum.photos/seed/headphones/600/450',
    rating: 4.6,
    stock: 25,
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 129.99,
    category: 'Electronics',
    description:
      'Track your steps, heart rate, and sleep. Water resistant with a bright always-on display.',
    image: 'https://picsum.photos/seed/smartwatch/600/450',
    rating: 4.4,
    stock: 12,
  },
  {
    id: 3,
    name: 'Portable Speaker',
    price: 49.99,
    category: 'Electronics',
    description:
      'Compact waterproof speaker with rich sound and 12 hours of playtime. Perfect for trips.',
    image: 'https://picsum.photos/seed/speaker/600/450',
    rating: 4.3,
    stock: 40,
  },
  {
    id: 4,
    name: 'Classic Denim Jacket',
    price: 69.0,
    category: 'Clothing',
    description:
      'A timeless denim jacket with a comfortable fit. Goes with almost everything in your wardrobe.',
    image: 'https://picsum.photos/seed/denimjacket/600/450',
    rating: 4.5,
    stock: 18,
  },
  {
    id: 5,
    name: 'Cotton Hoodie',
    price: 44.5,
    category: 'Clothing',
    description:
      'Soft, warm, and breathable 100% cotton hoodie with a roomy front pocket.',
    image: 'https://picsum.photos/seed/hoodie/600/450',
    rating: 4.7,
    stock: 30,
  },
  {
    id: 6,
    name: 'Running Sneakers',
    price: 89.0,
    category: 'Clothing',
    description:
      'Lightweight sneakers with cushioned soles and a breathable mesh top for everyday running.',
    image: 'https://picsum.photos/seed/sneakers/600/450',
    rating: 4.2,
    stock: 0,
  },
  {
    id: 7,
    name: 'Ceramic Coffee Mug Set',
    price: 24.99,
    category: 'Home',
    description:
      'Set of four handmade-style ceramic mugs. Dishwasher and microwave safe.',
    image: 'https://picsum.photos/seed/mugs/600/450',
    rating: 4.8,
    stock: 50,
  },
  {
    id: 8,
    name: 'Scented Soy Candle',
    price: 18.5,
    category: 'Home',
    description:
      'Hand-poured soy candle with a calming lavender scent. Burns for up to 40 hours.',
    image: 'https://picsum.photos/seed/candle/600/450',
    rating: 4.6,
    stock: 60,
  },
  {
    id: 9,
    name: 'Cozy Throw Blanket',
    price: 34.99,
    category: 'Home',
    description:
      'Ultra-soft knitted blanket for your sofa or bed. Machine washable.',
    image: 'https://picsum.photos/seed/blanket/600/450',
    rating: 4.5,
    stock: 22,
  },
  {
    id: 10,
    name: 'Leather Wallet',
    price: 39.0,
    category: 'Accessories',
    description:
      'Slim genuine leather wallet with card slots and a coin pocket.',
    image: 'https://picsum.photos/seed/wallet/600/450',
    rating: 4.4,
    stock: 35,
  },
  {
    id: 11,
    name: 'Polarized Sunglasses',
    price: 29.99,
    category: 'Accessories',
    description:
      'UV400 polarized sunglasses with a lightweight frame. Comes with a protective case.',
    image: 'https://picsum.photos/seed/sunglasses/600/450',
    rating: 4.1,
    stock: 45,
  },
  {
    id: 12,
    name: 'Everyday Backpack',
    price: 54.99,
    category: 'Accessories',
    description:
      'Water-resistant backpack with a padded laptop sleeve and multiple organizer pockets.',
    image: 'https://picsum.photos/seed/backpack/600/450',
    rating: 4.7,
    stock: 15,
  },
]

// A list of category names, used later for the category filter.
export const categories = ['Electronics', 'Clothing', 'Home', 'Accessories']