import PCSetupEstimator from '@/components/PCSetupEstimator';
import SwiperSlider from '@/components/SwiperSlider';

export default function Home() {
  const images = [
    '/images/Google_AI_Studio_2025-07-15T23_30_26.661Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_21_45.777Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_22_22.818Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_22_59.900Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_23_34.049Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_23_58.541Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_24_29.127Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_24_57.589Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_25_42.786Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_26_05.200Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_26_55.403Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_27_36.000Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_28_09.469Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_28_40.698Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_29_27.391Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_30_07.988Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_31_39.094Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_32_23.424Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_33_00.751Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_33_26.304Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_35_24.962Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_36_46.770Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_37_43.110Z.png',
    '/images/Google_AI_Studio_2025-07-16T01_39_09.019Z.png',
  ];

  return (
    <main className="container mx-auto p-4 md:p-8">
      <SwiperSlider images={images} />
      <PCSetupEstimator />
    </main>
  );
}