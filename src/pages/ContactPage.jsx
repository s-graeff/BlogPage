export default function ContactPage() {
  return (
    <div className="blog-card">
      <h2 className="blog-title">Contact Us</h2>
      <p style={{ marginBottom: '1.5rem' }}>Have a question? Send us a message.</p>
      
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input 
          type="text" 
          placeholder="Your Name" 
          className="comment-input" 
          style={{ height: 'auto', padding: '0.75rem', marginBottom: '0' }} 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="comment-input" 
          style={{ height: 'auto', padding: '0.75rem', marginBottom: '0' }} 
          required 
        />
        <textarea 
          placeholder="Your Message" 
          className="comment-input" 
          style={{ height: '150px' }} 
          required 
        />
        <div>
          <button type="submit" className="submit-btn">Send Message</button>
        </div>
      </form>
    </div>
  );
}