import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section className='main-widget bg-black-100 w-full flex items-center overflow-hidden'>
            <div className="w-full main-widget h-1/2 text-white mx-12 flex flex-col items-center justify-center gap-10 relative">
                {/* Colored Background Placeholder */}
        
                {/* Name */}
                <div>
                    <h2 className="text-6xl font-bold text-center">L-E. J.<span className='italic text-6xl px-6'>"pled"</span> T</h2>
            
                    {/* Description */}
                    <p className="text-center pt-5">
                        engineering student, otherwise trying-to-act-as-a software engineer.
                    </p>
                </div>
                <a href="#projects-section" className='bg-white text-black rounded-xl p-2 px-10 hover:text-white hover:bg-transparent border-2'>
                        see what i've been doing
                </a>
                <Image src={'/Signature.png'} alt="Signature" width="256" height="256" className='absolute bottom-5 left-5'></Image>
            </div>
        </section>
    )
}

export default Hero;