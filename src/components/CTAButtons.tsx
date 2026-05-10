import Link from 'next/link';
import { CalendarCheck, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, defaultBookingMessage } from '@/lib/contact';

export default function CTAButtons() {
  return (
    <div className="cta-buttons">
      <Link href="/booking" aria-label="Go to the booking form" className="cta-primary">
        <CalendarCheck aria-hidden="true" className="cta-icon" />
        Request a Quote
      </Link>

      <a
        href={buildWhatsAppUrl(defaultBookingMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open WhatsApp chat"
        className="cta-secondary"
      >
        <MessageCircle aria-hidden="true" className="cta-icon whatsapp" />
        WhatsApp Now
      </a>
    </div>
  );
}
