import React from 'react';
import Section from './Section';
import { MessageCircle, Bug, Search, FileUp, Zap, HelpCircle } from 'lucide-react';

const Support: React.FC = () => {
  const supportItems = [
    { icon: <Search size={20} />, text: "Clarify workflow" },
    { icon: <FileUp size={20} />, text: "Prepare materials" },
    { icon: <Zap size={20} />, text: "Test prompts" },
    { icon: <Bug size={20} />, text: "Debug simple issues" },
    { icon: <HelpCircle size={20} />, text: "Improve outputs" },
    { icon: <Search size={20} />, text: "Identify failure patterns" },
    { icon: <MessageCircle size={20} />, text: "Prepare for the next session" }
  ];

  return (
    <Section 
      id="support" 
      title="Implementation Does Not Only Happen in Class"
      centered
    >
      <div className="support-content">
        <p className="support-lead">
          A major part of the programme happens between sessions. Participants will have homework because real implementation requires testing, materials, and iteration. But they are not expected to do it alone. Trained Gen Z reverse mentors provide guidance through a support channel such as WhatsApp or another agreed platform.
        </p>

        <div className="support-grid">
          {supportItems.map((item, index) => (
            <div key={index} className="support-item">
              <div className="support-icon">{item.icon}</div>
              <span className="support-text">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <MessageCircle className="banner-icon" />
          <p>Direct support from trained Gen Z reverse mentors between every session.</p>
        </div>
      </div>

      <style>{`
        .support-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .support-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 60px;
          text-align: center;
          line-height: 1.6;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 60px;
        }

        .support-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          transition: all 0.2s ease;
        }

        .support-item:hover {
          border-color: var(--accent-blue);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .support-icon {
          color: var(--accent-blue);
          flex-shrink: 0;
        }

        .support-text {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary-navy);
        }

        .cta-banner {
          background: var(--primary-navy);
          color: white;
          padding: 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          text-align: center;
        }

        .banner-icon {
          color: var(--accent-blue-light);
        }

        .cta-banner p {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .support-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .support-grid {
            grid-template-columns: 1fr;
          }
          .cta-banner {
            flex-direction: column;
          }
        }
      `}</style>
    </Section>
  );
};

export default Support;
