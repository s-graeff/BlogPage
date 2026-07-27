import { useState } from 'react';
import CommentSection from '../CommentForm/CommentForm';

export default function BlogPost({ post }) {
  const [likes, setLikes] = useState(0);

  const calculateReadTime = (text) => {
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  return (
    <article className="blog-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <h2 className="blog-title">{post.title}</h2>
        <span className="read-time-badge">{calculateReadTime(post.content)}</span>
      </div>
      
      <p className="blog-content">{post.content}</p>
      
      <div className="meta-info">
        <p><strong>Author:</strong> {post.author}</p>
        <p><strong>Date:</strong> {post.date}</p>
      </div>

      <div className="like-section">
        <button className="like-btn" onClick={() => setLikes(likes + 1)}>
          ❤️ Like ({likes})
        </button>
        {likes > 0 && <span className="thanks-bubble">Thanks for loving this post!</span>}
      </div>

      <CommentSection />
    </article>
  );
}