const faqs = [
  {
    question: 'Which London airports do you cover?',
    answer:
      'LF Airport Transfers covers Heathrow, Gatwick, London City, Luton and Stansted, plus private addresses, hotels and business districts across London.',
  },
  {
    question: 'Can you track my flight?',
    answer:
      'Yes. When you provide a flight number, arrival times can be monitored so the pickup plan reflects delays or early arrivals where possible.',
  },
  {
    question: 'Can I request a Mercedes V-Class for extra luggage?',
    answer:
      'Yes. The V-Class is recommended for families, groups, event travel and passengers carrying larger luggage.',
  },
  {
    question: 'Do you offer hourly chauffeur hire?',
    answer:
      'Yes. Hourly hire is available for meetings, events, shopping, private city itineraries and multi-stop journeys.',
  },
  {
    question: 'How do I confirm a booking?',
    answer:
      'Send your journey details through the booking form or WhatsApp. We will confirm availability, vehicle suitability and the quote before travel.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="faq-section section-band">
      <div className="section-shell faq-shell">
        <div className="section-intro">
          <p className="eyebrow">Questions before booking</p>
          <h2>Clear answers for airport transfers and chauffeur hire.</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

