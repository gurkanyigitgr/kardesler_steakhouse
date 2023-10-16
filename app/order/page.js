'use client';
import React, { useEffect, useState } from 'react';
import OrderSection from '../components/OrderSection';
import OrderTypes from '../components/OrderTypes';
import Header from '../components/Header';

export default function SiparisPage() {
  const [selectedCategory, setSelectedCategory] = useState('döner');
  useEffect(() => {
    setSelectedCategory('doners');
  }, []);
  const handleTypeSelect = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <Header />
      <section
        className='pt-[100px] min-h-screen flex bg-gradient-to-br from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-gradient-to-tl dark:from-black dark:via-black dark:to-neutral-900'
        id='menu'
      >
        <div className='container mx-auto space-y-10'>
          <OrderTypes
            onFoodSelect={handleTypeSelect}
            selectedCategory={selectedCategory}
          />
          <OrderSection selectedCategory={selectedCategory} />
        </div>
      </section>
    </>
  );
}
