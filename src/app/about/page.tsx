import { Metadata } from 'next';
import React from 'react';
import FAQSection from '../components/common/FAQSection';
import ContentSection from '../components/about/ContentSection';
import bannerOne from '../../../public/images/about/banner-one.jpg';
import bannerTwo from '../../../public/images/about/banner-two.jpg';
import bannerThree from '../../../public/images/about/banner-three.jpg';

export const metadata: Metadata = {
  title: 'About | Plato',
  description:
    'Learn about Plato — a digital agency empowering startups with world-class web and app design. Explore our story, values, and creative mission.',
};

export default function About() {
  return (
    <>
      <ContentSection
        id="about"
        index={0}
        title="About Us"
        subtitle="We build websites tailored to your brand and target audience — that’s our expertise."
        description1="At Plato, we create delightful digital experiences that simplify lives and accelerate business growth. Our solutions blend creativity and technology to deliver intuitive, high-performance platforms."
        description2="We’ve collaborated with both fast-growing startups and established enterprises to craft award‑winning websites and applications that stand out in a crowded digital world."
        imageUrl={bannerOne}
        imageAlt="Plato team collaborating on web design strategy"
        imagePosition="right"
      />

      <ContentSection
        id="vision"
        index={1}
        title="Our Vision"
        subtitle="Empowering startups and brands with future-ready digital experiences"
        description1="Our vision is to be the go-to creative partner for startups and innovators worldwide. We aim to lead with design excellence and deliver solutions that create real impact."
        description2="Every line of code, every design pixel, and every decision we make is driven by a desire to help brands thrive in a digital-first world."
        imageUrl={bannerTwo}
        imageAlt="Vision session with team planning growth roadmap"
        imagePosition="left"
      />

      <ContentSection
        id="why"
        index={2}
        title="Why We Exist"
        subtitle="We believe great design fuels great businesses"
        description1="Plato was founded with a mission to bring world-class design thinking to startups — because small teams deserve big results. Our purpose is to turn ambitious ideas into beautiful, functional digital products."
        description2="We exist to serve founders, marketers, and dreamers who want more than just another website — they want digital platforms that perform and inspire."
        imageUrl={bannerThree}
        imageAlt="Creative team discussing project purpose and values"
        imagePosition="right"
      />

      <FAQSection />
      <div className="mt-20 max-md:mt-10 max-sm:mt-8"></div>
    </>
  );
}
