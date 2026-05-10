import Image from 'next/image';
import { BadgeCheck, Clock3, MapPin, Plane, ShieldCheck, Sparkles } from 'lucide-react';
import CTAButtons from './CTAButtons';

const airports = ['Heathrow', 'Gatwick', 'London City', 'Luton', 'Stansted'];

const heroProof = [
  { icon: Clock3, label: '24/7 availability' },
  { icon: Plane, label: 'Flight monitoring' },
  { icon: ShieldCheck, label: 'Licensed private hire' },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Private chauffeur service in London">
      <Image
        src="/images/hero/mercedes-eqs-front-driving.png"
        alt="Black Mercedes chauffeur car driving through London"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-scrim" />
      <div className="hero-texture" />

      <div className="hero-container">
        <p className="eyebrow hero-eyebrow">
          <Sparkles aria-hidden="true" />
          Executive airport transfers across London
        </p>

        <h1 className="hero-heading">Private Chauffeur & Airport Transfers in London</h1>

        <p className="hero-subtitle">
          Travel in a discreet Mercedes fleet with professional chauffeurs, real-time flight
          monitoring and calm door-to-door service for business, families and VIP guests.
        </p>

        <CTAButtons />

        <div className="hero-proof" aria-label="Service highlights">
          {heroProof.map((item) => (
            <span key={item.label}>
              <item.icon aria-hidden="true" />
              {item.label}
            </span>
          ))}
        </div>

        <div className="hero-airports" aria-label="Airports covered">
          <MapPin aria-hidden="true" />
          {airports.map((airport) => (
            <span key={airport}>{airport}</span>
          ))}
        </div>
      </div>

      <div className="hero-status" aria-label="Booking reassurance">
        <div>
          <strong>Mercedes EQS, E-Class & V-Class</strong>
          <span>Executive comfort for solo travellers, families and corporate travel.</span>
        </div>
        <div>
          <strong>Meet & greet available</strong>
          <span>Your chauffeur can track arrivals and coordinate directly on WhatsApp.</span>
        </div>
        <BadgeCheck aria-hidden="true" />
      </div>
    </section>
  );
}
