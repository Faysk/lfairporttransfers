'use client';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CTAButtons from '../components/CTAButtons';
import Benefits from '../components/Benefits';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Fleet from '../components/Fleet';
import AnimatedMapBackground from '../components/AnimatedMapBackground';

export default function Home() {
  return (
    <main className="page-root">
      {/* 🌐 Animated background behind all content */}
      <AnimatedMapBackground />

      {/* 🔝 Fixed top navigation */}
      <Navbar />

      {/* 🏁 Hero Section */}
      <section id="hero" className="hero-section" aria-label="LF Airport Transfers Hero">
        <div className="hero-container">
          <Hero />

          <h1 className="hero-heading">
            Your Journey, <br className="hide-on-mobile" /> Our Priority
          </h1>

          <p className="hero-subtitle">
            Punctual, reliable and elegant chauffeur services — tailored for you.
          </p>

          <div className="hero-cta">
            <CTAButtons />
          </div>

          <div className="hero-benefits">
            <Benefits />
          </div>
        </div>
      </section>

      {/* 🚘 Fleet Section */}
      <section id="fleet" className="section section-dark" aria-label="Fleet of luxury vehicles">
        <Fleet />
      </section>

      {/* 🛎️ Services Section */}
      <section id="services" className="section section-dark" aria-label="Chauffeur Services Offered">
        <Services />
      </section>

      {/* 💬 Testimonials Section */}
      <section id="testimonials" className="section section-dark" aria-label="Client Testimonials">
        <Testimonials />
      </section>

      {/* 📞 Contact Section */}
      <section id="contact" className="section section-dark" aria-label="Contact LF Airport Transfers">
        <Contact />
      </section>
    </main>
  );
}
