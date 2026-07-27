import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import './index.css';

export default function App() {
  return (
    <ThemeProvider>
      {/* Wrap Router in AuthProvider to make login state global */}
      <AuthProvider>
        <Router>
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/posts" element={<BlogPostsPage />} />
              <Route path="/post/:id" element={<IndividualPostPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}