import Image from 'next/image';
import { BriefcaseBusiness, MessageCircle, UsersRound } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/contact';

const vehicles = [
  {
    name: 'Mercedes EQS',
    image: '/images/fleet/mercedes-eqs-driving-city.png',
    badge: 'Electric executive saloon',
    description: 'Ultra-quiet luxury for VIP airport transfers, corporate arrivals and premium city travel.',
    seats: 3,
    luggage: 2,
    ideal: 'Executives, VIPs, solo travellers',
    features: ['Silent cabin', 'Premium rear seating', 'Elegant city presence'],
  },
  {
    name: 'Mercedes E-Class',
    image: '/images/fleet/mercedes-eclass-driving.png',
    badge: 'Business class comfort',
    description: 'Refined, reliable and efficient for airport transfers, meetings and daily chauffeur hire.',
    seats: 3,
    luggage: 2,
    ideal: 'Business trips, airport runs',
    features: ['Comfortable ride', 'Professional image', 'Ideal for meetings'],
  },
  {
    name: 'Mercedes V-Class',
    image: '/images/hero/mercedes-vclass-driving.png',
    badge: 'Luxury people carrier',
    description: 'Spacious private travel for families, group arrivals, events and extra luggage requirements.',
    seats: 6,
    luggage: 6,
    ideal: 'Families, groups, events',
    features: ['Flexible seating', 'Generous luggage room', 'Airport group travel'],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="fleet-section section-band">
      <div className="section-shell">
        <div className="section-intro">
          <p className="eyebrow">Executive Mercedes fleet</p>
          <h2>Choose the right vehicle for your journey.</h2>
          <p>
            Every booking is matched to passenger count, luggage needs and the tone of the
            occasion, from boardroom arrivals to family airport transfers.
          </p>
        </div>

        <div className="fleet-grid">
          {vehicles.map((vehicle, index) => (
            <article key={vehicle.name} className="fleet-card">
              <div className="fleet-image">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} used by LF Airport Transfers`}
                  fill
                  className="fleet-img-object"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
                <span className="fleet-badge">{vehicle.badge}</span>
              </div>

              <div className="fleet-content">
                <div>
                  <h3 className="fleet-name">{vehicle.name}</h3>
                  <p className="fleet-description">{vehicle.description}</p>
                </div>

                <div className="fleet-details" aria-label={`${vehicle.name} capacity`}>
                  <span>
                    <UsersRound aria-hidden="true" />
                    {vehicle.seats} passengers
                  </span>
                  <span>
                    <BriefcaseBusiness aria-hidden="true" />
                    {vehicle.luggage} bags
                  </span>
                </div>

                <p className="fleet-ideal">{vehicle.ideal}</p>

                <ul className="fleet-features">
                  {vehicle.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={buildWhatsAppUrl(`Hello, I'd like to request a quote for the ${vehicle.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fleet-button"
                >
                  <MessageCircle aria-hidden="true" />
                  Quote this vehicle
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="fleet-note">
          Need a specific luggage setup, child seat or return journey? Share the details and we
          will recommend the right vehicle before confirmation.
        </p>
      </div>
    </section>
  );
}
