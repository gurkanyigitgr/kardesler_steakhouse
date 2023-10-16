'use client';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
export default function GoogleMap() {
  const position = [41.040302350000005, 28.894600939511257]; // [latitude, longitude]
  return (
    <section
      className='section flex items-start bg-[#b2b7c2]/10 dark:bg-gradient-to-b from-black via-black to-stone-900 pt-24 xl:pt-[160px] xl:pb-[140px] w-full'
      id='contact'
    >
      <div className='container mx-auto'>
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='h2 text-center dark:text-white'
        >
          Yolculuk: Kardeşler Et Restaurant
        </motion.h2>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
        >
          <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={position}></Marker>
          </MapContainer>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.6 }}
          className='flex-col items-center justify-center xl:flex-row xl:text-center xl:justify-center text-black font-semibold dark:text-white gap-x-2'
        >
          <h2>Adres:</h2>
          <p className='dark:text-gray-400'>
            Kardesler Et Lokantasi, Otogar Metro Binasi B Cikisi 34035
            Esenler/İstanbul
          </p>
        </motion.div>
      </div>
    </section>
  );
}
