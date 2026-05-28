import React from 'react';
import Section from './Section';
import { Briefcase, Zap } from 'lucide-react';
import genZTAs from '../assets/workshop/gen-z-tas.jpg';

const Opportunity: React.FC = () => {
  return (
    <Section 
      id="reverse-mentorship" 
      title="What If Gen Z Could Help Organisations Implement AI?"
      bgOffWhite
    >
      <div className="opportunity-content">
        <div className="opportunity-header-grid">
          <div className="opportunity-text">
            <p className="lead-text">
              At the same time that AI is reducing traditional entry-level opportunities, many Gen Z students and fresh graduates are already AI-native. They are comfortable experimenting with new tools, building workflows, and learning fast. This workshop channels that energy into real organisational AI transformation.
            </p>
          </div>
          <div className="opportunity-image-wrapper">
            <img src={genZTAs} alt="Gen Z Reverse Mentors" className="tas-img" />
            <div className="img-caption">Our trained Gen Z Reverse Mentors</div>
          </div>
        </div>

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
          max-width: 1100px;
          margin: 0 auto;
        }

        .opportunity-header-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        .lead-text {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          line-height: 1.6;
          margin: 0;
        }

        .opportunity-image-wrapper {
          position: relative;
        }

        .tas-img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .img-caption {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(10, 25, 47, 0.8);
          color: white;
          padding: 8px 16px;
          border-radius: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          backdrop-filter: blur(4px);
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

        @media (max-width: 992px) {
          .opportunity-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }
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
