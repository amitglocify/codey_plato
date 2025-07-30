'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <footer className="box-border w-full h-[137px] relative bg-black m-0 p-0 max-sm:h-auto max-sm:px-0 max-sm:py-[30px]">
      <div className="box-border flex w-full h-full justify-center items-center m-0 p-0">
        <div className="box-border w-full h-full absolute bg-black m-0 p-0 left-0 top-0" />
        <div className="box-border flex w-[1296px] h-[37px] items-center justify-between relative z-[2] m-0 p-0 max-md:flex-col max-md:h-auto max-md:gap-5 max-sm:w-full max-sm:px-5 max-sm:py-0">
          <Link href="/">
            <Image
              src="/images/footer.png"
              alt="Company Logo"
              width={198}
              height={35}
              className={`box-border m-0 p-0 max-sm:w-[150px] max-sm:h-[26px]`}
              priority
            />
          </Link>

          <nav className="box-border flex items-center gap-[41px] m-0 p-0 max-md:flex-wrap max-md:justify-center max-md:gap-5 max-sm:gap-[15px]">
            <Link
              href="/"
              className={`box-border text-base leading-4 tracking-[0.48px] cursor-pointer transition-colors m-0 p-0 max-sm:text-sm ${
                isActive('/')
                  ? 'text-[#226DFE] font-bold hover:text-[#226DFE]'
                  : 'text-white'
              }`}
            >
              Home
            </Link>

            <a
              href="#work"
              className="box-border text-white text-base font-normal leading-4 tracking-[0.48px] cursor-pointer hover:text-gray-300 transition-colors m-0 p-0 max-sm:text-sm"
            >
              Case Studies
            </a>
            <Link
              href="/about"
              className={`box-borde text-base ${
                isActive('/about')
                  ? 'text-[#226DFE] font-bold hover:text-[#226DFE]'
                  : ' text-white'
              } leading-4 tracking-[0.48px] cursor-pointer transition-colors m-0 p-0 max-sm:text-sm`}
            >
              About
            </Link>
            <Link
              href="/#services"
              className="box-border text-white text-base font-normal leading-4 tracking-[0.48px] cursor-pointer hover:text-gray-300 transition-colors m-0 p-0 max-sm:text-sm"
            >
              Service
            </Link>
            <a
              href="#testimonial"
              className="box-border text-white text-base font-normal leading-4 tracking-[0.48px] cursor-pointer hover:text-gray-300 transition-colors m-0 p-0 max-sm:text-sm"
            >
              Testimonial
            </a>
            <a
              href="#privacy"
              className="box-border text-white text-base font-normal leading-4 tracking-[0.48px] cursor-pointer hover:text-gray-300 transition-colors m-0 p-0 max-sm:text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="box-border text-white text-base font-normal leading-4 tracking-[0.48px] cursor-pointer hover:text-gray-300 transition-colors m-0 p-0 max-sm:text-sm"
            >
              Terms &amp; Conditions
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
