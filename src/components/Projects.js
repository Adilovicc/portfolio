import spotifyBg from '../assets/images/spotify-remote-bg.PNG'
import huluBg from '../assets/images/hulu-clone-bg.PNG'
import noteBg from '../assets/images/note-bg.PNG'
import jelovnikBg from '../assets/images/jelovnikapp.PNG'
import githubLogo from '../assets/images/githubLogo.png'
//import {as1,as2,as3,as4,as5,as6} from '../assets/images'
import as1 from '../assets/images/as1.PNG'
import as2 from '../assets/images/as2.PNG'
import as3 from '../assets/images/as3.PNG'
import as4 from '../assets/images/as4.PNG'
import as5 from '../assets/images/as5.PNG'
import as6 from '../assets/images/as6.PNG'


import { Container } from 'react-bootstrap';
import $ from 'jquery'
import {useState, useEffect, useCallback, useRef} from 'react'

export const Projects = () => {
    const spotifyText = ["This Next.js application allows users to manage their Spotify account efficiently. Utilizing the Spotify API, the app enables users to control playback, manage playlists, and access personalized recommendations. The application's interface is built using Next.js and styled using Tailwind CSS, ensuring a responsive and visually appealing design."]
    const jelovnikText = ["Jelovnik app is a Next.js web application built with a PostgreSQL database. I have been working on this app as my final project/thesis at the college therefore I believe that this application is the best showcase of my knowledge in the field of web development. It utilizes NextAuth and Prisma adapter for session tracking and authentication. The app incorporates user roles, distinguishing between regular users and administrators. Its primary purpose is to provide a platform where users can explore and contribute to a comprehensive collection of meals from various restaurants. Users can add meals to the app, as well as leave reviews for each meal. Think of it as a restaurant menu where users can not only share their opinions through reviews but also seek recommendations on what to eat."]
    const huluText=["The Hulu-Clone app is a Next.js application developed with a focus on building a streaming platform similar to Hulu. It leverages Hulu APIs to retrieve data and replicate some of the key features of the popular streaming service. The app incorporates Next.js, a powerful React framework, to create a smooth and efficient user experience. Tailwind CSS is utilized for designing the app, ensuring a modern and responsive interface. By utilizing Hulu APIs and leveraging Next.js, the Hulu-Clone app provides users with the ability to browse, discover, and stream a wide range of movies and TV shows. It showcases the developer's skills in frontend development, API integration, and UI design."]
    const notebookText=["TO-DO App is a simple Next.js application that allows users to manage their tasks effectively. With this app, users can easily add, list, edit, and delete their to-do items. The application leverages the power of Prisma, which handles all the database operations, and utilizes PostgreSQL as the underlying database to securely store the task data. User authentication is implemented using NextAuth.js with the Google provider, ensuring a seamless and secure login experience. The app also features a clean and modern design, thanks to the utilization of Tailwind CSS framework, enabling an intuitive and user-friendly interface."]
    const answerNslideText=["The project is a Next.js application that utilizes various technologies and tools such as Firebase Storage, PostgreSQL database, Prisma ORM, and Tailwind CSS for styling.\n\nThis is my first project completed for a client on Upwork. Its main purpose is to provide an examination platform. The application includes an admin panel where an admin user can create exams. In the exam creation process, the admin can set up list of answers that would be offered on each post (question) that belongs to that particular exam.\n\nAdditionally, the admin has the abilities to generate users and manage participants by adding or removing them from a particular exam. Users who are added as participants to a specific exam will see the name of that exam in a dropdown menu. Upon selecting an exam from the dropdown, the user will be able to view the posts associated with that exam. These posts can include images and/or PDF files. The user can then proceed to answer the questions related to the exam.\n\n The admin user has complete visibility and control over the entire examination process. They can track and monitor the answers provided by users. Additionally, the admin has the ability to extract the collected answers and export them to an Excel table or perform other relevant actions. Overall, the project aims to provide a comprehensive examination platform with features for exam creation, participant management, real-time post viewing, user answering, and admin oversight and analysis."]
    const [currentValues, setCurrentValues] = useState([{image:jelovnikBg, title:'Spotify remote App', text:jelovnikText, link:'', github:''}])
    
    const detailedActive = useRef(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [period, setPeriod] = useState(false);
    const [isOpened, setIsOpened] = useState(false);

    const ref = useRef(false);
    const detailed = () => {
         $('#detailedScreen').css('display','flex');
         $('body').css('overflow','hidden');
         $('#detailedScreen').css('overflow','auto');
         detailedActive.current=true;
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentSlide<5 && !period) setCurrentSlide(prevSl=>prevSl+1);
            if(currentSlide==5 && !period) {setCurrentSlide(prevSl=>prevSl-1); setPeriod(true);}
            if(currentSlide<5 && currentSlide!==0 && period) setCurrentSlide(prevSl=>prevSl-1);
            if(currentSlide==0 && period) {setPeriod(false); setCurrentSlide(prevSl=>prevSl+1);}
        }, 6000)
        
        return()=>{clearInterval(interval)}
    },[currentSlide])

    const handleDetailedClick = useCallback((event)=>{
          if(detailedActive.current && ref.current && !event.target.closest("#detailedElement")){
              detailedActive.current=false;
              ref.current=false;
              $('#detailedScreen').css('display','none');
              $('body').css('overflow','auto');
              
          }
          if(detailedActive.current){ ref.current=true; console.log("DETAILED JE AKTIVAN");}
     }, [detailedActive])


     useEffect(()=>{
        
       document.addEventListener("click",handleDetailedClick);
        
       return()=>{
         document.removeEventListener("click",handleDetailedClick);
       }

     })

    return(
        <section id="projects" className="projects relative w-full min-h-screen">
              <div id="detailedScreen" className="fixed hidden z-50 top-0 bottom-0 right-0 left-0 bg-black/40 backdrop-blur-md justify-center items-start pt-20 pb-10"> 
                    <div id="detailedElement" className="w-[90%] max-w-[600px] bg-white border-[4px] border-black/10 pb-2">
                            <div className="w-full aspect-video border-[0.5px] border-black/10">
                            <img src={currentValues[0].image} className="w-full h-full"></img>
                            </div>
                            <div className="flex flex-col items-center px-3 pt-2 whitespace-pre-line">
                            <h1 className="text-xl font-serif font-semibold">{currentValues[0].title}</h1>
                            <p>{currentValues[0].text}</p>
                            </div>
                            {currentValues[0].image==jelovnikBg &&  <div className="mx-3 border-[0.5px] rounded-lg border-red-800 px-3 py-1 text-center mb-2 text-red-600 font-serif font-semibold">Remark: Work on this application is still in progress.</div>}
                            {currentValues[0].title=='Answer&Slide app' && <div className="mx-3 border-[0.5px] rounded-lg border-red-800 px-3 py-1 text-center mb-2 text-red-600 font-serif font-semibold"><b>Remark:</b> Login with credentials: admin@email.com, Pw123456</div>}
                            <div className="px-3 w-full flex items-center justify-center">
                                <a href={currentValues[0].github} target="_blank"><button className="flex items-center font-semibold px-3 py-1 border-[0.5px] rounded-md mr-1
                                 hover:bg-[rgba(171,171,171,0.3)] transition-all duration-200"><img src={githubLogo} className="h-8 w-8"></img>Code</button></a>
                                <a href={currentValues[0].link} target="_blank"><button className="flex items-center  font-semibold px-3 py-2 border-[0.5px] rounded-md ml-1 hover:bg-[rgba(171,171,171,0.3)] transition-all duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                    </svg>
                                    Demo
                                </button></a>
                            </div>
                    </div>
              </div>
              <div className="w-full flex justify-center"><div className="w-full max-w-[950px] pt-5"><h5 className="pl-5 text-5xl underline font-bold font-serif">Projects</h5></div></div>
              <div id="projectsContainer" className="pt-2 pb-10 flex flex-col items-center">
                 
                <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pr-5 ">
                      <div className="hidden col-span-1 h-full rounded-md sm:flex flex-col pr-3">
                        <div className="flex justify-end"><h2 className="font-serif">Answer&Slide app</h2></div>
                        <p className="font-serif sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6 pl-5 text-right">{answerNslideText}</p>
                        <div className="w-full flex justify-end">
                            <button 
                            onClick={()=>{setCurrentValues([{image:as2, title:'Answer&Slide app', text:answerNslideText, link:'https://slide-n-rate-app.vercel.app/', github:'https://github.com/Adilovicc/'}]); detailed();}}
                            className="border-[0.5px] border-black/20 w-[50%] py-2 bg-white font-serif font-semibold shadow-sm">More details
                            </button>
                        </div>
                      </div>
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0 flex flex-shrink-0 overflow-hidden">
                         <a href={'https://slide-n-rate-app.vercel.app/'} target='_blank'><div  style={{transform:`translateX(-${currentSlide*100}%)`}} className="flex h-full flex-shrink-0 transition-transform ease-out duration-1000">
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as1}></img>
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as2}></img>
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as3}></img>
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as4}></img>
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as5}></img>
                            <img className="slider-item aspect-video h-full rounded-md border-[0.5px] border-black/20" src={as6}></img>
                          </div>
                          </a>
                      </div>
                  </div> 

                  <div id="project" className="grid grid-cols-2 m-3 gap-2 w-full max-w-[950px] rounded-md group sm:pl-5">
                      <div className="col-span-2 sm:col-span-1 w-full aspect-video px-8 sm:px-0">
                      <a href="https://spotify-remote-app-wine.vercel.app" target="_blank"><img className="w-full h-full rounded-md" src={spotifyBg}></img></a>
                      </div>
                      <div className={`sm:hidden group-hover:mojElement`}></div>
                      <div className="hidden sm:col-span-1 w-full h-full rounded-md sm:flex flex-col pl-3">
                              <h2 className="font-serif">Spotify remote app</h2>
                              <p className="font-serif  sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6 pr-5">{spotifyText}</p>
                                <div className="w-full flex justify-start">
                                    <button 
                                     onClick={()=>{setCurrentValues([{image:spotifyBg, title:'Spotify remote App', text:spotifyText, link:'https://spotify-remote-app-wine.vercel.app', github:'https://github.com/Adilovicc/spotify-remote-app'}]); detailed();}}
                                     className="border-[0.5px] border-black/20 w-[50%] py-2
                                     bg-white font-serif font-semibold shadow-sm">More details</button>
                               </div>
                      </div>
                  </div>

                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pr-5 ">
                      <div className="hidden col-span-1 h-full rounded-md sm:flex flex-col pr-3">
                        <div className="flex justify-end"><h2 className="font-serif">Jelovnik app</h2></div>
                        <p className="font-serif sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6 pl-5 text-right">{jelovnikText}</p>
                        <div className="w-full flex justify-end">
                            <button 
                            onClick={()=>{setCurrentValues([{image:jelovnikBg, title:'Jelovnik (Menu) App', text:jelovnikText, link:'https://jelovnik-app.vercel.app/', github:'https://github.com/Adilovicc/'}]); detailed();}}
                            className="border-[0.5px] border-black/20 w-[50%] py-2 bg-white font-serif font-semibold shadow-sm">More details
                            </button>
                        </div>
                      </div>
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                         <a href={"https://jelovnik-app.vercel.app/"} target="_blank"><img className="w-full h-full rounded-md border-[0.5px] border-black/20" src={jelovnikBg}></img></a>
                      </div>
                  </div>
                  
                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pl-5">
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                      <a href="https://hulu-clone-adilovicc.vercel.app" target="_blank"><img className="w-full h-full rounded-md" src={huluBg}></img></a>
                      </div>
                      <div className="hidden sm:col-span-1 h-full rounded-md sm:flex flex-col pl-3">
                            <div><h2 className="font-serif">Hulu-clone app</h2></div>
                            <p className=" sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6 font-serif pr-5">{huluText}</p>
                                <div className="w-full flex justify-start">
                                    <button
                                     onClick={()=>{setCurrentValues([{image:huluBg, title:'Hulu-clone App', text:huluText, link:'https://hulu-clone-adilovicc.vercel.app', github:'https://github.com/Adilovicc/hulu-clone'}]); detailed();}}
                                     className="border-[0.5px] border-black/20 w-[50%] py-2
                                     bg-white font-serif font-semibold shadow-sm">More details</button>
                               </div>
                      </div>
                  </div>

                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pr-5 ">
                      <div className="hidden sm:ol-span-1 h-full rounded-md sm:flex flex-col pr-3">
                        <div className="flex justify-end"><h2 className="font-serif pl-5">TO-DO app</h2></div>
                        <p className="font-serif  sm:line-clamp-3 md:line-clamp-5 lg:line-clamp-6 pl-3 text-right">{notebookText}</p>
                            <div className="w-full flex justify-end">
                                <button 
                                 onClick={()=>{setCurrentValues([{image:noteBg, title:'Notebook (TO-DO) App', text:notebookText, link:'https://crud-nextjs-postgresql.vercel.app', github:'https://github.com/Adilovicc/CRUD_Nextjs-Postgresql'}]); detailed();}}
                                className="border-[0.5px] border-black/20 w-[50%] py-2
                                 bg-white font-serif font-semibold shadow-sm">More details</button>
                            </div>
                      </div>
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                         <a href={"https://crud-nextjs-postgresql.vercel.app"} target="_blank"><img className="w-full h-full rounded-md" src={noteBg}></img></a>
                      </div>
                  </div>

              </div>
        </section>
    )
}