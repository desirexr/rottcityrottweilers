import { useState } from 'react';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Meet Our Dogs', href: '#dogs' },
  { label: 'Puppies', href: '#puppies' },
  { 
    label: 'Services', 
    dropdown: [
      { label: 'Reservations', href: '#booking' },
      { label: 'Training', href: '#training' },
      { label: 'Stud Services', href: '#stud-services' },
      { label: 'Photo & Video', href: '#photoshoots' },
      { label: 'All Services', href: '#services' },
      { label: 'Deposit Now ($250)', isDeposit: true },
    ]
  },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar({ onOpenDeposit }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        backgroundColor: 'var(--background)',
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
          {NAV_ITEMS.map(item => (
            item.dropdown ? (
              <div key={item.label} className="nav-dropdown" style={{ position: 'relative' }}>
                <span className="nav-dropdown-trigger">
                  {item.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginTop: '2px' }}><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <div className="nav-dropdown-menu">
                  {item.dropdown.map(d => (
                    d.isDeposit ? (
                      <button
                        key={d.label}
                        onClick={onOpenDeposit}
                        className="nav-dropdown-link"
                        style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', color: 'var(--primary)', fontWeight: 600 }}
                      >
                        {d.label}
                      </button>
                    ) : (
                      <a key={d.label} href={d.href} className="nav-dropdown-link">{d.label}</a>
                    )
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="nav-link">{item.label}</a>
            )
          ))}
          <a href="#contact" className="nav-inquire-btn">Inquire Now</a>
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
          {NAV_ITEMS.map(item => {
            if (item.dropdown) {
              return (
                <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <span style={{ fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--primary)' }}>{item.label}</span>
                  {item.dropdown.map(d => (
                    d.isDeposit ? (
                      <button
                        key={d.label}
                        onClick={() => { setOpen(false); onOpenDeposit && onOpenDeposit(); }}
                        style={{
                          fontFamily: '"Inter", sans-serif', fontWeight: 700, fontSize: '0.9rem',
                          color: 'var(--primary)', background: 'none', border: 'none', textAlign: 'left',
                          paddingLeft: '1rem', cursor: 'pointer'
                        }}
                      >
                        {d.label}
                      </button>
                    ) : (
                      <a key={d.label} href={d.href} onClick={() => setOpen(false)} style={{
                        fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '0.9rem',
                        color: 'var(--text)', textDecoration: 'none', paddingLeft: '1rem'
                      }}>{d.label}</a>
                    )
                  ))}
                </div>
              );
            }
            return (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} style={{
                fontFamily: '"Inter", sans-serif', fontWeight: 500, fontSize: '0.95rem',
                color: 'var(--text)', textDecoration: 'none',
              }}>{item.label}</a>
            );
          })}
          <a href="#contact" onClick={() => setOpen(false)} style={{
            display: 'inline-block', fontFamily: '"Inter", sans-serif', fontWeight: 600,
            fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '0.7rem 1.6rem', borderRadius: '9999px',
            border: '1.5px solid var(--primary)', color: 'var(--primary)',
            textDecoration: 'none', alignSelf: 'flex-start', marginTop: '0.5rem'
          }}>Inquire Now</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1050px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }

        .nav-link, .nav-dropdown-trigger {
          font-family: "Inter", sans-serif; font-weight: 500; font-size: 0.82rem;
          color: var(--text); text-decoration: none; letter-spacing: 0.01em;
          transition: color 0.2s; display: flex; align-items: center; gap: 0.4rem;
          cursor: pointer;
        }
        .nav-link:hover, .nav-dropdown-trigger:hover { color: var(--primary); }

        .nav-dropdown-menu {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          background: rgba(8,8,8,0.98); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;
          padding: 0.5rem 0; min-width: 180px;
          display: flex; flex-direction: column;
          opacity: 0; visibility: hidden; transition: all 0.2s;
          margin-top: 1rem; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .nav-dropdown:hover .nav-dropdown-menu {
          opacity: 1; visibility: visible; margin-top: 1.5rem;
        }
        .nav-dropdown::after {
          content: ''; position: absolute; top: 100%; left: 0; right: 0; height: 1.5rem;
        }
        .nav-dropdown-link {
          font-family: "Inter", sans-serif; font-weight: 500; font-size: 0.8rem;
          color: rgba(255,255,255,0.7); text-decoration: none; padding: 0.6rem 1.2rem;
          transition: all 0.2s; white-space: nowrap;
        }
        .nav-dropdown-link:hover {
          color: var(--primary); background: rgba(255,255,255,0.03);
        }

        .nav-inquire-btn {
            font-family: "Inter", sans-serif; font-weight: 600; font-size: 0.76rem;
            text-transform: uppercase; letter-spacing: 0.1em;
            padding: 0.55rem 1.4rem; border-radius: 9999px;
            border: 1.5px solid var(--primary); color: var(--primary);
            text-decoration: none; transition: all 0.2s;
        }
        .nav-inquire-btn:hover {
            background-color: var(--primary); color: #000;
        }
      `}</style>
    </>
  );
}
