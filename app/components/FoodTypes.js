'use client';

import foodTypes from '@/app/data/types';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

export default function FoodTypes({ onFoodSelect, selectedCategory }) {
  return (
    <section className='xl:pt-16 xl:h-[200px] xl:mt-36 xl:mb-10 flex flex-col justify-center'>
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='container mx-auto mb-12 xl:mb-48'
      >
        <div>
          <h1 className='h1 flex items-center text-primary dark:text-white justify-center mt-5 mb-10 xl:mb-20 xl:mt-44'>
            Menüler
          </h1>
          <div className='grid grid-cols-2 place-items-center xl:flex xl:flex-wrap xl:justify-between'>
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
      </motion.div>
    </section>
  );
}
