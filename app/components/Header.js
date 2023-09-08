'use client';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchMobile from './SearchMobile';
import { useMediaQuery } from 'react-responsive';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { SearchContext } from '../context/search';
import { useTheme } from 'next-themes';
import { RiMoonFoggyFill, RiSunFoggyFill } from 'react-icons/ri';

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const { theme, setTheme } = useTheme();

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <header
      className={`${
        header
          ? 'bg-whiteColor dark:bg-[#100F0F] shadow-md py-2 '
          : 'bg-transparent shadow-none py-4'
      } fixed w-full max-w-[1920px] transition-all duration-300 zindex2`}
    >
      <div className='mx-auto flex flex-col xl:container  xl:flex-row xl:items-center xl:justify-between '>
        <div className='flex justify-between items-center px-4'>
          <Link href='/' className='cursor-pointer'>
            <Image
              src={'/icons/logo.png'}
              width={64}
              height={64}
              alt=''
              priority={true}
            />
          </Link>
          <div
            onClick={() => setNav(!nav)}
            className='cursor-pointer xl:hidden dark:text-white'
          >
            {nav ? (
              <BiX className='text-4xl' />
            ) : (
              <BiMenuAltRight className='text-4xl' />
            )}
          </div>
        </div>
        <nav
          className={`${
            nav
              ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0 '
              : 'max-h-0 xl:max-h-max '
          } flex flex-col w-full bg-whiteColor dark:bg-[#100F0F] gap-y-6 dark:text-whiteColor overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[17px] xl:normal-case `}
        >
          <Link className='cursor-pointer' href='/'>
            Anasayfa
          </Link>
          <Link className='cursor-pointer' href='/order'>
            Sipariş Ver
          </Link>
          <Link className='cursor-pointer' href='/about'>
            Hakkımızda
          </Link>
          <Link className='cursor-pointer' href='/iletisim'>
            İletişim
          </Link>
          <Link
            className='btn btn-primary btn-hover btn-sm max-w-[164px] mx-auto xl:hidden'
            href='/siparis'
          >
            Tüm menüler
          </Link>
          <button
            className='w-10 h-10 xl:w-fit xl:h-fit absolute right-14 top-7 xl:right-0 xl:top-0 p-2 rounded-md  active:scale-100 duration-500 xl:relative  xl:p-0 xl:scale-100'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'light' ? (
              <RiMoonFoggyFill size={20} />
            ) : (
              <RiSunFoggyFill size={20} />
            )}
          </button>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
