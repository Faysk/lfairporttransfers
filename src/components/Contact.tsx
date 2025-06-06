'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const buildWhatsAppLink = () => {
    const base = 'https://wa.me/447541494500';
    const text = `Hello, my name is ${form.name}.\n\n${form.message}\n\nYou can reply to me at: ${form.email}`;
    return `${base}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-subtitle">
          Ready to book or have a question? Send us a message and we’ll get back to you promptly.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.open(buildWhatsAppLink(), '_blank');
        }}
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            required
            rows={4}
            placeholder="Tell us how we can help you..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button type="submit" className="contact-button">
          Send via WhatsApp
        </button>
      </form>
    </section>
  );
}
