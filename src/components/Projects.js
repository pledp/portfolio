import React from 'react'

const Projects = () => {


    return (
        
        <section id="projects-section" className='bg-black-200 w-full flex flex-col pt-5 items-center justify-center
        lg:pt-0 lg:flex-row lg:items-start'>
            <div className="card bg-white rounded-2xl shadow-lg overflow-hidden w-3/4 p-5 text-center flex flex-col relative mt-10
            lg:w-96 lg:sticky lg:top-10">
            {/* Top Half - Colored Section */}
                <div className="h-1/2 bg-orange-200 mx-10 my-5"></div>

                {/* Bottom Half - Content */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">L-E. J.<span className='italic text-xl px-6'>"pled"</span>T</h2>
                <p className="text-gray-900 mb-4">
                i major in biomedical engineering.
                </p>
                <p className="text-gray-900 mb-4 pt-5">
                i occasionally try to build something with systems programming languages such as rust and c/c++. mostly in the context of scuffed game frameworks/engines.
                </p>
                <p className="text-gray-900 mb-4 pt-5">
                i try to build with modular design in mind, stealing patterns from others.
                </p>
            </div>
            <div className="text-white mx-12 flex flex-col items-center justify-center gap-10 mt-10">
        
                <div className='h-screen'>
                    <h2 className="text-2xl font-bold text-center">L-E. <span className='italic text-xl px-6'>"pled"</span> Thurin</h2>
            
                    <p className="text-center">
                        biomedical engineering student by day, some-sort-of-dev by night.
                    </p>
                </div>
                <button className='bg-white text-black rounded-xl p-2 px-10 hover:text-white hover:bg-transparent border-2'>
                    <p>
                        see what i've been doing
                    </p>
                </button>
                <div>
                    <h2 className="text-2xl font-bold text-center">L-E. <span className='italic text-xl px-6'>"pled"</span> Thurin</h2>
            
                    <p className="text-center">
                        biomedical engineering student by day, some-sort-of-dev by night.
                    </p>
                </div>
                <button className='bg-white text-black rounded-xl p-2 px-10 hover:text-white hover:bg-transparent border-2'>
                    <p>
                        see what i've been doing
                    </p>
                </button>
                <div>
                    <h2 className="text-2xl font-bold text-center">L-E. <span className='italic text-xl px-6'>"pled"</span> Thurin</h2>
            
                    <p className="text-center">
                        biomedical engineering student by day, some-sort-of-dev by night.
                    </p>
                </div>
                <button className='bg-white text-black rounded-xl p-2 px-10 hover:text-white hover:bg-transparent border-2'>
                    <p>
                        see what i've been doing
                    </p>
                </button>
                <div>
                    <h2 className="text-2xl font-bold text-center">L-E. <span className='italic text-xl px-6'>"pled"</span> Thurin</h2>
            
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
        </section>
    )
}

export default Projects;