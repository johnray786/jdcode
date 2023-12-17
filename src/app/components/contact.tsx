'use client';

import React from 'react'
import {motion} from "framer-motion"
import { useSectionInView } from '../lib/hooks';
import {sendEmail} from '../actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  

   return (
    <motion.section id='contact' ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} viewport={{once:true}}
    >
        <h1 className='Bold text-3xl mb-4 text-center'>Contact Us</h1>  
        <p className='text-gray-600 mb-4 dark:text-gray-200/80'>Please Contact us for further query at <a className='underline' href='mailto:jdcode100@gmail.com'>jdcode100@gmail.com</a> or through this form.</p>
        <form className='mt:10 flex flex-col dark:text-black' 
        action={async formData => {
            const {data, error} = await sendEmail(formData);
            if (error) {
                toast.error(error);
                return;
            }
            toast.success('Email sent successfully!');
            }}
            >
            <input name='senderEmail' className='h-14 px-4 rounded-lg border border-black/10 dark:bg-white/80 dark:focus:bg-opacity-100 transition-all' type='email' placeholder='Your email' required maxLength={500}/>
            <textarea name='message' className='h-52 my-3 px-4 rounded-lg border border-black/10  dark:bg-white/80 dark:focus:bg-opacity-100 transition-all'placeholder='Your message' required maxLength={5000}/>
            <SubmitBtn/>
        </form>
        
 
    </motion.section>
    
  )
}
