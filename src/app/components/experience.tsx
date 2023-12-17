'use client';

import React, { useContext } from 'react'
import { VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '../lib/data';
import { useSectionInView } from "../lib/hooks";
import { useTheme } from '../context/theme-context';



export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();


  return (
  <section className='scroll-mt-28 mb-28 sm:mb-40' id="experience" ref={ref}>
<h1 className='Bold text-3xl mb-4 text-center'>Our Experience</h1>
<VerticalTimeline lineColor='gray' animate = {true}>
  {experiencesData.map((item, index) => (
      <React.Fragment key={index}>
      <VerticalTimelineElement visible = {true} contentStyle={{
        background: theme==="light" ? "#334155" : "rgba(255,255,255,0.05)",
        boxShadow:'none',
        border:"1px solid rgba(0,0,0,0.1)",
        textAlign:"left",
        padding:"1.3rem 2rem solid #9ca3af",
        
      }}

      contentArrowStyle={{borderRight:"0.4rem solid #db2777"}}
      date={item.date}
      icon={item.icon}
      iconStyle={{background:"#334155",fontSize:"1.5rem", color:"#ec4899"}}
      >
      <h3 className='font-bold capitalize text-gray-200'>{item.title}</h3>
      <p className='font-semibold !mt-0 text-gray-300'>{item.location}</p>
      <p className='!mt-1 !font-normal text-gray-300'>{item.description}</p>
      </VerticalTimelineElement>
      </React.Fragment>
    ))}

</VerticalTimeline>

</section>

);

}


