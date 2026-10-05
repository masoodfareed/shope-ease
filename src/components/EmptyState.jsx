import { Link } from 'react-router-dom'
import './EmptyState.css'

function EmptyState({ title, message, actionText, actionTo }) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{message}</p>
      {actionText && actionTo && (
        <Link to={actionTo} className="empty-btn">
          {actionText}
        </Link>
      )}
    </div>
  )
}

export default EmptyState