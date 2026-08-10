import { motion } from 'framer-motion';
import rottweiler from '../assets/hero-dog.png';

const STATS = [
  { icon: '🏆', value: '10+', label: 'Years of Experience' },
  { icon: '📋', value: 'CKC', label: 'Registered Breeder' },
  { icon: '🧬', value: '100%', label: 'Health Tested Bloodlines' },
  { icon: '❤️', value: '500+', label: 'Happy Families' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <style>{`
        .hero-section {
          position: relative; width: 100%; min-height: 100vh;
          background-color: var(--background); overflow: hidden;
          display: flex; align-items: stretch;
        }
        .hero-content {
          position: relative; z-index: 10;
          display: flex; flex-direction: column; justify-content: center;
          padding: clamp(6rem,10vw,10rem) clamp(1.5rem,5vw,5rem) clamp(3rem,6vw,5rem);
          width: 55%; flex-shrink: 0;
        }
        .hero-image-col {
          flex: 1; position: relative; overflow: hidden;
        }
        .hero-dog {
          position: absolute; top: 5rem; right: 0;
          height: calc(100% - 5rem); width: 100%;
          object-fit: cover; object-position: top center;
        }
        .hero-img-fade {
          position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to right, var(--background) 0%, rgba(31,31,31,0.7) 10%, transparent 20%);
        }
        .hero-stats {
          display: grid; grid-template-columns: repeat(4,1fr); gap: 1.5rem;
          margin-top: 2.5rem; padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 900px) {
          .hero-section {
            flex-direction: column;
            min-height: auto;
          }
          .hero-content {
            width: 100%;
            padding: 6rem 1.5rem 2rem;
          }
          .hero-image-col {
            display: block;
            width: 100%;
            height: clamp(280px, 45vw, 400px);
            margin-top: 1rem;
            margin-bottom: 1rem;
          }
          .hero-dog {
            position: relative;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            width: auto;
            max-width: 100%;
            object-fit: contain;
          }
          .hero-img-fade {
            background: linear-gradient(to top, var(--background) 0%, rgba(31,31,31,0.4) 15%, transparent 35%);
          }
          .hero-stats {
            grid-template-columns: repeat(2,1fr);
          }
        }
        .hero-mobile-image {
          display: none;
        }
        .hero-cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .hero-mobile-image {
            display: block;
            position: relative;
            width: 100%;
            height: 44vh;
            min-height: 280px;
            margin: 1.5rem 0 0;
            overflow: hidden;
          }
          .hero-dog-mobile-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center center;
            transform: scale(1.5);
            transform-origin: center center;
          }
          .hero-mobile-img-fade {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(to top, var(--background) 0%, rgba(31,31,31,0.2) 10%, transparent 30%);
          }
          .hero-image-col {
            display: none;
          }
          .hero-cta-row {
            flex-wrap: nowrap;
          }
          .hero-cta-row a {
            font-size: 0.72rem !important;
            padding: 0.75rem 1.2rem !important;
            white-space: nowrap;
          }
        }
        @media (max-width: 480px) {
          .hero-stats { grid-template-columns: repeat(2,1fr); gap: 1rem; }
        }
      `}</style>

      {/* Left: Text content */}
      <motion.div className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25,1,0.5,1], delay: 0.2 }}
      >
        {/* Eyebrow */}
        <p style={{
          fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '0.72rem',
          textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--primary)',
          marginBottom: '1.2rem',
        }}>Premium Bloodlines. Exceptional Legacy.</p>

        {/* H1 */}
        <h1 style={{
          fontFamily: '"Cinzel", serif', fontWeight: 700,
          fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', lineHeight: 1.1,
          color: '#FFFFFF', margin: '0 0 1.5rem', letterSpacing: '-0.01em',
        }}>
          Breeding Excellence.<br />
          Raising <span style={{ color: 'var(--primary)' }}>Champions.</span>
        </h1>

        {/* Description */}
        <p style={{
          fontFamily: '"Inter", sans-serif', fontWeight: 400,
          fontSize: 'clamp(0.88rem,1.2vw,1rem)', lineHeight: 1.75,
          color: 'rgba(255,255,255,0.6)', maxWidth: '44ch', margin: '0 0 1.5rem',
        }}>
          At Rott City Rottweilers, we are dedicated to producing healthy, well-balanced, and structurally sound dogs with exceptional temperaments.
        </p>

        {/* Mobile-only Dog image bust */}
        <div className="hero-mobile-image">
          <img src={rottweiler} alt="Champion Rottweiler" className="hero-dog-mobile-img" />
          <div className="hero-mobile-img-fade" />
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-row">
          <a href="#dogs" style={{
            fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.8rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.85rem 1.8rem', borderRadius: '9999px',
            backgroundColor: 'var(--primary)', color: '#fff',
            textDecoration: 'none', transition: 'background-color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--primary-dark)'}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--primary)'}
          >Meet Our Dogs</a>
          <a href="#puppies" style={{
            fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.8rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.85rem 1.8rem', borderRadius: '9999px',
            border: '1.5px solid var(--primary)', color: 'var(--primary)',
            textDecoration: 'none', backgroundColor: 'transparent', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
          >Available Puppies</a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {STATS.map(s => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
                <span style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>{s.value}</span>
              </div>
              <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400, fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right: Dog image */}
      <motion.div className="hero-image-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1 }}
      >
        <img src={rottweiler} alt="Champion Rottweiler" className="hero-dog" />
        <div className="hero-img-fade" />
      </motion.div>
    </section>
  );
}
