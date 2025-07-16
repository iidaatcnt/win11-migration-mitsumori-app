'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface SwiperSliderProps {
  images: string[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ images }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg shadow-lg aspect-10/7" // Swiperコンテナに高さを設定
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="h-full"> {/* SwiperSlideにも高さを設定 */}
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                priority={index === 0} // Load first image with high priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;