//components

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
import GoogleMap from './components/GoogleMap';
import Gallery from './components/Gallery';

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
      <GoogleMap />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
