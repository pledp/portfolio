import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        
        <section id="footer" className='w-full text-white flex flex-col items-center justify-center pb-5 pt-20'>
            <h1>© 2024 L-E. J. <span className='italic px-3'>"pled"</span> T</h1>
            <p className='text-xs'>Built with Next.js, React and Tailwind</p>
        </section>
    )
}

export default Footer;