import spotifyBg from '../assets/images/spotify-remote-bg.PNG'
import huluBg from '../assets/images/hulu-clone-bg.PNG'
import noteBg from '../assets/images/note-bg.PNG'

import { Container } from 'react-bootstrap';


export const Projects = () => {

    return(
        <section id="projects" className="projects w-full min-h-screen">
              <div className="w-full flex justify-center"><div className="w-full max-w-[950px] pt-5"><h5 className="pl-5 text-5xl underline font-bold font-serif">Projects</h5></div></div>
              <div id="projectsContainer" className="pt-2 pb-10 flex flex-col items-center">
                 
                  <div id="project" className="grid grid-cols-2 m-3 gap-2 w-full max-w-[950px] rounded-md group sm:pl-5">
                      <div className="col-span-2 sm:col-span-1 w-full aspect-video shadow-md px-8 sm:px-0">
                      <a href="https://spotify-remote-app-wine.vercel.app" target="_blank"><img className="w-full h-full rounded-md" src={spotifyBg}></img></a>
                      </div>
                      <div className={`sm:hidden group-hover:mojElement`}></div>
                      <div className="hidden sm:col-span-1 w-full h-full rounded-md sm:flex flex-col">
                              <h2 className="font-serif">Spotify remote app</h2>
                              <p className="font-serif sm:line-clamp-6 pr-5">This Next.js application allows users to manage their Spotify account efficiently.
                                Utilizing the Spotify API, the app enables users to control playback, manage playlists, and access personalized recommendations. 
                                The application's interface is built using Next.js and styled using Tailwind CSS, 
                                ensuring a responsive and visually appealing design.</p>
                      </div>
                  </div>

                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pr-5 ">
                      <div className="hidden col-span-1 h-full rounded-md sm:flex flex-col ">
                        <div className="flex justify-end"><h2 className="font-serif pr-3">TO-DO app</h2></div>
                        <p className="font-serif sm:line-clamp-6 pl-5 text-right">TO-DO App is a simple Next.js application that allows users to manage their tasks effectively.
                             With this app, users can easily add, list, edit, and delete their to-do items. The application leverages the power of Prisma,
                              which handles all the database operations, and utilizes PostgreSQL as the underlying database to securely store the task data. 
                              User authentication is implemented using NextAuth.js with the Google provider, ensuring a seamless and secure login experience. 
                            The app also features a clean and modern design, thanks to the utilization of Tailwind CSS framework, 
                            enabling an intuitive and user-friendly interface.</p>
                      </div>
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                         <a href={"https://crud-nextjs-postgresql.vercel.app"}><img className="w-full h-full rounded-md" src={noteBg}></img></a>
                      </div>
                  </div>
                  
                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pl-5">
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                      <a href="https://hulu-clone-adilovicc.vercel.app" target="_blank"><img className="w-full h-full rounded-md" src={huluBg}></img></a>
                      </div>
                      <div className="hidden sm:col-span-1 h-full rounded-md sm:flex flex-col">
                            <div><h2 className="font-serif">Hulu-clone app</h2></div>
                            <p className="sm:line-clamp-6 md:line-clamp-8 font-serif pr-5">The Hulu-Clone app is a Next.js application developed with a focus on building a streaming platform similar to Hulu. 
                                It leverages Hulu APIs to retrieve data and replicate some of the key features of the popular streaming service. 
                                The app incorporates Next.js, a powerful React framework, to create a smooth and efficient user experience. 
                                Tailwind CSS is utilized for designing the app, ensuring a modern and responsive interface. 
                                By utilizing Hulu APIs and leveraging Next.js, the Hulu-Clone app provides users with the ability to browse, 
                                discover, and stream a wide range of movies and TV shows. It showcases the developer's skills in frontend development, API integration, and UI design.</p>
                      </div>
                  </div>

                  <div id="project" className="grid grid-cols-2 my-3 gap-2 w-full max-w-[950px] rounded-md group sm:pr-5 ">
                      <div className="hidden sm:ol-span-1 h-full rounded-md sm:flex flex-col">
                        <div className="flex justify-end"><h2 className="font-serif pl-5">TO-DO app</h2></div>
                        <p className="font-serif sm:line-clamp-6 pl-3 text-right">TO-DO App is a simple Next.js application that allows users to manage their tasks effectively.
                             With this app, users can easily add, list, edit, and delete their to-do items. The application leverages the power of Prisma,
                              which handles all the database operations, and utilizes PostgreSQL as the underlying database to securely store the task data. 
                              User authentication is implemented using NextAuth.js with the Google provider, ensuring a seamless and secure login experience. 
                            The app also features a clean and modern design, thanks to the utilization of Tailwind CSS framework, 
                            enabling an intuitive and user-friendly interface.</p>
                      </div>
                      <div className="aspect-video col-span-2 sm:col-span-1 px-8 sm:px-0">
                         <a href={"https://crud-nextjs-postgresql.vercel.app"}><img className="w-full h-full rounded-md" src={noteBg}></img></a>
                      </div>
                  </div>

              </div>
        </section>
    )
}