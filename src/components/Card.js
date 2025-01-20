import Image from "next/image";
import React from 'react'

const Card = () => {
    return(
        <div className="card bg-white rounded-2xl overflow-hidden p-5 text-center flex flex-col relative mt-10 w-3/4 min-w-96
        lg:w-96 lg:sticky lg:top-10">
        {/* Top Half - Colored Section */}
            <div className="h-1/2 bg-orange-100 mx-10 my-5 items-center rounded-2xl flex">
                <Image src={'/Signature.png'} alt="Signature" width="256" height="256" className='mx-auto'></Image>
            </div>

            {/* Bottom Half - Content */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">L-E. J.<span className='italic text-2xl px-6'>"pled"</span>T</h2>
            <p className="text-gray-900 mb-4">
            i major in biomedical engineering.
            </p>
            <p className="text-gray-900 mb-4 pt-5">
            i occasionally try to do some application/systems programming with rust or c/c++. mostly in the context of scuffed game frameworks/engines.
            </p>
            <p className="text-gray-900 mb-4 pt-5">
            design patterns cool, try implement.
            </p>
        </div>
    )
}

export default Card;