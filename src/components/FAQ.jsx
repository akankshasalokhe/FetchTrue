"use client";

import { useState, useRef, useEffect } from "react";
import Head from "next/head";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the investment requirements for your franchise?",
      answer:
        "Our franchise investment ranges from $150,000 to $300,000 depending on location and market size. This includes the franchise fee, equipment, initial inventory, and working capital.",
    },
    {
      question: "What kind of training and support do you provide?",
      answer:
        "We provide comprehensive training covering operations, marketing, and management. Our support includes ongoing coaching, marketing assistance, and access to our proprietary business management platform.",
    },
    {
      question: "How long does it take to open a franchise?",
      answer:
        "Typically, it takes 3-6 months from signing the agreement to opening your franchise. This includes site selection, build-out, training, and hiring processes.",
    },
    {
      question: "What territories are available for expansion?",
      answer:
        "We're currently expanding in the Midwest and Southeast regions. Specific available territories are discussed during our discovery process based on market analysis.",
    },
    {
      question: "Do you offer financing options?",
      answer:
        "While we don't provide direct financing, we have relationships with several lending institutions that offer franchise financing programs with favorable terms for qualified candidates.",
    },
    {
      question: "What is the typical ROI timeline for your franchises?",
      answer:
        "Our franchisees typically see a return on investment within 18-36 months, depending on market conditions, location, and execution of our business model.",
    },
    {
      question: "Can I own multiple franchise locations?",
      answer:
        "Yes, we offer multi-unit development opportunities for qualified candidates who demonstrate the capacity and experience to manage multiple locations.",
    },
  ];

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex].style.maxHeight =
        contentRefs.current[activeIndex].scrollHeight + "px";
    }
    contentRefs.current.forEach((ref, i) => {
      if (ref && i !== activeIndex) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <>
      <Head>
        <title>Franchise Opportunities - FAQ</title>
        <meta
          name="description"
          content="Frequently asked questions about our franchise opportunities and business partnerships"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="page-container">
        <div className="faq-container">
          <div className="faq-grid">
            {/* Left side title */}
            <div className="faq-header">
              <h2 className="faq-title">
                Franchise & Business Partnership FAQs
              </h2>
              <p className="faq-subtitle">
                Find answers to common questions about our franchise opportunities
                and B2B partnerships
              </p>
            </div>

            {/* Right side Q&A */}
            <div className="faq-content">
              <div className="faq-list">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={activeIndex === index}
                    >
                      <span className="question-text">{faq.question}</span>
                      <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                    </button>
                    <div
                      className="faq-answer"
                      ref={(el) => (contentRefs.current[index] = el)}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Mobile CTA positioned below Q&A */}
              <div className="faq-cta-mobile">
                <h3>Still have questions?</h3>
                <p>Contact our franchise development team for more information</p>
                <a href="tel:+9765303735" className="cta-button">
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="faq-cta">
            <h3>Still have questions?</h3>
            <p>Contact our franchise development team for more information</p>
            <a href="tel:+9765303735" className="cta-button">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .page-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #dbeafe 0%, #f0f9ff 40%, #ffffff 100%);
          padding: 20px;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
          font-family: "Inter", sans-serif;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .faq-header {
          position: sticky;
          top: 2rem;
          height: fit-content;
          text-align: left;
        }

        .faq-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          background: linear-gradient(to right, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .faq-subtitle {
          font-size: 1.125rem;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .faq-content {
          display: flex;
          flex-direction: column;
        }

        .faq-list {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
          margin-bottom: 2rem;
        }

        .faq-item {
          border-bottom: 1px solid #e5e7eb;
          background: white;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .faq-item:hover {
          background: #fafafa;
          box-shadow: inset 0 0 0 1px rgba(37, 99, 235, 0.1);
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-item.active {
          background: #f9fafb;
          border-left: 4px solid #2563eb;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.75rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #111827;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .faq-question:hover .question-text {
          color: #2563eb;
        }

        .faq-icon {
          font-size: 1.5rem;
          font-weight: bold;
          color: #374151;
          transition: transform 0.3s ease, color 0.3s ease;
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .faq-item.active .faq-icon {
          color: #2563eb;
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          background: #f8fafc;
        }

        .faq-answer p {
          margin: 0;
          padding: 1.25rem 1.75rem;
          line-height: 1.7;
          color: #4b5563;
          font-size: 1rem;
        }

        .faq-cta {
          text-align: center;
          padding: 3rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-radius: 16px;
          color: white;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
        }

        .faq-cta-mobile {
          display: none;
          text-align: center;
          padding: 2rem;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          border-radius: 12px;
          color: white;
          margin-top: 2rem;
        }

        .faq-cta h3,
        .faq-cta-mobile h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .faq-cta p,
        .faq-cta-mobile p {
          margin-bottom: 2rem;
          opacity: 0.9;
          font-size: 1.125rem;
        }

        .cta-button {
          background: white;
          color: #2563eb;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 968px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .faq-header {
            position: static;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .faq-container {
            padding: 3rem 1.5rem;
          }
          .faq-title {
            font-size: 2rem;
          }
          .faq-cta-mobile {
            display: block;
          }
          .faq-cta {
            display: none;
          }
          .faq-question {
            padding: 1.5rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .faq-container {
            padding: 2rem 1rem;
          }
          .faq-title {
            font-size: 1.75rem;
          }
          .faq-question {
            padding: 1.25rem;
          }
          .faq-answer p {
            padding: 1rem 1.25rem;
          }
          .cta-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }
          .faq-cta-mobile {
            padding: 1.5rem;
          }
          .faq-cta-mobile h3 {
            font-size: 1.5rem;
          }
          .faq-cta-mobile p {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}