import { useRef, useEffect, useState, useCallback } from 'react';

const STEPS = [
  {
    num: 1,
    icon: '📞',
    title: 'Contact Us About Availability',
    body: "Reach out to us to see what puppies are currently available or what upcoming litters we have planned. We'll let you know available males/females, pricing, estimated go-home dates, and basic litter details.",
  },
  {
    num: 2,
    icon: '📋',
    title: 'Submit a Puppy Application',
    body: "Complete our puppy application so we can learn more about you, your home, your experience with dogs, and what you're looking for in a Rottweiler. Tiny bit of paperwork, because apparently trust alone doesn't run a kennel.",
  },
  {
    num: 3,
    icon: '✅',
    title: 'Get Approved & Choose Your Puppy',
    body: "Once approved, we'll help match you with the best puppy based on availability, temperament, structure, and your goals — whether that's family companion, protection potential, breeding prospect, or show-quality interest.",
  },
  {
    num: 4,
    icon: '💰',
    title: 'Place a Deposit',
    body: 'A deposit is required to officially reserve your puppy. Deposits are applied toward the total purchase price and secure your spot or specific puppy. Puppies are not considered reserved until the deposit is received.',
  },
  {
    num: 5,
    icon: '🎉',
    title: 'Receive Reservation Confirmation',
    body: "After your deposit is placed, you'll receive confirmation with your puppy details, remaining balance, pickup/delivery information, and important dates.",
  },
  {
    num: 6,
    icon: '📸',
    title: 'Receive Updates Until Go-Home',
    body: "We'll provide updates as your puppy grows, including photos, videos, health milestones, and general progress.",
  },
  {
    num: 7,
    icon: '🚗',
    title: 'Schedule Pickup or Delivery',
    body: "Before your puppy is ready to leave, we'll coordinate pickup or delivery. Delivery may be available depending on location and must be arranged in advance.",
  },
  {
    num: 8,
    icon: '🐾',
    title: 'Final Payment & Go-Home',
    body: "The remaining balance is due before or at pickup/delivery. Your puppy will go home with any available records, care instructions, and next-step guidance.",
  },
];

export default function Booking({ onOpenDeposit }) {
  const containerRef  = useRef(null);
  const nodeRefs      = useRef([]);
  const [svgPath, setSvgPath] = useState('');
  const [svgDims, setSvgDims] = useState({ w: 0, h: 0 });

  const buildPath = useCallback(() => {
    const cont = containerRef.current;
    if (!cont) return;
    const cRect = cont.getBoundingClientRect();

    const pts = nodeRefs.current
      .map(el => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width  / 2 - cRect.left,
          y: r.top  + r.height / 2 - cRect.top,
        };
      })
      .filter(Boolean);

    if (pts.length < 2) return;

    setSvgDims({ w: cRect.width, h: cRect.height });

    // Max bulge: 30% of container width or 110px, whichever is smaller
    const maxBulge = Math.min(cRect.width * 0.30, 110);

    // Build S-curve bezier path through all nodes
    let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
    for (let i = 1; i < pts.length; i++) {
      const a   = pts[i - 1];
      const b   = pts[i];
      const dy  = b.y - a.y;
      // Bulge magnitude — scales with vertical gap, capped
      const mag = Math.min(dy * 0.52, maxBulge);
      // Alternate left / right
      const bx  = (i % 2 === 1 ? 1 : -1) * mag;
      const cy1 = a.y + dy * 0.25;
      const cy2 = a.y + dy * 0.75;
      d += ` C ${(a.x + bx).toFixed(1)} ${cy1.toFixed(1)},`
         + ` ${(b.x + bx).toFixed(1)} ${cy2.toFixed(1)},`
         + ` ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }
    setSvgPath(d);
  }, []);

  useEffect(() => {
    // Small delay so layout is settled before measuring
    const t = setTimeout(buildPath, 60);
    const ro = new ResizeObserver(buildPath);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener('resize', buildPath);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      window.removeEventListener('resize', buildPath);
    };
  }, [buildPath]);

  return (
    <section
      id="booking"
      style={{
        backgroundColor: 'var(--background)',
        padding: 'clamp(3rem,8vw,7rem) clamp(1rem,5vw,5rem)',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        /* ── Header ── */
        .bk-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto clamp(2rem, 7vw, 5rem);
          padding: 0 0.5rem;
        }
        .bk-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .bk-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.55rem, 7vw, 2.8rem);
          color: #fff;
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .bk-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3.5vw, 0.97rem);
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin: 0;
        }
        .bk-divider {
          width: 50px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }

        /* ── Roadmap wrapper ── */
        .bk-roadmap {
          position: relative;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Step row ── */
        .bk-step {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0 1.5rem;
          align-items: start;
          margin-bottom: clamp(1.5rem, 5vw, 3rem);
          position: relative;
          z-index: 1;
        }
        .bk-step:last-child { margin-bottom: 0; }

        /* Odd  → card LEFT,  node centre, empty right */
        .bk-step.left  .bk-card  { grid-column: 1; grid-row: 1; }
        .bk-step.left  .bk-node  { grid-column: 2; grid-row: 1; }
        .bk-step.left  .bk-empty { grid-column: 3; grid-row: 1; }

        /* Even → empty left, node centre, card RIGHT  */
        .bk-step.right .bk-empty { grid-column: 1; grid-row: 1; }
        .bk-step.right .bk-node  { grid-column: 2; grid-row: 1; }
        .bk-step.right .bk-card  { grid-column: 3; grid-row: 1; }

        /* Mobile: single column, node pinned left */
        @media (max-width: 680px) {
          .bk-step {
            grid-template-columns: auto 1fr;
            gap: 0 1rem;
          }
          .bk-step.left  .bk-card,
          .bk-step.right .bk-card  { grid-column: 2; grid-row: 1; }
          .bk-step.left  .bk-node,
          .bk-step.right .bk-node  { grid-column: 1; grid-row: 1; justify-content: flex-start; }
          .bk-step.left  .bk-empty,
          .bk-step.right .bk-empty { display: none; }
        }

        /* ── Node ── */
        .bk-node {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 0.3rem;
          position: relative;
          z-index: 2;
        }
        .bk-node-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #111;
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow:
            0 0 0 5px rgba(195,152,67,0.08),
            0 0 18px rgba(195,152,67,0.18);
          position: relative;
        }
        .bk-node-num {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--primary);
        }
        @media (max-width: 680px) {
          .bk-node-circle {
            width: 36px;
            height: 36px;
            box-shadow: 0 0 0 3px rgba(195,152,67,0.08), 0 0 10px rgba(195,152,67,0.15);
          }
          .bk-node-num { font-size: 0.78rem; }
        }

        /* ── Card ── */
        .bk-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: clamp(0.75rem, 4vw, 1.5rem);
          transition: border-color 0.3s, background 0.3s, transform 0.3s, box-shadow 0.3s;
          cursor: default;
          position: relative;
          z-index: 1;
        }
        .bk-card:hover {
          border-color: rgba(195,152,67,0.5);
          background: rgba(195,152,67,0.05);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }
        @media (max-width: 680px) {
          .bk-card:hover { transform: none; }
        }
        .bk-card-icon {
          font-size: clamp(1.1rem, 4vw, 1.4rem);
          margin-bottom: 0.45rem;
          display: block;
        }
        .bk-card-step {
          font-family: "Inter", sans-serif;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--primary);
          margin: 0 0 0.3rem;
        }
        .bk-card-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(0.85rem, 3.5vw, 1.05rem);
          color: #fff;
          margin: 0 0 0.45rem;
          line-height: 1.3;
        }
        .bk-card-body {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.78rem, 3vw, 0.87rem);
          color: rgba(255,255,255,0.48);
          line-height: 1.7;
          margin: 0;
        }
        .bk-empty { /* layout spacer */ }

        /* ── SVG path animation ── */
        @keyframes bk-flow {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -60; }
        }
        .bk-path-dots {
          animation: bk-flow 2.4s linear infinite;
        }

        /* ── Bottom CTA ── */
        .bk-cta {
          text-align: center;
          margin-top: clamp(3rem, 6vw, 4.5rem);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .bk-cta p {
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.4);
          margin: 0;
        }
        .bk-cta-btn {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s;
          background: var(--primary);
          color: #000;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 24px rgba(195,152,67,0.3);
          cursor: pointer;
        }
        .bk-cta-btn:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(195,152,67,0.4);
        }
      `}</style>

      {/* Header */}
      <div className="bk-header">
        <p className="bk-eyebrow">How It Works</p>
        <h2 className="bk-title">Puppy Reservation Process</h2>
        <div className="bk-divider" />
        <p className="bk-subtitle">
          Eight simple steps from first contact to the moment your Rott City puppy comes home.
        </p>
      </div>

      {/* Roadmap */}
      <div className="bk-roadmap" ref={containerRef}>

        {/* Dynamic S-curve SVG connector */}
        {svgPath && (
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: `${svgDims.w}px`,
              height: `${svgDims.h}px`,
              pointerEvents: 'none',
              overflow: 'visible',
              zIndex: 0,
            }}
          >
            <defs>
              <linearGradient id="bkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="rgba(195,152,67,0)" />
                <stop offset="8%"   stopColor="rgba(195,152,67,0.55)" />
                <stop offset="92%"  stopColor="rgba(195,152,67,0.55)" />
                <stop offset="100%" stopColor="rgba(195,152,67,0)" />
              </linearGradient>
              <filter id="bkGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer glow trail */}
            <path
              d={svgPath}
              fill="none"
              stroke="rgba(195,152,67,0.12)"
              strokeWidth="10"
              strokeLinecap="round"
            />

            {/* Main dotted path (static, subtle) */}
            <path
              d={svgPath}
              fill="none"
              stroke="url(#bkGrad)"
              strokeWidth="1.5"
              strokeDasharray="3 11"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Animated flowing dots */}
            <path
              d={svgPath}
              fill="none"
              stroke="url(#bkGrad)"
              strokeWidth="2.5"
              strokeDasharray="5 10"
              strokeLinecap="round"
              className="bk-path-dots"
              filter="url(#bkGlow)"
            />

            {/* Bright accent dots */}
            <path
              d={svgPath}
              fill="none"
              stroke="rgba(195,152,67,0.9)"
              strokeWidth="3"
              strokeDasharray="1.5 13.5"
              strokeLinecap="round"
              className="bk-path-dots"
            />
          </svg>
        )}

        {/* Steps */}
        {STEPS.map((step, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          return (
            <div key={step.num} className={`bk-step ${side}`}>
              <div className="bk-empty" />

              {/* Node */}
              <div className="bk-node">
                <div
                  className="bk-node-circle"
                  ref={el => { nodeRefs.current[i] = el; }}
                >
                  <span className="bk-node-num">{step.num}</span>
                </div>
              </div>

              {/* Card */}
              <div className="bk-card">
                <span className="bk-card-icon">{step.icon}</span>
                <p className="bk-card-step">Step {step.num}</p>
                <h3 className="bk-card-title">{step.title}</h3>
                <p className="bk-card-body">{step.body}</p>
                {step.num === 4 && (
                  <button
                    onClick={onOpenDeposit}
                    style={{
                      marginTop: '1rem',
                      fontFamily: '"Inter", sans-serif',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '0.65rem 1.25rem',
                      borderRadius: '6px',
                      border: '1.5px solid var(--primary)',
                      background: 'rgba(195,152,67,0.15)',
                      color: 'var(--primary)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s',
                    }}
                  >
                    🔒 Pay $250 Deposit Now
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="bk-cta">
        <p>Ready to start the process?</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button onClick={onOpenDeposit} className="bk-cta-btn" style={{ border: 'none', background: 'var(--primary)', color: '#000', cursor: 'pointer' }}>
            💳 Deposit Now ($250)
          </button>
          <a href="#contact" className="bk-cta-btn">
            🐾 Begin Your Application
          </a>
        </div>
      </div>
    </section>
  );
}
