
import $ from 'jquery';
import { motion } from 'framer-motion';

import nextjsLogo from '../assets/images/nextjsLogo.png';
import reactLogo from '../assets/images/reactLogo.png';
import nestjsLogo from '../assets/images/nestjsLogo.png';
import postgresLogo from '../assets/images/postgresLogo.png';
import prismaLogo from '../assets/images/prismaLogo.png';
import tailwindLogo from '../assets/images/tailwindLogo.png'
import { useRef, useState } from 'react';

export const Skills = () => {
    
    const skills = [
        {
            name: 'React',
            image: reactLogo
        },
        {
            name: 'Next.js',
            image: nextjsLogo
        },
        {
            name: 'NestJS',
            image: nestjsLogo
        },
        {
            name: 'PostgreSQL',
            image: postgresLogo
        },
        {
            name: 'Prisma ORM',
            image: prismaLogo
        },
        {
            name: 'TailwindCSS',
            image: tailwindLogo
        },
    ]

    const observer = useRef();
    const [intersecting, setIntersecting] = useState(false);
    const attachObserver = (node) => {

       observer.current = new IntersectionObserver((entries)=>{
          if (entries[0].isIntersecting){
             setIntersecting(true);
          }
       })

       if(node) observer.current.observe(node);
    }
    
    return(
        <div className=" bg-yellow-600 w-full px-[8px]  md:px-[20px] py-[20px] flex justify-center overflow-x-hidden" id="skills">
              
              <div className="w-full h-full">
                 <div ref={attachObserver} className="m-auto min-h-[420px] max-w-[1000px] 
                 grid grid-cols-2 md:grid-cols-3 grid-flow-rows gap-[16px] md:gap-[32px] text-[16px] xsm:text-[18px] sm:text-[20px] md:text-[24px] ">
                  {intersecting && skills.map((skill, idx)=>(
                  <motion.div
                   key={idx}
                   initial={{translateX:(idx%2===1) ? -350*(idx+1) : 2350, opacity:0}}
                   animate={{translateX:0, opacity:1}}
                   transition={{
                    delay:1.0*(idx),
                    duration:3.0,
                    type:'spring',
                   }
                   }
                   className="max-w-[220px] xsm:m-auto flex flex-col justify-center items-center relative p-[12px] md:p-[24px]  pb-[0px] md:pb-[0px]">
                    <img
                      alt={skill.name}
                      src={`${skill.image}`}
                      width={100}
                      className="w-full aspect-square bg-white rounded-full z-20">
                    </img>
                    <motion.p 
                      initial={{translateY: 20, opacity:0}}
                      animate={{translateY: 0, opacity: 1}}
                      transition={{
                        delay:2.0+(idx*1.0),
                        duration:2.0,
                        type:'spring'
                      }}
                      className="font-serif z-20 truncate ">{skill.name}
                    </motion.p>
                    <motion.div 
                     className="absolute top-0 w-full rounded-lg bg-[#EEEEEE] shadow-md"
                     initial={{height:0, opacity:0}}
                     animate={{height:"100%", opacity:1}}
                     transition={{
                        delay:(idx+2.5),
                        duration:1.5
                     }}>
                     </motion.div>
                  </motion.div>))}
                 </div>
              </div>
              
        </div>
    )
}