import { Coffee, Camera, Sunset, Sparkles, Map, Bus } from 'lucide-react';

interface DayProps {
  day: string;
  title: string;
  activities: {
    time: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const Day: React.FC<DayProps> = ({ day, title, activities }) => (
  <div className="day-card">
    <div className="day-header">
      <span className="day-number">{day}</span>
      <h3>{title}</h3>
    </div>
    <div className="activities">
      {activities.map((activity, index) => (
        <div key={index} className="activity">
          <div className="activity-icon">{activity.icon}</div>
          <div className="activity-content">
            <span className="time">{activity.time}</span>
            <p>{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Itinerary: React.FC = () => {
  const schedule = [
    {
      day: "Day 01",
      title: "Da Nang Arrival & Exploration",
      activities: [
        { time: "Morning", description: "Arrive at Da Nang Airport & check into beach hotel.", icon: <Bus size={18} /> },
        { time: "Afternoon", description: "Visit Son Tra Peninsula & Lady Buddha.", icon: <Map size={18} /> },
        { time: "Evening", description: "Dragon Bridge Fire Show & Night Market.", icon: <Camera size={18} /> },
      ],
    },
    {
      day: "Day 02",
      title: "Ba Na Hills Retreat",
      activities: [
        { time: "Morning", description: "Cable Car to Ba Na Hills.", icon: <Sparkles size={18} /> },
        { time: "Afternoon", description: "Check into Mercure French Village & Fantasy Park.", icon: <Coffee size={18} /> },
        { time: "Evening", description: "Exclusive evening in the French Village.", icon: <Sunset size={18} /> },
      ],
    },
    {
      day: "Day 03",
      title: "Golden Bridge & Hoi An",
      activities: [
        { time: "06:30 AM", description: "Sunrise at Golden Bridge (Crowd-free).", icon: <Camera size={18} /> },
        { time: "Afternoon", description: "Transfer to Hoi An via Marble Mountains.", icon: <Bus size={18} /> },
        { time: "Evening", description: "Hoi An Ancient Town & Lantern Boat Ride.", icon: <Sparkles size={18} /> },
      ],
    },
    {
      day: "Day 04",
      title: "Culture & Departure",
      activities: [
        { time: "Morning", description: "Cam Thanh Coconut Forest Basket Boat.", icon: <Map size={18} /> },
        { time: "Afternoon", description: "Last minute shopping & Airport transfer.", icon: <Bus size={18} /> },
      ],
    },
  ];

  return (
    <section id="itinerary" className="itinerary">
      <div className="container">
        <h2 className="section-title">The Journey</h2>
        <div className="itinerary-grid">
          {schedule.map((item, index) => (
            <Day key={index} {...item} />
          ))}
        </div>
      </div>
      <style>{`
        .itinerary {
          background-color: var(--bg-secondary);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .itinerary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .day-card {
          background: var(--bg-primary);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid var(--border);
          transition: transform 0.3s ease;
        }
        .day-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
        }
        .day-header {
          margin-bottom: 2rem;
        }
        .day-number {
          display: block;
          color: var(--accent);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .day-header h3 {
          font-size: 1.25rem;
        }
        .activities {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .activity {
          display: flex;
          gap: 1rem;
        }
        .activity-icon {
          color: var(--accent);
          padding-top: 0.25rem;
        }
        .time {
          font-size: 0.75rem;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
        }
        .activity-content p {
          font-size: 0.875rem;
          margin: 0;
          color: var(--text-primary);
        }
      `}</style>
    </section>
  );
};

export default Itinerary;
