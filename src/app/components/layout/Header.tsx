'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
                                                                                                                 
  return (
    <>
      <div className="box-border w-full min-h-[123px] shadow-[0px_4px_17px_0px_rgba(0,0,0,0.05)] fixed z-[100] bg-white left-0 top-0 max-md:min-h-auto flex items-center justify-center py-3 px-4">
        <header className="box-border flex gap-2 w-full max-w-[1100px] justify-between items-center">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={283}
              height={50}
              className="box-border m-0 p-0 max-md:w-[200px] max-md:h-[35px]"
              priority
            />
          </Link>

          <nav className="box-border flex flex-wrap items-center justify-end gap-[29px] m-0 p-0 max-md:gap-5 max-md:hidden">
            <Link
              href="/"
              className={`box-border text-base tracking-[-0.16px] cursor-pointer transition-colors m-0 p-0 max-md:text-sm ${
                isActive('/')
                  ? 'text-[#226DFE] font-bold'
                  : 'text-[#0B1B35] hover:text-[#226DFE]'
              }`}
            >
              Home
            </Link>

            <div className="box-border flex items-center gap-1 m-0 p-0">
              <Link
                href="/#services"
                className="box-border text-[#0B1B35] text-base tracking-[-0.16px] cursor-pointer hover:text-[#226DFE] transition-colors m-0 p-0 max-md:text-sm"
              >
                Services
              </Link>
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="box-border w-[7px] h-1 m-0 p-0"
              >
                <path
                  d="M1 1L4.5 5L8 1"
                  stroke="#0B1B35"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <Link
              href="/#work"
              className="box-border text-[#0B1B35] text-base font-normal tracking-[-0.16px] cursor-pointer hover:text-[#226DFE] transition-colors m-0 p-0 max-md:text-sm"
            >
              Our Work
            </Link>

            <Link
              href="/about"
              className={`box-border text-base tracking-[-0.16px] cursor-pointer transition-colors m-0 p-0 max-md:text-sm ${
                isActive('/about')
                  ? 'text-[#226DFE] font-bold'
                  : 'text-[#0B1B35] hover:text-[#226DFE]'
              }`}
            >
              About
            </Link>

            <a
              href="#blog"
              className="box-border text-[#0B1B35] text-base font-normal tracking-[-0.16px] cursor-pointer hover:text-[#226DFE] transition-colors m-0 p-0 max-md:text-sm"
            >
              Blogs
            </a>

            <button className="box-border w-[162px] h-[49px] flex items-center justify-center cursor-pointer bg-[#226DFE] hover:bg-[#1e5dd1] transition-colors m-0 p-0 rounded-[10px] max-md:w-[140px] max-md:h-10 max-lg:hidden">
              <span className="box-border text-white text-lg font-medium leading-[28.5px] m-0 p-0 max-md:text-base">
                Get Started
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-[#0B1B35] transition-transform"></span>
            <span className="w-6 h-0.5 bg-[#0B1B35] transition-transform"></span>
            <span className="w-6 h-0.5 bg-[#0B1B35] transition-transform"></span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
              <nav className="flex flex-col p-4 gap-4">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive('/')
                      ? 'text-[#226DFE] font-bold'
                      : 'text-[#0B1B35]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#0B1B35] text-base font-normal"
                >
                  Services
                </Link>
                <Link
                  href="/#work"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#0B1B35] text-base font-normal"
                >
                  Our Work
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive('/about')
                      ? 'text-[#226DFE] font-bold'
                      : 'text-[#0B1B35]'
                  }`}
                >
                  About
                </Link>
                <a
                  href="#blog"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#0B1B35] text-base font-normal"
                >
                  Blogs
                </a>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-fit h-[42px] px-6 bg-[#226DFE] text-white text-lg font-medium rounded-[10px]"
                >
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </header>
      </div>
    </>
  );
};
