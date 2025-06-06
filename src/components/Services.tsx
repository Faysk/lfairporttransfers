'use client';

import { FaPlaneDeparture, FaBriefcase, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Airport Transfers',
    icon: <FaPlaneDeparture className="service-icon" />,
    description:
      'Transfers to and from all major London airports — Heathrow, Gatwick, Luton and Stansted included.',
  },
  {
    title: 'Corporate Chauffeur',
    icon: <FaBriefcase className="service-icon" />,
    description:
      'Executive travel solutions for professionals and VIPs — always discreet, always on time.',
  },
  {
    title: 'Hourly Hire',
    icon: <FaClock className="service-icon" />,
    description:
      'Book a chauffeur by the hour — perfect for events, meetings or city tours in full comfort.',
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">Our Services</h2>
        <p className="services-subtitle">
          Luxury transport tailored for your needs — blending comfort, elegance and punctuality.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="service-header">
              {service.icon}
              <h3 className="service-name">{service.title}</h3>
            </div>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
