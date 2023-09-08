'use client';

import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/search';
import Search from './Search';
import { BsWhatsapp } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { motion, easeInOut } from 'framer-motion';

import { fadeIn } from '@/variants';
export default function Hero() {
  const { searchActive } = useContext(SearchContext);
  const texts = ['Ustalığı', 'Kebabı', 'Hizmeti'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentIndex]);
  const whatsappUrl =
    'https://api.whatsapp.com/send?phone=+905306122157&text=Merhaba! Sipariş vermek istiyorum.';
  const use_default = true;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  return (
    <>
      <div className='circleContainer2 '>
        <div className='circle2'></div>
        <div className='circle2'></div>
        <div className='circle2'></div>
        <div className='circle2'></div>
      </div>
      <section
        className='h-screen xl:h-[90vh] bg-gradient-to-br from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-gradient-to-tl dark:from-black dark:via-black dark:to-neutral-900 zindex'
        id='home'
      >
        <div className='container mx-auto h-full xl:pt-10 '>
          <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full zindex'>
            <div className='text-center xl:max-w-xl xl:text-left mt-32 xl:mt-0 zindex'>
              <motion.h1
                variants={fadeIn('down', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='h1 dark:text-white'
              >
                <span className='wave-text'>Nevzat Usta</span> ile Gerçek{' '}
                <span className='wave-text'>{currentText}</span> {''} Keşfedin
              </motion.h1>
              <motion.p
                variants={fadeIn('down', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='description max-w-[550px] mx-auto xl:mx-0 xl:mb-10 dark:text-gray-400 zindex'
              >
                Yılların birikimiyle harmanlanmış gerçek kebap lezzetini bulmak
                isteyenleri burada ağırlıyoruz.
              </motion.p>
              <motion.div
                variants={fadeIn('down', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.8 }}
                className='w-full flex  justify-center xl:justify-start mt-10 rounded-full zindex '
              >
                <div className='flex gap-x-10 '>
                  <button className='shadow-lg shadow-red-900 p-2 rounded-full hover:shadow-md hover:shadow-black transition-all duration-300 dark:bg-white zindex'>
                    <Link href={whatsappUrl}>
                      <BsWhatsapp
                        size={35}
                        className='text-green-600 h-[30px] w-[40px] xl:w-[85px]'
                      />
                    </Link>
                  </button>
                  <button className='shadow-lg shadow-red-900 p-2 rounded-full hover:shadow-md hover:shadow-black transition-all duration-300 dark:bg-white zindex'>
                    <Link href='https://www.trendyol.com/'>
                      <Image
                        className='h-[25px] w-[40px] xl:w-[85px]'
                        src={'/images/hero/trendyol.svg'}
                        width={55}
                        height={55}
                        alt=''
                      />
                    </Link>
                  </button>
                  <button className='shadow-lg shadow-red-900 p-2 rounded-full hover:shadow-md hover:shadow-black transition-all duration-300 dark:bg-white zindex'>
                    <Link href='https://getir.com/yemek/'>
                      <Image
                        className='h-[45px] w-[40px] xl:w-[85px] '
                        src={'/images/hero/getir.svg'}
                        width={55}
                        height={55}
                        alt=''
                      />
                    </Link>
                  </button>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.6 }}
              className='relative w-full h-full mt-10 xl:mt-20 max-h-[25vh] md:max-w-[70vw] xl:max-w-[960px] xl:max-h-[382px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48'
            >
              <Image
                src={'/images/hero/heroImg.png'}
                fill
                alt='steak'
                style={{ objectFit: 'contain' }}
                priority={use_default ? true : false}
              />
            </motion.div>
          </div>
        </div>

        {searchActive ? (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ ease: easeInOut }}
            className='fixed top-[80px]  w-full max-w-[1920px] z-10 zindex2'
          >
            <Search />
          </motion.div>
        ) : (
          <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Search />
            </motion.div>
          </div>
        )}
      </section>
    </>
  );
}
