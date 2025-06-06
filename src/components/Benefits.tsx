import { FaLock, FaClock, FaSuitcaseRolling } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaLock className="benefit-icon" />,
    text: 'Secure payment & data protection',
  },
  {
    icon: <FaClock className="benefit-icon" />,
    text: 'On-time and reliable service',
  },
  {
    icon: <FaSuitcaseRolling className="benefit-icon" />,
    text: 'Tailored transport solutions',
  },
];

export default function Benefits() {
  return (
    <div className="benefits-grid">
      {benefits.map((item, index) => (
        <div key={index} className="benefit-card">
          {item.icon}
          <span className="benefit-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
