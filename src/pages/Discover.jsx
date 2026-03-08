import { useState } from 'react'
import './Discover.css'

/* ── Placeholder data ── */
const PLACEHOLDER_PRODUCTS = [
  { id: 1, name: 'Hydro Boost Water Gel', brand: 'Neutrogena', category: 'Skincare', rating: 4.8 },
  { id: 2, name: 'Soft Matte Foundation', brand: 'NYX', category: 'Makeup', rating: 4.3 },
  { id: 3, name: 'Argan Oil Treatment', brand: 'Moroccanoil', category: 'Haircare', rating: 4.9 },
  { id: 4, name: 'Black Opium EDP', brand: 'Yves Saint Laurent', category: 'Fragrance', rating: 4.7 },
  { id: 5, name: 'Vitamin C Serum', brand: 'TruSkin', category: 'Skincare', rating: 4.5 },
  { id: 6, name: 'Lash Sensational Mascara', brand: 'Maybelline', category: 'Makeup', rating: 4.2 },
]

const CATEGORIES = ['All', 'Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Nails']

function StarRating({ rating }) {
  const full = Math.floor(rating)
  const empty = 5 - full
  return (
    <span className="stars" aria-label={`${rating} out of 5`}>
      {'★'.repeat(full)}{'☆'.repeat(empty)}
      <span className="rating-number"> {rating}</span>
    </span>
  )
}

function Discover() {
  // TODO: Wire searchQuery to Supabase products query with ilike filter
  const [searchQuery, setSearchQuery] = useState('')
  // TODO: Wire activeCategory to Supabase products query with eq filter
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <div className="discover">
      <div className="container">
        <h1 className="discover-heading">Discover Products</h1>

        {/* ── Search Bar ── */}
        {/* TODO: Wire to Supabase products query */}
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input
            type="search"
            placeholder="Search products, brands..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* ── Category Filters ── */}
        {/* TODO: Wire to Supabase products query with category filter */}
        <div className="filter-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`chip ${activeCategory === cat ? 'chip-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Product Grid ── */}
        {/* TODO: Replace placeholder cards with real Supabase products data */}
        <div className="product-grid">
          {PLACEHOLDER_PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-placeholder" aria-hidden="true" />
              <div className="product-info">
                <span className="product-category-tag">{product.category}</span>
                <p className="product-name">{product.name}</p>
                <p className="product-brand">{product.brand}</p>
                <StarRating rating={product.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover
