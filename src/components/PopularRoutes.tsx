import { ArrowRight, Building2, MapPin, Plane } from 'lucide-react';
import Link from 'next/link';

const routes = [
  {
    from: 'Heathrow Airport',
    to: 'Central London',
    detail: 'Mayfair, Kensington, Westminster, Chelsea and hotel arrivals.',
  },
  {
    from: 'Gatwick Airport',
    to: 'London addresses',
    detail: 'Private transfers for business trips, holidays and family travel.',
  },
  {
    from: 'London City Airport',
    to: 'Canary Wharf',
    detail: 'Fast executive transfers for finance, events and corporate schedules.',
  },
  {
    from: 'Luton Airport',
    to: 'Greater London',
    detail: 'Comfortable long-distance airport transfers with luggage space.',
  },
  {
    from: 'Stansted Airport',
    to: 'Central London',
    detail: 'Reliable early morning and late-night private hire journeys.',
  },
  {
    from: 'Private address',
    to: 'Hourly chauffeur',
    detail: 'Multi-stop travel for meetings, shopping, events and city itineraries.',
  },
];

export default function PopularRoutes() {
  return (
    <section id="routes" className="routes-section section-band">
      <div className="section-shell">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">London airport coverage</p>
            <h2>Popular private transfer routes.</h2>
          </div>
          <p>
            Share your pickup, destination, luggage and flight details. We will recommend the
            best vehicle and confirm a tailored quote before travel.
          </p>
        </div>

        <div className="routes-grid">
          {routes.map((route) => (
            <article key={`${route.from}-${route.to}`} className="route-card">
              <div className="route-icon">
                {route.from.includes('Airport') ? (
                  <Plane aria-hidden="true" />
                ) : (
                  <Building2 aria-hidden="true" />
                )}
              </div>
              <div className="route-path">
                <span>{route.from}</span>
                <ArrowRight aria-hidden="true" />
                <span>{route.to}</span>
              </div>
              <p>{route.detail}</p>
            </article>
          ))}
        </div>

        <div className="route-coverage">
          <MapPin aria-hidden="true" />
          <span>
            Covering Heathrow, Gatwick, London City, Luton, Stansted, private addresses and
            hotels across London.
          </span>
          <Link href="/booking">Request route quote</Link>
        </div>
      </div>
    </section>
  );
}

