import TestimonialPic from '../assets/testimonial/testimonial-one.jpg'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";



const TestimonilaCard = () => {
    return (
        <div className="hero bg-base-200 rounded-xl py-5 lg:py-0">
            <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                <img src={TestimonialPic} className="max-w-sm rounded-xl shadow-2xl" />
                <div className='px-24'>
                    <p className="py-6"><FaQuoteLeft className='inline -mt-3 text-rose-600'/> Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. <FaQuoteRight className='inline -mb-3 text-rose-600'/></p>
                    <h1 className="text-xl font-bold lg:text-left text-center">Alexandar</h1>
                    <p className='lg:text-left text-center'>Businessman</p>
                </div>
            </div>
        </div>
    )
}

export default TestimonilaCard