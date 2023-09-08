'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { BsWhatsapp } from 'react-icons/bs';

import { fadeIn } from '@/variants';
import Link from 'next/link';

export default function Cta() {
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=+905306122157&text=Merhaba! Sipariş vermek istiyorum.';
  return (
    <section className=' pt-10 pb-10 flex items-end  bg-[#b2b7c2]/10 dark:bg-gradient-to-b from-black via-black to-stone-900 overflow-hidden'>
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
                Karekodu taratarak menülere ve fiyatlara bakmayı unutmayın
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='mb-10'
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Delectus, recusandae?
              </motion.p>
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='flex gap-x-10 w-full justify-center items-center md:justify-start'
              >
                <Link href={whatsappUrl}>
                  <BsWhatsapp
                    size={35}
                    className='text-green-600 h-[50px] w-[40px] xl:w-[85px]'
                  />
                </Link>
                <Link href='https://www.trendyol.com/'>
                  <Image
                    className='h-[45px] w-[40px] xl:w-[85px]'
                    src={'/images/hero/trendyol.svg'}
                    width={55}
                    height={55}
                    alt=''
                  />
                </Link>
                <Link href='https://getir.com/yemek/'>
                  <Image
                    className='h-[55px] w-[40px] xl:w-[85px] '
                    src={'/images/hero/getir.svg'}
                    width={55}
                    height={55}
                    alt=''
                  />
                </Link>
              </motion.div>
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
              src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt=''
            />
          </motion.div>
        </div>
        <div className='circleContainer3'>
          <div className='circle3'></div>
          <div className='circle3'></div>
          <div className='circle3'></div>
          <div className='circle3'></div>
        </div>
      </div>
    </section>
  );
}
