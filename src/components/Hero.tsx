import React from 'react';
import { CheckCircle, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            <Users size={16} />
            <span>Powered by Gen Z Reverse Mentorship</span>
          </div>
          
          <h1 className="hero-title">
            Build an AI Workflow That Works <span className="text-accent">More Than Once</span>
          </h1>
          
          <p className="hero-description">
            Most AI demos are impressive the first time. This 4-week implementation lab helps your organisation build, test, and improve a working AI automation or AI agent system that is realistic for workplace use.
          </p>
          
          <p className="hero-support">
            Designed for Hong Kong executives, business leaders, HR teams, SMEs, NGOs, and transformation teams.
          </p>
          
          <div className="hero-ctas">
            <a href="#register" className="btn btn-primary btn-large">Register Interest</a>
            <a href="#programme" className="btn btn-secondary btn-large">See What You'll Build</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="timeline-card">
            <h3 className="card-title">The 4-Week Journey</h3>
            <div className="timeline-items">
              <div className="timeline-item">
                <div className="step-num">1</div>
                <div className="step-content">
                  <p className="step-week">Week 1</p>
                  <p className="step-desc">Choose Use Case</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="step-num">2</div>
                <div className="step-content">
                  <p className="step-week">Week 2</p>
                  <p className="step-desc">Build First Version</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="step-num">3</div>
                <div className="step-content">
                  <p className="step-week">Week 3</p>
                  <p className="step-desc">Test & Improve</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="step-num">4</div>
                <div className="step-content">
                  <p className="step-week">Week 4</p>
                  <p className="step-desc">Prepare for Rollout</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <CheckCircle size={16} className="icon-success" />
              <span>Ready for Production</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 160px 0 100px;
          background: radial-gradient(circle at top right, rgba(37, 99, 235, 0.05), transparent 40%),
                      radial-gradient(circle at bottom left, rgba(10, 25, 47, 0.03), transparent 40%);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .hero-content {
          max-width: 640px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37, 99, 235, 0.1);
          color: var(--accent-blue);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 24px;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .text-accent {
          color: var(--accent-blue);
        }

        .hero-description {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .hero-support {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
        }

        .timeline-card {
          background: white;
          padding: 32px;
          border-radius: 24px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid var(--border-color);
          width: 100%;
          max-width: 400px;
        }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 24px;
        }

        .timeline-item {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .step-num {
          width: 32px;
          height: 32px;
          background: var(--primary-navy);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .step-week {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .step-desc {
          font-weight: 600;
          color: var(--primary-navy);
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #059669;
          font-weight: 600;
          font-size: 0.875rem;
          background: #ecfdf5;
          padding: 12px;
          border-radius: 12px;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-title {
            font-size: 2.75rem;
          }
        }

        @media (max-width: 576px) {
          .hero-ctas {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
