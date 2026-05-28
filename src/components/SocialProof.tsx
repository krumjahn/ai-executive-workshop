import React from 'react';
import Section from './Section';
import { Play, ExternalLink } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <Section 
      id="social-proof" 
      title="Built on Proven Hands-On AI Training"
      centered
      bgOffWhite
    >
      <div className="social-proof-content">
        <p className="proof-lead">
          This programme builds on the success of our previous AI in Action Bootcamp, where 40 professionals joined a practical, hands-on AI training experience focused on real workflows, practical tools, and implementation.
        </p>

        <div className="proof-placeholders">
          <div className="placeholder-row">
            <div className="placeholder-box large">
              <span>Workshop Photos Placeholder</span>
            </div>
            <div className="placeholder-col">
              <div className="placeholder-box small">
                <span>Testimonial Placeholder 1</span>
              </div>
              <div className="placeholder-box small">
                <span>Testimonial Placeholder 2</span>
              </div>
            </div>
          </div>
          
          <div className="placeholder-row">
            <div className="placeholder-box medium">
              <Play size={32} />
              <span>YouTube Channel Screenshots</span>
            </div>
            <div className="placeholder-box medium">
              <span>Organisation Logos Placeholder</span>
            </div>
          </div>
        </div>

        <div className="instructor-card card">
          <div className="instructor-image">
            {/* Placeholder for Keith's image */}
            <div className="img-placeholder">KR</div>
          </div>
          <div className="instructor-info">
            <h3 className="instructor-name">Keith Rumjahn</h3>
            <p className="instructor-title">AI Educator & Workflow Builder</p>
            <p className="instructor-bio">
              Keith is an AI educator, workflow builder, and creator of practical AI training content with hundreds of thousands of YouTube views. He specialises in helping business professionals move from AI curiosity to practical implementation.
            </p>
            <div className="instructor-links">
              <a href="#" className="link-item"><Play size={16} /> YouTube</a>
              <a href="#" className="link-item"><ExternalLink size={16} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .social-proof-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .proof-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 60px;
          text-align: center;
          line-height: 1.6;
        }

        .proof-placeholders {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 80px;
        }

        .placeholder-row {
          display: flex;
          gap: 20px;
        }

        .placeholder-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .placeholder-box {
          background: #E2E8F0;
          border: 2px dashed #CBD5E1;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #64748B;
          font-weight: 600;
          text-align: center;
          padding: 40px;
          gap: 12px;
        }

        .placeholder-box.large { flex: 2; height: 320px; }
        .placeholder-box.medium { flex: 1; height: 200px; }
        .placeholder-box.small { height: 150px; }

        .instructor-card {
          display: flex;
          gap: 40px;
          padding: 48px;
          align-items: center;
          text-align: left;
          background: white;
        }

        .instructor-image {
          flex-shrink: 0;
        }

        .img-placeholder {
          width: 160px;
          height: 160px;
          background: var(--primary-navy);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 800;
        }

        .instructor-name {
          font-size: 1.75rem;
          margin-bottom: 4px;
        }

        .instructor-title {
          color: var(--accent-blue);
          font-weight: 700;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }

        .instructor-bio {
          font-size: 1.1rem;
          color: var(--secondary-charcoal);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .instructor-links {
          display: flex;
          gap: 20px;
        }

        .link-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--primary-navy);
          font-size: 0.9rem;
        }

        .link-item:hover {
          color: var(--accent-blue);
        }

        @media (max-width: 768px) {
          .placeholder-row {
            flex-direction: column;
          }
          .instructor-card {
            flex-direction: column;
            padding: 32px;
            text-align: center;
          }
          .instructor-links {
            justify-content: center;
          }
        }
      `}</style>
    </Section>
  );
};

export default SocialProof;
