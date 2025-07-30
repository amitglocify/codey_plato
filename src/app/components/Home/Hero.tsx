'use client';
import React, { useEffect, useState } from 'react';

const words = ['BRAND', 'SCORE', 'REACH'];

export const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const typingSpeed = isDeleting ? 100 : 120;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index]);

  return (                                                                                                                                                                      
    <section
      className="box-border w-full h-[651px] max-md:h-auto relative flex flex-col items-center justify-center mt-[123px] max-md:mt-[61px] px-4 py-10" 
      style={{
        backgroundColor: '#b2d2f9',
        backgroundImage: "url('/images/home/hero-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="box-border relative z-[2] text-center max-w-[932px] mb-10 m-0 p-0">
        <h1 className="box-border text-[#0B1B35] text-[70px] font-bold leading-[81px] uppercase mb-3 m-0 p-0 max-md:text-5xl max-md:leading-[56px] max-sm:text-[32px] max-sm:leading-[38px]  gap-3">
          BOOST YOUR
          <span className="text-[#226DFE] inline-block min-w-[8rem] sm:min-w-[12rem] md:min-w-[16.5rem] lg:min-w-[16.5rem] xl:min-w-[16.5rem]">
            {displayText}
          </span>
        </h1>
        <h1 className="box-border text-[#0B1B35] text-[70px] font-bold leading-[81px] uppercase mb-3 m-0 p-0 max-md:text-5xl max-md:leading-[56px] max-sm:text-[32px] max-sm:leading-[38px]">
          IN JUST 6 MONTHS
        </h1>
        <p className="box-border text-[#0B1B35] text-[22px] font-normal leading-[28.5px] m-0 p-0 max-md:text-lg max-sm:text-base">
          (Discover Strategies that can instantly help you to increase your
          Conversion & Increase your sales by Minimum 20%.)
        </p>
      </div>
      <div className="relative">
        <button className="box-border max-w-[504px] min-h-[49px] flex items-center justify-center relative z-[2] cursor-pointer bg-[#226DFE] hover:bg-[#1e5dd1] transition-colors mb-[15px] px-4 py rounded-[10px]  max-sm:min-h-[40px]">
          <span className="box-border text-white text-xl font-bold leading-[28.5px] uppercase m-0 p-0 max-md:text-base max-sm:text-sm">
            Claim Your 30-minute Free Consultation
          </span>
        </button>

        {/* Decorative elements */}
        <div className="box-border absolute w-[35px] h-[38px] m-0 p-0 left-[-50px] top-[6.5px] max-sm:hidden">
          <svg
            width="36"
            height="38"
            viewBox="0 0 36 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3159 0.134766C8.86512 0.134766 0.393066 8.60681 0.393066 19.0576C0.393066 29.5084 8.86512 37.9805 19.3159 37.9805C19.8208 37.9805 20.321 37.9597 20.8159 37.9209C11.0663 37.1563 3.39307 29.0036 3.39307 19.0576C3.39307 9.11164 11.0663 0.957881 20.8159 0.193359C20.321 0.154546 19.8208 0.134769 19.3159 0.134766Z"
              fill="#226DFE"
            />
            <path
              d="M28.844 4.55762C20.8359 4.55762 14.344 11.0495 14.344 19.0576C14.344 27.0657 20.8359 33.5576 28.844 33.5576C29.2309 33.5576 29.6142 33.5415 29.9934 33.5117C22.5226 32.9259 16.6429 26.6789 16.6429 19.0576C16.6429 11.4363 22.5226 5.18837 29.9934 4.60254C29.6142 4.5728 29.2309 4.55762 28.844 4.55762Z"
              fill="#226DFE"
            />
            <path
              d="M35.0214 11.5576C30.8793 11.5577 27.5214 14.9155 27.5214 19.0576C27.5214 23.1997 30.8793 26.5575 35.0214 26.5576C35.2216 26.5576 35.4199 26.5466 35.6161 26.5312C31.752 26.2281 28.7108 22.9996 28.7108 19.0576C28.7108 15.1156 31.752 11.8861 35.6161 11.583C35.4199 11.5676 35.2215 11.5576 35.0214 11.5576Z"
              fill="#226DFE"
            />
          </svg>
        </div>

        <div className="box-border absolute w-[35px] h-[38px] m-0 p-0 right-[-50px] top-[6.5px] max-sm:hidden">
          <svg
            width="36"
            height="38"
            viewBox="0 0 36 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6844 0.134766C27.1353 0.134766 35.6073 8.60681 35.6073 19.0576C35.6073 29.5084 27.1353 37.9805 16.6844 37.9805C16.1796 37.9805 15.6794 37.9597 15.1844 37.9209C24.934 37.1563 32.6073 29.0036 32.6073 19.0576C32.6073 9.11164 24.9341 0.957881 15.1844 0.193359C15.6793 0.154546 16.1796 0.134769 16.6844 0.134766Z"
              fill="#226DFE"
            />
            <path
              d="M7.15634 4.55762C15.1645 4.55762 21.6563 11.0495 21.6563 19.0576C21.6563 27.0657 15.1645 33.5576 7.15634 33.5576C6.76945 33.5576 6.38618 33.5415 6.00693 33.5117C13.4777 32.9259 19.3575 26.6789 19.3575 19.0576C19.3575 11.4363 13.4778 5.18837 6.00693 4.60254C6.38615 4.5728 6.76948 4.55762 7.15634 4.55762Z"
              fill="#226DFE"
            />
            <path
              d="M0.979004 11.5576C5.12106 11.5577 8.479 14.9155 8.479 19.0576C8.479 23.1997 5.12106 26.5575 0.979004 26.5576C0.778811 26.5576 0.580516 26.5466 0.384277 26.5312C4.24838 26.2281 7.28955 22.9996 7.28955 19.0576C7.28955 15.1156 4.24842 11.8861 0.384277 11.583C0.580491 11.5676 0.778836 11.5576 0.979004 11.5576Z"
              fill="#226DFE"
            />
          </svg>
        </div>
      </div>

      <p className="box-border text-[#0B1B35] text-sm font-medium leading-[28.5px] uppercase relative z-[2] m-0 p-0">
        Be quick! FREE spots are almost gone.
      </p>
    </section>
  );
};
