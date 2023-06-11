import {Container} from 'react-bootstrap'
import {useState, useEffect, useRef} from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import $ from 'jquery';

export const Skills = () => {
     const [currentSkillId, setCurrentSkillId] =useState(0);
     const items = ['s','','','','','',''];
     const [isVisible, setIsVisible] = useState(false);
     const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      const handleChange = (newPosition) => {
          console.log(newPosition);
      }
      

    const carousel = useRef();
    const skillsVisible =useRef();
    useEffect(()=>{
         const visible = new IntersectionObserver(entry=>{
            if(entry[0].isIntersecting){
              console.log("INTERSECTIIING")
              setIsVisible(true);
            }
            else {
              setIsVisible(false);
              console.log("NOT INTERSECTIIIINGGG!!!")
            }
            
         });

         
         
            visible.observe(skillsVisible.current);
         
         
         return () => { visible.unobserve(skillsVisible.current) }

    },[])
    
    const handleBeforeChange = (currentSlide, nextSlide) =>{
         setCurrentSkillId((currentSlide)%7);
    }
    

    const handleOnClick = (index, currentSkillId) => {
    
        carousel.current.goToSlide(index);
    
    }

    const SvgComponent = (percent) => {
      console.log(percent.percent);
      return(
      <svg viewBox='-2 -1 40 40' class="circular-chart blue">
      <path class="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
       />
      <path class="circle"
      strokeDasharray={`${percent.percent},100`}
      d="M18 2.0845
     a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
     <text x="18" y="20.35" className="percentage">{percent.percent}%</text>
     </svg>
      )
    }
    
    return(
        <div className="h-full min-h-[1500px] bg-yellow-600 w-full " id="skills">
             
              <Container className="h-screen sticky top-[90px] border-white w-full" >
                    
                    <div className="flex flex-col items-center justify-center w-full text-white mb-5 pt-2">
                        <div className="w-full  max-w-[930px] flex">
                          <h1 className="pl-5 text-5xl underline font-bold font-serif text-[#121212]"> Skills</h1>
                        </div>
                        <div ref={skillsVisible} id='skills-text-box'>
                         <div className="max-h-[200px] overflow-clip">
                          <p className="relative z-50">Here is the list of all the programming languages, frameworks and tools I'm familiar with.<br>
                            </br>There's also my subjective evaluation of each one of them. That doesn't mean it's 100% on point, but at least you should get some, as to say
                             general perspective of what I know 
                             and where I find myself better compared to others (things)  </p>
                          </div>
                          <div className={`skills-text-cover ${isVisible ? 'skills-visible' : ''}`}></div>
                        </div>
                      </div>
                     
                     <div >
                     
                         <Carousel ref={carousel}  beforeChange={handleBeforeChange} responsive={responsive} infinite={true} dotListClass="custom-dot-list-style" className="owl-carousel owl-theme skill-slider text-white">
                           
                            <div className="item flex  flex-col items-center">
                                <SvgComponent percent={83} />
                                <h5 className=' text-3xl'>React</h5>
                             </div>

                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={75}/>
                                <h5 className=' text-3xl'>Nextjs</h5>
                            </div>

                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={87} />
                                <h5 className=' text-3xl'>PostgreSQL</h5>
                            </div>

                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={88}/>
                                <h5 className=' text-3xl'>Tailwind</h5>
                            </div>
                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={80}/>
                                <h5 className='text-3xl'>Prisma</h5>
                            </div>
                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={60}/>
                                <h5 className='text-3xl'>Java</h5>
                            </div>
                            <div className="item flex flex-col items-center">
                                <SvgComponent percent={55}/>
                                <h5 className=' text-3xl'>C#</h5>
                            </div>
                        </Carousel>
                      </div>
                    <div className="w-full flex justify-center mt-4 mb-4">
                    <div id="navigation" className='w-full h-10 max-w-[400px] grid grid-cols-7'>
                        {
                          items.map((item,index)=>
                          
                          index===currentSkillId ? <div className="w-full flex justify-center"> <div className='active w-[90%] h-[4px]  rounded-lg bg-white'></div> </div> : 
                          <div className="w-full flex justify-center"><div onClick={()=>handleOnClick(index, currentSkillId)} className='inactive w-[90%] h-[4px]  rounded-lg bg-white/60 '></div> </div>)
                        }
                    </div>
                    </div>
                    
              </Container>
        </div>
    )
}