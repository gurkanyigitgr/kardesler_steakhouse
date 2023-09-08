import GridGallery from './GridGallery';

export default function Gallery() {
  const images = [
    '/images/gallery/g4.jpeg',
    '/images/gallery/g2.jpeg',
    '/images/gallery/g3.jpeg',
    '/images/gallery/g5.jpeg',
    '/images/gallery/g6.jpeg',
    '/images/gallery/g8.jpeg',
  ];

  return (
    <>
      <GridGallery images={images} />
    </>
  );
}
