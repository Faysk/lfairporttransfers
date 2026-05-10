'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { buildWhatsAppUrl, business, defaultBookingMessage } from '@/lib/contact';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Services', href: '#services' },
  { name: 'Routes', href: '#routes' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="#home" className="navbar-logo">
          <span className="navbar-mark">LF</span>
          <span>
            LF Airport <em>Transfers</em>
          </span>
        </Link>

        <nav className="navbar-desktop" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="navbar-link">
              <span className="navbar-text">{item.name}</span>
              <span className="navbar-underline" />
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <a className="navbar-phone" href={`tel:${business.phoneDisplay.replace(/\s/g, '')}`}>
            <Phone aria-hidden="true" />
            {business.phoneDisplay}
          </a>

          <a
            className="navbar-whatsapp"
            href={buildWhatsAppUrl(defaultBookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle aria-hidden="true" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-navigation"
          aria-expanded={open}
          className="navbar-toggle"
        >
          {open ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="navbar-mobile" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="navbar-mobile-link"
            >
              {item.name}
            </Link>
          ))}

          <a
            className="navbar-mobile-cta"
            href={buildWhatsAppUrl(defaultBookingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            <MessageCircle aria-hidden="true" />
            Book via WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
