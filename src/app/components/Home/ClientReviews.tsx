'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  content: string;
  avatar: string;
  rating: number;
  bgColor: string;
}

export const ClientReviews: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Lauren White',
      position: 'Head of Sales',
      company: 'Zapier',
      companyLogo: '/images/home/zapier.png',
      content:
        "Zapier's remote work processes have been optimized by Plato design's collaboration enhancements, improving communication and productivity.",
      avatar: '/images/home/laura.png',
      rating: 5,
      bgColor: '#FFF5E4',
    },
    {
      id: 2,
      name: 'Andrew Jones',
      position: 'Head of Sales',
      company: 'LinkedIn',
      companyLogo: '/images/home/linked.png',
      content:
        "Zapier's remote work processes have been optimized by Plato design's collaboration enhancements, improving communication and productivity.",
      avatar: '/images/home/andrew.png',
      rating: 5,
      bgColor: '#F1F5FD',
    },
    {
      id: 3,
      name: 'Adam Smith',
      position: 'Head of Sales',
      company: 'Spotify',
      companyLogo: '/images/home/spotify.png',
      content:
        "Zapier's remote work processes have been optimized by Plato design's collaboration enhancements, improving communication and productivity.",
      avatar: '/images/home/adam.png',
      rating: 5,
      bgColor: '#F5FFF6',
    },
    {
      id: 4,
      name: 'Emily Clark',
      position: 'CTO',
      company: 'Slack',
      companyLogo: '/images/home/linked.png',
      content:
        "Plato's user-first designs helped us reduce churn by 35% and improve our onboarding process dramatically.",
      avatar: '/images/home/andrew.png',
      rating: 5,
      bgColor: '#FFF0F0',
    },
  ];

  // Update card count based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const totalReviews = reviews.length;
  const visibleReviews = reviews.slice(startIndex, startIndex + cardsToShow);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % (totalReviews - cardsToShow + 1));
  };

  const prev = () => {
    setStartIndex(
      (prev) =>
        (prev - 1 + (totalReviews - cardsToShow + 1)) %
        (totalReviews - cardsToShow + 1)
    );
  };

  return (
    <section className="px-4 pt-20  max-md:pt-10 max-sm:pt-8">
      <div className="box-border max-w-[1172px] mx-auto">
        <h2 className="box-border text-[#0B1B35] text-center text-[34px] font-semibold leading-[51px] mb-10 max-md:mb-5 max-md:text-[28px] max-md:leading-9 max-sm:text-2xl max-sm:leading-[30px]">
          What Customers Say About Us?
        </h2>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 bg-white border border-blue-500 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100 transition"
            aria-label="Previous"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-5 overflow-hidden">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="w-[300px] md:w-[340px] rounded-xl shadow-md max-sm:p-[10px] p-10 flex flex-col justify-between "
                style={{ backgroundColor: review.bgColor }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="text-[#0B1B35] text-md font-bold">
                        {review.name}
                      </h3>
                      <CheckCircle2 size={14} className="text-[#226DFE]" />
                    </div>
                    <p className="text-sm text-[#8A898E]">
                      {review.position} at {review.company}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <Image
                    src={review.companyLogo}
                    alt={review.company}
                    width={80}
                    height={20}
                    className="object-contain h-5 w-auto"
                  />
                </div>

                <p className="text-[#0B1B35] text-sm mb-4">{review.content}</p>

                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="15"
                      height="14"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.51407 14.0029L15.0774 17.4234L13.601 10.9768L18.5162 6.63924L12.0437 6.07986L9.51407 0L6.98448 6.07986L0.511963 6.63924L5.42711 10.9768L3.95077 17.4234L9.51407 14.0029Z"
                        fill="#F8A401"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 bg-white border border-blue-500 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100 transition"
            aria-label="Next"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
