import './Profile.css'

/* ── Placeholder data ── */
const PLACEHOLDER_REVIEWS = [
  {
    id: 1,
    product: 'Hydro Boost Water Gel',
    brand: 'Neutrogena',
    rating: 5,
    excerpt: 'This moisturizer completely changed my skincare routine. Lightweight and non-greasy!',
    date: 'Feb 12, 2026',
  },
  {
    id: 2,
    product: 'Vitamin C Serum',
    brand: 'TruSkin',
    rating: 4,
    excerpt: 'Noticeably brighter skin after two weeks of use. Mild tingle at first but fades.',
    date: 'Jan 28, 2026',
  },
  {
    id: 3,
    product: 'Argan Oil Treatment',
    brand: 'Moroccanoil',
    rating: 5,
    excerpt: 'My hair has never felt this soft. A little goes a very long way.',
    date: 'Jan 5, 2026',
  },
]

function StarRating({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
    </span>
  )
}

function Profile() {
  // TODO: Redirect to sign-in page if no Supabase session
  // TODO: Fetch logged-in user's profile from Supabase profiles table
  // TODO: Fetch user's reviews from Supabase reviews table by user_id

  return (
    <div className="profile">
      <div className="container">
        {/* ── Profile Header ── */}
        <section className="profile-header">
          <div className="avatar-placeholder" aria-hidden="true">
            <span className="avatar-initials">U</span>
          </div>
          <div className="profile-meta">
            <h1 className="profile-display-name">User Name</h1>
            <p className="profile-username">@username</p>
            <p className="profile-bio">
              Beauty enthusiast. Skincare obsessed. Honest reviews only. ✨
            </p>
            {/* TODO: Wire to real profile edit functionality */}
            <button className="btn-outline">Edit Profile</button>
          </div>
        </section>

        {/* ── Stats Row ── */}
        {/* TODO: Replace hardcoded counts with real Supabase aggregates */}
        <section className="profile-stats">
          <div className="stat">
            <span className="stat-value">12</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">4</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-value">8</span>
            <span className="stat-label">Followers</span>
          </div>
        </section>

        {/* ── My Reviews ── */}
        <section className="my-reviews">
          <h2 className="section-title">My Reviews</h2>
          {/* TODO: Replace placeholder list with real Supabase reviews data */}
          <div className="review-list">
            {PLACEHOLDER_REVIEWS.map((review) => (
              <div key={review.id} className="review-item">
                <div className="review-item-header">
                  <div>
                    <p className="review-product">{review.product}</p>
                    <p className="review-brand">{review.brand}</p>
                  </div>
                  <div className="review-item-meta">
                    <StarRating rating={review.rating} />
                    <p className="review-date">{review.date}</p>
                  </div>
                </div>
                <p className="review-excerpt">"{review.excerpt}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
