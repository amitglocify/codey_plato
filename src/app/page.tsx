'use client';

import { motion } from 'framer-motion';
import FAQSection from './components/common/FAQSection';
import { ClientReviews } from './components/Home/ClientReviews';
import { Hero } from './components/Home/Hero';
import { OurWork } from './components/Home/OurWork';
import { ServicesSection } from './components/Home/ServicesSection';
import { StandoutSection } from './components/Home/StandoutSection';
import { ContactForm } from './components/common/ContactForm';

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 0.5,
      delay: 0.1,
    },
  },
} as const;

const sections = [
  { Component: Hero, delay: 0 },
  { Component: ServicesSection, delay: 0.15 },
  { Component: ClientReviews, delay: 0.25 },
  { Component: StandoutSection, delay: 0.35 },
  { Component: OurWork, delay: 0.45 },
  { Component: FAQSection, delay: 0.55 },
  { Component: ContactForm, delay: 0.65 },
];

export default function Home() {
  return (
    <>
      {sections.map(({ Component, delay }, idx) => {
        if (idx < 2) {
          return <Component key={idx} />;
        }

        return (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              delay: delay * 0.8,
              type: 'spring',
              stiffness: 80,
              damping: 15,
              mass: 0.5,
            }}
            custom={idx}
          >
            <Component />
          </motion.div>
        );
      })}
    </>
  );
}
