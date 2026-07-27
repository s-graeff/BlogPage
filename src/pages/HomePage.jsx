import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="blog-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1 className="blog-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Welcome to My Blog
      </h1>
      <p className="blog-content" style={{ marginBottom: '2.5rem', color: '#64748b' }}>
        Discover the latest thoughts, tutorials, and stories. Join our community to share your own comments and engage with our content!
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <Link to="/posts" style={{ textDecoration: 'none' }}>
          <button className="submit-btn" style={{ backgroundColor: '#2563eb' }}>
            Explore Blog
          </button>
        </Link>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <button className="submit-btn" style={{ backgroundColor: '#eab308' }}>
            Login to Comment
          </button>
        </Link>
      </div>
    </div>
  );
}