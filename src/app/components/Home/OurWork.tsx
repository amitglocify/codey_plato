import React from 'react';
import Image, { StaticImageData } from 'next/image';
import WorkOne from '../../../../public/images/home/work-one.png';
import WorkTwo from '../../../../public/images/home/work-two.png';
import WorkThree from '../../../../public/images/home/work-three.png';
import WorkFour from '../../../../public/images/home/work-four.png';

import WorkOneLogo from '../../../../public/images/home/work-one-logo.svg';
import WorkTwoLogo from '../../../../public/images/home/work-two-logo.svg';
import WorkThreeLogo from '../../../../public/images/home/work-three-logo.svg';
import WorkFourLogo from '../../../../public/images/home/work-four-logo.svg';

interface WorkItem {
  id: number;
  image: StaticImageData;
  logo: StaticImageData;
  logoAlt: string;
  span?: string;
}

export const OurWork: React.FC = () => {
  const workItems: WorkItem[] = [
    {
      id: 1,
      image: WorkOne,
      logo: WorkOneLogo,
      logoAlt: 'Pet Partners',
      span: 'row-span-2',
    },
    {
      id: 2,
      image: WorkTwo,
      logo: WorkTwoLogo,
      logoAlt: 'Logo 2',
    },
    {
      id: 3,
      image: WorkThree,
      logo: WorkThreeLogo,
      logoAlt: 'Logo 3',
    },
    {
      id: 4,
      image: WorkFour,
      logo: WorkFourLogo,
      logoAlt: 'Lenity',
    },
  ];

  return (
    <section className="px-4 pt-20  max-md:pt-[10px] max-sm:pt-8" id="work">
      <div className="box-border max-w-[1172px] mx-auto">
        <div className="box-border text-center mb-[40px] max-md:mb-5">
          <h2 className="box-border text-[#0B1B35] text-center text-[34px] font-semibold leading-[51px] m-0 p-0 max-md:text-[28px] max-md:leading-9 max-sm:text-2xl max-sm:leading-[30px] mb-2">
            Our Work
          </h2>
          <p className="box-border text-[#0B1B35] text-[22px] max-sm:text-[16px] font-normal leading-9 max-sm:leading-7 opacity-80 m-0 p-0">
            By information about design the world to the best instructors, heatc
            helping By information
          </p>
        </div>

        <div className="box-border grid grid-cols-[1fr_1fr] gap-[30px] max-w-[1164px] mx-auto my-0 p-0 max-md:grid-cols-[1fr] max-md:gap-5">
          {workItems.map((item, index) => (
            <article
              key={index}
              className={`box-border relative overflow-hidden rounded-xl group cursor-pointer`}
            >
              <Image
                src={item.image}
                alt={`Work example ${item.id}`}
                width={536}
                height={325}
                className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="box-border absolute w-full h-full bg-[#00000033] bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300  left-0 top-0" />
              <Image
                src={item.logo}
                alt={item.logoAlt}
                width={150}
                height={85}
                className="absolute max-w-[150px] max-md:max-w-[95px] max-h-[85px] left-6 max-md:left-3 top-[25px] max-md:top-3"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
