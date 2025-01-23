import React from 'react'
import Image from "next/image";
import FadeInSection from './scroll_effect';

const Widgets = () => {
    return (
        <section className='text-white flex flex-col justify-center gap-12 mt-10 projects-widget'>
            <div className='flex flex-col items-center
            sm:flex-row'>
                <FadeInSection className='transition fade-delay'>
                    <h1 className='text-7xl font-bold'>5+</h1>
                    <div className='text-neutral-400'>
                        <p>YEARS PROGRAMMING</p>
                        <p>EXPERIENCE</p>
                    </div>
                </FadeInSection>
                <div className='w-full'>
                    <FadeInSection className='bg-green-100 rounded-2xl flex flex-col p-5 gap-5 mt-5 fade-delay pattern-wave'>
                        <h1 className='text-3xl font-bold text-black'>what i can kinda do - <span className='bg-red-100 text-white rounded-2xl px-4'>tierlist</span></h1>

                        <div className='w-full flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-7xl font-bold mr-10 bg-red-100 p-5 rounded-2xl px-8'>S</h1></div>
                            <div>
                                <Image src="/portfolio/rust-logo.svg" width={80} height={80} alt="Rust logo" className='rust-logo'></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/cpp-logo.svg" width={80} height={80} alt="C++ logo"></Image>
                            </div>
                        </div>
                        <div className='w-5/6 flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-300 p-5 rounded-2xl px-8'>A</h1></div>
                            <div className='flex flex-col gap-2'>
                                <Image src="/portfolio/html-logo.svg" width="60" height="60" alt="HTML logo"></Image>

                                <Image src="/portfolio/css-logo.svg" width="60" height="60" alt="CSS logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/js-logo.svg" width="60" height="60" alt="JS logo"></Image>
                            </div>
                        </div>
                        <div className='w-5/6 flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-400 p-5 rounded-2xl px-8'>B</h1></div>
                            <div>
                                <Image src="/portfolio/csharp-logo.svg" width="50" height="50" alt="C# logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/python-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/react-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay'></FadeInSection>
            <FadeInSection className='fade-delay'>
                <h1 className='text-3xl font-bold'>what i've <span className='text-orange-200'>recently</span> been focusing on</h1>
                <div className='bg-orange-200 w-full h-96 rounded-2xl mt-5 p-6 flex flex-col gap-16 pattern-doodle'>
                    <div className='items-end text-right flex flex-col gap-5'>
                        <h1 className='font-bold text-6xl'>mögl</h1>
                        <p>a work-in-progress game framework/engine.</p>
                    </div>
                    <div className='items-end mt-auto'>
                        <p>written in <span className='font-bold'>Rust</span> with winit and wgpu. written mostly as a Rust-learning-project. currently working on implementing plugins and ECS-type capabilities.</p>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default Widgets;