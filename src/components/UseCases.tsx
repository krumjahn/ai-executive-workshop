import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';

const UseCases: React.FC = () => {
  const cases = [
    "HR onboarding assistant",
    "Employee policy Q&A workflow",
    "Customer enquiry response system",
    "Marketing content repurposing workflow",
    "Meeting summary and action-item automation",
    "Internal reporting assistant",
    "Document intake and classification workflow",
    "Operations request triage system",
    "Sales lead summary workflow",
    "Knowledge base assistant"
  ];

  return (
    <Section 
      id="use-cases" 
      title="What You Could Build"
      centered
    >
      <div className="use-cases-grid">
        {cases.map((text, index) => (
          <div key={index} className="use-case-item">
            <div className="check-icon">
              <Check size={18} />
            </div>
            <span>{text}</span>
          </div>
        ))}
      </div>

      <style>{`
        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .use-case-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: var(--bg-off-white);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          font-weight: 600;
          color: var(--primary-navy);
          transition: all 0.2s ease;
        }

        .use-case-item:hover {
          background: white;
          border-color: var(--accent-blue);
          transform: translateX(8px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .check-icon {
          width: 32px;
          height: 32px;
          background: var(--accent-blue);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default UseCases;
