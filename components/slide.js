import SwiperCore, {EffectCoverflow, Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

import styles from './slide.module.css'

// install Swiper modules
SwiperCore.use([EffectCoverflow,Autoplay,Navigation, Pagination, Scrollbar, A11y]);

export default function Slide(props) {
  
  

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
      
      <SwiperSlide><div className={styles.font}>Slide 1</div></SwiperSlide>
      <SwiperSlide><div className={styles.font}>{props.Name1}</div></SwiperSlide>
      <SwiperSlide><div className={styles.font}>Slide 3</div></SwiperSlide>
      <SwiperSlide><div className={styles.font}>Slide 4</div></SwiperSlide>
      
      
      
    </Swiper>
    </div>
  );
  
};