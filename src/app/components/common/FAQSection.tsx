'use client';

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  isExpanded?: boolean;
}

const FAQSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<string>('01');

  const faqData: FAQItem[] = [
    {
      id: '01',
      number: '01',
      question: 'What is Social Media Marketing (SMM)?',
      answer:
        'Start by conducting market research, creating a business plan, registering your agency, and securing the necessary licenses and permits. Then, establish your services, build a team.',
      isExpanded: true,
    },
    {
      id: '02',
      number: '02',
      question: 'Why Social Media Marketing is important for Businesses?',
      answer:
        'Social Media Marketing helps businesses reach their target audience, build brand awareness, and drive engagement through various social platforms.',
    },
    {
      id: '03',
      number: '03',
      question: 'Why Social Media Marketing is important for Businesses?',
      answer:
        'It provides cost-effective marketing solutions and allows for real-time customer interaction and feedback.',
    },
    {
      id: '04',
      number: '04',
      question: 'Why Social Media Marketing is important for Businesses?',
      answer:
        'SMM enables businesses to track and analyze their marketing performance with detailed analytics and insights.',
    },
    {
      id: '05',
      number: '05',
      question: 'Why Social Media Marketing is important for Businesses?',
      answer:
        'It helps in building long-term customer relationships and loyalty through consistent engagement and valuable content.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? '' : id);
  };

  const ChevronIcon: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-200 ${
        isExpanded ? 'rotate-180' : ''
      }`}
    >
      <path
        d="M12.5781 16.8356C12.7045 16.9621 12.8521 17.0253 13.0207 17.0253C13.1893 17.0253 13.3368 16.9621 13.4633 16.8356L17.0041 13.2949C17.2148 13.0841 17.2675 12.8523 17.1621 12.5993C17.0567 12.3464 16.8565 12.22 16.5615 12.22H9.47988C9.18482 12.22 8.98459 12.3464 8.87921 12.5993C8.77383 12.8523 8.82652 13.0841 9.03728 13.2949L12.5781 16.8356ZM13.0207 26.1302C11.2714 26.1302 9.62741 25.798 8.08886 25.1337C6.5503 24.4694 5.21197 23.5686 4.07386 22.4313C2.93575 21.2932 2.03495 19.9549 1.37148 18.4163C0.708003 16.8778 0.375843 15.2339 0.375 13.4845C0.375 11.7352 0.70716 10.0913 1.37148 8.55273C2.0358 7.01417 2.93659 5.67584 4.07386 4.53773C5.21197 3.39962 6.5503 2.49882 8.08886 1.83535C9.62741 1.17187 11.2714 0.83971 13.0207 0.838867C14.77 0.838867 16.4139 1.17103 17.9525 1.83535C19.491 2.49967 20.8294 3.40046 21.9675 4.53773C23.1056 5.67584 24.0068 7.01417 24.6711 8.55273C25.3354 10.0913 25.6672 11.7352 25.6663 13.4845C25.6663 15.2339 25.3342 16.8778 24.6699 18.4163C24.0055 19.9549 23.1047 21.2932 21.9675 22.4313C20.8294 23.5695 19.491 24.4707 17.9525 25.135C16.4139 25.7993 14.77 26.131 13.0207 26.1302ZM13.0207 23.6011C15.8449 23.6011 18.237 22.621 20.1971 20.661C22.1572 18.7009 23.1372 16.3087 23.1372 13.4845C23.1372 10.6603 22.1572 8.2682 20.1971 6.30812C18.237 4.34804 15.8449 3.368 13.0207 3.368C10.1965 3.368 7.80433 4.34804 5.84425 6.30812C3.88417 8.2682 2.90413 10.6603 2.90413 13.4845C2.90413 16.3087 3.88417 18.7009 5.84425 20.661C7.80433 22.621 10.1965 23.6011 13.0207 23.6011Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section className="box-border px-4 pt-20 max-md:pt-10 max-sm:pt-8">
      <div className="box-border w-full max-w-[1172px] mx-auto my-0 p-0">
        <h2 className="box-border text-[#0B1B35] text-center text-[34px] font-semibold leading-[51px] mb-[40px] max-md:mb-5 m-0 p-0 max-md:text-[28px] max-md:leading-9 max-sm:text-2xl max-sm:leading-[30px]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-7">
          {faqData.map((faq, index) => {
            const isExpanded = expandedFAQ === faq.id;
            // const isFirst = index === 0;

            return (
              <article
                key={faq.id}
                className={`box-border w-full min-h-[156px] relative cursor-pointer ${
                  index === faqData.length - 1 ? '' : 'mb-7'
                } m-0 p-[46px] rounded-[18px] border-[1.15px] border-solid border-[#207DE9] max-sm:px-5 max-sm:py-[30px] transition-all duration-300 ${
                  isExpanded
                    ? 'bg-[#226DFE] text-white'
                    : 'bg-white text-[#0B1B35] hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(faq.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-controls={`faq-content-${faq.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ(faq.id);
                  }
                }}
              >
                <div
                  className={`box-border text-sm font-normal leading-[21px] opacity-80 mb-2.5 m-0 p-0 ${
                    isExpanded ? 'text-white' : 'text-[#0B1B35]'
                  }`}
                >
                  {faq.number}
                </div>

                <h3
                  className={`box-border text-[22px] font-${
                    isExpanded ? 'semibold' : 'normal'
                  } leading-${
                    isExpanded ? '[44px]' : '[33px]'
                  } mb-5 m-0 p-0 max-sm:text-base max-sm:leading-[22px] max-sm:pr-10 ${
                    isExpanded
                      ? 'text-white tracking-[0.44px]'
                      : 'text-[#0B1B35]'
                  }`}
                >
                  {faq.question}
                </h3>

                {isExpanded && (
                  <div
                    id={`faq-content-${faq.id}`}
                    className="box-border text-white text-[22px] font-normal leading-[31px] opacity-60 m-0 p-0 max-sm:text-sm max-sm:leading-5 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}

                <div className="absolute top-[46px] right-[46px] max-sm:top-[30px] max-sm:right-5">
                  <div className={isExpanded ? 'text-white' : 'text-[#0B1B35]'}>
                    <ChevronIcon isExpanded={isExpanded} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
