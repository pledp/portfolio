import React from 'react'
import Image from "next/image";
import FadeInSection from './scroll_effect';
import Project from './Project-Widget';

const Widgets = () => {
    return (
        <section className='text-white flex flex-col justify-center gap-12 mt-10 projects-widget w-full over'>
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
                                <Image src="/portfolio/images/rust-logo.svg" width={80} height={80} alt="Rust logo" className='rust-logo'></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/images/cpp-logo.svg" width={80} height={80} alt="C++ logo"></Image>
                            </div>
                        </div>
                        <div className='w-5/6 flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-300 p-5 rounded-2xl px-8'>A</h1></div>
                            <div className='flex flex-col gap-2'>
                                <Image src="/portfolio/images/html-logo.svg" width="60" height="60" alt="HTML logo"></Image>

                                <Image src="/portfolio/images/css-logo.svg" width="60" height="60" alt="CSS logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/images/js-logo.svg" width="60" height="60" alt="JS logo"></Image>
                            </div>
                        </div>
                        <div className='w-5/6 flex flex-row p-5 gap-5 items-center bg-black-100 rounded-2xl'>
                            <div><h1 className='text-3xl font-bold mr-10 bg-orange-400 p-5 rounded-2xl px-8'>B</h1></div>
                            <div>
                                <Image src="/portfolio/images/csharp-logo.svg" width="50" height="50" alt="C# logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/images/python-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                            <div>
                                <Image src="/portfolio/images/react-logo.svg" width={50} height={50} alt="Python logo"></Image>
                            </div>
                        </div>

                        <h1 className='text-black text-xl font-bold'>+ other misc stuff*</h1>
                    </FadeInSection>
                </div>
            </div>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>

            <FadeInSection><h1 className='text-3xl font-bold'>what i've <span className='text-orange-200'>recently</span> been focusing on</h1></FadeInSection>

            <Project className='bg-orange-200 h-96 rounded-2xl mt-5 p-6 flex flex-col gap-16 pattern-doodle move-on-hover'>
                <div className='items-end text-right flex flex-col gap-5'>
                    <h1 className='font-bold text-6xl'>mögl</h1>
                    <p>a work-in-progress game framework/engine.</p>
                </div>
                <div className='items-end mt-auto'>
                    <p>written in <span className='font-bold'>Rust</span> with winit and wgpu. written mostly as a Rust-learning-project. currently working on implementing plugins and ECS-type capabilities.</p>
                </div>
            </Project>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>

            <FadeInSection className='fade-delay'> <h1 className='text-3xl font-bold'>other stuff i've done</h1> </FadeInSection>
        
            <div className='flex flex-col w-full gap-6'>
                <div className='flex flex-col gap-6
                sm:flex-row'>
                    <Project className='rounded-2xl p-6 flex flex-col bg-green-100 pattern-wave text-black gap-16 move-on-hover'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='font-bold text-6xl'>smeagl</h1>
                            <p>a (very) minimal game framework written in <span className='font-bold'>C++</span>.</p>
                        </div>
                        <p>C++ lerning project, made with SDL2 and OpenGL. implements basic graphics, such as quads and triangles with textures and shaders. also implements simple input.</p>
                    </Project>
                    
                    <Project className='rounded-2xl p-6 flex flex-col gap-16 h-full bg-white text-black move-on-hover'>
                        <div className='items-end text-right flex flex-col gap-5'>
                            <h1 className='font-bold text-6xl'>robot.r</h1>
                            <p>a programming game built for an internship.</p>
                        </div>
                        <div className='items-end mt-auto'>
                            <p>written in <span className='font-bold'>C#</span> with MonoGame. your goal is to complete challenges with a built-in custom programming language, written on-top of C#.</p>
                        </div>
                    </Project>
                </div>
                <div className='flex flex-col gap-6
                sm:flex-row'>
                    <Project className='rounded-2xl p-6 flex flex-col bg-green-100 pattern-wave text-black gap-10 h-full w-full move-on-hover'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='font-bold text-5xl'>Clawmarks</h1>
                            <p>1st year uni-project, a <span className='font-bold'>web-based puzzle game</span>.</p>
                        </div>
                        <p>written with <span className='font-bold'>JavaScript using Phaser</span>. it uses a server written in Python that looks up different airports from a database and saves progress in the database  (don't ask why).</p>
                        <div className='flex flex-col gap-4'>
                            <p>you work as a air-traffic-controller, and your objective is to guide airplanes on their journey.</p>
                            <p className='text-right'>tasks periodically appear. the players job is write a command completing the task as fast as possible to gain points. tasks range from changing an airplanes altitude, to confirming their landing.</p>
                            <p>occasionally events, which you have to deal with, appear, such as a fire or a crash on the airport.</p>
                        </div>
                    </Project>
                </div>
                <h1 className='font-bold'>+ other smaller stuff*</h1>
            </div>

            <FadeInSection className='h-2 bg-white w-1/2 mx-auto rounded-2xl fade-delay m-10'></FadeInSection>
            
            <FadeInSection className='fade-delay'> <h1 className='text-3xl font-bold'>contact me</h1> </FadeInSection>
            <FadeInSection className='flex flex-col bg-white text-black p-5 rounded-2xl gap-10'>
                <div className='flex flex-col'>
                    <h1 className='text-xl'>email</h1>
                    <h1 className='text-2xl font-bold'>pledplers2@gmail.com</h1>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl'>social</h1>
                    <a href='https://github.com/pledp'><Image className="transition-transform duration-300 ease-in-out hover:scale-110" src="/portfolio/images/github-logo.svg" width="50" height="50" alt="Github logo"></Image></a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Widgets;