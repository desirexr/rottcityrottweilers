import { useState } from 'react';
import silhouette from '../assets/silhouette.png';

// ── Web3Forms ────────────────────────────────────────────────────────────────
// Get a free access key at https://web3forms.com
// Enter rottcityllc@gmail.com → they email you the key → paste it below.
// The key is NOT a password — it is safe to leave it in the code.
const WEB3FORMS_KEY = 'b5deddf7-db2f-408f-aa72-2c61df9c984d';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          subject: `New Puppy Inquiry from ${form.name} — ${form.subject}`,
          message: form.message,
          botcheck: '',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: 'var(--background)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)' }}>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .contact-form-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 2.5rem;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .form-label {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text);
        }
        .form-input {
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-family: "Inter", sans-serif;
          font-size: 0.9rem;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-color: var(--primary);
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }
        .info-item {
          margin-bottom: 2rem;
        }
        .info-label {
          font-family: "Inter", sans-serif;
          font-weight: 600;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary);
          margin-bottom: 0.4rem;
        }
        .info-value {
          font-family: "Inter", sans-serif;
          font-size: 0.95rem;
          color: var(--text);
          line-height: 1.5;
        }
        .contact-silhouette-wrap {
          margin-top: auto;
          display: flex;
          justify-content: flex-end;
          opacity: 0.15;
          pointer-events: none;
        }
        .contact-silhouette {
          height: clamp(140px, 18vw, 240px);
          width: auto;
          object-fit: contain;
        }
        .success-banner {
          background-color: rgba(195, 152, 67, 0.1);
          border: 1px solid var(--primary);
          color: var(--primary-dark);
          padding: 1rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          text-align: center;
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
          .contact-form-card { padding: 2rem 1.5rem; }
        }
        @media (max-width: 500px) {
          .form-group-row { grid-template-columns: 1fr; gap: 1.25rem; }
        }
      `}</style>

      <div className="contact-grid">
        {/* Left Column: Form */}
        <div>
          <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)', marginBottom: '1rem' }}>Inquire Today</p>
          <h2 style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: 'var(--text)', margin: '0 0 2rem' }}>Start Your Journey</h2>

          <div className="contact-form-card">
            {submitted && (
              <div className="success-banner">
                ✅ Thank you! Your inquiry has been sent. We will get back to you shortly.
              </div>
            )}
            {error && (
              <div className="success-banner" style={{ backgroundColor: 'rgba(200,50,50,0.1)', borderColor: '#c83232', color: '#ff6b6b' }}>
                ⚠️ Something went wrong. Please email us directly at <strong>rottcityllc@gmail.com</strong>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    required
                    className="form-input"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(555) 000-0000"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Subject</label>
                  <input
                    type="text"
                    required
                    className="form-input"
                    placeholder="Puppy Inquiry"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Message / Inquiry Details</label>
                <textarea
                  required
                  rows="5"
                  className="form-input"
                  placeholder="Tell us about your home environment, experience with working breeds, and what puppy you are interested in..."
                  style={{ resize: 'vertical' }}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary"
                style={{ width: '100%', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer', display: 'block', textAlign: 'center', opacity: submitting ? 0.7 : 1, transition: 'opacity 0.2s' }}
              >
                {submitting ? 'Sending…' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Contact Info */}
        <div className="contact-info-col">
          <div>
            <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--primary)', marginBottom: '1rem' }}>Contact Details</p>
            <h2 style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3vw,2.8rem)', color: 'var(--text)', margin: '0 0 2rem' }}>Get in Touch</h2>

            <div className="info-item">
              <div className="info-label">Location</div>
              <div className="info-value">Smyrna, Georgia</div>
            </div>

            <div className="info-item">
              <div className="info-label">Phone</div>
              <div className="info-value">
                <a href="tel:4046650769" style={{ color: 'var(--text)', textDecoration: 'none' }}>404-665-0769</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-label">Email</div>
              <div className="info-value">
                <a href="mailto:rottcityllc@gmail.com" style={{ color: 'var(--text)', textDecoration: 'none' }}>rottcityllc@gmail.com</a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-label">Owner</div>
              <div className="info-value">Monte Anderson</div>
            </div>
          </div>

          <div className="contact-silhouette-wrap">
            <img src={silhouette} alt="Rottweiler Silhouette" className="contact-silhouette" />
          </div>
        </div>
      </div>
    </section>
  );
}
