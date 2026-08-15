const SKILLS = [
  'Sit', 'Down', 'Stay', 'Come (Recall)', 'Place',
  'Leash Manners', 'Name Recognition', 'Marker Training',
  'Doorway & Threshold Manners', 'Impulse Control',
];

const SOCIAL_SKILLS = [
  'Appropriate play behavior',
  'Pack manners',
  'Confidence',
  'Social skills',
  'Respect for boundaries',
];

const PACKAGES = [
  {
    duration: '1 Week',
    price: '$450',
    description: 'Foundation building and introduction to commands.',
    highlight: false,
  },
  {
    duration: '2 Weeks',
    price: '$800',
    description: 'Increased reliability, better engagement, improved manners, and more advanced proofing of behaviors.',
    highlight: true,
  },
];

const PILLARS = [
  { top: 'Built On', bottom: 'Focus' },
  { top: 'Designed For', bottom: 'Discipline' },
  { top: 'Raised For', bottom: 'Loyalty' },
];

export default function Training() {
  return (
    <section
      id="training"
      style={{ backgroundColor: 'var(--background)', padding: 'clamp(3rem,8vw,7rem) clamp(1rem,5vw,5rem)' }}
    >
      <style>{`
        /* ── Header ── */
        .tr-header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto clamp(2.5rem, 6vw, 4.5rem);
          padding: 0 0.5rem;
        }
        .tr-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .tr-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 6vw, 3rem);
          color: #fff;
          margin: 0 0 0.5rem;
          line-height: 1.15;
        }
        .tr-divider {
          width: 50px; height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 1rem auto 1.25rem;
        }
        .tr-tagline {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 2.5vw, 0.92rem);
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          margin: 0;
        }

        /* ── Grid ── */
        .tr-grid {
          max-width: 1060px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* ── Card base ── */
        .tr-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: clamp(1.25rem, 4vw, 2rem);
        }
        .tr-card-label {
          font-family: "Inter", sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--primary);
          margin: 0 0 0.5rem;
        }
        .tr-card-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1rem, 3vw, 1.3rem);
          color: #fff;
          margin: 0 0 0.75rem;
          line-height: 1.3;
        }
        .tr-card-body {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.84rem, 2.5vw, 0.9rem);
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
          margin: 0 0 1.25rem;
        }

        /* ── Foundation row (skills + pillars) ── */
        .tr-foundation-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 640px) {
          .tr-foundation-row { grid-template-columns: 1fr auto; align-items: start; gap: 2rem; }
        }

        /* Skills checklist */
        .tr-skills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem 1rem;
        }
        @media (max-width: 480px) {
          .tr-skills { grid-template-columns: 1fr; }
        }
        .tr-skill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.8rem, 2.5vw, 0.87rem);
          color: rgba(255,255,255,0.6);
        }
        .tr-skill::before {
          content: "";
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1.5px solid var(--primary);
          background: rgba(195,152,67,0.1);
          flex-shrink: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' fill='none'%3E%3Cpath d='M1 4l2.5 2.5L9 1' stroke='%23C39843' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 60%;
        }

        /* Pillars */
        .tr-pillars {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        @media (min-width: 640px) {
          .tr-pillars { flex-direction: column; flex-wrap: nowrap; }
        }
        .tr-pillar {
          background: rgba(195,152,67,0.08);
          border: 1px solid rgba(195,152,67,0.25);
          border-radius: 10px;
          padding: 0.65rem 0.85rem;
          text-align: center;
          min-width: 90px;
        }
        .tr-pillar-top {
          font-family: "Inter", sans-serif;
          font-size: 0.55rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(195,152,67,0.55);
          display: block;
          margin-bottom: 0.15rem;
        }
        .tr-pillar-bottom {
          font-family: "Cinzel", serif;
          font-size: clamp(0.72rem, 2vw, 0.85rem);
          font-weight: 700;
          color: var(--primary);
          display: block;
        }

        /* ── Mid row: socialization + results ── */
        .tr-mid-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 600px) {
          .tr-mid-row { grid-template-columns: 1fr 1fr; }
        }

        /* Social list */
        .tr-social-list {
          list-style: none;
          padding: 0; margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .tr-social-list li {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 2.5vw, 0.88rem);
          color: rgba(255,255,255,0.55);
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }
        .tr-social-list li::before {
          content: "•";
          color: var(--primary);
          font-size: 1rem;
          flex-shrink: 0;
        }

        /* Results card accent */
        .tr-results-accent {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(195,152,67,0.1);
          border: 1px solid rgba(195,152,67,0.3);
          border-radius: 8px;
          padding: 0.5rem 0.9rem;
          margin-top: 0.75rem;
          font-family: "Inter", sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
        }

        /* ── Pricing row ── */
        .tr-pricing-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        @media (min-width: 500px) {
          .tr-pricing-row { grid-template-columns: 1fr 1fr; }
        }
        .tr-package {
          border-radius: 16px;
          padding: clamp(1.25rem, 4vw, 1.75rem);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .tr-package:hover { transform: translateY(-4px); }
        .tr-package.standard {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .tr-package.featured {
          background: linear-gradient(135deg, rgba(195,152,67,0.18) 0%, rgba(195,152,67,0.06) 100%);
          border: 1px solid rgba(195,152,67,0.5);
          box-shadow: 0 0 40px rgba(195,152,67,0.1);
        }
        .tr-package-badge {
          position: absolute;
          top: 1rem; right: 1rem;
          background: var(--primary);
          color: #000;
          font-family: "Inter", sans-serif;
          font-size: 0.58rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 0.22rem 0.6rem;
          border-radius: 20px;
        }
        .tr-pkg-duration {
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
        }
        .tr-pkg-price {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(2rem, 8vw, 2.8rem);
          color: var(--primary);
          line-height: 1;
        }
        .tr-pkg-desc {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.8rem, 2.5vw, 0.86rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .tr-pkg-btn {
          margin-top: 0.75rem;
          width: 100%;
          padding: 0.85rem;
          border-radius: 8px;
          border: none;
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s;
        }
        .tr-package.standard .tr-pkg-btn {
          background: transparent;
          border: 1.5px solid rgba(195,152,67,0.4);
          color: var(--primary);
        }
        .tr-package.standard .tr-pkg-btn:hover {
          background: rgba(195,152,67,0.08);
          border-color: var(--primary);
        }
        .tr-package.featured .tr-pkg-btn {
          background: var(--primary);
          color: #000;
          box-shadow: 0 4px 18px rgba(195,152,67,0.35);
        }
        .tr-package.featured .tr-pkg-btn:hover {
          background: #e6c96a;
          box-shadow: 0 8px 28px rgba(195,152,67,0.45);
          transform: translateY(-1px);
        }

      `}</style>

      {/* ── Header ── */}
      <div className="tr-header">
        <p className="tr-eyebrow">Rott City Kennels</p>
        <h2 className="tr-title">Basic Obedience<br />Training</h2>
        <div className="tr-divider" />
        <p className="tr-tagline">Building Confident Companions · Developing Future Protectors</p>
      </div>

      <div className="tr-grid">

        {/* ── Foundation Obedience ── */}
        <div className="tr-card">
          <p className="tr-card-label">Foundation Obedience Program</p>
          <h3 className="tr-card-title">What Your Puppy Will Learn</h3>
          <p className="tr-card-body">
            Designed to build structure, confidence, and engagement during your puppy's most important developmental stage.
            Each puppy also receives daily exposure to new environments, people, sounds, and surfaces to help develop confidence and stability.
          </p>
          <div className="tr-foundation-row">
            <div className="tr-skills">
              {SKILLS.map(s => (
                <span key={s} className="tr-skill">{s}</span>
              ))}
            </div>
            <div className="tr-pillars">
              {PILLARS.map(p => (
                <div key={p.bottom} className="tr-pillar">
                  <span className="tr-pillar-top">{p.top}</span>
                  <span className="tr-pillar-bottom">{p.bottom}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Socialization + Results ── */}
        <div className="tr-mid-row">

          <div className="tr-card">
            <p className="tr-card-label">Socialization</p>
            <h3 className="tr-card-title">Stronger Together. Better Forever.</h3>
            <p className="tr-card-body" style={{ marginBottom: '1rem' }}>
              Puppies will be safely socialized with adult Rottweilers and other puppies to help develop:
            </p>
            <ul className="tr-social-list">
              {SOCIAL_SKILLS.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div className="tr-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="tr-card-label">Results</p>
            <h3 className="tr-card-title">The Longer They Train, The Stronger They Become</h3>
            <p className="tr-card-body" style={{ marginBottom: 0 }}>
              The longer a puppy remains in training, the stronger and more reliable their obedience becomes.
              Every additional day builds on the last — creating habits that last a lifetime.
            </p>
            <div className="tr-results-accent">
              🏆 Lifetime Obedience Habits
            </div>
          </div>

        </div>

        {/* ── Pricing ── */}
        <div className="tr-pricing-row">
          {PACKAGES.map(pkg => (
            <div key={pkg.duration} className={`tr-package ${pkg.highlight ? 'featured' : 'standard'}`}>
              {pkg.highlight && <span className="tr-package-badge">Best Value</span>}
              <span className="tr-pkg-duration">{pkg.duration}</span>
              <div className="tr-pkg-price">{pkg.price}</div>
              <p className="tr-pkg-desc">{pkg.description}</p>
              <a href="#contact" className="tr-pkg-btn">Book This Package</a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

