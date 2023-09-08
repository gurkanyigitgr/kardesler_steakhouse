"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

import testimonialData from "@/app/data/testimonial";

import Image from "next/image";

export default function TestimonialsSlider() {
  return (
    <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[450px]"
      >
        {testimonialData.map((person, i) => {
          const { message, avatar, name } = person;
          return (
            <SwiperSlide key={i}>
              <div className="flex flex-col justify-center items-center text-center cursor-pointer">
                <FaQuoteLeft size={50} className="text-accent mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium dark:text-white">
                  {message}
                </div>
                <Image
                  src={avatar}
                  width={44}
                  height={44}
                  alt=""
                  className="mb-4"
                />
                <div className="text-lg font-medium dark:text-accent">
                  {name}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
