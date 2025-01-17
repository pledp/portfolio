import React from 'react'

const Hero = () => {


    return (
        <div className='main-widget bg-black w-full flex items-center overflow-hidden'>
            <div className="w-full h-1/2 text-white mx-12 flex flex-col items-center justify-center gap-10">
                {/* Colored Background Placeholder */}
        
                {/* Name */}
                <div>
                    <h2 className="text-2xl font-bold text-center">L-E. <span className='italic text-xl px-6'>"pled"</span> Thurin</h2>
            
                    {/* Description */}
                    <p className="text-center">
                        biomedical engineering student by day, some-sort-of-dev by night.
                    </p>
                </div>
                <button className='bg-white text-black rounded-xl p-2 px-10 hover:text-white hover:bg-transparent border-2'>
                    <p>
                        see what i've been doing
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Hero;