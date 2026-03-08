import { Link } from 'react-router-dom'
import './Home.css'

/* ── Placeholder data ── */
const PLACEHOLDER_REVIEWS = [
  {
    id: 1,
    product: 'Hydro Boost Water Gel',
    brand: 'Neutrogena',
    rating: 5,
    reviewer: '@glowgetter',
    excerpt: 'This moisturizer completely changed my skincare routine. Lightweight and non-greasy!',
  },
  {
    id: 2,
    product: 'Soft Matte Foundation',
    brand: 'NYX',
    rating: 4,
    reviewer: '@beautybliss',
    excerpt: 'Great coverage for the price. Stays all day without looking cakey.',
  },
  {
    id: 3,
    product: 'Argan Oil Treatment',
    brand: 'Moroccanoil',
    rating: 5,
    reviewer: '@hairgoals',
    excerpt: 'My hair has never felt this soft. A little goes a very long way.',
  },
]

const CATEGORIES = ['Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Nails']

function StarRating({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

function Home() {
  return (
    <div className="home">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-heading">
            Discover Beauty That<br />Works <em>For You</em>
          </h1>
          <p className="hero-tagline">
            Real reviews from real people — find products that match your skin, hair, and style.
          </p>
          <Link to="/discover">
            <button className="btn-primary hero-cta">Browse Products</button>
          </Link>
        </div>
      </section>

      {/* ── Category Chips ── */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          {/* TODO: Make categories clickable filters linked to Discover page */}
          <div className="category-chips">
            {CATEGORIES.map((cat) => (
              <button key={cat} className="chip">{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Reviews ── */}
      <section className="featured-reviews">
        <div className="container">
          <h2 className="section-title">Featured Reviews</h2>
          {/* TODO: Replace placeholder cards with real Supabase data */}
          <div className="review-cards">
            {PLACEHOLDER_REVIEWS.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-card-header">
                  <div>
                    <p className="review-product">{review.product}</p>
                    <p className="review-brand">{review.brand}</p>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="review-excerpt">"{review.excerpt}"</p>
                <p className="review-author">{review.reviewer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
