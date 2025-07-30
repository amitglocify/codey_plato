'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  description1: string;
  description2: string;
  imageUrl: StaticImageData;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  id?: string;
  index?: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  description1,
  description2,
  imageUrl,
  imageAlt,
  imagePosition,
  id,
  index,
}) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: index ? index * 0.1 : 0,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const 
      }
    }
  };

  const imageVariants = {
    hidden: { x: imagePosition === 'left' ? -50 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const // Fixed: using const assertion
      }
    }
  };

  const contentDiv = (
    <motion.div 
      className="box-border flex-1 flex flex-col gap-5 m-0 p-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.h2 
        className="box-border text-black text-[50px] font-semibold leading-[48px] m-0 p-0 max-md:text-4xl max-md:leading-10 max-md:text-center max-sm:text-[28px] max-sm:leading-8"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      <motion.p 
        className="box-border text-black text-[22px] font-semibold leading-[27px] max-md:text-lg max-md:leading-[22px] max-md:text-center max-sm:text-base max-sm:leading-5"
        variants={itemVariants}
      >
        {subtitle}
      </motion.p>
      <motion.p 
        className="box-border text-[#777] text-[22px] font-normal leading-[34.1px] tracking-[0.3px] max-md:text-base max-md:leading-6 max-md:text-center max-sm:text-sm max-sm:leading-5"
        variants={itemVariants}
      >
        {description1}
      </motion.p>
      <motion.p 
        className="box-border text-[#777] text-[22px] font-normal leading-[34.1px] tracking-[0.3px] max-md:text-base max-md:leading-6 max-md:text-center max-sm:text-sm max-sm:leading-5"
        variants={itemVariants}
      >
        {description2}
      </motion.p>
      <motion.button 
        className="box-border w-[162px] h-[49px] flex items-center justify-center cursor-pointer bg-[#226DFE] mt-1 m-0 p-0 rounded-[10px] max-md:mx-auto max-sm:w-[140px] max-sm:h-11 max-sm:mb-0 max-sm:mx-auto hover:bg-[#1e5ce6] transition-colors"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="box-border text-white text-lg font-medium leading-[28.5px] m-0 p-0 max-sm:text-sm">
          Get Started
        </span>
      </motion.button>
    </motion.div>
  );

  const imageDiv = (
    <motion.div 
      className="box-border flex-1 flex justify-center items-center"
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={579}
        height={414}
        className="box-border max-w-full w-full h-[414px] border object-cover rounded-3xl border-solid border-[rgba(34,109,254,0.20)] max-md:h-auto"
        priority={true}
      />
    </motion.div>
  );

  return (
    <motion.section
      id={id}
      className={`box-border ${
        index == 0
          ? 'mt-[152px] max-md:mt-[84px]'
          : 'mt-20 max-md:mt-10 max-sm:mt-8'
      } px-4`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="box-border w-full max-w-[1174px] mx-auto flex items-center gap-8 relative px-8 py-14 rounded-2xl max-md:flex-col max-md:gap-5 max-md:px-5 max-md:py-10 max-sm:gap-[30px] max-sm:px-[16px] max-sm:py-8 bg-gradient-to-b from-[#f1f5fb] via-[#f1f5fb]/0 to-[#f3f6fb]/70"
        whileHover={{ 
          scale: 1.005,
          transition: { duration: 0.3 }
        }}
      >
        {imagePosition === 'left' ? (
          <>
            {imageDiv}
            {contentDiv}
          </>
        ) : (
          <>
            {contentDiv}
            {imageDiv}
          </>
        )}
      </motion.div>
    </motion.section>
  );
};

export default ContentSection;