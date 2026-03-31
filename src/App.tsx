import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Works from './Component/Works';

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <Hero />
        <Works />
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a href="#">
              <img src="/logo.png" alt="Market Mirror" style={{ maxHeight: '40px' }} />
            </a>
            <div className="footer-socials">
              {['Twitter', 'Instagram', 'Dribbble', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="footer-social-link">{social}</a>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              &copy; 2026 Market Mirror Insights Pvt. Ltd. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#" className="footer-legal-link">Privacy Policy</a>
              <a href="#" className="footer-legal-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;