import { CheckCircle2 } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
}) => {
  return (
    <article className="box-border shadow-[0px_4px_20px_rgba(0,0,0,0.08)] text-left transition-transform duration-[0.3s] ease-[ease] hover:transform hover:scale-105 bg-white m-0 px-[30px] py-10 rounded-[20px] max-sm:px-5 max-sm:py-[30px]">
      <div className="box-border w-24 h-24 flex items-center justify-center bg-gradient-to-b from-[#ffeeee]/25 to-[#226dfe]/25 border border-[#6f6868]  mt-0 mb-6 mx-auto p-0 rounded-[50%]">
        {icon}
      </div>

      <h3 className="box-border text-[#0B1B35] text-2xl font-semibold leading-8 mb-4 m-0 p-0">
        {title}
      </h3>

      <p className="box-border text-[#0B1B35] text-base font-light leading-6 opacity-70 mb-6 m-0 p-0">
        {description}
      </p>

      <ul className="flex flex-col gap-2 mb-6 m-0 p-0">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-[#0B1B35] text-sm font-light leading-5 text-left"
          >
            {/* Circle with check icon */}
            <CheckCircle2 size={14} className="text-[#226DFE] mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

     <button className="w-full bg-[#2563FF] text-white text-base font-medium py-3 rounded-md hover:bg-[#1E4ED8] transition-colors duration-200">
  Explore
</button>

    </article>
  );
};
