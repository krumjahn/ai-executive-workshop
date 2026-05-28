import React from 'react';
import classPhoto3 from '../assets/workshop/class-photo-3.jpg';

const FinalCTA: React.FC = () => {
  return (
    <section id="register" className="final-cta">
      <div className="container">
        <div className="cta-wrapper">
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
          <div className="cta-visual">
            <img src={classPhoto3} alt="Community of AI builders" className="final-img" />
          </div>
        </div>
      </div>

      <style>{`
        .final-cta {
          padding: 100px 0;
          background: var(--bg-white);
        }

        .cta-wrapper {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          background: var(--primary-navy);
          border-radius: 40px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(10, 25, 47, 0.25);
        }

        .cta-card {
          padding: 80px 60px;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
        }

        .cta-visual {
          height: 100%;
          min-height: 400px;
        }

        .final-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
          margin-bottom: 48px;
          line-height: 1.6;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
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

        @media (max-width: 1200px) {
          .cta-headline {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 992px) {
          .cta-wrapper {
            grid-template-columns: 1fr;
          }
          .cta-card {
            padding: 60px 40px;
            text-align: center;
          }
          .cta-actions {
            align-items: center;
          }
          .cta-visual {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
