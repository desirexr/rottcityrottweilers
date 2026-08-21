import { useState } from 'react';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Meet Our Dogs', href: '#dogs' },
  { label: 'Puppies', href: '#puppies' },
  { label: 'Reservations', href: '#booking' },
  { label: 'Training', href: '#training' },
  { label: 'Stud Services', href: '#stud-services' },
  { label: 'Photo & Video', href: '#photoshoots' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        backgroundColor: 'var(--background)',
        borderBottom: '1px solid var(--border)',
        height: '5rem',
        display: 'flex', alignItems: 'center',
        padding: '0 clamp(1rem, 4vw, 3rem)',
        justifyContent: 'space-between',
      }}>
        {/* Brand */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <img src={logo} alt="Rott City Rottweilers" style={{ height: '2.8rem', width: 'auto' }} />
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: '0.78rem', color: 'var(--primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Rott City</div>
            <div style={{ fontFamily: '"Cinzel", serif', fontWeight: 400, fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Rottweilers</div>
          </div>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '0.82rem',
              color: 'var(--text)', textDecoration: 'none', letterSpacing: '0.01em',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
            >{l.label}</a>
          ))}
          <a href="#contact" style={{
            fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.76rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.55rem 1.4rem', borderRadius: '9999px',
            border: '1.5px solid var(--primary)', color: 'var(--primary)',
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--primary)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--primary)'; }}
          >Inquire Now</a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
        >
          <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text)', marginBottom: '5px', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text)', marginBottom: '5px', opacity: open ? 0 : 1, transition: 'all 0.3s' }} />
          <div style={{ width: '22px', height: '2px', backgroundColor: 'var(--text)', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: '5rem', left: 0, right: 0, zIndex: 199,
          backgroundColor: 'var(--background)', borderBottom: '1px solid var(--border)',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto',
        }} className="mobile-drawer">
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '0.95rem',
              color: 'var(--text)', textDecoration: 'none',
            }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: 'inline-block', fontFamily: '"Inter", sans-serif', fontWeight: 600,
            fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.7rem 1.6rem', borderRadius: '9999px',
            border: '1.5px solid var(--primary)', color: 'var(--primary)',
            textDecoration: 'none', alignSelf: 'flex-start',
          }}>Inquire Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
