import aboutRott from '../assets/about-rott.png';

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
          border-radius: 14px; overflow: hidden; height: 520px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.14);
        }
        .about-img-placeholder {
          border-radius: 8px; overflow: hidden; background-color: var(--surface);
          border: 1px solid var(--border); display: flex; align-items: center; justify-content: center;
        }
        .about-stats { display: flex; gap: 2.5rem; margin-top: 2rem; padding-top: 2rem; border-top: 1px solid var(--border); }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .about-images { height: auto; aspect-ratio: 4/3; }
          .about-stats { gap: 1.5rem; flex-wrap: wrap; }
        }
      `}</style>

      <div className="about-grid">
        {/* Image column */}
        <div className="about-images">
          <img
            src={aboutRott}
            alt="Mature Rottweiler — Rott City"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
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
    </section>
  );
}
