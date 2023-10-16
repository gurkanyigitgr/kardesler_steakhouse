import Link from 'next/link';
import DessertSelection from './DessertSelection';
import DrinkSelection from './DrinkSelection';
import MenuSelection from './MenuSelection';

export default function SearchMobile() {
  return (
    <div className='xl:hidden font-medium'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-4'>
          <MenuSelection />
          <DrinkSelection />
          <DessertSelection />
          <div className='flex items-center px-6'>
            <Link
              href='/order'
              className='btn btn-sm btn-accent w-[164px] mx-auto text-lg'
            >
              Ara
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
