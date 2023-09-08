'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

import { LiaTelegramPlane } from 'react-icons/lia';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { BsStar } from 'react-icons/bs';
export default function Why() {
  return (
    <section
      className='flex items-start bg-gradient-to-bl from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-gradient-to-t dark:from-black darkvia-black dark:to-stone-900 pt-24 xl:pt-[160px] xl:pb-[140px] w-full'
      id='why'
    >
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 text-center dark:text-white'
        >
          Lezzetle Sınırları Zorlayan Bir Yolculuk
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='max-w-[680px] text-center mx-auto mb-2 dark:text-gray-400'
        >
          Kardeşler Et Restaurant'a adım attığınızda, tarihi kebap lezzetini
          çağdaş bir anlayışla yeniden keşfedeceksiniz. Usta aşçılarımızın
          dokunuşuyla hayat bulan, taptaze ve özenle seçilmiş malzemelerle
          hazırlanan kebaplarımız, damaklarınızda unutulmaz bir tat bırakacak.
          Sizi, lezzetle sınırları zorlayan bu enfes yolculuğa davet ediyoruz.
        </motion.p>
        <motion.div
          variants={fadeIn('left', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex justify-center mb-6 xl:mb-2'
        >
          <Image
            src={'/images/about/about2.png'}
            width={260}
            height={220}
            alt=''
          />
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]'
        >
          <div className='bg-whiteColor dark:bg-gradient-to-b dark:from-[#0c0b0b] dark:to-black rounded-3xl cursor-pointer  flex flex-col items-center text-center maw-w[160px] xl:max-w-none p-2 xl:p-10 shadow-xl shadow-accent'>
            <BsStar size={50} className='text-accent dark:text-white mb-4' />
            <h3 className='h3 dark:text-white'>Popülerlik</h3>
            <p className='dark:text-white'>
              Sevilen kebap salonumuz, lezzetli menü ve sıcak atmosferiyle hala
              bir müşteri favorisi!
            </p>
          </div>
          <div className='bg-whiteColor dark:bg-gradient-to-b dark:from-[#0c0b0b] dark:to-black rounded-3xl cursor-pointer  flex flex-col items-center text-center maw-w[160px] xl:max-w-none p-2 xl:p-10 shadow-xl shadow-accent'>
            <VscWorkspaceTrusted
              size={50}
              className='text-accent dark:text-white mb-4'
            />
            <h3 className='h3 dark:text-white'>100% Güven</h3>
            <p className='dark:text-white'>
              Kebap deneyiminde %100 güvenilir ve müşteri odaklı hizmet
              sunuyoruz!
            </p>
          </div>
          <div className='bg-whiteColor dark:bg-gradient-to-b dark:from-[#0c0b0b] dark:to-black rounded-3xl cursor-pointer  flex flex-col items-center text-center maw-w[160px] xl:max-w-none p-2 xl:p-10 shadow-xl shadow-accent'>
            <LiaTelegramPlane
              size={50}
              className='text-accent dark:text-white mb-4'
            />
            <h3 className='h3 dark:text-white'>Hızlı Gönderim</h3>
            <p className='dark:text-white'>
              Kebap keyfi, hızlı gönderimle kapınıza gelsin, lezzetin tadını
              doruklarda çıkarın!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
