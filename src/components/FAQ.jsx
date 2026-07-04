import { useState } from 'react';

const FAQS = [
  {
    q: 'How much are your puppies?',
    a: 'Prices typically start at $1,500. Pricing may vary depending on litter and availability.',
  },
  {
    q: 'Do you offer delivery?',
    a: 'Yes. We offer local pickup, ground transportation, and flight nanny options depending on location.',
  },
  {
    q: 'What age can puppies go home?',
    a: 'Our puppies typically go home at 8 weeks old.',
  },
  {
    q: 'Are puppies vaccinated?',
    a: 'Yes. Puppies receive age-appropriate vaccinations and deworming before going home.',
  },
  {
    q: 'Do you require a deposit?',
    a: 'Yes. A deposit is required to reserve a puppy.',
  },
  {
    q: 'Can I visit the puppies?',
    a: 'Visits may be available by appointment with customers who have placed a deposit.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We offer flexible payment plans for approved customers.\n\nTo get started, a deposit is required to reserve your puppy. The remaining balance can then be paid through monthly or bi-weekly installments until the puppy is paid in full.\n\nOnce the balance has been paid in full, we will schedule pickup or delivery and your puppy can go home.\n\nPlease note: Puppies are not released until the full purchase price has been paid.',
  },
  {
    q: 'Are your breeding dogs health tested?',
    a: 'Yes. Both parents are health tested and screened annually to help ensure they meet our breeding standards. We do not breed dogs with known health issues, and we take the health and well-being of our breeding program seriously.\n\nWe also provide a health guarantee with every puppy, giving our families added confidence and peace of mind in their investment.',
  },
  {
    q: 'What comes with my puppy?',
    a: 'Health records, vaccination records, contract, and lifetime breeder support.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section
      id="faq"
      style={{ backgroundColor: 'var(--background)', padding: 'clamp(3rem,8vw,7rem) clamp(1rem,5vw,5rem)' }}
    >
      <style>{`
        /* ── Header ── */
        .faq-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto clamp(2.5rem, 6vw, 4rem);
          padding: 0 0.5rem;
        }
        .faq-eyebrow {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--primary);
          margin: 0 0 0.75rem;
        }
        .faq-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.7rem, 5vw, 2.8rem);
          color: var(--text);
          margin: 0 0 1rem;
          line-height: 1.2;
        }
        .faq-divider {
          width: 50px;
          height: 3px;
          background: var(--primary);
          border-radius: 2px;
          margin: 0 auto 1.25rem;
        }
        .faq-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.88rem, 3vw, 0.97rem);
          color: var(--text-muted);
          line-height: 1.7;
          margin: 0;
        }

        /* ── Accordion list ── */
        .faq-list {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        /* ── Item ── */
        .faq-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          overflow: hidden;
          background: var(--surface, #f9f6f1);
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .faq-item.open {
          border-color: rgba(195,152,67,0.5);
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }

        /* ── Question row ── */
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: clamp(1rem, 3vw, 1.35rem) clamp(1rem, 3vw, 1.5rem);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          outline: none;
        }
        .faq-question-text {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.92rem, 2.5vw, 1rem);
          font-weight: 600;
          color: var(--text);
          line-height: 1.4;
        }
        .faq-item.open .faq-question-text {
          color: var(--primary);
        }

        /* ── Arrow ── */
        .faq-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid var(--border);
          background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.25s,
                      background 0.25s;
        }
        .faq-arrow svg {
          width: 14px;
          height: 14px;
          stroke: var(--text-muted);
          transition: stroke 0.25s;
        }
        .faq-item.open .faq-arrow {
          transform: rotate(180deg);
          border-color: var(--primary);
          background: rgba(195,152,67,0.08);
        }
        .faq-item.open .faq-arrow svg {
          stroke: var(--primary);
        }

        /* ── Answer panel ── */
        .faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.36s cubic-bezier(0.4,0,0.2,1);
        }
        .faq-item.open .faq-answer-wrap {
          grid-template-rows: 1fr;
        }
        .faq-answer-inner {
          overflow: hidden;
        }
        .faq-answer {
          padding: 0 clamp(1rem, 3vw, 1.5rem) clamp(1rem, 3vw, 1.35rem);
          border-top: 1px solid var(--border);
        }
        .faq-answer p {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.86rem, 2.5vw, 0.93rem);
          color: var(--text-muted);
          line-height: 1.78;
          margin: 0.85rem 0 0;
        }
        .faq-answer p + p {
          margin-top: 0.75rem;
        }

        /* ── Bottom CTA ── */
        .faq-cta {
          text-align: center;
          margin-top: clamp(2.5rem, 5vw, 4rem);
        }
        .faq-cta p {
          font-family: "Inter", sans-serif;
          font-size: 0.9rem;
          color: var(--text-muted);
          margin: 0 0 1rem;
        }
        .faq-cta-btn {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 2.2rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.25s;
          background: var(--primary);
          color: #fff;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 18px rgba(0,0,0,0.12);
          cursor: pointer;
        }
        .faq-cta-btn:hover {
          background: var(--primary-dark, #7a0000);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
        }
      `}</style>

      {/* Header */}
      <div className="faq-header">
        <p className="faq-eyebrow">Got Questions?</p>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-divider" />
        <p className="faq-subtitle">
          Everything you need to know before bringing a Rott City Rottweiler home.
        </p>
      </div>

      {/* Accordion */}
      <div className="faq-list">
        {FAQS.map((item, i) => {
          const isOpen = openIdx === i;
          // Split multi-paragraph answers on \n\n
          const paragraphs = item.a.split('\n\n');
          return (
            <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>

              {/* Question button */}
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              {/* Animated answer panel */}
              <div className="faq-answer-wrap">
                <div className="faq-answer-inner">
                  <div className="faq-answer">
                    {paragraphs.map((p, pi) => (
                      <p key={pi}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="faq-cta">
        <p>Still have questions? We're happy to help.</p>
        <a href="#contact" className="faq-cta-btn">
          🐾 Contact Us
        </a>
      </div>
    </section>
  );
}

