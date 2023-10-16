'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeIn } from '@/variants';

export default function Cta() {
  return (
    <section className=' pt-10 pb-10 flex items-end  bg-[#b2b7c2]/10 dark:bg-gradient-to-br from-stone-900 via-black to-black overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row xl:items-center'>
          <div className='flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0'>
            <div className='max-w-[520px] mx-auto order-2 xl:order-none'>
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='h2 dark:text-white'
              >
                Nevzat Usta'nın Lezzet Dünyası
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='mb-10 text-gray-600 dark:text-gray-300'
              >
                Eşsiz Et Pişirme Sanatı ve Damak Çatlatan Lezzetler! Nevzat
                Usta, yılların deneyimi ve tutkusuyla et pişirmenin sırrını
                sizinle paylaşıyor. Her ısırık, sadece lezzetin değil, aynı
                zamanda aşkın da bir göstergesidir. Lezzet yolculuğuna hazır
                mısınız?
              </motion.p>
            </div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
            className='flex-1 flex justify-center order-1 md:order-none zindex '
          >
            <Image
              src={'/images/cta/chef.png'}
              width={420}
              height={440}
              alt=''
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
