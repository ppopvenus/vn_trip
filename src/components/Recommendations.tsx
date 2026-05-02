import React from 'react';
import { Navigation } from 'lucide-react';

const locations = [
  {
    name: "Golden Bridge",
    location: "Ba Na Hills, Da Nang",
    description: "The iconic bridge held by giant hands. Best visited at 6:30 AM for overnight guests to avoid the crowds.",
    howToGet: "Cable Car from the foot of Ba Na Hills.",
    image: "https://images.unsplash.com/photo-1582234371533-300408107567?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Hoi An Ancient Town",
    location: "Quang Nam Province",
    description: "A well-preserved example of a South-East Asian trading port dating from the 15th to the 19th century.",
    howToGet: "Private car or Grab from Da Nang (approx 45 mins).",
    image: "https://images.unsplash.com/photo-1599708145759-96695349e38e?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Dragon Bridge",
    location: "Da Nang City Center",
    description: "A bridge shaped like a dragon that breathes fire and water on weekend nights (Fri-Sun at 9 PM).",
    howToGet: "Walk or Grab from any hotel in Da Nang.",
    image: "https://images.unsplash.com/photo-1559592442-7e18259f63cc?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Lady Buddha",
    location: "Son Tra Peninsula",
    description: "The tallest statue of Avalokitesvara in Vietnam, overlooking the beautiful Da Nang bay.",
    howToGet: "Private car or motorbike up the coastal road.",
    image: "https://images.unsplash.com/photo-1598533221437-1262d08a0d4c?auto=format&fit=crop&q=80&w=800",
  },
];

const Recommendations: React.FC = () => {
  return (
    <section id="recommendations" className="recommendations">
      <div className="container">
        <h2 className="section-title">Must-Visit Places</h2>
        <div className="recommendation-grid">
          {locations.map((loc, index) => (
            <div key={index} className="loc-card">
              <div className="loc-image">
                <img src={loc.image} alt={loc.name} />
                <div className="loc-badge">{loc.location}</div>
              </div>
              <div className="loc-content">
                <h3>{loc.name}</h3>
                <p className="loc-desc">{loc.description}</p>
                <div className="loc-transport">
                  <Navigation size={14} className="nav-icon" />
                  <span>{loc.howToGet}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .recommendations {
          background-color: var(--bg-secondary);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .recommendation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
        }
        .loc-card {
          background: var(--bg-primary);
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .loc-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5);
        }
        .loc-image {
          position: relative;
          height: 200px;
        }
        .loc-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .loc-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(4px);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--accent);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .loc-content {
          padding: 1.5rem;
        }
        .loc-content h3 {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }
        .loc-desc {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .loc-transport {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
          color: var(--accent);
          font-size: 0.75rem;
        }
        .nav-icon {
          flex-shrink: 0;
        }
      `}</style>
    </section>
  );
};

export default Recommendations;
