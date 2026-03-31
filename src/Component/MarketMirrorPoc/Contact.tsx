import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="section-padding" id="contact" style={{ backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Left Column: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
          >
            <div>
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', marginBottom: '1rem', display: 'block' }}>
                Start a project
              </span>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Let's work <br /> <span style={{ color: '#555' }}>Together.</span>
              </h2>
              <p style={{ color: '#999', fontSize: '1.1rem', maxWidth: '400px', lineHeight: 1.6 }}>
                Connect with our market research team members for your recent projects and requirements.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>Email Us</h4>
                  <a href="mailto:rfq@market-mirror.com" style={{ color: '#888', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = '#888'}>
                    rfq@market-mirror.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>Call Us</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    +91 120 492 0843
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '0.2rem' }}>Working Hours</h4>
                  <p style={{ color: '#888', fontSize: '0.9rem' }}>
                    Monday - Saturday 10 am - 6 pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#151515', padding: '3rem', borderRadius: '4px' }}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    padding: '1rem 0',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'var(--font-main)'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = 'white'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    padding: '1rem 0',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    fontFamily: 'var(--font-main)'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = 'white'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              <div>
                <textarea 
                  placeholder="Tell us about your project" 
                  rows={4}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                    padding: '1rem 0',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'none',
                    fontFamily: 'var(--font-main)'
                  }}
                  onFocus={(e) => e.target.style.borderBottomColor = 'white'}
                  onBlur={(e) => e.target.style.borderBottomColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
              
              <button
                type="button"
                style={{
                  marginTop: '1.5rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: 'white',
                  color: '#111',
                  border: 'none',
                  padding: '1.2rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '2px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#111';
                }}
              >
                Send Request <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
