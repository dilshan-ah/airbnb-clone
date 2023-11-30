import Studio from '../assets/studio/studio-one.jpg'
import { IoMdStar } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Navigation, Pagination } from 'swiper/modules';


const ProductCard = () => {
    return (
        <div className="card cursor-pointer">
            <figure className="relative">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}

                    navigation={true}

                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                    </SwiperSlide>
                </Swiper>

                
                {/* <label className="swap absolute right-1 top-1 btn bg-transparent border-0 hover:bg-transparent z-50">

                    <input type="checkbox" />

                    <MdOutlineFavoriteBorder className="swap-off text-3xl text-pink-500" />

                    <MdOutlineFavorite className="swap-on  text-3xl text-pink-500" />

                </label> */}

            </figure>
            <div className="text-center py-3">
                <div className='flex'>
                    <h2 className="card-title flex-1 text-base">Birmingham, UK</h2>
                    <div className='flex-none'>
                        <span className='flex items-center'>
                            <IoMdStar className='pr-1 text-xl' />
                            <p>5.0</p>
                        </span>
                    </div>
                </div>

                <p className='text-left text-gray-500'>3,550 kilometers away</p>
                <p className='text-left text-gray-500'>Dec 6-11</p>
                <p className='text-left text-gray-500'><b className='text-black'>$<span>1000 </span></b>day</p>
            </div>
        </div>
    )
}

export default ProductCard