import {useState, useEffect, useRef} from 'react'
import {Container} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import computerImg from '../assets/images/computers.png'
import { motion } from 'framer-motion'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Full Stack Web Developer", "Next.js Developer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(2000 - Math.random()* 100);  

    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        let ticker= setInterval(()=>{
           tick();
        }, [delta]);

        return () => { clearInterval(ticker) };

       },[text])
       


      const tick = () => {
        let index = loopNum%toRotate.length;
        let currentWord = toRotate[index];
        let updatedText = isDeleting ? text.substring(0,text.length-1) : currentWord.substring(0,text.length+1);
        
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        else{ setDelta(800-Math.random()*500)}

        if(isDeleting && updatedText===''){
               setDelta(2000);
               setIsDeleting(false);
               setLoopNum(prevNum=>prevNum+1);
        }
        if(!isDeleting && updatedText === currentWord){
               setDelta(3000);
               setIsDeleting(true);
        }
    }
    

    const targetRef = useRef();
    const observer = useRef();
    observer.current = new IntersectionObserver( element => {
        console.log("aaaaa");
        if(element[0].isIntersecting){
            setVisible(true);
        }
        else setVisible(false);
    })
    
    useEffect(() => {
        if (targetRef.current) {
          observer.current.observe(targetRef.current);
        }
      
        return () => {
          if (targetRef.current) {
            observer.current.unobserve(targetRef.current);
          }
        };
      }, []);

      const goToConnect = () => {
        const connect = document.getElementById('contact');
        connect.scrollIntoView({behavior:'smooth'})
  
      }

    return (
        <section className="banner pt-[260px] h-full min-h-screen w-full" id="home">
            <Container id='cont'>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 w-full justify-between text-white">
                    <div className="overflow-x-clip break-normal content-center">
                       <div className="h-[200px]">
                       <h1 className="break-normal pt-4 mb-4">
                            {`Hi I'm Ali and I am a `}
                            <span className="writing">
                                {text}
                            </span>
                        </h1>
                        <p>
                            I am a graduate Software Engineer looking for a job. Enjoy my developer portfolio...
                        </p>
                       </div>
                        <button className="mt-14 flex font-semibold text-lg items-center" onClick={()=> goToConnect()}>
                              Let's connect
                              <ArrowRightCircle size={25} className="ml-4"></ArrowRightCircle>
                        </button>
                    </div>
                    <div className="h-full flex justify-center md:justify-end">
                        <motion.img
                         initial={{scale:0, translateX:-400}}
                         animate={{rotate:360, scale: 1, translateX:0}}
                         transition={{
                            delay:1.0,
                            duration: 3.0,
                            type:'spring',
                            stiffnes: 800
                        }}
                         src={computerImg} 
                         className='-z-1 max-h-[440px]' alt="Header img"
                         />
                    </div>
                </div>
            </Container>
        </section>
    )
}