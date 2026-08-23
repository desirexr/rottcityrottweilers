import { useState, useEffect, useCallback } from 'react';
import litterPup from '../assets/litter-pup.jpg';
import cocoRoshiLitter from '../assets/litter-coco-roshi.jpg';
import pup1 from '../assets/puppy-new-1.jpg';
import pup2 from '../assets/puppy-new-2.jpg';
import pup3 from '../assets/puppy-new-3.jpg';
import pup4 from '../assets/puppy-new-4.jpg';

const PUPPY_SLIDES = [
  { src: litterPup, alt: 'Rott City Rottweilers Past Litter', badge: '📸 Past Litter' },
  { src: pup1, alt: 'Rott City Puppy Close-up Portrait', badge: '📸 Puppy Portrait' },
  { src: pup2, alt: 'Rott City Outdoor Puppy Stance', badge: '📸 Outdoor Stance' },
  { src: pup3, alt: 'Rott City Puppy Sitting Portrait', badge: '📸 Puppy Feature' },
  { src: pup4, alt: 'Rott City Puppy Working Harness', badge: '📸 Working Harness' },
];

export default function Puppies({ onOpenDeposit }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide(prev => (prev + 1) % PUPPY_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide(prev => (prev - 1 + PUPPY_SLIDES.length) % PUPPY_SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="puppies" style={{ backgroundColor: 'var(--background)' }}>
      <style>{`
        /* ── Section ── */
        #puppies {
          padding: clamp(3rem, 10vw, 7rem) clamp(1rem, 5vw, 5rem);
        }

        /* ── Header ── */
        .pups-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto clamp(2rem, 6vw, 4rem);
          padding: 0 0.25rem;
        }
        .pups-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .pups-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 7vw, 2.8rem);
          color: var(--text);
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .pups-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3.5vw, 1rem);
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Content Layout ── */
        .pups-content {
          max-width: 1000px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: clamp(2rem, 6vw, 3.5rem);
        }

        /* ── Group Photo / Slideshow ── */
        .pups-slider-container {
          max-width: 480px;
          margin: 0 auto;
          width: 100%;
        }
        .pups-group-img-wrap {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
          border: 1px solid rgba(195,152,67,0.3);
          width: 100%;
          aspect-ratio: 4 / 5;
          background: #111;
        }
        .pups-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
          pointer-events: none;
        }
        .pups-slide.active {
          opacity: 1;
          pointer-events: auto;
        }
        .pups-group-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
        .pups-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(6px);
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.4rem;
          line-height: 1;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .pups-arrow:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #fff;
          transform: translateY(-50%) scale(1.08);
        }
        .pups-arrow.left { left: 0.75rem; }
        .pups-arrow.right { right: 0.75rem; }

        .pups-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .pups-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }
        .pups-dot.active {
          background: var(--primary);
          width: 24px;
          border-radius: 12px;
        }
        .pups-group-badge {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          background: rgba(0,0,0,0.62);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 6px;
          padding: 0.35rem 0.65rem;
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #fff;
        }

        /* ── Writeup ── */
        .pups-writeup {
          max-width: 750px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .pups-writeup-text h3 {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.15rem, 5vw, 1.55rem);
          color: var(--text);
          margin: 0 0 0.85rem;
          line-height: 1.3;
        }
        .pups-writeup-text p {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3.5vw, 0.95rem);
          color: var(--text-muted);
          line-height: 1.8;
          margin: 0 0 0.75rem;
        }
        .pups-writeup-text p:last-child { margin-bottom: 0; }

        /* ── Stats ── */
        .pups-stat-row {
          display: flex;
          flex-wrap: nowrap;
          gap: 0.6rem;
          margin-top: 1.25rem;
        }
        .pups-stat {
          background: var(--surface, #f9f6f1);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.6rem 0.4rem;
          text-align: center;
          flex: 1 1 0;
          min-width: 0;
        }
        .pups-stat-num {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(0.95rem, 4vw, 1.3rem);
          color: var(--primary);
          display: block;
        }
        .pups-stat-label {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.55rem, 2vw, 0.65rem);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-muted);
        }



        /* ── CTA Buttons ── */
        .pups-cta {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          padding-top: 0.25rem;
        }
        @media (min-width: 480px) {
          .pups-cta {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }
        }
        .pups-btn-primary,
        .pups-btn-outline {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 480px) {
          .pups-btn-primary,
          .pups-btn-outline { width: auto; }
        }
        .pups-btn-primary {
          border: none;
          background: var(--primary);
          color: #fff;
          box-shadow: 0 4px 18px rgba(0,0,0,0.18);
        }
        .pups-btn-primary:hover {
          background: var(--primary-dark, #7a0000);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
        }
        .pups-btn-outline {
          border: 2px solid var(--primary);
          background: transparent;
          color: var(--primary);
        }
        .pups-btn-outline:hover {
          background: var(--primary);
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
        }

        /* ── Divider ── */
        .pups-divider {
          width: 50px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="pups-header">
        <p className="pups-eyebrow">Our Litters</p>
        <h2 className="pups-title">Born From Champions</h2>
        <div className="pups-divider" />
        <p className="pups-subtitle">
          Every Rott City puppy carries the legacy of generations of careful, purposeful breeding —
          raised with love, structure, and an uncompromising standard of excellence.
        </p>
      </div>

      {/* ── Content ── */}
      <div className="pups-content">
        {/* Group Photo Slideshow */}
        <div className="pups-slider-container">
          <div className="pups-group-img-wrap">
            {PUPPY_SLIDES.map((slide, idx) => (
              <div key={idx} className={`pups-slide${idx === activeSlide ? ' active' : ''}`}>
                <img src={slide.src} alt={slide.alt} className="pups-group-img" />
                <span className="pups-group-badge">{slide.badge}</span>
              </div>
            ))}
            <button className="pups-arrow left" onClick={prevSlide} aria-label="Previous photo">‹</button>
            <button className="pups-arrow right" onClick={nextSlide} aria-label="Next photo">›</button>
          </div>
          <div className="pups-dots">
            {PUPPY_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`pups-dot${idx === activeSlide ? ' active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Writeup */}
        <div className="pups-writeup">
          <div className="pups-writeup-text">
            <h3>Excellence Starts at Birth</h3>
            <p>
              Our litters are planned with extreme intentionality — each pairing selected to reinforce
              superior temperament, correct structure, and working-dog drives that define the true Rottweiler standard.
            </p>
            <p>
              From day one, pups are raised in a home environment with Early Neurological Stimulation (ENS),
              regular health checks, and deliberate socialization to give them the very best start in life.
            </p>
            <div className="pups-stat-row">
              <div className="pups-stat">
                <span className="pups-stat-num">AKC</span>
                <span className="pups-stat-label">Registered</span>
              </div>
              <div className="pups-stat">
                <span className="pups-stat-num">8+</span>
                <span className="pups-stat-label">Weeks Old</span>
              </div>
              <div className="pups-stat">
                <span className="pups-stat-num">100%</span>
                <span className="pups-stat-label">Health Checked</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="pups-cta">
          <a href="#contact" className="pups-btn-primary">
            🐾 Book a Puppy
          </a>
          <a href="#contact" className="pups-btn-outline">
            📅 Upcoming Litters
          </a>
        </div>

        {/* ── Current Litter ── */}
        <div className="current-litter-section">
          <style>{`
            .current-litter-section {
              border-top: 1px solid var(--border);
              padding-top: clamp(2.5rem, 6vw, 4rem);
              margin-bottom: clamp(1rem, 3vw, 2rem);
            }
            .current-card {
              background: linear-gradient(135deg, rgba(195,152,67,0.08) 0%, rgba(31,31,31,0.95) 100%);
              border: 1px solid rgba(195,152,67,0.25);
              border-radius: 14px;
              padding: clamp(2rem, 5vw, 3.5rem);
              text-align: center;
              box-shadow: 0 12px 40px rgba(0,0,0,0.25);
              position: relative;
              overflow: hidden;
            }
            .current-card::before {
              content: '';
              position: absolute;
              top: 0; left: 0; right: 0; height: 3px;
              background: linear-gradient(to right, var(--primary), #dcae5b);
            }
            .current-badge-pulse {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              background: rgba(195,152,67,0.15);
              color: var(--primary);
              border: 1px solid rgba(195,152,67,0.35);
              font-family: "Inter", sans-serif;
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              padding: 0.4rem 1rem;
              border-radius: 20px;
              margin-bottom: 1.5rem;
            }
            .current-badge-pulse::before {
              content: '';
              width: 8px;
              height: 8px;
              background-color: var(--primary);
              border-radius: 50%;
              display: inline-block;
              box-shadow: 0 0 8px var(--primary);
              animation: badge-pulse-anim 1.5s infinite;
            }
            @keyframes badge-pulse-anim {
              0% { transform: scale(0.9); opacity: 0.6; }
              50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 12px var(--primary); }
              100% { transform: scale(0.9); opacity: 0.6; }
            }
            .current-card-title {
              font-family: "Cinzel", serif;
              font-weight: 700;
              font-size: clamp(1.6rem, 5vw, 2.4rem);
              color: var(--text);
              margin: 0 0 1rem;
              line-height: 1.2;
            }
            .current-card-desc {
              font-family: "Inter", sans-serif;
              font-size: clamp(0.9rem, 3vw, 1.05rem);
              color: var(--text-muted);
              line-height: 1.7;
              max-width: 600px;
              margin: 0 auto 2rem;
            }
            .current-card-btn {
              display: inline-flex;
              align-items: center;
              gap: 0.5rem;
              font-family: "Inter", sans-serif;
              font-weight: 700;
              font-size: 0.85rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              padding: 1.1rem 2.5rem;
              border-radius: 8px;
              cursor: pointer;
              text-decoration: none;
              transition: all 0.25s ease;
              background: var(--primary);
              color: #fff;
              border: none;
              box-shadow: 0 6px 20px rgba(122,0,0,0.3);
            }
            .current-card-btn:hover {
              background: var(--primary-dark, #7a0000);
              transform: translateY(-2px);
              box-shadow: 0 10px 30px rgba(122,0,0,0.45);
            }
          `}</style>

          <div className="current-card">
            <div className="current-badge-pulse">Current Litter</div>
            <h3 className="current-card-title">Inquire About Availability</h3>
            <p className="current-card-desc">
              We breed selectively to ensure the highest standards of health, temperament, and conformation. 
              Contact us today to check current availability or join our upcoming waitlist.
            </p>
            <a href="#contact" className="current-card-btn">
              🐾 Check Availability
            </a>
          </div>
        </div>

        {/* ── Past Litter ── */}
        <div className="avail-litter">
          <style>{`
            /* ── Section divider ── */
            .avail-litter {
              border-top: 1px solid var(--border);
              padding-top: clamp(2.5rem, 6vw, 4rem);
              display: flex;
              flex-direction: column;
              gap: 2.5rem;
            }

            /* ── Litter header ── */
            .avail-header {
              display: flex;
              align-items: center;
              gap: 1rem;
              flex-wrap: wrap;
            }
            .avail-badge {
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              background: var(--primary);
              color: #fff;
              font-family: "Inter", sans-serif;
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.15em;
              text-transform: uppercase;
              padding: 0.35rem 0.85rem;
              border-radius: 20px;
            }
            .avail-title {
              font-family: "Cinzel", serif;
              font-weight: 700;
              font-size: clamp(1.4rem, 5vw, 2rem);
              color: var(--text);
              margin: 0;
              line-height: 1.2;
            }
            .avail-parents {
              font-family: "Inter", sans-serif;
              font-size: 0.85rem;
              color: var(--text-muted);
              margin: 0.4rem 0 0;
            }
            .avail-parents span {
              color: var(--primary);
              font-weight: 600;
            }

            /* ── Body grid ── */
            .avail-body {
              display: grid;
              grid-template-columns: 1fr;
              gap: 2rem;
              align-items: start;
            }
            @media (min-width: 700px) {
              .avail-body { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
            }

            /* ── Litter photo ── */
            .avail-img-wrap {
              border-radius: 14px;
              overflow: hidden;
              box-shadow: 0 12px 40px rgba(0,0,0,0.18);
              position: relative;
            }
            .avail-img {
              width: 100%;
              height: clamp(240px, 55vw, 420px);
              object-fit: cover;
              object-position: center top;
              display: block;
              transition: transform 0.5s ease;
            }
            .avail-img-wrap:hover .avail-img { transform: scale(1.03); }
            .avail-pairing-chip {
              position: absolute;
              bottom: 0.85rem;
              left: 0.85rem;
              background: rgba(0,0,0,0.68);
              backdrop-filter: blur(8px);
              border: 1px solid rgba(195,152,67,0.45);
              border-radius: 8px;
              padding: 0.4rem 0.8rem;
              font-family: "Cinzel", serif;
              font-size: 0.72rem;
              font-weight: 700;
              color: var(--primary);
              letter-spacing: 0.06em;
            }

            /* ── Info cards ── */
            .avail-info {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .avail-info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 0.75rem;
            }
            .avail-info-card {
              background: var(--surface, #f9f6f1);
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 0.9rem 1rem;
            }
            .avail-info-label {
              font-family: "Inter", sans-serif;
              font-size: 0.6rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              color: var(--text-muted);
              display: block;
              margin-bottom: 0.3rem;
            }
            .avail-info-value {
              font-family: "Cinzel", serif;
              font-size: clamp(0.85rem, 2.5vw, 0.95rem);
              font-weight: 700;
              color: var(--text);
              line-height: 1.4;
            }
            .avail-info-value.highlight { color: var(--primary); }

            /* ── Included list ── */
            .avail-includes {
              background: var(--surface, #f9f6f1);
              border: 1px solid var(--border);
              border-radius: 12px;
              padding: 1rem 1.1rem;
            }
            .avail-includes-title {
              font-family: "Inter", sans-serif;
              font-size: 0.6rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.15em;
              color: var(--text-muted);
              margin: 0 0 0.7rem;
            }
            .avail-includes ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 0.45rem;
            }
            .avail-includes li {
              font-family: "Inter", sans-serif;
              font-size: 0.85rem;
              color: var(--text-muted);
              display: flex;
              align-items: center;
              gap: 0.5rem;
            }
            .avail-includes li::before {
              content: "✓";
              color: var(--primary);
              font-weight: 700;
              font-size: 0.8rem;
              flex-shrink: 0;
            }

            /* ── CTA ── */
            .avail-cta {
              display: flex;
              flex-direction: column;
              gap: 0.75rem;
            }
            @media (min-width: 480px) {
              .avail-cta { flex-direction: row; }
            }
            .avail-cta-btn {
              font-family: "Inter", sans-serif;
              font-weight: 700;
              font-size: 0.82rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              padding: 1rem 2rem;
              border-radius: 8px;
              cursor: pointer;
              text-decoration: none;
              transition: all 0.25s;
              background: var(--primary);
              color: #fff;
              border: none;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              box-shadow: 0 4px 18px rgba(0,0,0,0.15);
              flex: 1;
            }
            .avail-cta-btn:hover {
              background: var(--primary-dark, #7a0000);
              transform: translateY(-2px);
              box-shadow: 0 8px 28px rgba(0,0,0,0.22);
            }
          `}</style>

          {/* Litter heading */}
          <div>
            <div className="avail-header">
              <span className="avail-badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)' }}>📸 Past Litter</span>
            </div>
            <h2 className="avail-title" style={{ marginTop: '0.75rem' }}>Past Litter: Coco × King Roshi</h2>
            <p className="avail-parents">
              <span>Coco</span> (German Bloodline) × <span>King Roshi</span> (Serbian Bloodline)
            </p>
          </div>

          {/* Body */}
          <div className="avail-body">

            {/* Photo */}
            <div className="avail-img-wrap">
              <img src={cocoRoshiLitter} alt="Coco × King Roshi litter" className="avail-img" />
              <span className="avail-pairing-chip">Coco × King Roshi</span>
            </div>

            {/* Info */}
            <div className="avail-info">
              <div className="avail-info-grid">
                <div className="avail-info-card">
                  <span className="avail-info-label">Starting Price</span>
                  <span className="avail-info-value highlight">$1,500</span>
                  <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: '"Inter", sans-serif', fontWeight: 600 }}>
                    Deposit Amount $250
                  </span>
                </div>
                <div className="avail-info-card">
                  <span className="avail-info-label">Go-Home Age</span>
                  <span className="avail-info-value">8 Weeks</span>
                </div>
                <div className="avail-info-card">
                  <span className="avail-info-label">Gender</span>
                  <span className="avail-info-value">Male & Female</span>
                </div>
                <div className="avail-info-card">
                  <span className="avail-info-label">Availability</span>
                  <span className="avail-info-value">Contact Us</span>
                </div>
              </div>

              <div className="avail-includes">
                <p className="avail-includes-title">What's Included</p>
                <ul>
                  <li>Age-appropriate vaccinations</li>
                  <li>Deworming completed</li>
                  <li>AKC registration eligible</li>
                  <li>Health checked before go-home</li>
                  <li>Pedigree available upon request</li>
                </ul>
              </div>

              <div className="avail-cta">
                <button className="avail-cta-btn" onClick={onOpenDeposit}>
                  Place $250 Deposit Now
                </button>
              </div>


            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
