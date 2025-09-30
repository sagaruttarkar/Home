import React, { useState, useRef, useEffect } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: "1. What services do you provide at home?",
    answer: "We offer digital X‑Ray, ECG (Electrocardiogram), and Blood Tests at the comfort of your home. Our certified technicians come equipped with portable machines and follow all safety protocols."
  },
  {
    question: "2. How do I book a home service?",
    answer: "You can book by calling, WhatsApp, or filling out our online booking form. Provide patient details, address, type of test, and preferred time slot."
  },
  {
    question: "3. Do I need a doctor’s prescription?",
    answer: "For X‑Ray: Yes, a valid prescription is required by law. For ECG and blood tests: A prescription is recommended but not always necessary for routine checkups."
  },
  {
    question: "4. How safe are home X‑Rays?",
    answer: "We use digital portable X‑ray machines that emit minimal radiation. Our technicians follow strict ALARA (As Low As Reasonably Achievable) guidelines and use protective gear."
  },
  {
    question: "5. How soon will I get my reports?",
    answer: "X‑Ray: Digital soft copy within 1–2 hours, printed report delivered same day. ECG: Instant report, sent via email or WhatsApp. Blood Tests: Most reports within 12–24 hours, depending on the test type."
  },
  {
    question: "6. What areas do you cover?",
    answer: "We provide services across Mumbai, Navi Mumbai, Thane, and nearby areas. Contact us to confirm service availability in your location."
  },
  {
    question: "7. Who performs the tests?",
    answer: "All procedures are done by qualified and experienced radiographers, ECG technicians, and phlebotomists."
  },
  {
    question: "8. Do you offer emergency or urgent services?",
    answer: "Yes, we provide priority or same-day services for urgent cases, subject to availability."
  },
  {
    question: "9. What are the charges for these services?",
    answer: "X‑Ray at Home: Starting from ₹1,499 (varies by view and body part). ECG at Home: ₹500–₹1,000 approx. Blood Tests: Prices depend on the specific tests or packages. No hidden charges; travel costs are included in the quote."
  },
  {
    question: "10. How do I receive my reports?",
    answer: "Reports are sent via WhatsApp, email, or hard copy as per your preference. You can also request a courier delivery."
  },
  {
    question: "11. What should I prepare before the test?",
    answer: "For X‑Ray/ECG: Provide adequate space for equipment setup and ensure patient comfort. For blood tests: Fasting may be required for certain tests (e.g., blood sugar, lipid profile). Our team will inform you in advance."
  },
  {
    question: "12. Do you maintain hygiene and safety standards?",
    answer: "Yes, our staff uses PPE kits, sanitized equipment, and disposable consumables for every visit, ensuring maximum safety."
  },
  {
    question: "13. Can I book these services for someone else?",
    answer: "Yes, you can book for your family members, elderly patients, or bedridden individuals. Ensure someone is present at the location to assist."
  },
  {
    question: "14. Do you provide Xray service for Pet dogs?",
    answer: "Yes, we do. We provide safe and accurate X-ray services to help diagnose issues like fractures, joint problems, or internal conditions. We ensure your dog’s comfort throughout the procedure."
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <div className="container">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={index} 
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
              </div>
              <div
                ref={el => answerRefs.current[index] = el}
                className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}
                style={{ maxHeight: activeIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0px' }}
              >
                <div className="faq-answer">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
