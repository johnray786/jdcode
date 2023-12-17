'use client';

import React from 'react'
import { projectsData } from '../lib/data'
import Project from './project';
import { useSectionInView } from '../lib/hooks';

export default function Projects() {

  const {ref} = useSectionInView("Projects",0.5);

  return (
    <section ref={ref} className='scroll-mt-28 dark:bg-gray-800 dark:text-gray-200 bg-pink-100 last:mb-0 mb-28 text-gray-900' id='projects'>
    <h1 className='Bold text-3xl mb-4 text-center'>Our Projects</h1>
   
   <div>
    {projectsData.map((project,index)=>(
        <React.Fragment key={index}>
        <Project {...project}/>
        </React.Fragment>
    ))}
    </div>
    </section>
  );
}


