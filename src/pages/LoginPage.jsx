import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    
    if (success) {
      navigate('/posts'); 
    } else {
      setError('Please enter both a username and password.');
    }
  };

  return (
    <div className="blog-card" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2 className="blog-title" style={{ textAlign: 'center' }}>Login</h2>
      {error && <p style={{ color: '#ef4444', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Username"
          className="comment-input"
          style={{ height: 'auto', padding: '0.75rem', marginBottom: '0' }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="comment-input"
          style={{ height: 'auto', padding: '0.75rem', marginBottom: '0' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn" style={{ width: '100%' }}>
          Sign In
        </button>
      </form>
    </div>
  );
}