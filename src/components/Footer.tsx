import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            AI Workshop
          </div>
          <div className="footer-links">
            <a href="#problem">Problem</a>
            <a href="#programme">Programme</a>
            <a href="#tools">Tools</a>
            <a href="#faq">FAQ</a>
            <a href="#register">Register</a>
          </div>
          <div className="footer-copy">
            &copy; {currentYear} Keith Rumjahn. All rights reserved.
          </div>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 60px 0 40px;
          border-top: 1px solid var(--border-color);
          background: var(--bg-white);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .footer-logo {
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--primary-navy);
        }

        .footer-links {
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .footer-links a:hover {
          color: var(--accent-blue);
        }

        .footer-copy {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        @media (max-width: 576px) {
          .footer-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
