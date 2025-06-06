import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { BsCalendarCheck } from 'react-icons/bs';

export default function CTAButtons() {
  return (
    <div className="cta-buttons">
      <Link href="/booking" aria-label="Go to the booking form" className="cta-primary">
        <BsCalendarCheck className="cta-icon" />
        Book Now
      </Link>

      <a
        href="https://wa.me/447541494500?text=Hello%2C%20I%27d%20like%20to%20book%20a%20luxury%20airport%20transfer%20with%20LF%20Airport%20Transfers."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="cta-secondary"
      >
        <FaWhatsapp className="cta-icon whatsapp" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
