import React from 'react'
import Studio from '../assets/studio/studio-one.jpg'

const StudioRoomCard = () => {
    return (
        <>
            <div className="card cursor-pointer">
                <figure className="relative">
                    <img src={Studio} alt="Shoes" className="rounded-xl h-auto sm:h-60 w-full object-cover" />
                </figure>
                <div className="text-center py-3">
                    <h2 className="card-title flex-1 text-base">Main hall</h2>

                    <p className='text-left text-gray-500'>1 big studio hall</p>
                </div>
            </div>
        </>
    )
}

export default StudioRoomCard