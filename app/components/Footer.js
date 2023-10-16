'use client';

import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa6';
import Copyright from './Copyright';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      className='pt-10 pb-2 bg-gradient-to-b from-[#b2b7c2]/10 to-secondary z-20 dark:bg-gradient-to-b dark:from-stone-900 dark:to-black '
      id='contact'
    >
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14'>
          <div className='flex flex-col flex-1 gap-y-8'>
            <Image
              src={'/icons/logo.png'}
              width={100}
              height={100}
              alt=''
              className='cursor-pointer'
              priority={true}
            />
            <div className='flex flex-col xl:flex-row gap-y-4 font-semibold gap-x-5'>
              <div className='flex space-x-2 dark:text-white'>
                <FaPhone size={20} />
                <div className='font-medium '>+905306122157</div>
              </div>
              <div className='flex space-x-2 dark:text-white'>
                <FaEnvelope size={20} />
                <div className='font-medium '>
                  kardesleretrestaurant@gmail.com
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col xl:items-center'>
            <div>
              <h3 className='h3 font-bold mb-8 w-full text-left dark:text-white'>
                Çalışma Saatleri
              </h3>
              <div className='flex flex-col gap-y-4 dark:text-white'>
                <div className='flex gap-x-2'>
                  <div className='text-primary dark:text-white'>
                    Pazartesi-Cuma:
                  </div>
                  <div className='font-semibold'>09:00 - 21:00</div>
                </div>
                <div className='flex gap-x-2'>
                  <div className='text-primary dark:text-white'>Cumartesi:</div>
                  <div className='font-semibold'>10:00 - 19:00</div>
                </div>
                <div className='flex gap-x-2'>
                  <div className='text-primary dark:text-white'>Pazar:</div>
                  <div className='font-semibold'>Kapalı</div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col justify-center xl:items-center dark:text-white'>
            <div>
              <ul className='flex justify-between xl:justify-center gap-x-5 font-semibold'>
                <li>
                  <Link
                    href={'https://www.instagram.com/onurrozelll/'}
                    className='cursor-pointer'
                  >
                    <BsInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={'https://www.google.com'}
                    className='cursor-pointer'
                  >
                    <BsFacebook size={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
