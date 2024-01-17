import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
export const Contact = () => {
    
    const notify = useRef(false)
    const [notification, setNotification] = useState(notify.current);
    const timeoutId = useRef(null);
    useEffect(()=>{
        if(notification){
           timeoutId.current=setTimeout(()=>{
               setNotification(false);
            },3000)
        }
        return ()=>{
            clearTimeout(timeoutId.current);
        }
    },[notification])

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log("Value: ",document.getElementById('user_email').value);
        if(!document.getElementById('user_email').value || !document.getElementById('user_message').value) return;

        emailjs.sendForm(
            "service_gh1dwud",
            "template_pkc8298",
            form.current,
            "EDfAOfupgnQxldk-r"
        ).then((res)=>{
            form.current.reset();
            console.log(res);
            setNotification(true);
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    return(
        <div id="contact" className="w-full relative min-h-screen bg-[#131313ea] py-8">
             <header className="m-auto mb-4 text-[36px] font-bold w-full text-center text-white/50">CONTACT ME</header>
             {notification && 
             <section className="absolute bottom-[140px] w-full flex justify-center">
                <div className="py-3 px-2 rounded-sm text-center w-full bg-[#eeeeee55] text-[#131313e8]">Success! Your message is on its way. We'll be in touch soon.</div>
             </section>}
             <main className="w-full m-auto max-w-[1100px] flex flex-col md:flex-row md:justify-center gap-y-2 md:gap-y-0 px-[8px] xsm:px-[16px] sm:px-[30px] md:px-[40px]">
                
                    <ul className="w-full p-[0px] pr-[0px] md:pr-[64px] mt-4 ">
                        <li className="w-full h-[68px] bg-[#131313] mb-3 md:mt-[4px] flex items-center px-4 gap-x-3">
                           <aside className="h-[56%] aspect-square rounded-full flex justify-center items-center p-2 bg-white/20">
                               <EnvelopeIcon className="h-full text-[#EEEEEE]"></EnvelopeIcon>
                           </aside>
                           <aside className="text-[#EEEEEE] truncate font-extralight">ali.adilovic2018@size.ba</aside>
                        </li>
                        <li className="w-full h-[68px] bg-[#131313] mb-3 md:mt-[4px] flex items-center px-4 gap-x-3">
                           <aside className="h-[56%] aspect-square rounded-full flex justify-center items-center p-2 bg-white/20">
                               <PhoneIcon className="h-full text-[#EEEEEE]"></PhoneIcon>
                           </aside>
                           <aside className="text-[#EEEEEE] truncate font-extralight">+387603399764</aside>
                        </li>
                        <li className="w-full h-[68px] bg-[#131313] mb-3 md:mt-[4px] flex items-center px-4 gap-x-3">
                           <aside className="h-[56%] aspect-square rounded-full flex justify-center items-center p-2 bg-white/20">
                               <MapPinIcon className="h-full text-[#EEEEEE]"></MapPinIcon>
                           </aside>
                           <aside className="text-[#EEEEEE] truncate font-extralight">Zenica, Bosnia & Herzegovina</aside>
                        </li>
                    </ul>
                    <form 
                    ref={form} 
                    onSubmit={sendEmail}
                    className="text-[#EEEEEE] mt-4 w-full m-auto md:border-l-[1px]
                     border-[#EEEEEE] md:pl-[64px] ">
                        <label className="pb-1 text-[14px] font-thin ">Your name:</label><br></br>
                        <input
                         id="user_name" 
                         className="w-full bg-[#131313] h-[38px]  
                         outline-none px-3"
                         name="user_name"
                         type="text">
            
                        </input><br></br>
                        <label className="pb-1 mt-3 text-[14px] font-thin">Your email:</label><br></br>
                        <input 
                         className="w-full bg-[#131313] h-[38px] 
                         outline-none px-3"
                         type="email"
                         name="user_email"
                         id="user_email"
                         >

                        </input> <br></br>
                        <label className="pb-1 mt-3 text-[14px] font-thin">Your message:</label><br></br>
                        <textarea 
                         id="user_message"
                         className="w-full bg-[#131313] 
                         outline-none px-3 resize-none h-[260px] py-2"
                         name="message">

                        </textarea><br></br>
                        <button type="submit" className="w-[80px] mt-2 h-[32px] bg-[#EEEEEE] text-[#131313] text-center rounded-md font-serif font-bold">Send</button>
                    </form>
             </main>
        </div>
    )
}