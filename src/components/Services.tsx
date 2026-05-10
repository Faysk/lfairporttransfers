import {
  Baby,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  Landmark,
  MapPinned,
  PlaneTakeoff,
} from 'lucide-react';

const services = [
  {
    title: 'Airport Transfers',
    icon: PlaneTakeoff,
    description:
      'Private pickups and drop-offs for Heathrow, Gatwick, London City, Luton and Stansted.',
  },
  {
    title: 'Corporate Chauffeur',
    icon: BriefcaseBusiness,
    description:
      'Discreet executive travel for meetings, roadshows, hospitality teams and VIP guests.',
  },
  {
    title: 'Hourly Hire',
    icon: Clock3,
    description:
      'Keep a chauffeur on standby for meetings, shopping, events or multi-stop London days.',
  },
  {
    title: 'Event Transfers',
    icon: CalendarDays,
    description:
      'Polished arrivals for weddings, private dinners, sporting events and red-carpet occasions.',
  },
  {
    title: 'Family Travel',
    icon: Baby,
    description:
      'Spacious options for luggage, child-seat requests and relaxed airport journeys with family.',
  },
  {
    title: 'City & Long Distance',
    icon: MapPinned,
    description:
      'Comfortable private travel across London and longer UK journeys by arrangement.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-shell">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">Chauffeur services</p>
            <h2>Private transport shaped around the moment.</h2>
          </div>
          <p>
            From a single airport arrival to a full day of appointments, LF Airport Transfers
            keeps the booking personal, precise and easy to coordinate.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <service.icon aria-hidden="true" className="service-icon" />
              <h3 className="service-name">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="service-highlight">
          <Landmark aria-hidden="true" />
          <p>
            Serving Central London, Canary Wharf, Mayfair, Kensington, Chelsea, Westminster and
            private addresses across Greater London.
          </p>
        </div>
      </div>
    </section>
  );
}
