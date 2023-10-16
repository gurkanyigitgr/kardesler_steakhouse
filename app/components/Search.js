'use client';

import { useContext } from 'react';
import { SearchContext } from '../context/search';
import MenuSelection from './MenuSelection';
import DrinkSelection from './DrinkSelection';
import DessertSelection from './DessertSelection';
import Link from 'next/link';

export default function Search() {
  const { searchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        searchActive
          ? 'bg-whiteColor rounded-none xl:h-[60px] dark:bg-[#100F0F] '
          : 'bg-whiteColor dark:bg-[#0c0b0b] rounded-[20px] py-6 xl:pr-4 xl:h-[75px] '
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div className={`flex h-full ${searchActive && 'container mx-auto'} `}>
        <MenuSelection />
        <DrinkSelection />
        <DessertSelection />
        <div className='xl:h-full flex items-center px-6 xl:px-0'>
          <Link
            href='/order'
            className={`${
              searchActive ? 'xl:w-[164px]' : 'xl:w-[184px]'
            } btn btn-sm btn-accent xl:h-[50px]`}
          >
            Ara
          </Link>
        </div>
      </div>
    </div>
  );
}
