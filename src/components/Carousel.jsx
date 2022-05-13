import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { getBanners } from '../api/carousel';

export default function Carousel() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    getBanners().then((banners) => {
      setBanners(banners);
    });
  }, []);

  function getImageStyle(imgUrl) {
    return {
      ...styles.img,
      backgroundImage: `url(${imgUrl})`,
    };
  }

  return (
    <Swiper style={styles.swiper} pagination={true} modules={[Pagination]} resistanceRatio={0}>
      {banners.map((banner) => (
        <SwiperSlide key={banner.id} style={styles.swiperItem}>
          <div style={getImageStyle(banner.url)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const styles = {
  swiper: {
    height: '100%',
  },
  img: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};
