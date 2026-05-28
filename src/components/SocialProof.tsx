import React from 'react';
import Section from './Section';
import { Play, ExternalLink, Quote } from 'lucide-react';
import classPhoto1 from '../assets/workshop/class-photo-1.jpg';
import classPhoto2 from '../assets/workshop/class-photo-2.jpg';
import keithLecturing from '../assets/workshop/keith-lecturing.jpg';
import esperanzaLogo from '../assets/workshop/esperanza-logo.png';
import youtubeScreenshot from '../assets/workshop/youtube-screenshot.png';

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Jeff Yiu",
      role: "Buying Director at The Boots Group Asia Sourcing",
      text: "AI agents are much more than one-off Q&A. Treat them like a super smart junior employee who requires proper training, and they'll excel in almost everything. I'd recommend this to any business owner."
    },
    {
      name: "Jolie Chui",
      role: "Head of Human Resources",
      text: "Love the introduction of new tools, live demo, and the concept of training AI from a junior new hire to become a senior. Very practical for HR transformation."
    },
    {
      name: "Lorrainne",
      role: "Head of Admissions, See Change Education",
      text: "As a rookie to AI, the step-by-step guidance was very useful. I'm impressed by how easy-to-understand the explanation was—imagining AI as a junior staff makes it so easy to grasp."
    },
    {
      name: "Jennifer",
      role: "Sr. Compliance Manager, Financial Institution",
      text: "Learning how to have AI write code for us or inspire us with new ideas was amazing. Highly recommend for anyone keen on leveraging AI to improve productivity!"
    },
    {
      name: "Juno",
      role: "Dentist & Director of three dental clinics",
      text: "I am a complete beginner in AI with limited IT knowledge, but I had no difficulty comprehending the course. I've gained useful skills and inspiration for my business development."
    },
    {
      name: "Doris",
      role: "Finance Team Head",
      text: "The class wasn't just 'click here, do this.' It focused on helping us understand how to think and how to talk to AI. The exercises were especially helpful for beginners."
    }
  ];

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

        <div className="partner-section">
          <p className="partner-label">Supported by</p>
          <img src={esperanzaLogo} alt="Esperanza Logo" className="partner-logo" />
        </div>

        <div className="workshop-visuals">
          <div className="visual-main">
            <img src={classPhoto1} alt="Previous AI Workshop Class" className="workshop-img" />
          </div>
          <div className="visual-side">
            <div className="visual-secondary">
              <img src={keithLecturing} alt="Keith lecturing" className="workshop-img" />
            </div>
            <div className="visual-secondary">
              <img src={classPhoto2} alt="Workshop students working" className="workshop-img" />
            </div>
          </div>
        </div>

        <div className="youtube-showcase card">
          <div className="yt-text">
            <h3>Practical AI Education</h3>
            <p>Keith's practical AI tutorials have reached hundreds of thousands of professionals worldwide, helping them bridge the gap between AI curiosity and real-world implementation.</p>
            <a href="https://youtube.com/@keithrumjahn" target="_blank" rel="noopener noreferrer" className="btn btn-secondary yt-btn">
              <Play size={18} fill="currentColor" />
              Watch on YouTube
            </a>
          </div>
          <div className="yt-preview">
            <img src={youtubeScreenshot} alt="YouTube Channel Preview" className="yt-img" />
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <Quote className="quote-icon" size={24} />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <span className="author-name">{t.name}</span>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="instructor-card card">
          <div className="instructor-image">
            <img src={keithLecturing} alt="Keith Rumjahn" className="instructor-img-real" />
          </div>
          <div className="instructor-info">
            <h3 className="instructor-name">Keith Rumjahn</h3>
            <p className="instructor-title">AI Educator & Workflow Builder</p>
            <p className="instructor-bio">
              Keith is an AI educator, workflow builder, and creator of practical AI training content with hundreds of thousands of YouTube views. He specialises in helping business professionals move from AI curiosity to practical implementation.
            </p>
            <div className="instructor-links">
              <a href="https://youtube.com/@keithrumjahn" target="_blank" rel="noopener noreferrer" className="link-item"><Play size={16} /> YouTube</a>
              <a href="https://linkedin.com/in/keithrumjahn" target="_blank" rel="noopener noreferrer" className="link-item"><ExternalLink size={16} /> LinkedIn</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .social-proof-content {
          max-width: 1100px;
          margin: 0 auto;
        }

        .proof-lead {
          font-size: 1.25rem;
          color: var(--secondary-charcoal);
          margin-bottom: 40px;
          text-align: center;
          line-height: 1.6;
        }

        .partner-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .partner-label {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .partner-logo {
          height: 60px;
          width: auto;
          opacity: 0.9;
          filter: grayscale(1);
          transition: all 0.3s ease;
        }

        .partner-logo:hover {
          filter: grayscale(0);
          opacity: 1;
        }

        .workshop-visuals {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 20px;
          margin-bottom: 40px;
        }

        .visual-main {
          height: 420px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .visual-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .visual-secondary {
          height: 200px;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .workshop-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .workshop-img:hover {
          transform: scale(1.05);
        }

        .youtube-showcase {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
          padding: 40px;
          margin-bottom: 80px;
          background: white;
          border-radius: 24px;
        }

        .yt-text h3 {
          font-size: 1.75rem;
          margin-bottom: 16px;
        }

        .yt-text p {
          font-size: 1.1rem;
          color: var(--secondary-charcoal);
          margin-bottom: 24px;
          line-height: 1.5;
        }

        .yt-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .yt-preview {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .yt-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 80px;
        }

        .testimonial-card {
          background: white;
          padding: 32px;
          border-radius: 20px;
          border: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          text-align: left;
          position: relative;
        }

        .quote-icon {
          color: var(--accent-blue);
          margin-bottom: 16px;
          opacity: 0.2;
        }

        .testimonial-text {
          font-size: 0.95rem;
          color: var(--primary-navy);
          line-height: 1.5;
          margin-bottom: 24px;
          flex-grow: 1;
          font-style: italic;
        }

        .testimonial-author {
          border-top: 1px solid var(--bg-off-white);
          padding-top: 16px;
        }

        .author-name {
          display: block;
          font-weight: 700;
          color: var(--primary-navy);
          font-size: 0.9rem;
        }

        .author-role {
          display: block;
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.3;
          margin-top: 2px;
        }

        .instructor-card {
          display: flex;
          gap: 40px;
          padding: 48px;
          align-items: center;
          text-align: left;
          background: white;
        }

        .instructor-img-real {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
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

        @media (max-width: 992px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .workshop-visuals {
            grid-template-columns: 1fr;
          }
          .youtube-showcase {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .yt-btn {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
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
