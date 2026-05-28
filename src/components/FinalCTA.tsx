import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section id="register" className="final-cta">
      <div className="container">
        <div className="cta-card">
          <h2 className="cta-headline">Do Not Just Discuss the Future of Work. <span className="text-white">Build It.</span></h2>
          <p className="cta-body">
            AI agents are becoming real. Entry-level jobs are being disrupted. Gen Z has AI skills but needs real opportunities to apply them. This workshop connects both challenges by helping organisations build practical AI workflows with the support of trained Gen Z reverse mentors.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary btn-xl">Register Interest</a>
            <p className="cta-secondary">
              Bring one real workflow from your organisation. Leave with one working AI-enabled system.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .final-cta {
          padding: 100px 0;
          background: var(--bg-white);
        }

        .cta-card {
          background: var(--primary-navy);
          padding: 80px 40px;
          border-radius: 40px;
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(10, 25, 47, 0.25);
        }

        .cta-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-headline {
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          line-height: 1.1;
        }

        .text-white {
          color: white;
        }

        .cta-body {
          font-size: 1.25rem;
          max-width: 800px;
          margin: 0 auto 48px;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .btn-xl {
          padding: 20px 48px;
          font-size: 1.25rem;
          background: white;
          color: var(--primary-navy);
        }

        .btn-xl:hover {
          background: var(--accent-blue-light);
          color: white;
          transform: translateY(-4px);
        }

        .cta-secondary {
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .cta-headline {
            font-size: 2.25rem;
          }
          .cta-card {
            padding: 60px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
