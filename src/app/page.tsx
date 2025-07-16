import PCSetupEstimator from '@/components/PCSetupEstimator';
import SwiperSlider from '@/components/SwiperSlider';

export default function Home() {
  const images = [
    '/images/swiper001.png',
    '/images/swiper002.png',
    '/images/swiper003.png',
    '/images/swiper004.png',
    '/images/swiper005.png',
    '/images/swiper006.png',
    '/images/swiper007.png',
    '/images/swiper008.png',
    '/images/swiper009.png',
    '/images/swiper010.png',
    '/images/swiper011.png',
    '/images/swiper012.png',
    '/images/swiper013.png',
    '/images/swiper014.png',
    '/images/swiper015.png',
    '/images/swiper016.png',
    '/images/swiper017.png',
  ];

  return (
    <main className="container mx-auto px-4 md:px-16 lg:px-32 py-8 md:py-12">
      <SwiperSlider images={images} />
      <PCSetupEstimator />
    </main>
  );
}