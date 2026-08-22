export default function DogProfile({ dog, onClose }) {
  if (!dog) return null;

  return (
    <div className="dp-overlay" role="dialog" aria-modal="true" aria-label={`${dog.name} profile`}>
      <style>{`
        /* ── Overlay ── */
        .dp-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #080808;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: dpSlideIn 0.38s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes dpSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Top bar ── */
        .dp-topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(8,8,8,0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dp-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: "Inter", sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
          background: none;
          border: 1.5px solid rgba(195,152,67,0.45);
          border-radius: 6px;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .dp-back-btn:hover {
          background: rgba(195,152,67,0.12);
          border-color: var(--primary);
        }
        .dp-topbar-logo {
          font-family: "Cinzel", serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
        }

        /* ── Main layout ── */
        .dp-body {
          display: grid;
          grid-template-columns: 1fr;
          flex: 1;
        }
        @media (min-width: 800px) {
          .dp-body {
            grid-template-columns: 1fr 1fr;
            min-height: calc(100vh - 61px);
          }
        }

        /* ── Image pane ── */
        .dp-img-pane {
          position: relative;
          min-height: 55vw;
          max-height: 80vh;
          overflow: hidden;
        }
        @media (min-width: 800px) {
          .dp-img-pane {
            position: sticky;
            top: 61px;
            height: calc(100vh - 61px);
            max-height: none;
          }
        }
        .dp-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }
        .dp-img-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 40%,
            rgba(8,8,8,0.6) 100%
          );
          pointer-events: none;
        }
        @media (min-width: 800px) {
          .dp-img-gradient {
            background: linear-gradient(
              to right,
              transparent 60%,
              rgba(8,8,8,0.85) 100%
            );
          }
        }
        .dp-img-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0,0,0,0.65);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(195,152,67,0.4);
          border-radius: 6px;
          padding: 0.35rem 0.75rem;
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--primary);
        }

        /* ── Info pane ── */
        .dp-info-pane {
          padding: clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 5vw, 3.5rem);
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ── Name block ── */
        .dp-eyebrow {
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--primary);
          margin: 0 0 0.6rem;
        }
        .dp-name {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(2rem, 6vw, 3.2rem);
          color: #fff;
          margin: 0 0 0.4rem;
          line-height: 1.1;
        }
        .dp-bloodline {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.82rem, 2vw, 0.9rem);
          color: rgba(255,255,255,0.45);
          margin: 0;
          line-height: 1.5;
        }

        /* ── Divider ── */
        .dp-divider {
          width: 48px;
          height: 2px;
          background: var(--primary);
          border-radius: 1px;
        }

        /* ── Stats row ── */
        .dp-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .dp-stat {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 0.75rem 1.1rem;
          flex: 1 1 100px;
          min-width: 90px;
        }
        .dp-stat-label {
          font-family: "Inter", sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.35);
          display: block;
          margin-bottom: 0.3rem;
        }
        .dp-stat-value {
          font-family: "Cinzel", serif;
          font-size: clamp(0.9rem, 2.5vw, 1.05rem);
          font-weight: 700;
          color: #fff;
        }

        /* ── Description ── */
        .dp-description {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.9rem, 2vw, 0.97rem);
          line-height: 1.85;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* ── Temperament ── */
        .dp-section-label {
          font-family: "Inter", sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin: 0 0 0.75rem;
        }
        .dp-traits {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .dp-trait {
          font-family: "Inter", sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--primary);
          border: 1px solid rgba(195,152,67,0.4);
          border-radius: 20px;
          padding: 0.35rem 0.85rem;
          background: rgba(195,152,67,0.07);
          letter-spacing: 0.04em;
        }

        /* ── Pedigree ── */
        .dp-pedigree-box {
          background: rgba(195,152,67,0.06);
          border: 1px solid rgba(195,152,67,0.25);
          border-radius: 10px;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dp-pedigree-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .dp-pedigree-text {
          font-family: "Inter", sans-serif;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
        }
        .dp-pedigree-text strong {
          color: var(--primary);
          font-weight: 700;
          display: block;
          margin-bottom: 0.15rem;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        /* ── CTA ── */
        .dp-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 0.5rem;
        }
        .dp-cta-primary {
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
          flex: 1 1 160px;
          justify-content: center;
        }
        .dp-cta-primary:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(195,152,67,0.4);
        }
        .dp-cta-secondary {
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
          background: transparent;
          color: rgba(255,255,255,0.7);
          border: 1.5px solid rgba(255,255,255,0.18);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          flex: 1 1 160px;
          justify-content: center;
        }
        .dp-cta-secondary:hover {
          border-color: rgba(255,255,255,0.45);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Top bar */}
      <div className="dp-topbar">
        <button className="dp-back-btn" onClick={onClose}>
          ← Back
        </button>
        <span className="dp-topbar-logo">Rott City Rottweilers</span>
      </div>

      {/* Body */}
      <div className="dp-body">

        {/* Image pane */}
        <div className="dp-img-pane">
          <img src={dog.img} alt={dog.name} className="dp-img" />
          <div className="dp-img-gradient" />
          <span className="dp-img-badge">{dog.flag} {dog.bloodline.split('|')[0].trim()} Bloodline</span>
        </div>

        {/* Info pane */}
        <div className="dp-info-pane">

          {/* Name */}
          <div>
            <p className="dp-eyebrow">Rott City Dog</p>
            <h1 className="dp-name">{dog.name}</h1>
            <p className="dp-bloodline">
              {dog.bloodline}
              {dog.extra ? ` · ${dog.extra}` : ''}
            </p>
          </div>

          <div className="dp-divider" />

          {/* Stats */}
          <div className="dp-stats">
            {dog.gender && (
              <div className="dp-stat">
                <span className="dp-stat-label">Gender</span>
                <span className="dp-stat-value">{dog.gender}</span>
              </div>
            )}
            {dog.weight && (
              <div className="dp-stat">
                <span className="dp-stat-label">Weight</span>
                <span className="dp-stat-value">{dog.weight}</span>
              </div>
            )}
            {dog.age && (
              <div className="dp-stat">
                <span className="dp-stat-label">Age</span>
                <span className="dp-stat-value">{dog.age}</span>
              </div>
            )}
            <div className="dp-stat">
              <span className="dp-stat-label">Bloodline</span>
              <span className="dp-stat-value">{dog.flag}</span>
            </div>
          </div>

          {/* Description */}
          {dog.description && (
            <div>
              <p className="dp-section-label">About</p>
              <p className="dp-description">{dog.description}</p>
            </div>
          )}

          {/* Temperament */}
          <div>
            <p className="dp-section-label">Temperament</p>
            <div className="dp-traits">
              {dog.temperament.map(t => (
                <span key={t} className="dp-trait">{t}</span>
              ))}
            </div>
          </div>

          {/* Pedigree */}
          <div className="dp-pedigree-box">
            <span className="dp-pedigree-icon">📋</span>
            <div className="dp-pedigree-text">
              <strong>Pedigree</strong>
              Available upon request — contact us for full documentation.
            </div>
          </div>

          {/* CTA */}
          <div className="dp-cta">
            <a href="#contact" className="dp-cta-primary" onClick={onClose}>
              🐾 Inquire About {dog.name}
            </a>
            <button className="dp-cta-secondary" onClick={onClose}>
              ← View All Dogs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
