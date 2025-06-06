'use client';

import useSWR from 'swr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type GoogleReview = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  relative_time_description: string;
};

export default function HomePage() {
  const { data: reviews, isLoading, error } = useSWR<GoogleReview[]>('/api/reviews', fetcher);

  return (
    <main className="reviews-page">
      <div className="reviews-header">
        <h2 className="reviews-title">What Our Clients Say</h2>
        <p className="reviews-subtitle">
          Trusted by executives, families and VIPs across London.
        </p>
      </div>

      {isLoading && <p className="reviews-loading">Loading reviews...</p>}
      {error && <p className="reviews-error">Failed to load reviews.</p>}

      {!isLoading && !error && reviews && (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          autoplay={{ delay: 7000 }}
          pagination={{ clickable: true }}
          className="reviews-swiper"
        >
          {reviews.map((review: GoogleReview, index: number) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <Image
                  src={review.profile_photo_url || '/images/testimonials/default.jpg'}
                  alt={review.author_name}
                  width={72}
                  height={72}
                  className="review-avatar"
                />
                <p className="review-text">“{review.text}”</p>
                <span className="review-author">{review.author_name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </main>
  );
}
