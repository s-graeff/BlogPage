import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { ThemeContext } from '../../context/ThemeContext'; 

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  
  
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    setComments([...comments, { name: user.username, text: commentText.trim() }]);
    setCommentText(''); 
  };

  const handleDelete = (indexToDelete) => {
    setComments(comments.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="comment-box">
      <h3>Comments</h3>
      
      {!user ? (
        <div style={{ 
          padding: '1.5rem', 
         // I tried to add a dynamic swap to the login for comments. It didn't work.
          backgroundColor: isDarkMode ? '#aabad6' : '#3b5064', 
          borderRadius: '8px', 
          marginTop: '1rem', 
          textAlign: 'center' 
        }}>
          <p style={{ 
            marginBottom: '1rem',
            
            color: isDarkMode ? '#01060c' : '#ffffff'
          }}>
            You must be logged in to leave a comment.
          </p>
          <Link to="/login">
            <button className="submit-btn">Go to Login</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <textarea
            className="comment-input"
            placeholder={`Commenting as ${user.username}...`}
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <div>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      )}

      {}
      <div style={{ marginTop: '2rem' }}>
        {comments.length === 0 ? (
          <div 
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(234, 179, 8, 0.12)',
              borderLeft: '4px solid #eab308',
              borderRadius: '6px',
              margin: '1.5rem 0'
            }}
          >
            <p style={{ fontWeight: '600', fontSize: '1.05rem', margin: 0 }}>
              💬 No comments yet. Be the first to comment!
            </p>
          </div>
        ) : (
          <>
            <h4>Existing Comments:</h4>
            <ul className="comments-list">
              {comments.map((comment, index) => (
                <li key={index} className="comment-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '0.5rem' }}>
                    <strong>{comment.name}</strong>
                    {user?.username === comment.name && (
                      <button 
                        className="delete-btn" 
                        onClick={() => handleDelete(index)}
                        title="Delete Comment"
                      >
                        🗑️
                      </button>
                    )}
                  </div>
                  <span>{comment.text}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}