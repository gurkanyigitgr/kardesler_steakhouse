'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialsSlider from './TestimonialsSlider';
export default function Testimonials() {
  return (
    <>
      <div className='circleContainer4'>
        <div className='circle4'></div>
        <div className='circle4'></div>
        <div className='circle4'></div>
        <div className='circle4'></div>
      </div>
      <section
        className=' flex items-center bg-[#b2b7c2]/10 dark:bg-gradient-to-br from-black via-black to-stone-900 pt-24 xl:pt-[160px]'
        id='testimonial'
      >
        <div className='container mx-auto'>
          <TestimonialsSlider />
        </div>
      </section>
    </>
  );
}
