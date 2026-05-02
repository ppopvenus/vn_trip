import { Plane, MapPin, Calendar, Users } from 'lucide-react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="badge">
            <Plane size={16} />
            <span>Summer 2026 Adventure</span>
          </div>
          <h1>Viatnam Trip <br /><span>by Pop Venus</span></h1>
          <p>4 Days 3 Nights in Da Nang & Hoi An</p>
          
          <div className="hero-stats">
            <div className="stat">
              <Calendar size={20} />
              <span>4 Days</span>
            </div>
            <div className="stat">
              <MapPin size={20} />
              <span>3 Locations</span>
            </div>
            <div className="stat">
              <Users size={20} />
              <span>4 People</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .hero {
          height: 80vh;
          display: flex;
          align-items: center;
          background: linear-gradient(to bottom, rgba(15, 23, 42, 0.8), var(--bg-primary)),
                      url(${heroImage}) no-repeat center/cover;
          position: relative;
          overflow: hidden;
        }
        .hero-content {
          max-width: 800px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(56, 189, 248, 0.1);
          color: var(--accent);
          padding: 0.5rem 1rem;
          border-radius: 99px;
          font-size: 0.875rem;
          margin-bottom: 2rem;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }
        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        h1 span {
          color: var(--accent);
        }
        p {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .hero-stats {
          display: flex;
          gap: 2rem;
        }
        .stat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
        }
        .stat span {
          font-size: 1rem;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default Hero;
