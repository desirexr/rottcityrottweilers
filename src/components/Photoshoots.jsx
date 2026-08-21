import { useState, useEffect, useCallback } from 'react';
import photo1 from '../assets/photoshoot-1.jpg';
import photo2 from '../assets/photoshoot-2.jpg';
import photo3 from '../assets/photoshoot-3.jpg';

const PHOTOS = [
  { src: photo1, alt: 'Rott City Rottweilers Photo & Video Shoot' },
  { src: photo2, alt: 'Rott City Rottweilers Commercial Production' },
  { src: photo3, alt: 'Rott City Rottweilers Film & Media Session' },
];

const PRICING_TIERS = [
  {
    id: '1-dog',
    dogs: '1 Rottweiler',
    duration: '2 Hours',
    price: '$299',
    popular: false,
    subtitle: 'Solo Feature & Editorial',
    badge: '1 Dog • 2 Hours',
    features: [
      '1 World-Class Rottweiler',
      '2 Hours On-Site Session',
      'Professional Handler Included',
      'Commercial & Media Usage Rights',
      'Atlanta & Surrounding Areas',
    ],
  },
  {
    id: '2-dogs',
    dogs: '2 Rottweilers',
    duration: '2 Hours',
    price: '$399',
    popular: true,
    subtitle: 'Dual Impact & Action Shoots',
    badge: 'Most Popular',
    features: [
      '2 World-Class Rottweilers',
      '2 Hours On-Site Session',
      'Dedicated Handlers on Set',
      'Commercial & Media Usage Rights',
      'Atlanta & Surrounding Areas',
    ],
  },
  {
    id: '3-dogs',
    dogs: '3 Rottweilers',
    duration: 'Production Session',
    price: '$649',
    popular: false,
    subtitle: 'Music Videos & Brand Content',
    badge: '3 Dogs',
    features: [
      '3 World-Class Rottweilers',
      'Flexible Production Session',
      'Full Handler Team Included',
      'Commercial & Film Licensing',
      'Atlanta & Regional Travel',
    ],
  },
  {
    id: '4-dogs',
    dogs: '4 Rottweilers',
    duration: 'Full Production Shoot',
    price: '$749',
    popular: false,
    subtitle: 'High-Impact Media & Film',
    badge: '4 Dogs',
    features: [
      '4 World-Class Rottweilers',
      'Full Day Production Access',
      'Full Handler Team Included',
      'Commercial & Film Licensing',
      'Atlanta & Regional Travel',
    ],
  },
  {
    id: '5-dogs',
    dogs: '5 Rottweilers',
    duration: 'Ultimate Pack Feature',
    price: '$899',
    popular: false,
    subtitle: 'Cinematic Pack Experience',
    badge: '5 Dogs • Full Pack',
    features: [
      '5 World-Class Rottweilers (Full Pack)',
      'Complete Production Coverage',
      'Full Professional Handler Crew',
      'Exclusive Commercial & Film Rights',
      'Atlanta & Regional Travel',
    ],
  },
];

const SHOOT_TYPES = [
  { icon: '🎬', label: 'Music Videos & Commercials' },
  { icon: '📸', label: 'Fashion & Editorial Photography' },
  { icon: '🎥', label: 'Film & Television Productions' },
  { icon: '🏷️', label: 'Brand & Product Campaigns' },
  { icon: '⭐', label: 'Social Media & Influencer Content' },
];

const LOCATIONS = [
  'Atlanta, Georgia',
  'Marietta, Georgia',
  'Alpharetta, Georgia',
  'Roswell & Metro Atlanta',
  'Regional & Custom Travel Upon Request',
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

  // Auto-advance slider every 5 s
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section
      id="photoshoots"
      style={{ backgroundColor: 'var(--background)', padding: 'clamp(4rem,8vw,7rem) clamp(1rem,5vw,5rem)' }}
    >
      <style>{`
        /* ── Header ── */
        .ps-header {
          text-align: center;
          max-width: 720px;
          margin: 0 auto clamp(2.5rem, 5vw, 4rem);
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
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .ps-divider {
          width: 60px; height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }
        .ps-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Slider ── */
        .ps-slider-wrap {
          max-width: 680px;
          margin: 0 auto clamp(2.5rem, 5vw, 4rem);
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow:
            0 0 0 1px rgba(195,152,67,0.25),
            0 30px 80px rgba(0,0,0,0.7);
          background: #000;
          aspect-ratio: 16/10;
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
        .ps-slide.active .ps-slide-img {
          animation: kenburns 8s ease-in-out forwards;
        }
        @keyframes kenburns {
          from { transform: scale(1.03); }
          to   { transform: scale(1.1); }
        }
        .ps-slide-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          filter: brightness(1.05) contrast(1.08);
        }

        /* ── Arrow buttons ── */
        .ps-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid rgba(195,152,67,0.5);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          color: var(--primary);
          font-size: 1.2rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .ps-arrow:hover {
          background: rgba(195,152,67,0.25);
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.08);
        }
        .ps-arrow.left  { left: 1rem; }
        .ps-arrow.right { right: 1rem; }

        /* ── Dot nav ── */
        .ps-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          gap: 0.55rem;
          align-items: center;
        }
        .ps-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.25s;
        }
        .ps-dot.active {
          background: var(--primary);
          width: 24px;
          border-radius: 4px;
        }

        /* ── Pricing Tiers Grid ── */
        .ps-pricing-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .ps-pricing-title {
          font-family: "Cinzel", serif;
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.5rem;
        }
        .ps-pricing-subtitle {
          font-family: "Inter", sans-serif;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.5);
          margin: 0;
        }

        .ps-pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
        }

        .ps-tier-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        .ps-tier-card:hover {
          transform: translateY(-6px);
          border-color: rgba(195, 152, 67, 0.45);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .ps-tier-card.popular {
          border-color: var(--primary);
          background: linear-gradient(180deg, rgba(195, 152, 67, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%);
          box-shadow: 0 10px 30px rgba(195, 152, 67, 0.15);
        }

        .ps-pop-badge {
          position: absolute;
          top: -12px;
          right: 1.5rem;
          background: var(--primary);
          color: #000;
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 0.3rem 0.85rem;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(195, 152, 67, 0.4);
        }

        .ps-tier-dogs {
          font-family: "Cinzel", serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 0.25rem;
        }

        .ps-tier-sub {
          font-family: "Inter", sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.45);
          margin-bottom: 1.25rem;
        }

        .ps-tier-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .ps-tier-price {
          font-family: "Cinzel", serif;
          font-size: clamp(2rem, 4vw, 2.5rem);
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }

        .ps-tier-duration {
          font-family: "Inter", sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: rgba(255,255,255,0.6);
        }

        .ps-tier-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .ps-tier-features li {
          font-family: "Inter", sans-serif;
          font-size: 0.84rem;
          color: rgba(255,255,255,0.7);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .ps-tier-features li::before {
          content: "✓";
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .ps-btn {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.85rem 1.5rem;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
          transition: all 0.25s;
          cursor: pointer;
          display: block;
        }

        .ps-btn-primary {
          background: var(--primary);
          color: #000;
          border: none;
          box-shadow: 0 4px 15px rgba(195,152,67,0.25);
        }

        .ps-btn-primary:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(195,152,67,0.4);
        }

        .ps-btn-outline {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .ps-btn-outline:hover {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(195,152,67,0.08);
          transform: translateY(-2px);
        }

        /* ── Extra Details Grid ── */
        .ps-extra-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto 2.5rem;
        }
        @media (max-width: 768px) {
          .ps-extra-grid { grid-template-columns: 1fr; }
        }

        .ps-info-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 1.75rem;
        }

        .ps-info-title {
          font-family: "Inter", sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--primary);
          margin: 0 0 1.25rem;
        }

        .ps-types-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .ps-type-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.7);
        }

        .ps-loc-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0.65rem;
        }
        .ps-loc-item {
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.7);
          display: flex; align-items: center; gap: 0.65rem;
        }

        /* Footer Note */
        .ps-footer-note {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          background: rgba(195,152,67,0.06);
          border: 1px solid rgba(195,152,67,0.2);
          border-radius: 12px;
          padding: 1.25rem 1.75rem;
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
        }
        .ps-footer-note a {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
        }
        .ps-footer-note a:hover {
          text-decoration: underline;
        }
      `}</style>

      {/* ── Section Header ── */}
      <div className="ps-header">
        <p className="ps-eyebrow">Rott City Rottweilers</p>
        <h2 className="ps-title">Photo & Video Shoots</h2>
        <div className="ps-divider" />
        <p className="ps-subtitle">
          Book our world-class, champion-line Rottweilers for professional photo shoots,
          music videos, film productions, commercial advertising, and editorial media.
        </p>
      </div>

      {/* ── Image Showcase Slider ── */}
      <div className="ps-slider-wrap">
        {PHOTOS.map((p, i) => (
          <div key={i} className={`ps-slide${i === active ? ' active' : ''}`}>
            <img src={p.src} alt={p.alt} className="ps-slide-img" />
          </div>
        ))}
        <button className="ps-arrow left" onClick={prev} aria-label="Previous image">‹</button>
        <button className="ps-arrow right" onClick={next} aria-label="Next image">›</button>
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

      {/* ── Pricing Section Header ── */}
      <div className="ps-pricing-header">
        <h3 className="ps-pricing-title">Booking Packages & Pricing</h3>
        <p className="ps-pricing-subtitle">
          Select the package that fits your shoot requirements. Experienced handlers provided on set.
        </p>
      </div>

      {/* ── 5 Pricing Tiers Grid ── */}
      <div className="ps-pricing-grid">
        {PRICING_TIERS.map((tier) => (
          <div key={tier.id} className={`ps-tier-card${tier.popular ? ' popular' : ''}`}>
            {tier.popular && <span className="ps-pop-badge">{tier.badge}</span>}
            <h4 className="ps-tier-dogs">{tier.dogs}</h4>
            <div className="ps-tier-sub">{tier.subtitle}</div>

            <div className="ps-tier-price-row">
              <span className="ps-tier-price">{tier.price}</span>
              <span className="ps-tier-duration">/ {tier.duration}</span>
            </div>

            <ul className="ps-tier-features">
              {tier.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`ps-btn ${tier.popular ? 'ps-btn-primary' : 'ps-btn-outline'}`}
            >
              Book Package
            </a>
          </div>
        ))}
      </div>

      {/* ── Production & Location Info ── */}
      <div className="ps-extra-grid">
        <div className="ps-info-card">
          <div className="ps-info-title">Media & Shoot Services</div>
          <div className="ps-types-list">
            {SHOOT_TYPES.map((t, idx) => (
              <div key={idx} className="ps-type-item">
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="ps-info-card">
          <div className="ps-info-title">Service Locations</div>
          <ul className="ps-loc-list">
            {LOCATIONS.map((loc, idx) => (
              <li key={idx} className="ps-loc-item">
                <span>📍</span>
                <span>{loc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Footer Note ── */}
      <div className="ps-footer-note">
        📩 Need custom arrangements, multi-day film shoots, or specific dog characteristics?{' '}
        <a href="#contact">Contact our team today</a> to discuss custom production quotes and schedule availability.
      </div>
    </section>
  );
}
