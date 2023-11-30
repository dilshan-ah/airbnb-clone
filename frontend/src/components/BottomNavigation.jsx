import { FaSearch } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";


const BottomNavigation = () => {
    return (
        <div className="btm-nav md:hidden flex bg-white z-50 py-3 h-auto">
            <Link to="/">
                <FaSearch className="text-2xl text-slate-950"/>
                <h5 className="text-xs">Explore</h5>
            </Link>
            <button>
                <GrFavorite className="text-2xl text-slate-950"/>
                <h5 className="text-xs">Wishlists</h5>
            </button>
            <button>
                <CiBookmarkCheck className="text-2xl text-slate-950"/>
                <h5 className="text-xs">Reservations</h5>
            </button>
            <button>
                <MdOutlineTextsms className="text-2xl text-slate-950"/>
                <h5 className="text-xs">Messages</h5>
            </button>
            <button>
                <CgProfile className="text-2xl text-slate-950"/>
                <h5 className="text-xs">Profile</h5>
            </button>
        </div>
    )
}

export default BottomNavigation