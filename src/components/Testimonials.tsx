'use client';

import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

type Testimonial = {
  name: string;
  image: string;
  text: string;
  rating: number;
  relative_time_description: string;
};

const fallbackTestimonials: Testimonial[] = [
  {
    name: 'John A.',
    image: '/images/testimonials/john.jpg',
    text: 'Absolutely impeccable service. On time, professional and luxurious. Highly recommend LF Airport Transfers!',
    rating: 5,
    relative_time_description: 'Just now',
  },
  {
    name: 'Amelia R.',
    image: '/images/testimonials/amelia.jpg',
    text: 'The chauffeur was so courteous and professional. The V-Class was spotless and elegant. 10/10 experience.',
    rating: 5,
    relative_time_description: 'Just now',
  },
  {
    name: 'Carlos D.',
    image: '/images/testimonials/carlos.jpg',
    text: 'Smooth booking process, great price and truly first-class treatment from start to finish.',
    rating: 5,
    relative_time_description: 'Just now',
  },
];

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Testimonials() {
  const { data: reviews, error } = useSWR('/api/reviews', fetcher);

  const testimonials: Testimonial[] = !error && reviews?.length
    ? reviews.map((r: any) => ({
        name: r.author_name,
        image: r.profile_photo_url || '/images/testimonials/default.jpg',
        text: r.text,
        rating: r.rating,
        relative_time_description: r.relative_time_description,
      }))
    : fallbackTestimonials;

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-header">
        <h2 id="testimonials-title" className="testimonials-title">
          What Our Clients Say
        </h2>
        <p className="testimonials-subtitle">
          Trusted by executives, families and VIPs across London.
        </p>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
          bulletClass: 'swiper-custom-bullet',
          bulletActiveClass: 'swiper-custom-bullet-active',
        }}
        className="testimonials-slider"
        aria-label="Client testimonials carousel"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} aria-label={`Testimonial from ${item.name}`}>
            <figure className="testimonial-card">
              <Image
                src={item.image}
                alt={`Photo of ${item.name}`}
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="testimonial-avatar"
                onError={(e: any) => (e.currentTarget.src = '/images/testimonials/default.jpg')}
              />

              <figcaption className="testimonial-stars" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`testimonial-star ${i < item.rating ? 'active' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <title>{i < item.rating ? 'Rated' : 'Unrated'}</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.22 3.75a1 1 0 00.95.69h3.947c.969 0 1.371 1.24.588 1.81l-3.192 2.32a1 1 0 00-.364 1.118l1.221 3.75c.3.921-.755 1.688-1.54 1.118l-3.193-2.32a1 1 0 00-1.175 0l-3.193 2.32c-.784.57-1.838-.197-1.539-1.118l1.22-3.75a1 1 0 00-.364-1.118l-3.192-2.32c-.783-.57-.38-1.81.588-1.81h3.947a1 1 0 00.951-.69l1.22-3.75z" />
                  </svg>
                ))}
              </figcaption>

              <blockquote className="testimonial-text">“{item.text}”</blockquote>

              <div className="testimonial-footer">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-time">{item.relative_time_description}</span>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-custom-pagination" />
    </section>
  );
}
