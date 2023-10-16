import React, { Fragment, useState } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { LuIceCream2 } from 'react-icons/lu';

const desserts = ['Burma Kadayıf', 'Baklava', 'Sütlaç'];
export const transitionClasses = {
  enter: 'transform transition duration-[200ms]',
  enterFrom: 'opacity-0 rotate-[-120deg] scale-50',
  enterTo: 'opacity-100 rotate-0 scale-100',
  leave: 'transform duration-200 transition ease-in-out',
  leaveFrom: 'opacity-100 rotate-0 scale-100',
  leaveTo: 'opacity-0 scale-95',
};

export default function DessertSelection() {
  const [dessert, setDessert] = useState('Tatlı Seç');
  return (
    <Menu as='div' className='w-full h-full flex xl:flex-row'>
      <div className='relative flex-1'>
        <Menu.Button className='dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8'>
          <div className='w-full h-16 xl:h-full flex justify-center xl:justify-start '>
            <div className='flex flex-col justify-center'>
              <div className='flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0'>
                <LuIceCream2 className='text-accent' />
                <div className='text-[15px] uppercase font-bold dark:text-white'>
                  Tatlı Seç
                </div>
              </div>
              <div className='uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left'>
                {dessert}
              </div>
            </div>
          </div>
        </Menu.Button>
        <Transition {...transitionClasses}>
          <Menu.Items className='dropdown-menu shadow-lg absolute -top-56 xl:top-[30px] left-1/2 xl:left-0 z-10 transform -translate-x-1/2 xl:-translate-x-0 text-sm text-center xl:text-left w-full bg-whiteColor max-w-[332px] py-6 rounded-[10px]'>
            {desserts.map((dessert, i) => (
              <Menu.Item as={Fragment} key={i}>
                <div
                  key={i}
                  className='cursor-pointer py-2 xl:pl-10 hover:bg-gray-100 text-[13px] uppercase'
                  onClick={() => setDessert(dessert)}
                >
                  {dessert}
                </div>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
}
