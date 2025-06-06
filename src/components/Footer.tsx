import Link from 'next/link';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* ℹ️ Identidade */}
        <div className="footer-column">
          <h3 className="footer-title">LF Airport Transfers</h3>
          <p className="footer-description">
            Premium chauffeur services in London. Travel in comfort and arrive in style — 24/7 availability with a luxury fleet.
          </p>
        </div>

        {/* 🧭 Links rápidos */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Quick Links</h4>
          <Link href="/" className="footer-link">Home</Link>
          <Link href="/booking" className="footer-link">Booking</Link>
          <a href="https://wa.me/447541494500" target="_blank" className="footer-link">WhatsApp</a>
        </div>

        {/* 📞 Contato */}
        <div className="footer-column">
          <h4 className="footer-subtitle">Contact</h4>

          <a href="mailto:info@lfairporttransfers.co.uk" className="footer-contact">
            <FaEnvelope className="footer-icon gold" />
            info@lfairporttransfers.co.uk
          </a>

          <a href="https://wa.me/447541494500" className="footer-contact" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="footer-icon green" />
            +44 7541 494500
          </a>

          <a href="https://instagram.com/lfairporttransfers" className="footer-contact" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon pink" />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} LF Airport Transfers. Crafted by{' '}
        <a href="https://faysk.top" className="footer-credit" target="_blank" rel="noopener noreferrer">
          Faysk
        </a>
      </div>
    </footer>
  );
}
