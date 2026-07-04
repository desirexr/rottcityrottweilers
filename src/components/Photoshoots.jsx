import { useState, useEffect, useCallback } from 'react';
import photo1 from '../assets/photoshoot-1.jpg';
import photo2 from '../assets/photoshoot-2.jpg';
import photo3 from '../assets/photoshoot-3.jpg';

const PHOTOS = [
  { src: photo1, alt: 'Rott City Professional Photoshoot' },
  { src: photo2, alt: 'Rott City Professional Photoshoot' },
  { src: photo3, alt: 'Rott City Professional Photoshoot' },
];

const SHOOT_TYPES = [
  { label: 'Puppies' },
  { label: 'Adult Dogs' },
  { label: 'Family & Dog Sessions' },
  { label: 'Breeding Program Promotions' },
];

const LOCATIONS = [
  'Atlanta, Georgia',
  'Marietta, Georgia',
  'Alpharetta, Georgia',
  'Additional locations upon request',
];

export default function Photoshoots() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const goTo = useCallback((idx, dir = 'next') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 420);
  }, [animating]);

  const prev = () => {
    const idx = (active - 1 + PHOTOS.length) % PHOTOS.length;
    goTo(idx, 'prev');
  };
  const next = useCallback(() => {
    const idx = (active + 1) % PHOTOS.length;
    goTo(idx, 'next');
  }, [active, goTo]);

  // Auto-advance every 5 s
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="photoshoots"
      style={{ backgroundColor: '#0A0A0A', padding: 'clamp(3rem,8vw,7rem) clamp(1rem,5vw,5rem)' }}
    >
      <style>{`
        /* ── Header ── */
        .ps-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2rem, 5vw, 3.5rem);
          padding: 0 0.5rem;
        }
        .ps-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .ps-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 6vw, 2.8rem);
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .ps-divider {
          width: 50px; height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }
        .ps-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3vw, 0.97rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Slider ── */
        .ps-slider-wrap {
          max-width: 520px;
          margin: 0 auto clamp(2rem, 5vw, 3rem);
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(195,152,67,0.2),
            0 30px 80px rgba(0,0,0,0.6);
          background: #000;
          aspect-ratio: 3/4;
        }

        /* Slides */
        .ps-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(1.04);
          transition: opacity 0.42s ease, transform 0.42s ease;
          pointer-events: none;
        }
        .ps-slide.active {
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
        }
        /* Ken-Burns zoom on the active image */
        .ps-slide.active .ps-slide-img {
          animation: kenburns 8s ease-in-out forwards;
        }
        @keyframes kenburns {
          from { transform: scale(1.05); }
          to   { transform: scale(1.12); }
        }
        .ps-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          image-rendering: high-quality;
          -webkit-backface-visibility: hidden;
          filter: brightness(1.06) contrast(1.08) saturate(1.12);
        }

        /* ── Arrow buttons ── */
        .ps-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 46px; height: 46px;
          border-radius: 50%;
          border: 1.5px solid rgba(195,152,67,0.45);
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          color: var(--primary);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }
        .ps-arrow:hover {
          background: rgba(195,152,67,0.18);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.08);
        }
        .ps-arrow.left  { left: 1rem; }
        .ps-arrow.right { right: 1rem; }
        @media (max-width: 480px) {
          .ps-arrow { width: 38px; height: 38px; font-size: 0.9rem; }
          .ps-arrow.left  { left: 0.5rem; }
          .ps-arrow.right { right: 0.5rem; }
        }

        /* ── Dot nav ── */
        .ps-dots {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          gap: 0.55rem;
          align-items: center;
        }
        .ps-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s, width 0.25s;
        }
        .ps-dot.active {
          background: var(--primary);
          width: 22px;
          border-radius: 4px;
          transform: none;
        }

        /* ── Content below slider ── */
        .ps-content {
          max-width: 520px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Price banner */
        .ps-price-banner {
          background: rgba(195,152,67,0.07);
          border: 1px solid rgba(195,152,67,0.3);
          border-radius: 16px;
          padding: clamp(1.1rem, 4vw, 1.75rem) clamp(1.1rem, 5vw, 2rem);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .ps-price-text {
          font-family: "Inter", sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(195,152,67,0.6);
          margin: 0 0 0.2rem;
        }
        .ps-price-value {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 6vw, 2.4rem);
          color: var(--primary);
          line-height: 1;
        }
        .ps-price-note {
          font-family: "Inter", sans-serif;
          font-size: 0.7rem;
          color: rgba(195,152,67,0.45);
          margin-top: 0.25rem;
        }
        .ps-book-btn {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.9rem 1.8rem;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          background: var(--primary);
          color: #000;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          box-shadow: 0 4px 20px rgba(195,152,67,0.3);
          white-space: nowrap;
        }
        .ps-book-btn:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(195,152,67,0.4);
        }

        /* Mid row */
        .ps-mid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .ps-mid { grid-template-columns: 1fr 1fr; }
        }
        .ps-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: clamp(1rem, 3vw, 1.4rem);
        }
        .ps-box-label {
          font-family: "Inter", sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.3);
          margin: 0 0 0.9rem;
        }
        .ps-sessions-grid {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .ps-session-row {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.55rem 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          transition: border-color 0.2s;
        }
        .ps-session-row:hover { border-color: rgba(195,152,67,0.35); }
        .ps-session-icon { font-size: 1rem; flex-shrink: 0; }
        .ps-session-name {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 3vw, 0.88rem);
          font-weight: 500;
          color: rgba(255,255,255,0.65);
        }
        .ps-locations-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.5rem;
        }
        .ps-locations-list li {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 3vw, 0.88rem);
          color: rgba(255,255,255,0.55);
          display: flex; align-items: center; gap: 0.6rem;
          padding: 0.55rem 0.75rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 8px;
          transition: border-color 0.2s;
        }
        .ps-locations-list li:hover { border-color: rgba(195,152,67,0.35); }
        .ps-locations-list li::before { content: "📍"; font-size: 0.85rem; flex-shrink: 0; }
        .ps-locations-list li:last-child::before { content: "➕"; }

        /* Note */
        .ps-note {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 3vw, 0.88rem);
          color: rgba(255,255,255,0.4);
          line-height: 1.65;
          text-align: center;
        }
        .ps-note a {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid rgba(195,152,67,0.35);
        }
        .ps-note a:hover { border-color: var(--primary); }
      `}</style>

      {/* Header */}
      <div className="ps-header">
        <p className="ps-eyebrow">Rott City Rottweilers</p>
        <h2 className="ps-title">Professional Dog Photoshoots</h2>
        <div className="ps-divider" />
        <p className="ps-subtitle">
          Premium photography sessions capturing your dog at their finest —
          from puppies to full breeding program promotions.
        </p>
      </div>

      {/* ── Slider ── */}
      <div className="ps-slider-wrap">

        {/* Slides */}
        {PHOTOS.map((p, i) => (
          <div key={i} className={`ps-slide${i === active ? ' active' : ''}`}>
            <img src={p.src} alt={p.alt} className="ps-slide-img" />
          </div>
        ))}

        {/* Arrows */}
        <button className="ps-arrow left" onClick={prev} aria-label="Previous">‹</button>
        <button className="ps-arrow right" onClick={next} aria-label="Next">›</button>

        {/* Dots */}
        <div className="ps-dots" role="tablist">
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              className={`ps-dot${i === active ? ' active' : ''}`}
              onClick={() => goTo(i, i > active ? 'next' : 'prev')}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ── Info below slider ── */}
      <div className="ps-content">

        {/* Price banner */}
        <div className="ps-price-banner">
          <div>
            <p className="ps-price-text">Starting From</p>
            <div className="ps-price-value">$500</div>
            <p className="ps-price-note">Custom quotes available upon request</p>
          </div>
          <a href="#contact" className="ps-book-btn">📷 Book a Session</a>
        </div>

        {/* Sessions + Locations */}
        <div className="ps-mid">
          <div className="ps-box">
            <p className="ps-box-label">Available Sessions</p>
            <div className="ps-sessions-grid">
              {SHOOT_TYPES.map(s => (
                <div key={s.label} className="ps-session-row">
                  <span className="ps-session-name">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="ps-box">
            <p className="ps-box-label">Locations</p>
            <ul className="ps-locations-list">
              {LOCATIONS.map(l => <li key={l}>{l}</li>)}
            </ul>
          </div>
        </div>

        {/* Note */}
        <p className="ps-note">
          📩 <a href="#contact">Contact us</a> for custom quotes, scheduling, and availability.
          We'll work with you to find the perfect session for your dog.
        </p>

      </div>
    </section>
  );
}
