import backgroundImage from '../assets/banner/banner-two.jpg';
import CategoryCard from '../components/CategoryCard';
import Navbar from '../components/Navbar';
import { IoFilter } from "react-icons/io5";
import ProductCard from '../components/ProductCard';
import Counter from '../components/Counter';
import CancelPic from '../assets/cancelled.png'
import Price from '../assets/shield.png'
import Reward from '../assets/medal.png'
import HostBackground from '../assets/banner/host.jpg'
import { Link } from 'react-router-dom';
import CommunityCard from '../components/CommunityCard';
import TestimonialSlide from '../components/TestimonialSlide';
import BrandSlide from '../components/BrandSlide';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';
import { MdOutlineFavorite } from "react-icons/md";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import logo from '../assets/nav-logo.png';

const Home = () => {

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const studioBackphoto = {
        backgroundImage: `url(${HostBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
    };

    return (
        <>
            <div className="w-full h-screen" style={containerStyle}>
                <Navbar textColor={'text-white'} navlogo={logo} />
                <div className='w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center z-30'>
                    <h3 className='text-2xl text-center text-white font-bold uppercase font-mono'>Seaching for the best studio for your content?</h3>
                    <button className="btn rounded-full mt-5 text-lg text-pink-700 bg-white px-7">I'm flexible</button>
                </div>
            </div>

            <div className='container px-5 sm:px-0 mx-auto my-10'>
                <h3 className='text-2xl	font-semibold mb-5'>Explore your choice</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>

                <div className='inline-block flex justify-center mt-5'>
                    <button className="btn btn-active btn-neutral">See more</button>
                </div>

            </div>

            <div className='container mx-auto my-32 px-5 sm:px-0'>
                <div className='sm:flex block'>
                    <div className='flex-1'>
                        <h3 className='text-2xl	font-semibold'>Featured Locations for Photography & Filming</h3>
                        <p className='text-base	text-gray-600'>Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum Loren itsum</p>
                    </div>
                    <div className='my-5 sm:my-0'>
                        <button className="btn" onClick={() => document.getElementById('filter').showModal()}><IoFilter />Filter</button>
                    </div>
                    <dialog id="filter" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                    </dialog>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>
                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>

                    <div className='relative'>
                        <Link to='/studio'>
                            <ProductCard />
                        </Link>
                        <label className="swap absolute right-2.5 top-2.5 btn bg-transparent border-0 bg-white rounded-full p-0 w-9 h-9 min-h-fit z-50">

                            <input type="checkbox" />

                            <MdOutlineFavoriteBorder className="swap-off text-2xl text-pink-500" />

                            <MdOutlineFavorite className="swap-on  text-2xl text-pink-500" />

                        </label>
                    </div>
                </div>
                <div className='inline-block flex justify-center mt-5'>
                    <button className="btn btn-active btn-neutral">See more</button>
                </div>
            </div>

            <div className='container bg-blue-950 px-10 py-8 md:py-16 md:px-20 mx-auto rounded-xl'>
                <h2 className='text-white text-center sm:text-start capitalize text-3xl font-semibold mb-16'>Explore our company history</h2>

                <div className='grid grid-cols-2 sm:grid-cols-4'>
                    <div className='flex flex-col py-5 sm:py-0 items-center'>
                        <h2 className='text-white text-3xl font-bold mb-5 flex'><span><Counter end={120} /></span>k+</h2>
                        <p className='text-white text-base'>website user</p>
                    </div>

                    <div className='flex flex-col py-5 sm:py-0 items-center'>
                        <h2 className='text-white text-3xl font-bold mb-5 flex'><span><Counter end={110} /></span>k+</h2>
                        <p className='text-white text-base'>Happy clients</p>
                    </div>

                    <div className='flex flex-col py-5 sm:py-0 items-center'>
                        <h2 className='text-white text-3xl font-bold mb-5 flex'><span><Counter end={20} /></span>k+</h2>
                        <p className='text-white text-base'>Active studios</p>
                    </div>

                    <div className='flex flex-col py-5 sm:py-0 items-center'>
                        <h2 className='text-white text-3xl font-bold mb-5 flex'><span><Counter end={8} /></span>Y+</h2>
                        <p className='text-white text-base'>Company year</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto my-20'>
                <h2 className='text-center text-2xl	font-semibold mb-5'>Why book with us?</h2>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className='p-3'><img src={CancelPic} alt="Movie" className='w-12' /></figure>
                        <div className="p-3">
                            <h2 className="font-bold">Free Cancellation</h2>
                            <p className='text-xs text-gray-500'>On most hotels</p>
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className='p-3'><img src={Price} alt="Movie" className='w-12' /></figure>
                        <div className="p-3">
                            <h2 className="font-bold">Price Guarantee</h2>
                            <p className='text-xs text-gray-500'>Find out more</p>
                        </div>
                    </div>

                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className='p-3'><img src={Reward} alt="Movie" className='w-12' /></figure>
                        <div className="p-3">
                            <h2 className="font-bold">Get a reward extra time</h2>
                            <p className='text-xs text-gray-500'>For every 1 month</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto p-10 sm:p-20 rounded-2xl relative mb-16' style={studioBackphoto}>
                <h2 className='text-6xl font-semibold text-white mb-10 z-50 relative'>Your world is <br /> worth sharing</h2>
                <p className='text-white text-xl tracking-wide mb-10 z-50 relative'>Turn your extra space into your next<br /> opportunity</p>
                <Link to="/host">
                    <button className="btn btn-wide bg-rose-600 text-white z-50 relative border-0 hover:text-black">Become a host</button>
                </Link>

                <div className='w-full h-full bg-gradient-to-r from-slate-950 to-transparent absolute left-0 top-0 rounded-2xl'></div>
            </div>

            <div className='w-full py-16 bg-zinc-950'>
                <div className='container mx-auto'>
                    <h2 className='text-center text-white text-5xl font-bold mb-10'>Our Community</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        <CommunityCard />
                        <CommunityCard />
                        <CommunityCard />
                    </div>
                </div>
            </div>

            <div className='container mx-auto my-16'>
                <TestimonialSlide />
            </div>

            <div className='container mx-auto my-16'>
                <BrandSlide />
            </div>

            <Footer />
            <BottomNavigation />
        </>
    )
}

export default Home