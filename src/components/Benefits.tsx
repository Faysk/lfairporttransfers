import { Clock3, CreditCard, Luggage, Plane, ShieldCheck, Wifi } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Professional chauffeurs',
    text: 'Discreet, punctual drivers focused on a calm premium experience.',
  },
  {
    icon: Plane,
    title: 'Flight monitoring',
    text: 'Arrival times can be tracked so pickup windows stay realistic.',
  },
  {
    icon: Clock3,
    title: '24/7 London coverage',
    text: 'Early departures, late arrivals and last-minute travel handled smoothly.',
  },
  {
    icon: Luggage,
    title: 'Airport-ready fleet',
    text: 'Executive cars with space for passengers, luggage and family travel.',
  },
  {
    icon: CreditCard,
    title: 'Clear quotations',
    text: 'Request a tailored quote before travel with no confusing app flow.',
  },
  {
    icon: Wifi,
    title: 'Business comfort',
    text: 'Quiet cabins, bottled water and room to prepare between meetings.',
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section" aria-label="Why choose LF Airport Transfers">
      <div className="section-shell">
        <div className="section-intro compact">
          <p className="eyebrow">Premium chauffeur standards</p>
          <h2>Designed for journeys where timing, comfort and discretion matter.</h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((item) => (
            <article key={item.title} className="benefit-card">
              <item.icon aria-hidden="true" className="benefit-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
