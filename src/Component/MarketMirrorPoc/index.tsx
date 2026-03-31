import Navbar from './Navbar';
import Hero from './Hero';
import Works from './Works';

const MarketMirrorPoc: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div id="services">
      </div>
      <div id="work">
        <Works />
      </div>

      {/* ─── Footer Section ────────────────────────────────── */}
      <footer className="seox-footer" style={{
        backgroundColor: '#0b0f19',
        padding: '60px 0 30px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: '#fff',
        fontFamily: 'Plus Jakarta Sans, sans-serif'
      }}>
        <div className="seox-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="seox-footer-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <div className="seox-footer-logo">
              <img src="/logo.png" alt="Market Mirror" style={{ maxHeight: '42px', filter: 'brightness(0) invert(1)' }} />
            </div>
            <div className="seox-footer-socials" style={{ display: 'flex', gap: '20px' }}>
              {['Twitter', 'Instagram', 'Dribbble', 'LinkedIn'].map((social) => (
                <a key={social} href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease' }}>{social}</a>
              ))}
            </div>
          </div>

          <div className="seox-footer-divider" style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '40px' }}></div>

          <div className="seox-footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', opacity: '0.5', fontSize: '0.9rem' }}>
            <div>© 2026 Market Mirror Insights Pvt. Ltd. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '30px' }}>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MarketMirrorPoc;
