import { CalendarCheck, CarFront, MessageSquareText, PlaneLanding } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    icon: MessageSquareText,
    title: 'Share your journey',
    text: 'Send pickup, destination, time, luggage, passenger count and flight number when relevant.',
  },
  {
    icon: CalendarCheck,
    title: 'Receive confirmation',
    text: 'We confirm availability, recommend the vehicle and keep the details easy to review.',
  },
  {
    icon: PlaneLanding,
    title: 'Flight-aware pickup',
    text: 'Airport arrivals can be monitored so your chauffeur is ready at the right time.',
  },
  {
    icon: CarFront,
    title: 'Travel in comfort',
    text: 'Enjoy a clean Mercedes, professional chauffeur and direct private transfer.',
  },
];

export default function Process() {
  return (
    <section className="process-section">
      <div className="section-shell process-shell">
        <div className="section-intro">
          <p className="eyebrow">Simple booking flow</p>
          <h2>A premium journey should feel effortless before the car arrives.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="process-step">
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <step.icon aria-hidden="true" className="process-icon" />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <div className="process-cta">
          <p>Have a complex itinerary or multiple pickups?</p>
          <Link href="#contact">Send the details</Link>
        </div>
      </div>
    </section>
  );
}

