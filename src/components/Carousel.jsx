import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { carousels } from '../config';

// Used for caching and preload images
// eslint-disable-next-line no-unused-vars
const images = carousels.map(c => {
  const a = new Image()
  a.src = c.url
  return a
})

export default function Carousel() {
  function getImageStyle(imgUrl) {
    return {
      ...styles.img,
      backgroundImage: `url(${imgUrl})`,
    };
  }

  function openLink(url) {
    window.ipc.send('open_link', url);
  }

  return (
    <Swiper
      style={styles.swiper}
      pagination={true}
      modules={[Pagination, Autoplay]}
      resistanceRatio={0}
      autoplay={{ delay: 5000 }}
      loop
    >
      {carousels.map((carousel) => (
        <SwiperSlide key={carousel.id} style={styles.swiperItem}>
          <div
            style={getImageStyle(carousel.url)}
            onClick={openLink.bind(this, carousel.file)}
          />
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
    cursor: 'pointer',
  },
};
