import Image from 'next/image';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header />
      <section
        className='section flex items-center bg-gradient-to-br from-[#b2b7c2]/10 via-[#b2b7c2]/10 to-slate-300 dark:bg-gradient-to-tl dark:from-black dark:via-black dark:to-neutral-900'
        id='about'
      >
        <div className='absolute bottom-0 left-0 '>
          <Image
            src={'/images/about/kebabsis.png'}
            width={220}
            height={148}
            alt=''
          />
        </div>
        <div className='container mx-auto'>
          <div className='flex flex-col md:flex-row xl:justify-between'>
            <div className='flex-1 mb-8 xl:mb-0'>
              <div className='circleContainer'>
                <div>
                  <Image
                    className='circleImg zindex2'
                    src={'/images/about/about.png'}
                    width={500}
                    height={248}
                    alt=''
                  />
                </div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
              </div>
            </div>
            <div className='flex-1 flex items-center xl:justify-center pb-10 zindex'>
              <div className='xl:max-w-[517px] '>
                <h2 className='h2 dark:text-white'>
                  Kardeşler Et Lokantası Hakkında
                </h2>
                <p className='description mb-10  max-w-md dark:text-gray-400'>
                  Biz, Kardeşler Et Restaurant olarak, yıllardır etin eşsiz
                  lezzetini sizlere sunuyoruz. Geleneksel dönercilik sanatını
                  modern tatlarla birleştiriyoruz. Her gün taze kesilmiş etler,
                  özenle seçilmiş baharatlar ve ustaca hazırlanan soslarla size
                  en iyi lezzeti sunmayı hedefliyoruz. Müşteri memnuniyeti bizim
                  için önceliklidir. Sizleri ailemizin bir parçası gibi kabul
                  ediyor, her ziyaretinizi unutulmaz kılmak için elimizden
                  gelenin en iyisini yapıyoruz. Kardeşler Et Restaurant'ta
                  lezzetin doruklarına ulaşmak için sizi bekliyoruz. İyi
                  yemekler dileriz!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 right-0  transform -scale-x-100'>
          <Image
            src={'/images/about/kebabsis.png'}
            width={220}
            height={148}
            alt=''
          />
        </div>
      </section>
    </>
  );
};

export default About;
