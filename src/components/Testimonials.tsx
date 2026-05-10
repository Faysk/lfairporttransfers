'use client';

import { useEffect, useMemo, useState } from 'react';
import { Quote, Star } from 'lucide-react';

type GoogleReview = {
  author_name: string;
  text: string;
  rating: number;
  relative_time_description: string;
};

type ReviewCard = {
  name: string;
  text: string;
  rating: number;
  label: string;
};

const fallbackReviews: ReviewCard[] = [
  {
    name: 'Airport arrivals',
    label: 'What clients value',
    text: 'Calm pickup coordination, clean Mercedes vehicles and clear communication after landing.',
    rating: 5,
  },
  {
    name: 'Corporate travel',
    label: 'What clients value',
    text: 'Discreet chauffeurs, punctual schedules and a quiet cabin between meetings.',
    rating: 5,
  },
  {
    name: 'Family transfers',
    label: 'What clients value',
    text: 'Space for luggage, patient drivers and a smoother route from terminal to door.',
    rating: 5,
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);

  useEffect(() => {
    let active = true;

    fetch('/api/reviews')
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        if (active && Array.isArray(data)) {
          setReviews(data.filter((review) => review?.text).slice(0, 3));
        }
      })
      .catch(() => {
        if (active) setReviews([]);
      });

    return () => {
      active = false;
    };
  }, []);

  const cards = useMemo<ReviewCard[]>(() => {
    if (!reviews.length) return fallbackReviews;

    return reviews.map((review) => ({
      name: review.author_name,
      text: review.text,
      rating: review.rating,
      label: review.relative_time_description || 'Google review',
    }));
  }, [reviews]);

  return (
    <section id="reviews" className="testimonials-section">
      <div className="section-shell">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">Reputation signals</p>
            <h2>Trusted for punctual, polished private travel.</h2>
          </div>
          <p>
            The best chauffeur experience is quiet, precise and reassuring. These are the
            standards the site now brings forward before a customer asks for a quote.
          </p>
        </div>

        <div className="testimonials-grid">
          {cards.map((item) => (
            <article key={`${item.name}-${item.label}`} className="testimonial-card">
              <Quote aria-hidden="true" className="testimonial-quote" />

              <div className="testimonial-stars" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className={index < item.rating ? 'active' : ''}
                  />
                ))}
              </div>

              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-footer">
                <span className="testimonial-avatar" aria-hidden="true">
                  {initials(item.name)}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
