import Image from "next/image";
import React from 'react'
import FadeInSection from "./scroll_effect";

const Card = () => {
    return(
        <FadeInSection threshold={0.4} className="card bg-white rounded-2xl overflow-hidden p-5 text-center flex flex-col relative mt-10 w-3/4 min-w-96
        lg:w-96 lg:sticky lg:top-10">
        {/* Top Half - Colored Section */}
            <div className="h-1/2 bg-orange-100 mx-10 my-5 items-center rounded-2xl flex">
                <Image src={'/portfolio/Signature.png'} alt="Signature" width="256" height="256" className='mx-auto'></Image>
            </div>

            {/* Bottom Half - Content */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">L-E. J.<span className='italic text-3xl px-6'>"pled"</span>T</h2>
            <p className="text-gray-900 mb-4">
            i major in biomedical engineering.
            </p>
            <p className="text-gray-900 mb-4 pt-5">
            i occasionally try to do some application/systems programming with rust or c/c++. mostly in the context of scuffed game frameworks/engines.
            </p>
            <p className="text-gray-900 mb-4 pt-5">
            passioante about design patterns, try implement.
            </p>
        </FadeInSection>
    )
}

export default Card;