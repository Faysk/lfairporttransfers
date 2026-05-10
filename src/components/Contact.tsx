'use client';

import { useState } from 'react';
import { Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, business } from '@/lib/contact';

const initialForm = {
  name: '',
  contact: '',
  pickup: '',
  destination: '',
  date: '',
  passengers: '1',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const buildMessage = () => {
    return `
Hello LF Airport Transfers,

I'd like to enquire about a chauffeur booking.

Name: ${form.name}
Contact: ${form.contact}
Pickup: ${form.pickup}
Destination: ${form.destination}
Date / time: ${form.date || 'To be confirmed'}
Passengers: ${form.passengers}

Notes:
${form.message || 'No extra notes yet.'}
    `.trim();
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-shell contact-shell">
        <div className="contact-copy">
          <p className="eyebrow">Request a private quote</p>
          <h2>Tell us where you are going. We will handle the journey.</h2>
          <p>
            Send your journey details and LF Airport Transfers will confirm availability, vehicle
            suitability and the next steps directly by WhatsApp.
          </p>

          <div className="contact-methods">
            <a href={`tel:${business.phoneDisplay.replace(/\s/g, '')}`}>
              <Phone aria-hidden="true" />
              <span>{business.phoneDisplay}</span>
            </a>
            <a href={`mailto:${business.email}`}>
              <Mail aria-hidden="true" />
              <span>{business.email}</span>
            </a>
            <span>
              <Clock3 aria-hidden="true" />
              24/7 airport transfer enquiries
            </span>
            <span>
              <MapPin aria-hidden="true" />
              London airports and Greater London
            </span>
          </div>
        </div>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            window.open(buildWhatsAppUrl(buildMessage()), '_blank', 'noopener,noreferrer');
          }}
          className="contact-form"
        >
          <div className="form-grid">
            <label className="form-group">
              <span>Name</span>
              <input
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={(event) => updateField('name', event.target.value)}
              />
            </label>

            <label className="form-group">
              <span>Phone or email</span>
              <input
                type="text"
                required
                placeholder="+44..."
                value={form.contact}
                onChange={(event) => updateField('contact', event.target.value)}
              />
            </label>

            <label className="form-group">
              <span>Pickup</span>
              <input
                type="text"
                required
                placeholder="Airport, hotel or address"
                value={form.pickup}
                onChange={(event) => updateField('pickup', event.target.value)}
              />
            </label>

            <label className="form-group">
              <span>Destination</span>
              <input
                type="text"
                required
                placeholder="Where to?"
                value={form.destination}
                onChange={(event) => updateField('destination', event.target.value)}
              />
            </label>

            <label className="form-group">
              <span>Date / time</span>
              <input
                type="text"
                placeholder="e.g. 24 May, 09:30"
                value={form.date}
                onChange={(event) => updateField('date', event.target.value)}
              />
            </label>

            <label className="form-group">
              <span>Passengers</span>
              <select
                value={form.passengers}
                onChange={(event) => updateField('passengers', event.target.value)}
              >
                {['1', '2', '3', '4', '5', '6+'].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="form-group">
            <span>Journey notes</span>
            <textarea
              rows={4}
              placeholder="Flight number, luggage, preferred vehicle or return journey..."
              value={form.message}
              onChange={(event) => updateField('message', event.target.value)}
            />
          </label>

          <button type="submit" className="contact-button">
            <MessageCircle aria-hidden="true" />
            Send enquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
