'use client';
import { useState, useEffect } from 'react';
import FoodType from './FoodTypes';
import MeatSlider from './MeatSlider';
import Link from 'next/link';

export default function Steaks() {
  const [selectedCategory, setSelectedCategory] = useState('döner');
  useEffect(() => {
    setSelectedCategory('doners');
  }, []);
  const handleTypeSelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section
      className='flex items-center  bg-gradient-to-tr from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-stone-900'
      id='menu'
    >
      <div className='container mx-auto xl:mt-20'>
        <FoodType
          onFoodSelect={handleTypeSelect}
          selectedCategory={selectedCategory}
        />
        <MeatSlider selectedCategory={selectedCategory} />
        <div className=' flex items-center justify-center'>
          <Link
            href='/order'
            className='btn btn-sm btn-accent w-[164px] text-white'
          >
            Sipariş Ver
          </Link>
        </div>
      </div>
    </section>
  );
}
