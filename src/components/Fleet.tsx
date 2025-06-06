'use client';

import Image from 'next/image';

const vehicles = [
  {
    name: 'Mercedes EQS',
    slug: 'mercedes-eqs-driving-city.png',
    description: 'Fully electric, ultra-silent luxury sedan for executives and VIPs.',
    seats: 3,
    luggage: 2,
  },
  {
    name: 'Mercedes E-Class',
    slug: 'mercedes-eclass-driving.png',
    description: 'Elegant and refined, perfect for business travel in style.',
    seats: 3,
    luggage: 2,
  },
  {
    name: 'Mercedes V-Class',
    slug: 'mercedes-eqs-static.png',
    description: 'Spacious and flexible — ideal for groups, events or families.',
    seats: 6,
    luggage: 6,
  },
];

export default function Fleet() {
  return (
    <section className="fleet-section">
      <div className="fleet-header">
        <h2 className="fleet-title">Our Fleet</h2>
        <p className="fleet-subtitle">
          Executive Mercedes vehicles — tailored for luxury and discretion.
        </p>
      </div>

      <div className="fleet-grid">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="fleet-card group">
            <div className="fleet-image">
              <Image
                src={`/images/fleet/${vehicle.slug}`}
                alt={vehicle.name}
                fill
                className="fleet-img-object"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />
            </div>

            <div className="fleet-content">
              <h3 className="fleet-name">{vehicle.name}</h3>
              <p className="fleet-description">{vehicle.description}</p>

              <div className="fleet-details">
                <span>👥 {vehicle.seats}</span>
                <span>🧳 {vehicle.luggage}</span>
              </div>

              <a
                href={`https://wa.me/447541494500?text=I'd%20like%20to%20book%20the%20${encodeURIComponent(vehicle.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="fleet-button"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
