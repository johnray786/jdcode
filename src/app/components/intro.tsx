'use client';

import Image from 'next/image';
import React from 'react';
import jdcode from '../lib/jdcodelogo.png';
import {motion} from 'framer-motion';
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from 'react-icons/bs';
import {HiDownload} from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import {useSectionInView} from '../lib/hooks'
import { useActiveSectionContext } from '../context/active-section-context';



export default function Intro() {
const {ref} = useSectionInView("Home",0.5);
const {setActiveSection,setTimeOfLastClick} = 
useActiveSectionContext();
  return (
    <section ref={ref} id="home" className='scroll-mt-[100rem] mb-20 max-w-[50rem] text-center sm:mb-0 text-gray-900  dark:text-gray-200'>
        <div className='flex items-center justify-center'>
            <div>
                <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{type:'tween',duration:0.2}}
                >
                <Image src={jdcode} alt='JDCODE LOGO' width='192' height='192' quality='95' priority={true} className='h-24 w-24 top-0 left-1/2 rounded-full border-[0.20rem] object-cover border-pink-400 shadow-xl shadow-pink-300'/>
                </motion.div>
            </div>
        </div>
        <motion.p className='mb-10 mt-4 px-4 font-light !leading-[1.5] sm:text-xl' initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}>
        <span className='font-semibold'>Welcome to JDCODE</span>
        , where innovation meets expertise! 
        As <span className='font-semibold'>Full Stack Developers, Web3, AI & Cybersecurity</span> mavens, 
        we\'re on a mission to redefine digital landscapes in <span className='italic'>Pakistan & across the Globe. </span> 
        
        <span className='font-semibold'> Join us</span> on a journey in <span className='italic'>delivering excellence </span>
        <span className='underline'>globally.</span>
        </motion.p>
    
    <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium'
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.1}}
    >
        <Link href='#contact' className='group bg-gray-950 text-blue-100 px-5 py-2 flex items-center rounded-full gap-2 outline-none focus:scale-105 hover:scale-105 hover:bg-gray-900 active:scale-100 transition' 
        onClick={()=>{
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
        }}
        >Contact Us Here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
    
        <a className='group bg-blue-200  text-gray-850 px-5 py-2 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-105 active:scale-100 transition cursor-pointer border border-gray-950/20  dark:text-gray-800' href='/cv.pdf' download={true}>
            Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>
        
        <a className='bg-blue-200  text-gray-850 p-3 flex items-center rounded-full gap-2outline-none focus:scale-110 hover:scale-110 hover:text-gray-950 active:scale-100 transition border border-gray-950/20  dark:text-gray-800' href='https://linkedin.com/in/juned-rehman' target='_blank'>
            <BsLinkedin/>
        </a>
        
        <a className='bg-blue-200 text-gray-850 p-3 flex items-center rounded-full gap-2 outline-none focus:scale-110 hover:scale-110  hover:text-gray-950 active:scale-100 transition border border-gray-950/20  dark:text-gray-800' href='https://github.com/johnray786' target='_blank'>
            <FaGithubSquare/>
        </a>
    
    </motion.div>
    </section>
  )
}
