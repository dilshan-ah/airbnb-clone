import Brandpicone from '../assets/brand/one.png'
import Brandpictwo from '../assets/brand/two.jpeg'
import Brandpicthree from '../assets/brand/three.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {Autoplay } from 'swiper/modules';

const BrandSlide = () => {
  return (
    <>
    <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={Brandpicone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpictwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicthree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpictwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicthree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpictwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicthree} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Brandpicone} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BrandSlide