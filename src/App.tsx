import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Recommendations from './components/Recommendations';
import Costs from './components/Costs';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Itinerary />
      <Recommendations />
      <Costs />
      
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Viatnam Trip by Pop Venus. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        .footer {
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid var(--border);
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
}

export default App;
