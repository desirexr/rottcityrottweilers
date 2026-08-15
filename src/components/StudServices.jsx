const STUD_DETAILS = [
  { label: 'Location',                     value: 'Atlanta, Georgia', icon: '📍' },
  { label: 'Stud Fee',                     value: '$1,200',           icon: '💰', gold: true },
  { label: 'Fresh Collection',             value: 'Available',        icon: '✅' },
  { label: 'AI (Artificial Insemination)', value: 'Available',        icon: '🔬' },
];

const REQUIREMENTS = [
  'Proof of health testing',
  'Current vaccinations',
];

const BLOODLINES = [
  { flag: '🇷🇸', label: 'Serbian Bloodlines' },
  { flag: '🇩🇪', label: 'German Bloodlines' },
];

export default function StudServices() {
  return (
    <section
      id="stud-services"
      style={{ backgroundColor: 'var(--background)', padding: 'clamp(3rem,8vw,7rem) clamp(1rem,5vw,5rem)' }}
    >
      <style>{`
        /* ── Header ── */
        .stud-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
          padding: 0 0.5rem;
        }
        .stud-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .stud-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 6vw, 2.8rem);
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .stud-divider {
          width: 50px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }
        .stud-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3vw, 0.97rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0 0 1.25rem;
        }
        .stud-bloodlines {
          display: flex;
          gap: 0.65rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .stud-bloodline-pill {
          background: rgba(195,152,67,0.1);
          border: 1px solid rgba(195,152,67,0.35);
          border-radius: 20px;
          padding: 0.32rem 0.85rem;
          font-family: "Inter", sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.06em;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        /* ── Content wrapper ── */
        .stud-content {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* ── Detail cards grid ── */
        .stud-details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }
        @media (min-width: 560px) {
          .stud-details-grid { grid-template-columns: repeat(4, 1fr); }
        }
        .stud-detail-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: clamp(0.85rem, 3vw, 1.2rem) 1rem;
          text-align: center;
          transition: border-color 0.25s, background 0.25s, transform 0.25s;
        }
        .stud-detail-card:hover {
          border-color: rgba(195,152,67,0.45);
          background: rgba(195,152,67,0.05);
          transform: translateY(-3px);
        }
        .stud-detail-icon {
          font-size: clamp(1.2rem, 4vw, 1.5rem);
          display: block;
          margin-bottom: 0.5rem;
        }
        .stud-detail-label {
          font-family: "Inter", sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.35);
          display: block;
          margin-bottom: 0.3rem;
        }
        .stud-detail-value {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(0.85rem, 3vw, 1rem);
          color: #fff;
          line-height: 1.3;
        }
        .stud-detail-value.gold { color: var(--primary); }

        /* ── Lower row ── */
        .stud-lower {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 600px) {
          .stud-lower { grid-template-columns: 1fr 1fr; }
        }

        /* ── Requirements ── */
        .stud-req-box {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 1.1rem 1.25rem;
        }
        .stud-req-label {
          font-family: "Inter", sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: rgba(255,255,255,0.3);
          margin: 0 0 0.75rem;
        }
        .stud-req-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stud-req-list li {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.84rem, 3vw, 0.9rem);
          color: rgba(255,255,255,0.5);
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .stud-req-list li::before {
          content: "✓";
          color: var(--primary);
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        /* ── Note box ── */
        .stud-note {
          background: rgba(195,152,67,0.06);
          border: 1px solid rgba(195,152,67,0.28);
          border-radius: 14px;
          padding: 1.1rem 1.25rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 3vw, 0.88rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .stud-note strong {
          color: var(--primary);
          font-weight: 700;
          display: block;
          margin-bottom: 0.35rem;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── CTA ── */
        .stud-cta {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (min-width: 480px) {
          .stud-cta { flex-direction: row; justify-content: center; }
        }
        .stud-btn-primary {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 2.2rem;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          background: var(--primary);
          color: #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 4px 24px rgba(195,152,67,0.3);
        }
        .stud-btn-primary:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(195,152,67,0.4);
        }
        .stud-btn-outline {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 2.2rem;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          border: 2px solid rgba(195,152,67,0.5);
          background: transparent;
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .stud-btn-outline:hover {
          border-color: var(--primary);
          background: rgba(195,152,67,0.08);
          transform: translateY(-2px);
        }
      `}</style>

      {/* Header */}
      <div className="stud-header">
        <p className="stud-eyebrow">Rott City Rottweilers</p>
        <h2 className="stud-title">Stud Services</h2>
        <div className="stud-divider" />
        <p className="stud-subtitle">
          Champion males from proven bloodlines available to approved,
          health-tested females. Multiple studs across two elite bloodline origins.
        </p>
        <div className="stud-bloodlines">
          {BLOODLINES.map(b => (
            <span key={b.label} className="stud-bloodline-pill">
              {b.flag} {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="stud-content">

        {/* Detail cards */}
        <div className="stud-details-grid">
          {STUD_DETAILS.map(d => (
            <div key={d.label} className="stud-detail-card">
              <span className="stud-detail-icon">{d.icon}</span>
              <span className="stud-detail-label">{d.label}</span>
              <span className={`stud-detail-value${d.gold ? ' gold' : ''}`}>{d.value}</span>
            </div>
          ))}
        </div>

        {/* Lower row */}
        <div className="stud-lower">
          <div className="stud-req-box">
            <p className="stud-req-label">Requirements</p>
            <ul className="stud-req-list">
              {REQUIREMENTS.map(r => <li key={r}>{r}</li>)}
            </ul>
          </div>

          <div className="stud-note">
            <strong>Scheduling & Availability</strong>
            Contact us for current stud availability, scheduling, and any
            additional questions. Multiple males available across Serbian and
            German bloodlines.
          </div>
        </div>

        {/* CTAs */}
        <div className="stud-cta">
          <a href="#contact" className="stud-btn-primary">
            🐾 Inquire About Stud Services
          </a>
          <a href="#dogs" className="stud-btn-outline">
            Meet Our Dogs
          </a>
        </div>

      </div>
    </section>
  );
}
