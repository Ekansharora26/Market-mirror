import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Lightbulb, Rocket, BarChart3, ArrowRight } from 'lucide-react';

const EASE_CINEMATIC = [0.76, 0, 0.24, 1] as const;
const EASE_SMOOTH    = [0.16, 1, 0.3, 1] as const;

const SERVICES = [
  {
    icon: <Lightbulb size={48} strokeWidth={1} />,
    title: 'Expert Network Services',
    description:
      'Connect with industry thought leaders & professionals to gain actionable insights for your business strategies.',
  },
  {
    icon: <Rocket size={48} strokeWidth={1} />,
    title: 'UX / CX Research',
    description:
      'Understand user behaviors and elevate customer experiences through comprehensive online and offline research.',
  },
  {
    icon: <BarChart3 size={48} strokeWidth={1} />,
    title: 'Research & Analytics',
    description:
      'Meaningful data analysis and robust methodology delivering total quality to facilitate solid business decisions.',
  },
];

const maskReveal: Variants = {
  hidden:  { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.1, ease: EASE_CINEMATIC } },
};

const maskRevealDelayed = (delay: number): Variants => ({
  hidden:  { clipPath: 'inset(0 100% 0 0)' },
  visible: { clipPath: 'inset(0 0% 0 0)', transition: { duration: 1.1, ease: EASE_CINEMATIC, delay } },
});

const containerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
};

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_SMOOTH } },
};

const Services: React.FC = () => (
  <section id="services" style={{ position: 'relative', backgroundColor: '#0e0e0e' }}>

    {/* Banner Header */}
    <div className="services-banner">
      <div className="services-banner-inner">
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <motion.span
            className="services-eyebrow"
            variants={maskReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.h2
            className="services-heading"
            variants={maskRevealDelayed(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            We provide genius solutions for your business
          </motion.h2>
        </div>
      </div>
    </div>

    {/* Cards */}
    <div className="services-cards-section">
      <div className="container">
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div key={i} className="service-card" variants={cardVariants}>
              <div className="service-icon">{svc.icon}</div>
              <h3 className="service-title">{svc.title}</h3>
              <p className="service-desc">{svc.description}</p>
              <a href="#" className="learn-more">
                Learn more <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    <style>{`
      .services-banner {
        padding: 10rem 0 8rem;
        background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
                    url('/services_hero.png') center / cover fixed;
      }
      .services-banner-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 40px;
      }
      .services-eyebrow {
        display: block;
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: white;
      }
      .services-heading {
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: 800;
        color: white;
        line-height: 1.15;
        max-width: 700px;
        font-family: var(--font-heading);
      }
      .services-cards-section {
        padding: 6rem 0;
        background-color: #151515;
      }
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem;
      }
      .service-card { text-align: left; }
      .service-icon {
        color: white;
        margin-bottom: 2rem;
      }
      .service-title {
        font-size: 1.35rem;
        font-weight: 800;
        color: white;
        font-family: var(--font-heading);
        margin-bottom: 1.25rem;
      }
      .service-desc {
        color: #888;
        font-size: 0.95rem;
        line-height: 1.8;
        margin-bottom: 2rem;
      }
      .learn-more {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        color: white;
        font-weight: 600;
        font-size: 0.9rem;
        transition: color 0.3s ease;
      }
      .learn-more:hover { color: var(--accent-blue); }
      .learn-more svg   { transition: transform 0.3s ease; }
      .learn-more:hover svg { transform: translateX(5px); }
      @media (max-width: 900px) {
        .services-grid { grid-template-columns: 1fr; }
        .service-card  { text-align: center; }
        .service-icon  { display: flex; justify-content: center; }
      }
    `}</style>
  </section>
);

export default Services;
