import logo from '../assets/logo.png';

export default function Footer() {
  const QUICK_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Meet Our Dogs', href: '#dogs' },
    { label: 'Puppies', href: '#puppies' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--background)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '5rem clamp(1.5rem,5vw,5rem) 2rem' }}>
      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
        }
        .footer-col-title {
          font-family: "Cinzel", serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.05em;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }
        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .footer-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: "Inter", sans-serif;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 1rem;
        }
        .footer-badge-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(195,152,67,0.15);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          flex-shrink: 0;
        }
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .newsletter-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-family: "Inter", sans-serif;
          font-size: 0.88rem;
          color: #FFFFFF;
          outline: none;
          transition: border-color 0.2s;
        }
        .newsletter-input:focus {
          border-color: var(--primary);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-copyright {
          font-family: "Inter", sans-serif;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
        }
        @media (max-width: 960px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 2.5rem; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { justify-content: center; text-align: center; }
        }
      `}</style>

      <div className="footer-grid">
        {/* Column 1: Brand */}
        <div>
          <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', marginBottom: '1.5rem' }}>
            <img src={logo} alt="Rott City Rottweilers" style={{ height: '2.8rem', width: 'auto' }} />
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: '0.78rem', color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Rott City</div>
              <div style={{ fontFamily: '"Cinzel", serif', fontWeight: 400, fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Rottweilers</div>
            </div>
          </a>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)', margin: '0 0 1.25rem', maxWidth: '28ch' }}>
            Georgia-based Rottweiler program producing healthy, athletic, and family-oriented Rottweilers since 2017.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="tel:4707742552" style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}>📞</span> 470-774-2552
            </a>
            <a href="mailto:rottcityllc@gmail.com" style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}>✉</span> rottcityllc@gmail.com
            </a>
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}>📍</span> Smyrna, Georgia
            </span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            {QUICK_LINKS.map(link => (
              <li key={link.label}>
                <a href={link.href} className="footer-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Guarantees */}
        <div>
          <h4 className="footer-col-title">Our Standards</h4>
          <div className="footer-badge">
            <div className="footer-badge-icon">✓</div>
            <span>Health &amp; Structure Focused</span>
          </div>
          <div className="footer-badge">
            <div className="footer-badge-icon">✓</div>
            <span>Early Socialization &amp; Confidence</span>
          </div>
          <div className="footer-badge">
            <div className="footer-badge-icon">✓</div>
            <span>Strong Working Ability</span>
          </div>
          <div className="footer-badge">
            <div className="footer-badge-icon">✓</div>
            <span>Breed Preservation</span>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="footer-col-title">Stay Updated</h4>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, marginBottom: '1rem' }}>
            Subscribe to receive breed news, litter announcements, and care tips.
          </p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" required placeholder="Enter your email" className="newsletter-input" />
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '0.75rem', border: 'none', cursor: 'pointer', display: 'block', textAlign: 'center', fontSize: '0.76rem' }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Rott City Rottweilers. All rights reserved.
          <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.75rem', opacity: 0.7 }}>
            designed by{' '}
            <a
              href="mailto:contact.desirexr@gmail.com"
              style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px', cursor: 'pointer' }}
            >
              BuiltbyDesire
            </a>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" className="footer-link" style={{ fontSize: '0.78rem' }}>Privacy Policy</a>
          <a href="#about" className="footer-link" style={{ fontSize: '0.78rem' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}


