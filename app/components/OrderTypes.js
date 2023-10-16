'use client';

import foodTypes from '@/app/data/types';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

export default function OrderTypes({ onFoodSelect, selectedCategory }) {
  return (
    <section className='xl:h-[120px] flex flex-col justify-center'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 place-items-center xl:flex xl:flex-wrap xl:justify-between'>
          {foodTypes.map((type, i) => (
            <div
              onClick={() => onFoodSelect(type.category)}
              key={i}
              className='flex flex-col justify-center items-center cursor-pointer'
            >
              <h3
                className={
                  selectedCategory === type.category
                    ? 'h3 text-accent border-b-2 border-accent'
                    : 'h3 dark:text-white'
                }
              >
                {type.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
