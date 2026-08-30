import kingRoshi from '../assets/dog-king-roshi.jpg';
import enzo     from '../assets/dog-enzo.jpg';
import coco     from '../assets/dog-coco.jpg';
import biggie   from '../assets/dog-biggie.jpg';
import melo     from '../assets/dog-melo.jpg';
import melo2    from '../assets/dog-melo-2.jpg';
import melo3    from '../assets/dog-melo-3.jpg';
import kingCreed from '../assets/dog-king-creed.jpg';

export const DOGS = [
  {
    id: 'king-roshi',
    name: 'King Roshi',
    bloodline: 'Serbian',
    gender: 'Male',
    weight: '120 lbs',
    description: 'Large, powerful male with excellent structure, dark pigmentation, and strong working line instincts.',
    temperament: ['Dominant', 'Protective', 'Confident', 'Highly Intelligent'],
    flag: '🇷🇸',
    img: kingRoshi,
  },
  {
    id: 'enzo',
    name: 'Enzo',
    bloodline: 'Serbian',
    gender: 'Male',
    weight: '115 lbs',
    description: 'Strong male with excellent genetics and balanced temperament.',
    temperament: ['Confident', 'Loyal', 'Family-Oriented'],
    flag: '🇷🇸',
    img: enzo,
  },
  {
    id: 'coco',
    name: 'Coco',
    bloodline: 'German',
    gender: 'Female',
    weight: '85 lbs',
    description: 'Athletic female with excellent prey drive, protective instinct, confidence, and structure.',
    temperament: ['Protective', 'Athletic', 'Intelligent', 'Dominant'],
    flag: '🇩🇪',
    img: coco,
  },
  {
    id: 'biggie',
    name: 'Biggie',
    bloodline: 'German | Von Ruelmann × Crossener Ranch',
    extra: 'Son of Jumper Von Crossener Ranch',
    gender: 'Male',
    weight: '120 lbs',
    description: 'Proven stud known for producing exceptional offspring with excellent pigmentation and structure.',
    temperament: ['Confident', 'Stable', 'Protective'],
    flag: '🇩🇪',
    img: biggie,
  },
  {
    id: 'melo',
    name: 'Melo',
    bloodline: 'German | Von Ruelmann × Crossener Ranch',
    extra: 'Son of Biggie · Grandson of Jumper Von Crossener Ranch',
    gender: 'Male',
    weight: '100 lbs',
    age: '2 Years Old',
    temperament: ['Confident', 'Stable', 'Athletic'],
    flag: '🇩🇪',
    img: melo,
    photos: [melo2, melo3],
  },
  {
    id: 'king-creed',
    name: 'King Creed',
    bloodline: 'German',
    gender: 'Male',
    description: 'Dark mahogany markings, athletic build. Highly protective and dominant with a high prey drive.',
    temperament: ['Protective', 'Dominant', 'Athletic', 'High Prey Drive'],
    flag: '🇩🇪',
    img: kingCreed,
  },
];

export default function Dogs({ onViewProfile }) {
  return (
    <section id="dogs" style={{ backgroundColor: 'var(--background)', padding: 'clamp(4rem,8vw,7rem) 0', overflowX: 'hidden' }}>
      <style>{`
        /* ── Dogs section ─────────────────────────────── */
        .dogs-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 clamp(1.5rem, 5vw, 5rem);
        }

        /* Mobile-first: 1 column */
        .dogs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 0 clamp(1rem, 5vw, 4rem);
          max-width: 1500px;
          margin: 0 auto;
        }

        /* Tablet: 2 columns */
        @media (min-width: 600px) {
          .dogs-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* Desktop: 3 columns */
        @media (min-width: 960px) {
          .dogs-grid { grid-template-columns: repeat(3, 1fr); }
        }

        /* Wide: all 5 */
        @media (min-width: 1280px) {
          .dogs-grid { grid-template-columns: repeat(5, 1fr); }
        }

        /* Card */
        .dog-card {
          position: relative;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background: #111;
          box-shadow: 0 4px 24px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .dog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(195,152,67,0.35);
        }

        /* The poster image fills the card entirely */
        .dog-card-img {
          width: 100%;
          display: block;
          height: auto;
          object-fit: contain;
          transition: transform 0.4s ease;
        }
        .dog-card:hover .dog-card-img {
          transform: scale(1.03);
        }

        /* Subtle gradient overlay at the bottom for the info strip */
        .dog-card-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 1.2rem 1rem 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%);
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .dog-view-btn {
          display: block;
          width: 100%;
          padding: 0.65rem 1rem;
          border: 1.5px solid rgba(195,152,67,0.7);
          border-radius: 8px;
          background: rgba(0,0,0,0.4);
          color: var(--primary);
          font-family: "Inter", sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          text-align: center;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
          backdrop-filter: blur(4px);
          outline: none;
        }
        .dog-view-btn:hover {
          background: var(--primary);
          color: #000;
          border-color: var(--primary);
        }
      `}</style>

      <div className="dogs-header">
        <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--primary)', marginBottom: '0.75rem' }}>
          Meet Our Dogs
        </p>
        <h2 style={{ fontFamily: '"Cinzel", serif', fontWeight: 700, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: '#FFFFFF', margin: 0 }}>
          The Foundation of Our Legacy
        </h2>
      </div>

      <div className="dogs-grid">
        {DOGS.map(dog => (
          <div key={dog.id} className="dog-card">
            <img
              src={dog.img}
              alt={dog.name}
              className="dog-card-img"
              loading="lazy"
            />
            <div className="dog-card-overlay">
              <button
                className="dog-view-btn"
                onClick={() => onViewProfile(dog)}
              >
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

