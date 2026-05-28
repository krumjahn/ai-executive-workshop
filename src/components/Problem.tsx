import React from 'react';
import Section from './Section';
import { AlertCircle, Zap, ShieldCheck } from 'lucide-react';

const Problem: React.FC = () => {
  const painPoints = [
    {
      icon: <Zap className="icon-blue" />,
      title: "Inspiration Without Implementation",
      description: "AI training often creates a 'wow' moment, but fails to provide the practical steps needed to integrate AI into daily operations."
    },
    {
      icon: <AlertCircle className="icon-blue" />,
      title: "The 'Demo' Trap",
      description: "AI agents look impressive in a controlled demo, but often break down when faced with real-world edge cases, inconsistent data, or repeated use."
    },
    {
      icon: <ShieldCheck className="icon-blue" />,
      title: "Reliability & Governance Gap",
      description: "Organisations need systems that are reliable, governed by humans, and follow strict approval points—not black-box solutions."
    }
  ];

  return (
    <Section 
      id="problem" 
      title="The First Demo Is Easy. Production Is the Hard Part."
      centered
    >
      <div className="problem-content">
        <p className="problem-text">
          Many AI agent demos create an immediate wow factor. But real business implementation is different. What happens when the workflow runs 10 times, 100 times, or 1,000 times? That is when hallucinations, inconsistent outputs, missing data, edge cases, and governance issues start to appear.
        </p>

        <div className="quote-card">
          <p className="quote-text">
            "The last thing you want is an AI demo that works once in class, then fails when your CEO sees it."
          </p>
        </div>

        <div className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div key={index} className="card pain-card">
              <div className="pain-icon-wrapper">{point.icon}</div>
              <h3 className="pain-title">{point.title}</h3>
              <p className="pain-desc">{point.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .problem-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .problem-text {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 40px;
          text-align: center;
          line-height: 1.6;
        }

        .quote-card {
          background: var(--primary-navy);
          color: white;
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 60px;
          position: relative;
          text-align: center;
        }

        .quote-text {
          font-size: 1.5rem;
          font-weight: 600;
          font-style: italic;
          line-height: 1.4;
        }

        .pain-points-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .pain-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .pain-icon-wrapper {
          margin-bottom: 20px;
          background: rgba(37, 99, 235, 0.1);
          padding: 12px;
          border-radius: 12px;
        }

        .icon-blue {
          color: var(--accent-blue);
        }

        .pain-title {
          font-size: 1.25rem;
          margin-bottom: 12px;
          color: var(--primary-navy);
        }

        .pain-desc {
          color: var(--text-muted);
          font-size: 1rem;
        }

        @media (max-width: 992px) {
          .pain-points-grid {
            grid-template-columns: 1fr;
          }
          .quote-text {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Problem;
