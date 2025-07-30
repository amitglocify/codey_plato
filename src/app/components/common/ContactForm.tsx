'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaBehance, FaInstagram } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  selectedServices: string[];
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    selectedServices: ['UX/ UI design'],
  });

  const services = [
    'UX/ UI design',
    'Web design',
    'Design system',
    'Graphic design',
    'Other',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(service)
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="px-4 py-20 max-md:py-10 max-sm:py-8">
      <section className="box-border flex max-md:flex-wrap w-full max-w-[1174px] justify-center items-center gap-[40px] shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)] rotate-[0.033deg] bg-[#226DFE] mx-auto px-[38px] py-[72px] rounded-[24px] max-md:flex-col max-md:h-auto max-md:gap-10 max-md:px-[16px] max-md:py-10 max-sm:px-5 max-sm:py-[16px]">
        <div className="box-border flex flex-col items-start gap-[55px] max-md:gap-[20px] w-[auto] max-lg:w-full">
          <h2 className="box-border w-[454px]  text-white text-5xl font-semibold m-0 p-0 max-lg:w-full max-md:text-4xl max-sm:text-[28px]">
            Let&apos;s talk on something great together
          </h2>

          <a
            href="mailto:PlatoDesign@gmail.com"
            className="box-border flex justify-center items-center gap-3 m-0 p-0 text-white text-lg font-normal leading-[18px] hover:underline"
          >
            <Mail className="w-[23px] h-[23px] text-white" />
            <span>PlatoDesign@gmail.com</span>
          </a>

          <a
            href="tel:+34123456789"
            className="box-border flex justify-center items-center gap-3 m-0 p-0 text-white text-lg font-normal leading-[18px] hover:underline"
          >
            <Phone className="w-[23px] h-[23px] text-white" />
            <span>+34 123 456 789</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Street+487+House"
            target="_blank"
            rel="noopener noreferrer"
            className="box-border flex justify-center items-center gap-3 m-0 p-0 text-white text-lg font-normal leading-[18px] hover:underline"
          >
            <MapPin className="w-[23px] h-[23px] text-white" />
            <span>123 Street 487 House</span>
          </a>

          <div className="box-border flex justify-center items-center gap-8 m-0 p-0">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={24} className="text-white" />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance size={24} className="text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="text-white" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="box-border flex w-[auto] max-lg:w-full flex-col justify-center items-start gap-[25px] bg-[#FFFEFE] m-0 px-[27px] py-[38px] rounded-[18px]"
        >
          <div className="box-border flex flex-col items-start gap-[9px] m-0 px-0 py-1">
            <label className="box-border text-[#226DFE] text-[15px] font-semibold leading-[18px] m-0 p-0">
              I&apos;m interested in:
            </label>
            <div className="box-border flex w-full max-w-full items-start content-start gap-[15px] flex-wrap m-0 p-0">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => handleServiceToggle(service)}
                  className={`box-border flex justify-center items-center gap-1.5 cursor-pointer transition-colors m-0 px-[15px] py-2 rounded-[10px] border-[0.8px] border-solid ${
                    formData.selectedServices.includes(service)
                      ? 'bg-[#226DFE] border-[#226DFE]'
                      : 'border-[#787878] hover:border-[#226DFE]'
                  }`}
                >
                  <span
                    className={`box-border text-xs font-normal leading-[18px] m-0 p-0 ${
                      formData.selectedServices.includes(service)
                        ? 'text-white'
                        : 'text-[#787878]'
                    }`}
                  >
                    {service}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="box-border flex flex-col items-start gap-[3px] self-stretch m-0 p-0">
            <label className="box-border flex-[1_0_0] text-sm font-semibold leading-3 text-[#226DFE] m-0 p-0">
              Your name
            </label>
            <div className="box-border flex flex-col items-start self-stretch m-0 px-3 py-[9px] border-b-[1.5px] border-b-[#226DFE] border-solid">
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="John Smith"
                className="box-border flex-[1_0_0] text-[#787878] text-xs font-normal leading-[18px] bg-transparent border-none outline-none w-full m-0 p-0"
              />
            </div>
          </div>

          <div className="box-border flex flex-col items-start gap-[3px] self-stretch m-0 p-0">
            <label className="box-border flex-[1_0_0] text-sm font-semibold leading-3 text-[#7C7C7C] m-0 p-0">
              Your email
            </label>
            <div className="box-border flex flex-col items-start self-stretch m-0 px-3 py-[9px] border-b-[1.5px] border-b-[#E0E0E0] border-solid">
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="example@email.com"
                className="box-border flex-[1_0_0] text-[#787878] text-xs font-normal leading-[18px] bg-transparent border-none outline-none w-full m-0 p-0"
              />
            </div>
          </div>

          <button
            type="submit"
            className="box-border w-full h-[49px] flex items-center justify-center cursor-pointer bg-[#226DFE] hover:bg-[#1e5dd1] transition-colors text-white text-lg font-medium rounded-[10px] mt-4"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};
