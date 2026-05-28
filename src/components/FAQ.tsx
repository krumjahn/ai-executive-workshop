import React, { useState } from 'react';
import Section from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Do I need coding skills?",
      a: "No. This workshop is designed for executives and business professionals. If you can explain a business process, work with documents, and use common workplace tools, you can participate."
    },
    {
      q: "Is this about automation or AI agents?",
      a: "Both. The workshop teaches the difference. Some business problems are best solved with reliable automation. Others benefit from AI assistance or AI agents. Participants learn how to choose the safest and most practical approach."
    },
    {
      q: "Will I leave with a working system?",
      a: "The goal is for each participant or team to leave with a working prototype or minimum viable AI-enabled workflow. The final result depends on the use case, tools available, and organisational constraints."
    },
    {
      q: "What if my organisation only uses Microsoft tools?",
      a: "That is expected. The workshop can adapt to Microsoft 365, Copilot, Power Automate, Teams, SharePoint, Outlook, and Excel-based workflows."
    },
    {
      q: "What if my organisation uses Google Workspace?",
      a: "That is also fine. The workshop can adapt to Gemini, Gmail, Drive, Docs, Sheets, Forms, Apps Script, and AppSheet-style workflows."
    },
    {
      q: "What if my company has strict IT policies?",
      a: "The workshop is designed for that reality. We focus on approved tools, workflow design, human approval points, and governance-aware implementation."
    },
    {
      q: "Why include Gen Z reverse mentors?",
      a: "Many Gen Z students are AI-native and comfortable testing new tools. Executives bring business context and judgment. Combining both creates a practical model for AI adoption and future-of-work collaboration."
    }
  ];

  return (
    <Section 
      id="faq" 
      title="Frequently Asked Questions"
      centered
      bgOffWhite
    >
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} />
        ))}
      </div>

      <style>{`
        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </Section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>

      <style>{`
        .faq-item {
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.2s ease;
        }

        .faq-item:hover {
          border-color: var(--accent-blue);
        }

        .faq-question {
          padding: 20px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 700;
          color: var(--primary-navy);
          font-size: 1.1rem;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
          background: var(--bg-off-white);
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
          padding: 24px;
          border-top: 1px solid var(--border-color);
        }

        .faq-answer p {
          color: var(--secondary-charcoal);
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
