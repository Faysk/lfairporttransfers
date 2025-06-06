'use client';

import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  pickup: '',
  destination: '',
  date: '',
  time: '',
};

export default function BookingPage() {
  const [form, setForm] = useState(initialForm);

  const isFormValid = Object.values(form).every((v) => v.trim() !== '');

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-UK', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const buildWhatsAppLink = () => {
    const base = 'https://wa.me/447541494500';
    const formattedDate = formatDate(form.date);
    const message = `
*New Booking Request*

📍 *Pickup*: ${form.pickup}
📍 *Destination*: ${form.destination}
📅 *Date*: ${formattedDate} at ${form.time}

👤 *Name*: ${form.name}
📞 *Phone*: ${form.phone}
✉️ *Email*: ${form.email}
    `.trim();

    return `${base}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    window.open(buildWhatsAppLink(), '_blank');
  };

  return (
    <main className="booking-page">
      <div className="booking-container">
        <h1 className="booking-title">Book Your Ride</h1>
        <p className="booking-subtitle">
          Fill in the form below and we&apos;ll confirm your luxury transfer shortly.
        </p>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="booking-grid">
            <input
              type="text"
              required
              placeholder="Full Name"
              className="input-style"
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              className="input-style"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="input-style"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Pickup Location"
              className="input-style"
              value={form.pickup}
              onChange={(e) => handleChange('pickup', e.target.value)}
            />
            <input
              type="text"
              required
              placeholder="Destination"
              className="input-style"
              value={form.destination}
              onChange={(e) => handleChange('destination', e.target.value)}
            />
            <div className="booking-datetime">
              <input
                type="date"
                required
                className="input-style"
                value={form.date}
                onChange={(e) => handleChange('date', e.target.value)}
              />
              <input
                type="time"
                required
                className="input-style"
                value={form.time}
                onChange={(e) => handleChange('time', e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`booking-submit ${!isFormValid ? 'disabled' : ''}`}
          >
            Request via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
