import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          GlowReview
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover" onClick={closeMenu}>
              Discover
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={closeMenu}>
              Profile
            </NavLink>
          </li>
        </ul>

        {/* TODO: Replace with real auth state (sign in / user avatar) */}
        <button className="btn-primary navbar-auth">Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar
