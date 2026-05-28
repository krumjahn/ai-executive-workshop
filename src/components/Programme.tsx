import React from 'react';
import Section from './Section';

const Programme: React.FC = () => {
  const weeks = [
    {
      week: "Week 1",
      title: "Choose the Use Case and Start Building",
      outcome: "Identify one real business workflow and begin designing the first version.",
      topics: [
        "AI tools vs automation vs AI agents",
        "Choosing high-value, low-risk use cases",
        "Mapping the current workflow",
        "Identifying approved tools and constraints"
      ],
      deliverable: "AI Implementation Use Case Canvas"
    },
    {
      week: "Week 2",
      title: "Build the First Working Automation or AI Agent",
      outcome: "Create a minimum viable workflow that runs.",
      topics: [
        "Building the first prototype",
        "Structuring inputs and outputs",
        "Connecting the workflow to business processes",
        "Avoiding overengineering"
      ],
      deliverable: "Working Prototype Version 1"
    },
    {
      week: "Week 3",
      title: "Add Reliability, Testing, and Human Review",
      outcome: "Find what breaks and improve the system.",
      topics: [
        "Testing across repeated runs",
        "Reducing hallucination and variation",
        "Adding approval checkpoints",
        "Handling edge cases",
        "Improving prompts and workflow logic"
      ],
      deliverable: "Improved Prototype Version 2 + Reliability Report"
    },
    {
      week: "Week 4",
      title: "Production Readiness and Rollout Plan",
      outcome: "Prepare the system for internal pilot use.",
      topics: [
        "Governance checklist",
        "Success metrics",
        "Human accountability",
        "Internal training",
        "30-day rollout planning"
      ],
      deliverable: "Final Presentation + 30-Day Implementation Plan"
    }
  ];

  return (
    <Section 
      id="programme" 
      title="The 4-Week Implementation Journey"
      centered
    >
      <div className="programme-timeline">
        {weeks.map((week, index) => (
          <div key={index} className="week-card">
            <div className="week-badge">{week.week}</div>
            <div className="week-content">
              <h3 className="week-title">{week.title}</h3>
              <p className="week-outcome"><strong>Outcome:</strong> {week.outcome}</p>
              
              <div className="week-details">
                <div className="topics-list">
                  <h4>Topics:</h4>
                  <ul>
                    {week.topics.map((topic, i) => <li key={i}>{topic}</li>)}
                  </ul>
                </div>
                
                <div className="deliverable-box">
                  <h4>Deliverable:</h4>
                  <p>{week.deliverable}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .programme-timeline {
          display: flex;
          flex-direction: column;
          gap: 40px;
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .programme-timeline::before {
          content: "";
          position: absolute;
          left: 40px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--border-color);
          z-index: 0;
        }

        .week-card {
          display: flex;
          gap: 40px;
          position: relative;
          z-index: 1;
        }

        .week-badge {
          width: 80px;
          height: 80px;
          background: var(--primary-navy);
          color: white;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.9rem;
          flex-shrink: 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .week-content {
          background: white;
          padding: 32px;
          border-radius: 24px;
          border: 1px solid var(--border-color);
          flex-grow: 1;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .week-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: var(--primary-navy);
        }

        .week-outcome {
          color: var(--accent-blue);
          font-size: 1.1rem;
          margin-bottom: 24px;
          line-height: 1.4;
        }

        .week-details {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          border-top: 1px solid var(--bg-off-white);
          padding-top: 24px;
        }

        .topics-list h4, .deliverable-box h4 {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .topics-list ul {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .topics-list li {
          font-size: 0.95rem;
          color: var(--secondary-charcoal);
          padding-left: 20px;
          position: relative;
        }

        .topics-list li::before {
          content: "→";
          position: absolute;
          left: 0;
          color: var(--accent-blue);
        }

        .deliverable-box {
          background: var(--bg-off-white);
          padding: 20px;
          border-radius: 12px;
        }

        .deliverable-box p {
          font-weight: 700;
          color: var(--primary-navy);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .programme-timeline::before {
            display: none;
          }
          .week-card {
            flex-direction: column;
            gap: 16px;
          }
          .week-badge {
            width: 60px;
            height: 60px;
          }
          .week-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default Programme;
