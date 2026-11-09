import { motion } from 'framer-motion';
import rottweiler from '../assets/hero-dog-new.png';

const STATS = [
  { icon: '🏆', value: '10+', label: 'Years of Experience' },
  { icon: '📋', value: 'AKC', label: 'Registered Breeder' },
  { icon: '🧬', value: '100%', label: 'Health Tested Bloodlines' },
  { icon: '❤️', value: '200+', label: 'Happy Families' },
];

export default function Hero({ onOpenDeposit }) {
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
          position: absolute; top: 0; right: 0;
          height: 100%; width: 100%;
          object-fit: cover; object-position: center top;
        }
        .hero-img-fade {
          position: absolute; inset: 0; pointer-events: none;
          background:
            linear-gradient(to right,  var(--background) 0%, rgba(10,10,10,0.85) 12%, transparent 30%),
            linear-gradient(to left,   var(--background) 0%, rgba(10,10,10,0.6) 8%,  transparent 22%),
            linear-gradient(to bottom, var(--background) 0%, rgba(10,10,10,0.5) 6%,  transparent 18%),
            linear-gradient(to top,    var(--background) 0%, rgba(10,10,10,0.9) 14%, transparent 30%);
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
            background:
              linear-gradient(to top,    var(--background) 0%, rgba(10,10,10,0.9) 15%, transparent 35%),
              linear-gradient(to bottom, var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%),
              linear-gradient(to left,   var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%),
              linear-gradient(to right,  var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%);
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
          align-items: center;
        }
        .hero-price-pill {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(195,152,67,0.08);
          border: 1px solid rgba(195,152,67,0.3);
          border-radius: 12px;
          padding: 0.75rem 1.4rem;
          margin-bottom: 1.5rem;
          width: fit-content;
        }
        .hero-price-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 0 1.1rem;
        }
        .hero-price-item:first-child {
          padding-left: 0;
        }
        .hero-price-label {
          font-family: "Inter", sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
        }
        .hero-price-val {
          font-family: "Cinzel", serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .hero-price-divider {
          width: 1px;
          align-self: stretch;
          background: rgba(195,152,67,0.25);
          flex-shrink: 0;
          margin: 0;
        }
        .hero-btn-deposit {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.85rem 1.8rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          background: var(--primary);
          color: #fff;
          text-decoration: none;
          transition: all 0.25s;
          box-shadow: 0 4px 18px rgba(0,0,0,0.25);
          white-space: nowrap;
        }
        .hero-btn-deposit:hover {
          background: var(--primary-dark, #7a0000);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.3);
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
            object-fit: cover;
            object-position: center top;
          }
          .hero-mobile-img-fade {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background:
              linear-gradient(to top,    var(--background) 0%, rgba(10,10,10,0.9) 15%, transparent 35%),
              linear-gradient(to bottom, var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%),
              linear-gradient(to left,   var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%),
              linear-gradient(to right,  var(--background) 0%, rgba(10,10,10,0.5) 8%,  transparent 20%);
          }
          .hero-image-col {
            display: none;
          }
          .hero-cta-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 4px;
          }
          .hero-cta-row::-webkit-scrollbar {
            display: none;
          }
          .hero-cta-row a,
          .hero-btn-deposit {
            font-size: 0.72rem !important;
            padding: 0.75rem 1.2rem !important;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .hero-price-pill {
            padding: 0.55rem 1rem;
            margin-bottom: 1rem;
          }
          .hero-price-item {
            padding: 0 0.75rem;
          }
          .hero-price-item:first-child {
            padding-left: 0;
          }
          .hero-price-val {
            font-size: 0.95rem;
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

        {/* Price + Deposit pill */}
        <div className="hero-price-pill">
          <div className="hero-price-item">
            <span className="hero-price-label">Starting Price</span>
            <span className="hero-price-val">$1,750</span>
          </div>
          <div className="hero-price-divider" />
          <div className="hero-price-item">
            <span className="hero-price-label">Reserve With</span>
            <span className="hero-price-val">$250 Deposit</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta-row">
          <button className="hero-btn-deposit" onClick={onOpenDeposit}>Deposit Now</button>
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
