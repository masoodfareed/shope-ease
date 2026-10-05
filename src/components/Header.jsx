import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Header.css'

function Header() {
  const { cartCount } = useCart()

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          Shop<span>Ease</span>
        </Link>

        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink to="/cart" className="cart-link">
            Cart
            <span className="cart-badge">{cartCount}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header