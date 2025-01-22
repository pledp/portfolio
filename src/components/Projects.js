
import React from 'react'
import Image from 'next/image';
import Card from "@/components/Card";
import Widgets from '@/components/Widget';
import FadeInSection from '@/components/scroll_effect';

const Projects = () => {
    return (
        
        <section id="projects-section" className='bg-black-200 w-full'>
            <div className='flex flex-col pt-5 items-center justify-center gap-24 w-full mx-auto
            lg:pt-0 lg:flex-row lg:items-start'>
                <Card />
                <Widgets />
            </div>
        </section>
    )
}

export default Projects;