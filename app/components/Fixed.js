export default function Fixed() {
  return (
    <section className='flex flex-col items-center p-0 bg-gradient-to-tl from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-black dark:from-black dark:via-black dark:to-black'>
      <div className='mt-20 h-full w-full flex flex-col items-center'>
        <div className='bg-fixed bg-no-repeat bg-cover bg-[center_center] h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px] w-full text-[white] text-center table bg-1 '>
          <h1 className='text-white table-cell align-middle h1'>Misyon</h1>
        </div>
        <div className='py-10 p-5 flex items-center justify-center'>
          <p className='text-gray-600 max-w-3xl text-center p xl:text-xl mx-auto dark:text-gray-300'>
            Müşterilerimize geleneksel Türk mutfağının en lezzetli ve özgün
            haliyle buluştuğu bir deneyim sunarak, unutulmaz anlar yaşatmak ve
            Türk misafirperverliğini en iyi şekilde temsil etmek.
          </p>
        </div>

        <div className='bg-fixed bg-no-repeat bg-cover bg-[right_right] h-[200px] sm:h-[300px] md:h-[350px] xl:h-[400px] w-full text-[white] text-center table bg-2'>
          <h1 className='text-white h1 table-cell align-middle'>Vizyon</h1>
        </div>
        <div className='py-10 p-5 flex items-center justify-center'>
          <h3 className='text-gray-600 max-w-3xl text-center p xl:text-xl mx-auto dark:text-gray-300'>
            Kardeşler Et Restaurant olarak, Türk kebap geleneğini modern bir
            yaklaşımla birleştirerek, yaratıcı ve lezzet dolu bir marka olarak
            tanınmak ve her ziyaretçimize unutulmaz bir gastronomik deneyim
            sunmak.
          </h3>
        </div>
      </div>
    </section>
  );
}
