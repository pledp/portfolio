import React from 'react'

const Hero = () => {
    return (
        <section className='main-widget bg-black-100 w-full flex items-center overflow-hidden'>
            <div className="w-full main-widget h-1/2 text-white mx-12 flex flex-col items-center justify-center gap-10 relative">
                {/* Colored Background Placeholder */}
        
                {/* Name */}
                <div>
                    <div className='text-5xl
                    sm:text-6xl'>
                        <h2 className="font-bold text-center">L-E. J.<span className='italic px-6'>"pled"</span> T</h2>
                    </div>
            
                    {/* Description */}
                    <p className="text-center pt-5">
                        engineering student, otherwise trying-to-act-as-a software engineer.
                    </p>
                </div>
                <a href="#projects-section" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                    <span className="absolute top-0 left-0 w-64 h-64 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-72 -translate-y-32 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">see what i've been doing</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>
        </section>
    )
}

export default Hero;