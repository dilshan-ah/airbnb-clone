import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination, Autoplay } from 'swiper/modules';
import TestimonilaCard from './TestimonilaCard';

const TestimonialSlide = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TestimonilaCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonilaCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonilaCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonilaCard/>
                </SwiperSlide>

                <SwiperSlide>
                    <TestimonilaCard/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default TestimonialSlide