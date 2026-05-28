import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Programme', href: '#programme' },
    { name: 'Tools', href: '#tools' },
    { name: 'Reverse Mentorship', href: '#reverse-mentorship' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          AI Workshop
        </a>

        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#register" className="btn btn-primary nav-cta">
            Register Interest
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#register" 
          className="btn btn-primary mobile-nav-cta"
          onClick={() => setIsMenuOpen(false)}
        >
          Register Interest
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
          padding: 20px 0;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          padding: 12px 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid var(--border-color);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo {
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--primary-navy);
          letter-spacing: -0.025em;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--secondary-charcoal);
        }

        .nav-link:hover {
          color: var(--accent-blue);
        }

        .nav-cta {
          padding: 10px 20px;
          font-size: 0.95rem;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: var(--primary-navy);
          cursor: pointer;
        }

        .mobile-menu {
          position: fixed;
          top: 72px;
          left: 0;
          width: 100%;
          background: white;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          border-bottom: 1px solid var(--border-color);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid var(--bg-off-white);
        }

        @media (max-width: 992px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
