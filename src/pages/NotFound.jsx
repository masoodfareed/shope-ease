import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="container not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Sorry, the page you are looking for doesn't exist.</p>
      <Link to="/" className="not-found-btn">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound