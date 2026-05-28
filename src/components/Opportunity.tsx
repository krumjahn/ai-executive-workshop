import React from 'react';
import Section from './Section';
import { Briefcase, Zap } from 'lucide-react';

const Opportunity: React.FC = () => {
  return (
    <Section 
      id="reverse-mentorship" 
      title="What If Gen Z Could Help Organisations Implement AI?"
      bgOffWhite
    >
      <div className="opportunity-content">
        <p className="lead-text">
          At the same time that AI is reducing traditional entry-level opportunities, many Gen Z students and fresh graduates are already AI-native. They are comfortable experimenting with new tools, building workflows, and learning fast. This workshop channels that energy into real organisational AI transformation.
        </p>

        <div className="comparison-grid">
          <div className="card mentor-card">
            <div className="card-header">
              <Briefcase className="icon-navy" />
              <h3>Executives bring:</h3>
            </div>
            <ul className="mentor-list">
              <li>Business context</li>
              <li>Industry judgment</li>
              <li>Customer knowledge</li>
              <li>Risk awareness</li>
              <li>Organisational priorities</li>
            </ul>
          </div>

          <div className="card mentor-card accent-card">
            <div className="card-header">
              <Zap className="icon-blue" />
              <h3>Gen Z reverse mentors bring:</h3>
            </div>
            <ul className="mentor-list">
              <li>AI fluency</li>
              <li>Rapid experimentation</li>
              <li>Workflow prototyping</li>
              <li>Tool confidence</li>
              <li>Implementation energy</li>
            </ul>
          </div>
        </div>

        <div className="bridge-card">
          <p className="bridge-text">
            Business Context + AI Fluency = <strong>Practical Implementation</strong>
          </p>
        </div>
      </div>

      <style>{`
        .opportunity-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .lead-text {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 48px;
          line-height: 1.6;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
        }

        .mentor-card {
          padding: 32px;
        }

        .accent-card {
          border-color: var(--accent-blue);
          background: rgba(37, 99, 235, 0.02);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .icon-navy {
          color: var(--primary-navy);
        }

        .icon-blue {
          color: var(--accent-blue);
        }

        .mentor-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mentor-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          color: var(--secondary-charcoal);
        }

        .mentor-list li::before {
          content: "";
          width: 6px;
          height: 6px;
          background: var(--accent-blue);
          border-radius: 50%;
        }

        .bridge-card {
          background: var(--primary-navy);
          color: white;
          padding: 24px;
          border-radius: 16px;
          text-align: center;
        }

        .bridge-text {
          font-size: 1.5rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          .bridge-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Opportunity;
