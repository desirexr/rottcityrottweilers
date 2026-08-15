export default function Services() {
  const SERVICES = [
    {
      title: "Puppy Sales",
      description: "Sound structure, solid temperaments, and fully health-certified puppies bred for excellence.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
        </svg>
      )
    },
    {
      title: "Breeding Programs",
      description: "Carefully planned pairings focusing on preservation, drive, intelligence, and conformation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5z" />
        </svg>
      )
    },
    {
      title: "Stud Services",
      description: "World-class champion bloodline studs available to approved, health-tested females.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Obedience Training",
      description: "Foundation training programs focusing on socialization, manners, and working drive.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9.663 17h4.674M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" />
        </svg>
      )
    },
    {
      title: "Placement Assistance",
      description: "Personalized consultation to help you find the ideal match for guard, work, or family roles.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 4-4 4 4 0 0 0-4 4zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Lifetime Support",
      description: "24/7 dedicated advice, health resources, and breeding community support for all our puppy buyers.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" style={{ backgroundColor: "var(--background)", padding: "clamp(4rem,8vw,7rem) clamp(1.5rem,5vw,5rem)" }}>
      <style>{`
        .services-header { text-align: center; margin-bottom: 4rem; }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .service-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          padding: 2.25rem 2rem;
          transition: transform 0.25s, border-color 0.25s, background-color 0.25s;
        }
        .service-card:hover {
          transform: translateY(-4px);
          border-color: rgba(195, 152, 67, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }
        .service-icon {
          width: 3rem;
          height: 3rem;
          border-radius: 8px;
          background: rgba(195, 152, 67, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: background-color 0.25s, color 0.25s;
        }
        .service-card:hover .service-icon {
          background: var(--primary);
          color: #fff;
        }
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr; }
          .service-card { padding: 1.75rem 1.5rem; }
        }
      `}</style>

      <div className="services-header">
        <p style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: '0.72rem',
          textTransform: 'uppercase',
          letterSpacing: '0.25em',
          color: 'var(--primary)',
          marginBottom: '0.75rem'
        }}>Our Services</p>
        <h2 style={{
          fontFamily: '"Cinzel", serif',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
          color: '#FFFFFF',
          margin: 0
        }}>Excellence Beyond Breeding</h2>
      </div>

      <div className="services-grid">
        {SERVICES.map((s, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">
              {s.icon}
            </div>
            <h3 style={{
              fontFamily: '"Cinzel", serif',
              fontWeight: 700,
              fontSize: '1.15rem',
              color: '#FFFFFF',
              marginBottom: '0.75rem'
            }}>{s.title}</h3>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: '0.88rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.6)',
              margin: 0
            }}>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
