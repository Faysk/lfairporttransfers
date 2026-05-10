import Link from 'next/link';
import { Building2, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, business, defaultBookingMessage } from '@/lib/contact';

const footerRoutes = [
  'Heathrow transfers',
  'Gatwick transfers',
  'London City transfers',
  'Luton transfers',
  'Stansted transfers',
  'Hourly chauffeur hire',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column footer-brand">
          <Link href="/#home" className="footer-logo">
            <span>LF</span>
            Airport Transfers
          </Link>
          <p>
            Premium private chauffeur and airport transfer service in London, built around
            punctuality, discretion and a refined Mercedes fleet.
          </p>
          <span className="footer-meta">Company No. {business.companyNumber}</span>
          <span className="footer-meta">Established {business.founded}</span>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          {footerRoutes.map((route) => (
            <Link key={route} href="/#routes" className="footer-link">
              {route}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <Link href="/#fleet" className="footer-link">
            Fleet
          </Link>
          <Link href="/#services" className="footer-link">
            Chauffeur services
          </Link>
          <Link href="/booking" className="footer-link">
            Booking request
          </Link>
          <Link href="/#faq" className="footer-link">
            FAQ
          </Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href={`tel:${business.phoneDisplay.replace(/\s/g, '')}`} className="footer-contact">
            <Phone aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a href={`mailto:${business.email}`} className="footer-contact">
            <Mail aria-hidden="true" />
            {business.email}
          </a>
          <a href={`mailto:${business.bookingsEmail}`} className="footer-contact">
            <Building2 aria-hidden="true" />
            {business.bookingsEmail}
          </a>
          <a
            href={buildWhatsAppUrl(defaultBookingMessage)}
            className="footer-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={business.linkedin}
            className="footer-contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin aria-hidden="true" />
            LinkedIn
          </a>
          <span className="footer-contact muted">
            <MapPin aria-hidden="true" />
            London, United Kingdom
          </span>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} LF Airport Transfers. All rights reserved.</span>
        <a href="https://faysk.dev" target="_blank" rel="noopener noreferrer">
          Crafted by Faysk
        </a>
      </div>
    </footer>
  );
}
