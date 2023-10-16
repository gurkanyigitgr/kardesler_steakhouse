'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';

import meats from '@/app/data/meals';

import { motion } from 'framer-motion';

import { fadeIn } from '@/variants';
import { useEffect, useState } from 'react';

export default function MeatSlider({ selectedCategory }) {
  const filteredMeats = selectedCategory
    ? meats.filter((meat) => meat.category === selectedCategory)
    : meats;

  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 1280) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);
  return (
    <motion.div
      variants={fadeIn('up', 0.4)}
      initial='hidden'
      whileInView={'show'}
      viewport={{ once: false, amount: 0.2 }}
      className='container mx-auto mb-10 xl:mb-22 xl:mt-20'
    >
      <Swiper
        className='flex items-center justify-center rounded-2xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]'
        slidesPerView={slidesPerView}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {filteredMeats.map((meat, i) => {
          return (
            <SwiperSlide key={i}>
              <div className='w-[220px] h-[220px] xl:w-[285px] xl:h-[285px] mx-auto sm:mx-0  mb-10 flex items-center justify-center mt-14 xl:mt-5'>
                <Image
                  src={meat.image}
                  width={300}
                  height={300}
                  alt=''
                  className='object-contain w-full h-full p-5'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
