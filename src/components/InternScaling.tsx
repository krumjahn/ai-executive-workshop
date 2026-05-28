import React from 'react';
import Section from './Section';
import { GraduationCap, TrendingUp, Users } from 'lucide-react';

const InternScaling: React.FC = () => {
  return (
    <Section 
      id="scaling" 
      title="Scale Beyond the Workshop with HKU AI Interns"
      bgOffWhite
    >
      <div className="scaling-content">
        <div className="scaling-header-grid">
          <div className="scaling-text">
            <p className="lead-text">
              The biggest challenge in AI is not building the first demo—it is finding the talent to scale and maintain implementation across the entire organisation. 
            </p>
            <p className="sub-text">
              Through our exclusive partnership with <strong>The University of Hong Kong (HKU)</strong>, we provide a direct bridge between your organisation and the next generation of AI adoption experts.
            </p>
          </div>
          <div className="partnership-badge">
            <div className="badge-inner">
              <GraduationCap size={40} className="badge-icon" />
              <div>
                <span className="badge-label">Official Partnership</span>
                <span className="badge-title">HKU AI Intern Program</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scaling-grid">
          <div className="card scale-card">
            <TrendingUp className="scale-icon" />
            <h3>Address "What Comes After"</h3>
            <p>Don't let your AI prototype gather dust. Hire an intern to dedicatedly scale your workshop use case into a full production-ready system.</p>
          </div>

          <div className="card scale-card">
            <Users className="scale-icon" />
            <h3>Pre-Trained Experts</h3>
            <p>Our HKU interns are not just students—they are trained AI adoption experts who have been mentored through our specific workflow and implementation methodology.</p>
          </div>

          <div className="card scale-card">
            <GraduationCap className="scale-icon" />
            <h3>Direct Recruitment Pipeline</h3>
            <p>Identify high-potential talent during the workshop and bring them into your transformation team to drive continuous AI innovation.</p>
          </div>
        </div>

        <div className="scaling-footer">
          <div className="footer-callout">
            <p><strong>Theory → Prototype → Scale.</strong> We provide the knowledge, the system, and the talent.</p>
          </div>
        </div>
      </div>

      <style>{`
        .scaling-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        .scaling-header-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 60px;
        }

        .lead-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-navy);
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .sub-text {
          font-size: 1.125rem;
          color: var(--secondary-charcoal);
          line-height: 1.6;
        }

        .partnership-badge {
          background: white;
          padding: 40px;
          border-radius: 24px;
          border: 2px solid var(--accent-blue);
          box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.1);
        }

        .badge-inner {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .badge-icon {
          color: var(--accent-blue);
        }

        .badge-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .badge-title {
          display: block;
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--primary-navy);
          line-height: 1.2;
        }

        .scaling-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .scale-card {
          padding: 32px;
          text-align: left;
        }

        .scale-icon {
          color: var(--accent-blue);
          width: 32px;
          height: 32px;
          margin-bottom: 24px;
        }

        .scale-card h3 {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--primary-navy);
        }

        .scale-card p {
          color: var(--secondary-charcoal);
          font-size: 1rem;
          line-height: 1.5;
        }

        .scaling-footer {
          text-align: center;
        }

        .footer-callout {
          display: inline-block;
          background: var(--primary-navy);
          color: white;
          padding: 20px 40px;
          border-radius: 100px;
          font-size: 1.125rem;
        }

        .footer-callout strong {
          color: var(--accent-blue-light);
        }

        @media (max-width: 992px) {
          .scaling-header-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .badge-inner {
            justify-content: center;
          }
          .scaling-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default InternScaling;
