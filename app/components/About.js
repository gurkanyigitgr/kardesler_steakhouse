'use client';

import Image from 'next/image';
import { MdOutlinePhonelink } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { RiChatSmileLine, RiFlaskLine } from 'react-icons/ri';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section
      className='section flex items-center bg-[#b2b7c2]/10 dark:bg-gradient-to-bl from-black via-black to-stone-900'
      id='about'
      ref={ref}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:justify-between'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.6 }}
            className='flex-1 mb-8 xl:mb-0'
          >
            <div className='circleContainer'>
              <div>
                <Image
                  className='circleImg zindex'
                  src={'/images/about/about3.png'}
                  width={500}
                  height={448}
                  alt=''
                />
              </div>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
              <div className='circle'></div>
            </div>
          </motion.div>
          <div className='flex-1 flex items-center xl:justify-center'>
            <div className='xl:max-w-[517px] '>
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='h2 dark:text-white'
              >
                Lezzet Şölenine Davet
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
                className='description mb-[42px] max-w-md dark:text-gray-400'
              >
                Kebap tutkunlarının vazgeçilmez adresi olan restoranımızda,
                tarihi kebap lezzetini keşfedin. Usta aşçımızın maharetli
                ellerinden çıkan, taze ve seçkin malzemelerle hazırlanan
                kebaplarımız, damaklarda unutulmaz bir tat bırakıyor.
              </motion.p>
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='flex items-center gap-x-2 xl:gap-x-8 mb-12'
              >
                <div className='flex flex-col space-y-2'>
                  <MdOutlinePhonelink
                    size={50}
                    className='text-accent dark:text-gray-200'
                  />
                  <div className='text-3xl text-blackColor mb-2 font-medium dark:text-gray-400'>
                    {inView ? (
                      <CountUp start={0} end={30} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <h3 className='xl:h3 p dark:text-white'>
                    Günlük Online Müşteri
                  </h3>
                </div>
                <div className='flex flex-col space-y-2'>
                  <CgProfile
                    size={50}
                    className='text-accent dark:text-gray-200'
                  />
                  <div className='text-3xl text-blackColor mb-2 font-medium dark:text-gray-400'>
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <h3 className='xl:h3 p dark:text-white'>
                    Günlük Normal Müşteri
                  </h3>
                </div>
                <div className='flex flex-col space-y-2'>
                  <RiChatSmileLine
                    size={50}
                    className='text-accent dark:text-gray-200'
                  />
                  <div className='text-3xl text-blackColor mb-2 font-medium dark:text-gray-400'>
                    {inView ? (
                      <CountUp start={0} end={1000} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <h3 className='xl:h3 p dark:text-white'>
                    Toplam Mutlu Müşteri
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
