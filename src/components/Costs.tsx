import React from 'react';
import { Info } from 'lucide-react';

const Costs: React.FC = () => {
  const expenses = [
    { category: "Accommodation", detail: "2 nights Da Nang/Hoi An + 1 night Ba Na Hills", cost: "28,000 THB" },
    { category: "Ba Na Hills Tickets", detail: "Cable car + Entry for 4 persons", cost: "5,200 THB" },
    { category: "Transportation", detail: "Private car / Grab for 4 days", cost: "7,000 THB" },
    { category: "Meals", detail: "Street food & local restaurants", cost: "14,000 THB" },
    { category: "Activities", detail: "Basket boat, Marble Mt, Lantern boat", cost: "3,500 THB" },
  ];

  const total = "57,700";

  return (
    <section id="costs" className="costs">
      <div className="container">
        <h2 className="section-title">Estimated Costs</h2>
        <div className="costs-container">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Details</th>
                  <th>Total (4 Pax)</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index}>
                    <td className="category">{expense.category}</td>
                    <td className="detail">{expense.detail}</td>
                    <td className="cost">{expense.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>Grand Total</td>
                  <td className="total">{`${total} THB`}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="cost-info">
            <Info size={20} className="info-icon" />
            <p>Prices are estimates based on 2026 projections and may vary depending on booking time and preferences.</p>
          </div>
        </div>
      </div>
      <style>{`
        .costs {
          background-color: var(--bg-primary);
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .costs-container {
          max-width: 900px;
          margin: 0 auto;
        }
        .table-wrapper {
          overflow-x: auto;
          background: var(--bg-secondary);
          border-radius: 1rem;
          border: 1px solid var(--border);
          padding: 1rem;
          margin-bottom: 2rem;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }
        th, td {
          padding: 1.25rem 1rem;
          border-bottom: 1px solid var(--border);
        }
        th {
          color: var(--text-secondary);
          font-size: 0.875rem;
          text-transform: uppercase;
          font-weight: 600;
        }
        .category {
          color: var(--accent);
          font-weight: 500;
        }
        .detail {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }
        .cost {
          font-weight: 700;
          color: var(--text-primary);
        }
        tfoot td {
          border-bottom: none;
          font-size: 1.25rem;
          font-weight: 700;
          padding-top: 2rem;
        }
        .total {
          color: var(--accent);
        }
        .cost-info {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: rgba(56, 189, 248, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border: 1px solid rgba(56, 189, 248, 0.1);
        }
        .info-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .cost-info p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
};

export default Costs;
