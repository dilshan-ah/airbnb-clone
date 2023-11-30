import React from 'react'
import CommunityPic from '../assets/community/community-two.jpg'

const CommunityCard = () => {
    return (
        <div className="rounded-2xl cursor-pointer">
            <figure className='h-96'><img src={CommunityPic} alt="Shoes" className='h-full object-cover rounded-2xl' /></figure>
            <div className="p-3 text-center text-white">
                <h2 className="font-semibold text-xl">Best equipments for your show</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        </div>
    )
}

export default CommunityCard