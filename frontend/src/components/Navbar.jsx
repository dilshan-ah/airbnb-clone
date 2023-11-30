import { Link } from 'react-router-dom';
import logo from '../assets/nav-logo.png';
import profilepic from '../assets/profilepic.jpg'
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


const Navbar = ({ textColor, navlogo, boxShadow }) => {
    return (
        <>
            <div className="navbar container mx-auto z-50 relative md:flex hidden">
                <div className="flex-1">
                    <Link to="/">
                        <img src={navlogo} alt="" className='w-28' />
                    </Link>
                </div>
                <div className="flex-none gap-5">
                    <Link to="/host">
                        <h4 className={`text-sm font-semibold ${textColor}`}>Become a host</h4>
                    </Link>

                    
                    <button onClick={() => document.getElementById('my_modal_3').showModal()}><TbWorld className={`${textColor} text-xl`} /></button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>


                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className={`rounded-3xl bg-white flex items-center justify-center gap-3 cursor-pointer px-2 py-1.5 ${boxShadow}`}>
                            <IoIosMenu className='text-black text-2xl' />
                            <img src={profilepic} className='w-7 rounded-full' alt="" srcset="" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-max">
                            <li className='text-sm font-medium'>
                                <a className="justify-between">
                                    Find the best studio
                                    <span className="badge ml-5 bg-green-500 text-white">New</span>
                                </a>
                            </li>
                            <li className='text-sm font-medium'><a>Sign up</a></li>
                            <li className='text-sm font-medium'><a>Log in</a></li>
                            <li className='text-sm font-medium'><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='flex justify-center container mx-auto z-40 relative md:py-0 py-5'>
                <div className={`stats stats-horizontal w-11/12 sm:w-max shadow rounded-full cursor-pointer hover:bg-gray-200 duration-150  ${boxShadow}`}>

                    <div className="stat hidden sm:block pr-14 md:pr-28 py-2">
                        <h5 className='text-base font-bold'>Location</h5>
                        <p className='text-sm text-gray-400'>Find your place</p>
                    </div>

                    <div className="stat hidden md:block py-2">
                        <h5 className='text-base font-bold'>Check in</h5>
                        <p className='text-sm text-gray-400'>Add dates</p>
                    </div>

                    <div className="stat hidden md:block py-2">
                        <h5 className='text-base font-bold'>Check out</h5>
                        <p className='text-sm text-gray-400'>Add dates</p>
                    </div>

                    <div className="stat hidden sm:block md:hidden py-2">
                        <h5 className='text-base font-bold'>Check in & out</h5>
                        <p className='text-sm text-gray-400'>Add dates</p>
                    </div>

                    <div className="stat hidden sm:block pr-20 md:pr-28 relative py-2">
                        <h5 className='text-base font-bold'>Guest</h5>
                        <p className='text-sm text-gray-400'>Add guest</p>
                        <button className="btn btn-error absolute right-2 inset-y-0 my-auto rounded-full bg-red">
                            <FaSearch className='text-base text-white'/>
                        </button>
                    </div>

                    <div className="stat block sm:hidden pr-20 md:pr-28 relative py-2">
                        <h5 className='text-base font-bold'>Add location</h5>
                        <p className='text-sm text-gray-400'>Add date, Add guest</p>
                        <button className="btn btn-error absolute right-2 inset-y-0 my-auto rounded-full bg-red">
                            <FaSearch className='text-base text-white'/>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar