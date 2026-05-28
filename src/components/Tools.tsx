import React from 'react';
import Section from './Section';
import { Layout, Cloud, ShieldAlert } from 'lucide-react';

const Tools: React.FC = () => {
  return (
    <Section 
      id="tools" 
      title="Built Around Tools Your Organisation Can Realistically Use"
      centered
      bgOffWhite
    >
      <div className="tools-content">
        <p className="tools-lead">
          We do not assume every company can use the same AI tools. Some organisations use Microsoft 365 and Copilot. Some use Google Workspace and Gemini. Some have strict IT policies and cannot rely on VPN-dependent tools for production. The workshop starts with workflow design, then adapts implementation to the tools your organisation can realistically approve.
        </p>

        <div className="tool-paths-grid">
          <div className="card tool-card">
            <div className="tool-icon-wrapper microsoft">
              <Cloud size={24} />
            </div>
            <h3 className="tool-path-title">Microsoft Pathway</h3>
            <ul className="tool-list">
              <li>Microsoft 365 & Copilot</li>
              <li>Copilot Studio</li>
              <li>Power Automate</li>
              <li>SharePoint & Teams</li>
              <li>Outlook & Excel</li>
            </ul>
          </div>

          <div className="card tool-card">
            <div className="tool-icon-wrapper google">
              <Layout size={24} />
            </div>
            <h3 className="tool-path-title">Google Pathway</h3>
            <ul className="tool-list">
              <li>Google Workspace & Gemini</li>
              <li>Gmail & Google Drive</li>
              <li>Docs, Sheets & Forms</li>
              <li>Apps Script & AppSheet</li>
            </ul>
          </div>

          <div className="card tool-card">
            <div className="tool-icon-wrapper agnostic">
              <ShieldAlert size={24} />
            </div>
            <h3 className="tool-path-title">Tool-Agnostic Pathway</h3>
            <ul className="tool-list">
              <li>Use case design</li>
              <li>Workflow blueprint</li>
              <li>Governance checklist</li>
              <li>IT discussion checklist</li>
              <li>Rollout plan</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .tools-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .tools-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 60px;
          text-align: center;
          line-height: 1.6;
        }

        .tool-paths-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .tool-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .tool-icon-wrapper {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          color: white;
        }

        .microsoft { background: #00A4EF; }
        .google { background: #EA4335; }
        .agnostic { background: var(--primary-navy); }

        .tool-path-title {
          font-size: 1.25rem;
          margin-bottom: 20px;
          color: var(--primary-navy);
        }

        .tool-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .tool-list li {
          font-size: 0.95rem;
          color: var(--secondary-charcoal);
          padding: 8px 12px;
          background: var(--bg-off-white);
          border-radius: 8px;
          font-weight: 500;
        }

        @media (max-width: 992px) {
          .tool-paths-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Section>
  );
};

export default Tools;
