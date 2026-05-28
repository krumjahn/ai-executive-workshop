import React from 'react';
import Section from './Section';
import { User, Users, Landmark, Building2, Briefcase } from 'lucide-react';

const Audience: React.FC = () => {
  const audiences = [
    { icon: <Briefcase />, title: "Executives and senior managers" },
    { icon: <Users />, title: "HR leaders and future-of-work teams" },
    { icon: <Building2 />, title: "SME owners" },
    { icon: <Landmark />, title: "NGO leaders" },
    { icon: <Briefcase />, title: "Business unit heads" },
    { icon: <Zap />, title: "Transformation teams" },
    { icon: <User />, title: "Corporate professionals responsible for productivity" }
  ];

  return (
    <Section 
      id="audience" 
      title="Who This Is For"
      centered
      bgOffWhite
    >
      <div className="audience-content">
        <div className="audience-grid">
          {audiences.map((item, index) => (
            <div key={index} className="card audience-card">
              <div className="audience-icon">{item.icon}</div>
              <p className="audience-title">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="no-coding-box">
          <p>No coding background is required. Participants should bring curiosity, a real business process, and willingness to build.</p>
        </div>
      </div>

      <style>{`
        .audience-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .audience-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background: white;
        }

        .audience-icon {
          color: var(--accent-blue);
          margin-bottom: 16px;
        }

        .audience-title {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--primary-navy);
          line-height: 1.3;
        }

        .no-coding-box {
          text-align: center;
          padding: 24px;
          background: rgba(37, 99, 235, 0.05);
          border-radius: 12px;
          font-weight: 500;
          color: var(--secondary-charcoal);
        }

        @media (max-width: 1200px) {
          .audience-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .audience-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .audience-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

const Zap: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export default Audience;
