import aboutRott from '../assets/about-us-dog.jpg';
import dogMap from '../assets/dog-map.jpg';

const BULLETS = [
  'Health, structure & temperament focused',
  'Early socialization & confidence building',
  'Strong working ability & breed preservation',
  'Lifetime support for every puppy owner',
];

const STATS = [
  { value: '2017', label: 'Year Established' },
  { value: 'GA', label: 'Based in Georgia' },
  { value: '100%', label: 'Health Focused' },
];

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: 'var(--background)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
      <style>{`
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; max-width: 1200px; margin: 0 auto;
        }
        .about-images {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
          border: 1px solid rgba(195,152,67,0.25);
          max-width: 520px;
          margin: 0 auto;
          width: 100%;
        }
        .about-stats { display: flex; gap: 2.5rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border); }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-stats { gap: 1.5rem; flex-wrap: wrap; }
        }
        .about-map-container {
          margin-top: clamp(3rem, 8vw, 5.5rem);
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
          border-top: 1px solid var(--border);
          padding-top: clamp(2.5rem, 6vw, 4rem);
        }
        .about-map-header {
          text-align: center;
          margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
        }
        .about-map-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.4rem, 4vw, 2.2rem);
          color: var(--text);
          margin: 0 0 0.75rem;
          letter-spacing: -0.01em;
        }
        .about-map-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 2.5vw, 0.95rem);
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .about-map-wrapper {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
          border: 1px solid rgba(195,152,67,0.2);
          background: #0A0A0A;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .about-map-wrapper:hover {
          border-color: rgba(195,152,67,0.35);
        }
        .about-map-img {
          width: 100%;
          height: auto;
          display: block;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }
      `}</style>

      <div className="about-grid">
        {/* Image column */}
        <div className="about-images">
          <img
            src={aboutRott}
            alt="Rott City Rottweiler"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* Text column */}
        <div>
          <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)', marginBottom: '1rem' }}>About Us</p>

          <h2 style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.8rem)', lineHeight: 1.15, color: 'var(--text)', margin: '0 0 1.5rem' }}>
            Passion. Purpose.<br />
            <span style={{ color: 'var(--primary)' }}>Performance.</span>
          </h2>

          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: 'clamp(0.88rem,1.1vw,0.98rem)', lineHeight: 1.8, color: 'var(--text-muted)', margin: '0 0 1.5rem', maxWidth: '48ch' }}>
            Rott City is a Georgia-based Rottweiler program focused on producing healthy, athletic, intelligent, and family-oriented Rottweilers with strong working ability, stable temperaments, and excellent structure. Our dogs are raised with an emphasis on health, socialization, confidence, and breed preservation.
          </p>

          {/* Bullets */}
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {BULLETS.map(b => (
              <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: '"Inter", sans-serif', fontSize: '0.9rem', color: 'var(--text)' }}>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', backgroundColor: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none"><path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                {b}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="about-stats">
            {STATS.map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: '1.8rem', color: 'var(--primary)', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontWeight: 400, fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="about-map-container">
        <div className="about-map-header">
          <h3 className="about-map-title">Everywhere They Call Home</h3>
          <p className="about-map-subtitle">
            From our Georgia program to loving homes across the nation, Rott City dogs bring excellence, protection, and companionship to families coast to coast.
          </p>
        </div>
        <div className="about-map-wrapper">
          <img src={dogMap} alt="Map of Rott City dogs across the USA" className="about-map-img" />
        </div>
      </div>
    </section>
  );
}
