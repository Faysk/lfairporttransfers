'use client';

import Link from 'next/link';
import { ArrowLeft, CalendarClock, CarFront, Luggage, MessageCircle, Plane } from 'lucide-react';
import { useMemo, useState } from 'react';
import { buildWhatsAppUrl } from '@/lib/contact';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  pickup: '',
  destination: '',
  date: '',
  time: '',
  passengers: '1',
  luggage: '1',
  vehicle: 'Best vehicle for my journey',
  transferType: 'Airport transfer',
  flightNumber: '',
  childSeat: 'No',
  notes: '',
};

const vehicleOptions = [
  'Best vehicle for my journey',
  'Mercedes EQS',
  'Mercedes E-Class',
  'Mercedes V-Class',
];

export default function BookingPage() {
  const [form, setForm] = useState(initialForm);

  const minimumDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const requiredFields: Array<keyof typeof form> = [
    'name',
    'email',
    'phone',
    'pickup',
    'destination',
    'date',
    'time',
  ];

  const isFormValid = requiredFields.every((field) => form[field].trim() !== '');

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const formatDate = (date: string) => {
    const parsedDate = new Date(`${date}T00:00:00`);
    if (Number.isNaN(parsedDate.getTime())) return '';
    return parsedDate.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  const buildMessage = () => {
    const formattedDate = formatDate(form.date);

    return `
*New Chauffeur Booking Request*

*Journey*
Transfer type: ${form.transferType}
Pickup: ${form.pickup}
Destination: ${form.destination}
Date/time: ${formattedDate} at ${form.time}
Flight number: ${form.flightNumber || 'Not provided'}

*Passengers*
Passengers: ${form.passengers}
Luggage: ${form.luggage}
Child seat: ${form.childSeat}
Preferred vehicle: ${form.vehicle}

*Contact*
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

*Notes*
${form.notes || 'No extra notes.'}
    `.trim();
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isFormValid) return;
    window.open(buildWhatsAppUrl(buildMessage()), '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="booking-page">
      <div className="booking-shell">
        <Link href="/#home" className="booking-back">
          <ArrowLeft aria-hidden="true" />
          Back to home
        </Link>

        <section className="booking-hero" aria-labelledby="booking-title">
          <div>
            <p className="eyebrow">Private quote request</p>
            <h1 id="booking-title">Book a London chauffeur transfer.</h1>
            <p>
              Add your journey details and we will confirm the right Mercedes, availability and
              quote directly by WhatsApp.
            </p>
          </div>

          <div className="booking-assurance">
            <span>
              <Plane aria-hidden="true" />
              Flight tracking available
            </span>
            <span>
              <CarFront aria-hidden="true" />
              EQS, E-Class & V-Class
            </span>
            <span>
              <CalendarClock aria-hidden="true" />
              24/7 airport coverage
            </span>
            <span>
              <Luggage aria-hidden="true" />
              Luggage-aware vehicle matching
            </span>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="booking-form-section">
            <h2>Contact details</h2>
            <div className="booking-grid">
              <label className="form-group">
                <span>Full name</span>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Phone number</span>
                <input
                  type="tel"
                  required
                  placeholder="+44..."
                  value={form.phone}
                  onChange={(event) => handleChange('phone', event.target.value)}
                />
              </label>

              <label className="form-group wide">
                <span>Email address</span>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={form.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                />
              </label>
            </div>
          </div>

          <div className="booking-form-section">
            <h2>Journey details</h2>
            <div className="booking-grid">
              <label className="form-group">
                <span>Transfer type</span>
                <select
                  value={form.transferType}
                  onChange={(event) => handleChange('transferType', event.target.value)}
                >
                  <option>Airport transfer</option>
                  <option>Corporate chauffeur</option>
                  <option>Hourly hire</option>
                  <option>Event transfer</option>
                  <option>Long-distance journey</option>
                </select>
              </label>

              <label className="form-group">
                <span>Preferred vehicle</span>
                <select
                  value={form.vehicle}
                  onChange={(event) => handleChange('vehicle', event.target.value)}
                >
                  {vehicleOptions.map((vehicle) => (
                    <option key={vehicle}>{vehicle}</option>
                  ))}
                </select>
              </label>

              <label className="form-group">
                <span>Pickup location</span>
                <input
                  type="text"
                  required
                  placeholder="Airport, terminal, hotel or address"
                  value={form.pickup}
                  onChange={(event) => handleChange('pickup', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Destination</span>
                <input
                  type="text"
                  required
                  placeholder="Destination address"
                  value={form.destination}
                  onChange={(event) => handleChange('destination', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Date</span>
                <input
                  type="date"
                  required
                  min={minimumDate}
                  value={form.date}
                  onChange={(event) => handleChange('date', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Time</span>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(event) => handleChange('time', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Flight number</span>
                <input
                  type="text"
                  placeholder="e.g. BA117"
                  value={form.flightNumber}
                  onChange={(event) => handleChange('flightNumber', event.target.value)}
                />
              </label>

              <label className="form-group">
                <span>Child seat</span>
                <select
                  value={form.childSeat}
                  onChange={(event) => handleChange('childSeat', event.target.value)}
                >
                  <option>No</option>
                  <option>Yes, please advise</option>
                </select>
              </label>
            </div>
          </div>

          <div className="booking-form-section">
            <h2>Passengers and notes</h2>
            <div className="booking-grid compact-grid">
              <label className="form-group">
                <span>Passengers</span>
                <select
                  value={form.passengers}
                  onChange={(event) => handleChange('passengers', event.target.value)}
                >
                  {['1', '2', '3', '4', '5', '6+'].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>

              <label className="form-group">
                <span>Luggage</span>
                <select
                  value={form.luggage}
                  onChange={(event) => handleChange('luggage', event.target.value)}
                >
                  {['0', '1', '2', '3', '4', '5', '6+'].map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </label>

              <label className="form-group wide">
                <span>Additional notes</span>
                <textarea
                  rows={4}
                  placeholder="Return journey, meet & greet, luggage details, waiting time, special requests..."
                  value={form.notes}
                  onChange={(event) => handleChange('notes', event.target.value)}
                />
              </label>
            </div>
          </div>

          <button type="submit" disabled={!isFormValid} className="booking-submit">
            <MessageCircle aria-hidden="true" />
            Request quote via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
