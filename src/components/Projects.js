
import React from 'react'
import Image from 'next/image';
import Card from "@/components/Card";
import Widgets from '@/components/Widget';
import FadeInSection from '@/components/scroll_effect';

const Projects = () => {
    return (
        
        <section id="projects-section" className=' w-full z-10'>
            <div className='flex flex-col p-5 pt-5 items-center justify-center gap-24 w-full mx-auto
            lg:pt-0 lg:flex-row lg:items-start lg:p-0'>
                <Card />
                <Widgets />
            </div>
        </section>
    )
}

export default Projects;