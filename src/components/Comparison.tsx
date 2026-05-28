import React from 'react';
import Section from './Section';
import { Settings, MessageSquare, Bot, UserCheck } from 'lucide-react';

const Comparison: React.FC = () => {
  const comparisons = [
    {
      icon: <Settings size={24} />,
      title: "Automation",
      bestFor: "Repeatable, rules-based processes.",
      strength: "Reliable and measurable.",
      risk: "Lower."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AI Assistant",
      bestFor: "Drafting, summarising, classifying, analysing.",
      strength: "Productivity and speed.",
      risk: "Medium."
    },
    {
      icon: <Bot size={24} />,
      title: "AI Agent",
      bestFor: "Multi-step workflows that use tools and coordinate actions.",
      strength: "Powerful and flexible.",
      risk: "Higher."
    },
    {
      icon: <UserCheck size={24} />,
      title: "Human Approval",
      bestFor: "Sensitive decisions, external communication, and accountability.",
      strength: "Governance and trust.",
      risk: "Reduces overall risk."
    }
  ];

  return (
    <Section 
      id="comparison" 
      title="Automation, AI Assistants, and AI Agents Are Not the Same Thing"
      centered
      bgOffWhite
    >
      <div className="comparison-content">
        <p className="comparison-lead">
          Executives need to know when to automate, when to use AI, when to use agents, and when humans must remain in control. Most organisations do not need fully autonomous agents for every process. They need reliable automation, AI intelligence, and human oversight.
        </p>

        <div className="comparison-grid">
          {comparisons.map((item, index) => (
            <div key={index} className="card comparison-card">
              <div className="comparison-icon">{item.icon}</div>
              <h3 className="comparison-title">{item.title}</h3>
              <div className="comparison-details">
                <p><strong>Best for:</strong> {item.bestFor}</p>
                <p><strong>Strength:</strong> {item.strength}</p>
                <p><strong>Risk:</strong> {item.risk}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="formula-box">
          <p className="formula-text">
            “Automation for reliability. AI for intelligence. Human approval for governance. Gen Z reverse mentors for implementation.”
          </p>
        </div>
      </div>

      <style>{`
        .comparison-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .comparison-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 48px;
          text-align: center;
          line-height: 1.6;
        }

        .comparison-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }

        .comparison-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .comparison-icon {
          color: var(--accent-blue);
          margin-bottom: 16px;
        }

        .comparison-title {
          font-size: 1.25rem;
          margin-bottom: 16px;
          color: var(--primary-navy);
        }

        .comparison-details p {
          font-size: 0.9rem;
          margin-bottom: 12px;
          line-height: 1.4;
          color: var(--secondary-charcoal);
        }

        .comparison-details strong {
          color: var(--primary-navy);
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          margin-bottom: 4px;
          letter-spacing: 0.05em;
        }

        .formula-box {
          background: var(--bg-white);
          border: 2px dashed var(--accent-blue);
          padding: 32px;
          border-radius: 20px;
          text-align: center;
        }

        .formula-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-navy);
          line-height: 1.4;
        }

        @media (max-width: 1200px) {
          .comparison-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 576px) {
          .comparison-grid {
            grid-template-columns: 1fr;
          }
          .formula-text {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </Section>
  );
};

export default Comparison;
