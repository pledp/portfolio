import React from 'react'
import StaggeredGrid from './DotGrid';

const Hero = () => {
    return (
        <section className='main-widget bg-black w-full flex items-center overflow-hidden justify-center'>
            <StaggeredGrid className="absolute top-50 left-50 max-w-full overflow-hidden
            sg:overflow-visible"/>

            <div className=" text-black mx-12 flex flex-col items-center justify-center gap-10 relative rounded-2xl p-16 mix">
                <div>
                    <div className='text-5xl hero-text
                    sm:text-6xl'>
                        <h2 className="font-bold text-center hero-text">L-E. J.<span className='italic px-6'>"pled"</span> T</h2>
                    </div>
            
                    {/* Description */}
                    <p className="text-center pt-5 hero-text">
                        engineering student, otherwise trying-to-act-as-a software engineer.
                    </p>
                </div>
                <a href="#projects-section" className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group bg-black">
                    <span className="absolute top-0 left-0 w-64 h-64 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-72 -translate-y-32 bg-white opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">see what i've been doing</span>
                    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
            </div>
        </section>
    )
}

export default Hero;