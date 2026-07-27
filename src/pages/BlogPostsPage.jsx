import { Link } from 'react-router-dom';
import { posts } from '../data';

export default function BlogPostsPage() {
  return (
    <div>
      <h2 className="blog-title" style={{ marginBottom: '2rem' }}>All Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="blog-card" style={{ marginBottom: '1.5rem' }}>
          <h3>
            <Link to={`/post/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
              {post.title}
            </Link>
          </h3>
          <p className="meta-info" style={{ border: 'none', padding: '0', margin: '0.5rem 0 0 0' }}>
            By {post.author} on {post.date}
          </p>
        </div>
      ))}
    </div>
  );
}