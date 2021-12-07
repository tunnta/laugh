import SwiperCore, {EffectCoverflow, Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

import styles from '../styles/slide.module.css'

// install Swiper modules
SwiperCore.use([EffectCoverflow,Autoplay,Navigation, Pagination, Scrollbar, A11y]);

function Slide() {
  
  

  return (
   <div className = {styles.block}>
    <Swiper
    
    autoplay={{
      "delay": 6000,
      "disableOnInteraction": false
    }}
      grid={{"rows": 4}}
      centeredSlides={true}
      spaceBetween={50}
      loop={true}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      
    >
      
      <SwiperSlide className={styles.container}><div className={styles.img1}></div></SwiperSlide>
      <SwiperSlide className={styles.container}><div className={styles.img2}></div></SwiperSlide>
      <SwiperSlide className={styles.container}><div className={styles.img3}></div></SwiperSlide>
      <SwiperSlide className={styles.container}><div className={styles.img4}></div></SwiperSlide>
      
    </Swiper>
    </div>
  );
  
};

export default Slide;