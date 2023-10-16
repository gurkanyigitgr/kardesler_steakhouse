'use client';

import React, { useEffect, useState } from 'react';

import { FaChevronUp } from 'react-icons/fa';

import { Link } from 'react-scroll';

export default function BackToTopBtn() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 400) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Link
      to='home'
      smooth={true}
      className={` ${
        !isActive && 'hidden'
      } fixed animate-bounce bg-accent w-8 h-8 rounded-full right-2 bottom-24 z-10 cursor-pointer flex justify-center items-center text-white`}
    >
      <FaChevronUp size={20} />
    </Link>
  );
}
