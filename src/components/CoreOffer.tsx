import React from 'react';
import Section from './Section';
import { FileText, Map, Box, CheckSquare, Shield, Presentation, Calendar } from 'lucide-react';

const CoreOffer: React.FC = () => {
  const deliverables = [
    { icon: <FileText size={20} />, title: "AI Implementation Use Case Canvas" },
    { icon: <Map size={20} />, title: "Workflow Blueprint" },
    { icon: <Box size={20} />, title: "Working Prototype Version 1" },
    { icon: <Box size={20} />, title: "Improved Prototype Version 2" },
    { icon: <CheckSquare size={20} />, title: "Reliability Checklist" },
    { icon: <Shield size={20} />, title: "Governance Checklist" },
    { icon: <Calendar size={20} />, title: "30-Day Rollout Plan" },
    { icon: <Presentation size={20} />, title: "Final Internal Presentation" }
  ];

  return (
    <Section 
      id="core-offer" 
      title="Bring One Real Workflow. Leave With One Working System."
      centered
    >
      <div className="core-offer-content">
        <p className="offer-lead">
          This is not another AI theory course. Participants start hands-on work in the first session. By the second session, each team should already have a working first version of an automation or AI agent. The rest of the programme focuses on testing, improving, adding human approval, and preparing the workflow for real organisational use.
        </p>

        <h3 className="grid-title">What You'll Take Home:</h3>
        <div className="deliverables-grid">
          {deliverables.map((item, index) => (
            <div key={index} className="deliverable-item">
              <div className="icon-box">{item.icon}</div>
              <span className="deliverable-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .core-offer-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .offer-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 60px;
          text-align: center;
          line-height: 1.6;
        }

        .grid-title {
          font-size: 1.5rem;
          margin-bottom: 32px;
          text-align: center;
          color: var(--primary-navy);
        }

        .deliverables-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .deliverable-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px;
          background: var(--bg-off-white);
          border-radius: 16px;
          border: 1px solid var(--border-color);
          transition: all 0.2s ease;
        }

        .deliverable-item:hover {
          background: white;
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: var(--accent-blue);
        }

        .icon-box {
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          color: var(--accent-blue);
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .deliverable-title {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--primary-navy);
          line-height: 1.3;
        }

        @media (max-width: 992px) {
          .deliverables-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .deliverables-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default CoreOffer;
