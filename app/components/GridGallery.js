'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

export default function GridGallery({ images }) {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(2);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      className=' flex items-start bg-[#b2b7c2]/10 dark:bg-gradient-to-tl from-black via-black to-stone-900 pt-24 xl:pt-[160px] w-full'
      id='why'
    >
      <div className='container mx-auto mb-20'>
        <h1 className='h1 text-center text-black dark:text-whiteColor mb-20'>
          Galeri
        </h1>

        <Swiper
          className='flex items-center justify-center rounded-2xl  bg-[#b2b7c2]/10 dark:bg-black'
          slidesPerView={slidesPerView}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {images &&
            images.map((imageUrl, index) => (
              <SwiperSlide key={index} className='p-10'>
                <div className='w-[220px] h-[220px] xl:w-[385px] xl:h-[485px] mx-auto sm:mx-0 mb-10 flex items-center justify-center mt-14 xl:mt-5'>
                  <Image
                    src={imageUrl}
                    width={400}
                    height={400}
                    alt=''
                    className='object-fill first-letter:p-5 cursor-pointer rounded-2xl'
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
