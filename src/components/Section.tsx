import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  children: React.ReactNode;
  bgOffWhite?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  title, 
  subtitle, 
  centered = false,
  children,
  bgOffWhite = false
}) => {
  return (
    <section 
      id={id} 
      className={`section ${bgOffWhite ? 'section-bg' : ''} ${className}`}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className={`section-header ${centered ? 'text-center' : ''}`}>
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>

      <style>{`
        .section-header {
          margin-bottom: 48px;
          max-width: 800px;
        }

        .text-center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .section-title {
          font-size: 2.5rem;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          .section-subtitle {
            font-size: 1.125rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Section;
