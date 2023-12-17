'use client';

import React from 'react'
import { skillsData } from '../lib/data'
import { useSectionInView } from '../lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimnationVariants = {
    initial : {
        opacity: 0,
        y : 100,
    },
    animate : (index: number) => ({
        opacity : 1,
        y: 0,
        transition:{
            delay:0.05*index,
        },
    }),
};

export default function Skills() {

    const { ref } = useSectionInView("Skills");
  return (
    <section
     id="skills" ref={ref} className='mb-28 max-w-[42rem] scroll-mt-28 text-center sm:mb-40'>
      <h1 className='Bold text-3xl mb-4'>Our Skills</h1>  
      <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-100'>
        {
            skillsData.map((skill, index) => (
                <motion.li className=' bg-black/[0.7] text-[0.7rem] uppercase border-black/[0.1] rounded-full px-5 py-1' key={index}
                variants={fadeInAnimnationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
                custom={index}
                >
                {skill}</motion.li>
            ))
        }
      </ul>
    </section>
  )
}

