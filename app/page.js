import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import Steaks from './components/Steaks';
import About from './components/About';
import Why from './components/Why';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Fixed from './components/Fixed';
import Gallery from './components/Gallery';

const DynamicGoogleMap = dynamic(() => import('./components/GoogleMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='max-w-[1920px] bg-whiteColor mx-auto relative overflow-hidden'>
      <Header />
      <Hero />
      <Steaks />
      <Why />
      <Fixed />
      <About />
      <Cta />
      <Gallery />
      <Testimonials />
      <DynamicGoogleMap />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
