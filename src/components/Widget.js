import React from 'react'
import FadeInSection from './scroll_effect';

const Widgets = () => {
    return (
        <section className='text-white flex flex-col justify-center gap-12 mt-10 projects-widget'>
            <FadeInSection>
                <h1 className='text-7xl font-bold'>5+</h1>
                <div className='text-neutral-400'>
                    <p>YEARS PROGRAMMING</p>
                    <p>EXPERIENCE</p>
                </div>
            </FadeInSection>
            <FadeInSection>
                <h1 className='text-3xl font-bold'>what i've <span className='text-orange-200'>recently</span> been focusing on</h1>
                <div className='bg-orange-200 w-full h-96 rounded-2xl mt-5 p-6 flex flex-col gap-16'>
                    <div className='items-end text-right flex flex-col gap-5'>
                        <h1 className='font-bold text-6xl'>mögl</h1>
                        <p>a work-in-progress game framework/engine.</p>
                    </div>
                    <div className='items-end mt-auto'>
                        <p>written in <span className='font-bold'>Rust</span> with winit and wgpu. written mostly as a Rust-learning-project. currently working on implementing ECS-like events system.</p>
                    </div>
                </div>
            </FadeInSection>
        </section>
    )
}

export default Widgets;