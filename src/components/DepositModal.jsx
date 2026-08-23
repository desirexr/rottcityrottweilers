import { useState } from 'react';

export default function DepositModal({ onClose, zelleDetails, applePayDetails }) {
  const [copiedField, setCopiedField] = useState(null);

  const zelleHandle = zelleDetails?.handle || '470-774-2552';
  const zelleName   = zelleDetails?.name || 'Rott City Rottweilers';

  const applePayHandle = applePayDetails?.handle || '470-774-2552';
  const applePayName   = applePayDetails?.name || 'Rott City Rottweilers';

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleMessageClick = () => {
    onClose();
    setTimeout(() => {
      const contactSec = document.getElementById('contact');
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="dep-overlay" role="dialog" aria-modal="true" aria-label="Deposit Now">
      <style>{`
        /* ── Overlay ── */
        .dep-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: #080808;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: depSlideIn 0.35s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes depSlideIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Top bar ── */
        .dep-topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: rgba(8,8,8,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .dep-back-btn {
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
        .dep-back-btn:hover {
          background: rgba(195,152,67,0.12);
          border-color: var(--primary);
        }
        .dep-topbar-logo {
          font-family: "Cinzel", serif;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
        }

        /* ── Content Container ── */
        .dep-body {
          max-width: 760px;
          margin: 0 auto;
          width: 100%;
          padding: clamp(2rem, 5vw, 4rem) 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ── Header ── */
        .dep-header {
          text-align: center;
        }
        .dep-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(195,152,67,0.12);
          color: var(--primary);
          border: 1px solid rgba(195,152,67,0.35);
          font-family: "Inter", sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          margin-bottom: 1rem;
        }
        .dep-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 5vw, 2.8rem);
          color: #fff;
          margin: 0 0 0.85rem;
          line-height: 1.2;
        }
        .dep-subtitle {
          font-family: "Inter", sans-serif;
          font-size: clamp(0.9rem, 2.5vw, 1.02rem);
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto;
        }

        /* ── Amount Display ── */
        .dep-amount-card {
          background: linear-gradient(135deg, rgba(195,152,67,0.15) 0%, rgba(20,20,20,0.8) 100%);
          border: 1px solid rgba(195,152,67,0.4);
          border-radius: 14px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .dep-amount-label {
          font-family: "Inter", sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.5);
          margin-bottom: 0.4rem;
        }
        .dep-amount-val {
          font-family: "Cinzel", serif;
          font-size: clamp(2.2rem, 6vw, 3.2rem);
          font-weight: 700;
          color: var(--primary);
          line-height: 1;
        }
        .dep-amount-sub {
          font-family: "Inter", sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          margin-top: 0.5rem;
        }

        /* ── Payment Methods Grid ── */
        .dep-methods-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 600px) {
          .dep-methods-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .dep-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: border-color 0.25s, transform 0.25s;
        }
        .dep-card:hover {
          border-color: rgba(195,152,67,0.45);
          transform: translateY(-2px);
        }
        .dep-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .dep-card-icon {
          font-size: 1.8rem;
        }
        .dep-card-title {
          font-family: "Cinzel", serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin: 0;
        }
        .dep-card-tag {
          font-family: "Inter", sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--primary);
        }
        .dep-info-box {
          background: rgba(0,0,0,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 0.85rem 1rem;
        }
        .dep-info-label {
          font-family: "Inter", sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.2rem;
        }
        .dep-info-val {
          font-family: "Inter", sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }
        .dep-info-name {
          font-family: "Inter", sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.5);
          margin-top: 0.2rem;
        }

        .dep-copy-btn {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.65rem 1rem;
          border-radius: 6px;
          border: 1px solid rgba(195,152,67,0.5);
          background: rgba(195,152,67,0.1);
          color: var(--primary);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .dep-copy-btn:hover {
          background: var(--primary);
          color: #000;
          border-color: var(--primary);
        }

        /* ── Notice Box ── */
        .dep-notice-box {
          background: rgba(195,152,67,0.08);
          border: 1px solid rgba(195,152,67,0.3);
          border-radius: 12px;
          padding: 1.25rem 1.5rem;
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .dep-notice-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .dep-notice-text h4 {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--primary);
          margin: 0 0 0.4rem;
        }
        .dep-notice-text p {
          font-family: "Inter", sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.6;
          margin: 0;
        }

        /* ── Actions ── */
        .dep-actions {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        @media (min-width: 500px) {
          .dep-actions {
            flex-direction: row;
          }
        }
        .dep-btn-primary {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 1.6rem;
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
          box-shadow: 0 4px 18px rgba(195,152,67,0.3);
          flex: 1;
        }
        .dep-btn-primary:hover {
          background: #e6c96a;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(195,152,67,0.4);
        }
        .dep-btn-secondary {
          font-family: "Inter", sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 1rem 1.6rem;
          border-radius: 8px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s;
          background: transparent;
          color: rgba(255,255,255,0.8);
          border: 1.5px solid rgba(255,255,255,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          flex: 1;
        }
        .dep-btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
          color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      {/* Top bar */}
      <div className="dep-topbar">
        <button className="dep-back-btn" onClick={onClose}>
          ← Back to Site
        </button>
        <span className="dep-topbar-logo">Rott City Rottweilers</span>
      </div>

      {/* Main Body */}
      <div className="dep-body">

        {/* Header */}
        <div className="dep-header">
          <span className="dep-badge">🔒 Official Puppy Reservation</span>
          <h1 className="dep-title">Place Your $250 Deposit</h1>
          <p className="dep-subtitle">
            Send your $250 deposit via Zelle or Apple Pay using the details below. 
            Deposits are applied directly toward the total purchase price of your puppy.
          </p>
        </div>

        {/* Amount Card */}
        <div className="dep-amount-card">
          <div className="dep-amount-label">Required Deposit Amount</div>
          <div className="dep-amount-val">$250.00</div>
          <div className="dep-amount-sub">Applied toward total puppy balance</div>
        </div>

        {/* Payment Methods */}
        <div className="dep-methods-grid">

          {/* Zelle */}
          <div className="dep-card">
            <div className="dep-card-header">
              <span className="dep-card-icon">⚡</span>
              <div>
                <h3 className="dep-card-title">Zelle</h3>
                <span className="dep-card-tag">Instant Transfer</span>
              </div>
            </div>
            <div className="dep-info-box">
              <div className="dep-info-label">Zelle Phone / Handle</div>
              <div className="dep-info-val">{zelleHandle}</div>
              <div className="dep-info-name">Name: {zelleName}</div>
            </div>
            <button className="dep-copy-btn" onClick={() => handleCopy(zelleHandle, 'zelle')}>
              {copiedField === 'zelle' ? '✓ Copied to Clipboard!' : '📋 Copy Zelle Info'}
            </button>
          </div>

          {/* Apple Pay */}
          <div className="dep-card">
            <div className="dep-card-header">
              <span className="dep-card-icon">📱</span>
              <div>
                <h3 className="dep-card-title">Apple Pay</h3>
                <span className="dep-card-tag">Apple Transfer</span>
              </div>
            </div>
            <div className="dep-info-box">
              <div className="dep-info-label">Apple Pay Handle</div>
              <div className="dep-info-val">{applePayHandle}</div>
              <div className="dep-info-name">Name: {applePayName}</div>
            </div>
            <button className="dep-copy-btn" onClick={() => handleCopy(applePayHandle, 'apple')}>
              {copiedField === 'apple' ? '✓ Copied to Clipboard!' : '📋 Copy Apple Pay Info'}
            </button>
          </div>

        </div>

        {/* Important Confirmation Notice */}
        <div className="dep-notice-box">
          <span className="dep-notice-icon">📩</span>
          <div className="dep-notice-text">
            <h4>Important: Confirm Your Deposit</h4>
            <p>
              Once you make a deposit, please send us a message or email with your payment confirmation 
              so your deposit can be officially logged and your puppy reserved.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="dep-actions">
          <a
            href={`mailto:rottcityllc@gmail.com?subject=Puppy%20Deposit%20Confirmation%20-$250&body=Hi%20Rott%20City,%0A%0AI%20have%20sent%20my%20$250%20deposit!%0A%0AName:%20%0APayment%20Method:%20(Zelle%20/%20Apple%20Pay)%0APreferred%20Gender/Bloodline:%20%0AConfirmation%20Code/Details:%20`}
            className="dep-btn-primary"
          >
            ✉️ Send Confirmation Email
          </a>
          <button className="dep-btn-secondary" onClick={handleMessageClick}>
            💬 Send Website Message
          </button>
        </div>

      </div>
    </div>
  );
}
