import GridGallery from './GridGallery';

export default function Gallery() {
  const images = [
    '/images/gallery/g15.png',
    '/images/gallery/g10.jpg',
    '/images/gallery/g11.jpg',
    '/images/gallery/g12.jpg',
    '/images/gallery/g4.jpeg',
    '/images/gallery/g13.jpg',
    '/images/gallery/g14.png',
    '/images/gallery/g2.jpeg',
    '/images/gallery/g3.jpeg',
    '/images/gallery/g5.jpeg',
    '/images/gallery/g6.jpeg',
    '/images/gallery/g8.jpeg',
    '/images/gallery/g9.jpg',
  ];

  return (
    <>
      <GridGallery images={images} />
    </>
  );
}
