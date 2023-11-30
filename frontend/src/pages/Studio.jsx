import Navbar from "../components/Navbar"
import SecNavLogo from '../assets/sec-nav-logo.png'
import { IoShareOutline } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import StudioPic from '../assets/studio/studio-one.jpg'
import { BsFillGridFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import { LuDoorOpen } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import StudioRoomCard from "../components/StudioRoomCard";
import DatePickerComponent from "../components/DatePicker";


const Studio = () => {

  return (
    <>
      <Navbar textColor={'text-black'} navlogo={SecNavLogo} boxShadow={'border border-gray-300 shadow-md shadow-gray-300'} />
      <div className="divider"></div>
      <div className="w-full">
        <div className="container mx-auto py-2">


          <div className="flex pb-5">
            <h2 className="text-2xl	font-semibold flex flex-1 items-center">BALIAN TREEHOUSE w beautiful pool</h2>
            <div className="flex-none">
              <div className="flex">
                <button className="btn btn-ghost">
                  <IoShareOutline />
                  Share
                </button>
                <button className="btn btn-ghost">
                  <GrFavorite />
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 rounded-2xl overflow-hidden relative">
            <div className="h-96">
              <img src={StudioPic} className="w-full h-full object-cover hover:brightness-90 transition delay-75 cursor-pointer ease-in" alt="" />
            </div>
            <div className="grid grid-cols-2">
              <div className="h-48">
                <img src={StudioPic} className="w-full h-full object-cover hover:brightness-90 transition delay-75 cursor-pointer ease-in" alt="" />
              </div>
              <div className="h-48">
                <img src={StudioPic} className="w-full h-full object-cover hover:brightness-90 transition delay-75 cursor-pointer ease-in" alt="" />
              </div>
              <div className="h-48">
                <img src={StudioPic} className="w-full h-full object-cover hover:brightness-90 transition delay-75 cursor-pointer ease-in" alt="" />
              </div>
              <div className="h-48">
                <img src={StudioPic} className="w-full h-full object-cover hover:brightness-90 transition delay-75 cursor-pointer ease-in" alt="" />
              </div>
            </div>

            <button className="btn btn-outline bg-white absolute right-2.5	bottom-2.5">
              <BsFillGridFill />
              Show all
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-5 gap-24 py-5">
        <div className="col-span-3">
          <h2 className="text-2xl	font-semibold flex flex-1 items-center">Studio in London, England</h2>
          <p className="text-gray-500 text-base">A big appartment with a lots of other services</p>

          <div className="flex items-center text-base font-bold">
            <IoMdStar className="text-2xl pr-1" />
            4.84 <span className="pl-3 underline cursor-pointer">586 Reviews</span>
          </div>

          <div className="divider"></div>

          <div className="card card-side bg-base-100 shadow-xl p-5 w-fit">
            <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="rounded-full w-10 h-10 object-cover	" alt="Movie" /></figure>
            <div className="card-body py-0 px-5 gap-0">
              <h2 className="card-title text-base font-bold">Hosted by David</h2>
              <p className="text-sm">4 years hosting</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="card card-side bg-base-100 p-5 w-fit">
            <figure><LuDoorOpen className="text-2xl" /></figure>
            <div className="card-body py-0 px-5 gap-0">
              <h2 className="card-title text-base font-bold">Self check-in</h2>
              <p className="text-sm">You can check in with the building staff.</p>
            </div>
          </div>

          <div className="card card-side bg-base-100 p-5 w-fit">
            <figure><LuDoorOpen className="text-2xl" /></figure>
            <div className="card-body py-0 px-5 gap-0">
              <h2 className="card-title text-base font-bold">Self check-in</h2>
              <p className="text-sm">You can check in with the building staff.</p>
            </div>
          </div>

          <div className="card card-side bg-base-100 p-5 w-fit">
            <figure><LuDoorOpen className="text-2xl" /></figure>
            <div className="card-body py-0 px-5 gap-0">
              <h2 className="card-title text-base font-bold">Self check-in</h2>
              <p className="text-sm">You can check in with the building staff.</p>
            </div>
          </div>

          <div className="divider"></div>

          <p className="line-clamp-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ad. Vel similique hic nesciunt beatae blanditiis. Laborum adipisci voluptatibus debitis ab sapiente, repellat fugit obcaecati mollitia impedit perferendis porro nihil quasi excepturi cupiditate reprehenderit saepe assumenda placeat commodi similique amet ipsam recusandae nesciunt iste sequi! Earum quod consequuntur deleniti et porro deserunt perspiciatis provident error. Nesciunt a ratione asperiores mollitia error fugit neque, beatae ut ab ex similique blanditiis veritatis consequatur illo modi explicabo vel est fuga maxime dolorum, iusto laudantium accusantium. Non delectus fugit fugiat, vel, minima ipsam adipisci, esse facilis ad eaque rerum obcaecati aperiam dignissimos illo cumque.</p>

          <span className="text-lg font-semibold underline cursor-pointer">See more</span>

          <div className="divider"></div>

          <h2 className="text-2xl	font-semibold mb-5">Where you'll film</h2>

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation]}
            className="myStudioRoom"
          >
            <SwiperSlide>
              <StudioRoomCard />
            </SwiperSlide>

            <SwiperSlide>
              <StudioRoomCard />
            </SwiperSlide>

            <SwiperSlide>
              <StudioRoomCard />
            </SwiperSlide>

            <SwiperSlide>
              <StudioRoomCard />
            </SwiperSlide>

          </Swiper>

          <div className="divider"></div>

          <h2 className="text-2xl	font-semibold mt-12 mb-5">All amenities this place has to offer</h2>

          <div className="grid grid-cols-3 gap-5 mb-8">

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

            <div className="card card-side bg-base-100 p-5 shadow-xl">
              <figure><FaWifi className="text-2xl pr-2" /></figure>
              <p className="text-md">Wifi</p>
            </div>

          </div>

          <button className="btn btn-outline mb-12">Show all 34 amenities</button>

          <div className="divider"></div>

          <DatePickerComponent/>
        </div>
        <div className="col-span-2"></div>
        
      </div>

      <div className="container mx-auto">
        <div className="divider"></div>
        <div className="flex items-center">
          <IoMdStar className="pr-3 text-4xl"/>
          <h2 className="text-2xl	font-semibold">4.84 · 586 reviews</h2>
        </div>
      </div>

    </>
  )
}

export default Studio