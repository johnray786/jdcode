'use client'

import React from 'react'
import Image from 'next/image';
import { useScroll,motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { projectsData } from '../lib/data';

type ProjectsProps = (typeof projectsData)[number];
export default function Project({title,description,tags,imageUrl}: ProjectsProps)
{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:['0 1', '1.33 1']
    });
    
    const scaleProgress = useTransform(scrollYProgress,[0,1],[0.8,1]);
    const opacityProgress = useTransform(scrollYProgress,[0,1],[0.6,1]);

    return(
    <motion.div ref={ref}
    style={{scale:scaleProgress, opacity:opacityProgress}}
    className='group mb-3 sm:mb-8 last:mb-0 even:pl-8'
    >
  <section
    className='group relative bg-pink-100 dark:bg-gray-700 max-w-[42rem] rounded-lg overflow-hidden transition sm:pr-8 sm:mb-0 text-gray-900  dark:text-gray-200'>
              <div className='flex flex-col pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[20rem] '>
                <h2 className='font-semibold py-1'>{title}</h2>
                <p className='mt-2 leading-relaxed text-gray-700 dark:text-gray-200'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag,index)=>(
                    <li key={index} className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-blue-100 rounded-full'>{tag}</li>
                ))}</ul>
                </div>
                <Image src={imageUrl} alt='Project We Worked On' quality = {95} className='absolute hidden sm:block top-8 -right-40 w-[27rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40  
                group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]
                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                '/>
            </section>

    </motion.div>
    );
                    }