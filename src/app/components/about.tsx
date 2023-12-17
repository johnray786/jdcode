'use client';
import React from 'react'
import {motion} from 'framer-motion'
import { useSectionInView } from '../lib/hooks';

export default function About() {
    const {ref} = useSectionInView("About");
  

  return <motion.section
   ref={ref}
   className=' mb-28 scroll-m-28 max-w-[45rem] text-center sm:mb-40 text-gray-900  dark:text-gray-300'
   initial = {{opacity:0, y:100}}
   animate = {{opacity:1, y:0}}
   transition = {{delay:0.175}}
   id='about'
   >
    <h1 className='Bold text-3xl mb-4'>About Us</h1>

    <p className='text-sm leading-6'>
        <span className='font-bold'>JDCODE</span> is a dynamic duo of tech enthusiasts who are passionate about creating cutting-edge solutions
        for the digital world. Whether it is Web3 development, AI, Cybersecurity, Digital Marketing 
        or Blockchain, we have the skills and experience to deliver excellence and innovation.
    </p>
    <h2 className='font-bold py-1'>Meet Juned ur Rehman</h2>
    <p className='text-sm leading-6'>
        With a <span className='italic font-medium'>journey spanning over 15 years</span>, Juned ur Rehman Bhatti stands at the helm of 
        <span className='font-bold'> JDCODE </span> 
        , traversing the realms of 
        <span className='italic font-medium'> Entrepreneurship, Web Development, AI, Business Development, Banking & Real Estate</span>. His seasoned experience resonates
        in every cornerstone of our initiatives, shaping <span className='font-bold'> JDCODE </span>'s trajectory with innovation 
        and steadfast leadership. Juned's unwavering commitment to pioneering advancements in technology serves
        as the cornerstone of our philosophy.
    </p>
    <h2 className='font-bold py-1'>Meet Dilawar Baig</h2>
    <p className='text-sm leading-6'>
        Energizing the pulse of <span className='font-bold'>JDCODE</span> with youthful zeal and an insatiable hunger for tech mastery is 
        Dilawar Baig. As a budding <span className='italic font-medium'>professional</span>, Dilawar embodies an unyielding passion for absorbing and 
        <span className='italic font-medium'> harnessing the latest tech trends</span>. His fervor for information technology ignites the driving force
        behind our quest for excellence. Dilawar's relentless pursuit of learning and his aspirational drive
        <span className='italic font-medium'> inspire us to push boundaries and emerge as trailblazers</span> in the ever-evolving landscape 
         of IT innovation.
    </p>
    
    <p className='text-sm leading-6 py-2'>
        <span className='italic font-medium'>Together</span>, we are <span className='font-bold'>JDCODE</span>, a team of tech enthusiasts who are 
        committed to creating amazing <span className='italic font-medium underline'>digital solutions</span> for our clients & partners. 
        We are always ready to take on new projects and challenges, 
        and we look forward to working with you.
    </p>
    
  </motion.section>
}
