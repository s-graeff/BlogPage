import { useParams, Link } from 'react-router-dom';
import { posts } from '../data';
import BlogPost from '../components/BlogPost/BlogPost';

export default function IndividualPostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="blog-card">
        <h2>Post not found</h2>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/posts" style={{ display: 'inline-block', marginBottom: '1rem', color: 'inherit' }}>
        &larr; Back to Posts
      </Link>
      <BlogPost post={post} />
    </div>
  );
}