'use client';
import meats from '@/app/data/meals';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsTrash3 } from 'react-icons/bs';
export default function OrderSection({ selectedCategory }) {
  const createWhatsAppMessage = () => {
    const message = cart
      .map((item) => `${item.name}: ${item.quantity} adet |`)
      .join('\n');
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+905306122157&text=Sipariş vermek istiyorum.%0A%0A${encodeURIComponent(
      message
    )}`;

    return whatsappUrl;
  };
  const filteredMeats = selectedCategory
    ? meats.filter((meat) => meat.category === selectedCategory)
    : meats;

  const [cart, setCart] = useState([]);
  const addToCart = (meat) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(
      (item) => item.id === meat.id
    );
    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...meat, quantity: 1 });
    }
    setCart(updatedCart);
  };
  const removeFromCart = (meatId) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === meatId) {
          if (item.quantity > 1) {
            item.quantity -= 1;
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);
    setCart(updatedCart);
  };

  return (
    <div className='container mx-auto px-4 md:px-12'>
      <div className='flex justify-center flex-wrap -mx-1 lg:-mx-4 mb-52 xl:mb-0'>
        {filteredMeats.map((meat, i) => {
          return (
            <div key={i} className='p-4 border border-secondary m-2'>
              <h3 className='h3 text-white text-center mb-0'>{meat.name}</h3>
              <div className='w-[220px] h-[220px] xl:w-[255px] xl:h-[255px] mx-auto sm:mx-0 px-4 mb-4'>
                <Image
                  src={meat.image}
                  width={300}
                  height={300}
                  alt=''
                  className='object-contain w-full h-full p-5'
                />
              </div>
              <button
                onClick={() => addToCart(meat)}
                className='btn btn-sm btn-secondary hover:btn-accent'
              >
                Sepete Ekle
              </button>
            </div>
          );
        })}
      </div>
      {cart.length > 0 && (
        <div className='fixed right-4 bottom-4 bg-white p-4 rounded-lg shadow-lg w-[350px] zindex2'>
          <h2 className='text-3xl font-semibold mb-2'>Sepet</h2>
          <ul className='max-h-40 overflow-y-auto'>
            {cart.map((item, index) => (
              <div key={index} className='flex items-center justify-between '>
                <div className='flex space-x-2'>
                  <li className='text-[18px]'>{item.name}</li>
                  <p className='text-white bg-accent px-2 rounded-full flex items-center justify-center'>
                    {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className=' text-red-600'
                >
                  <BsTrash3 className='text-accent' size={15} />
                </button>
              </div>
            ))}
          </ul>
          <Link
            href={createWhatsAppMessage()}
            className='btn h-10 btn-secondary hover:btn-accent mt-4 w-full '
          >
            Sipariş Ver
          </Link>
        </div>
      )}
    </div>
  );
}
