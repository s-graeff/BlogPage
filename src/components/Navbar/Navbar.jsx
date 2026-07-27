import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h1>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          My Blog
        </Link>
      </h1>
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
        
        {/* Conditional Login/Logout */}
        {user ? (
          <>
            <span style={{ marginLeft: '1.5rem', opacity: '0.9' }}>Hi, {user.username}</span>
            <button 
              onClick={handleLogout} 
              style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '4px', cursor: 'pointer', marginLeft: '1.5rem' }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <button 
          className="theme-toggle" 
          onClick={toggleTheme} 
          style={{ marginLeft: '1.5rem' }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </nav>
  );
}