import {useState, useEffect, useRef} from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle, Intersect} from "react-bootstrap-icons"
import headerImg from '../assets/images/header-img.svg'
import computerImg from '../assets/images/computers.png'

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

    return (
        <section className="banner pt-[260px] h-full min-h-screen w-full" id="home">
              <div className={`cover ${visible? 'show' : 'hide'} backdrop-blur-sm`}>

             </div>
            <Container id='cont'>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 w-full justify-between text-white">
                    <div className="overflow-x-clip break-normal content-center">
                        <span ref={targetRef} className="border-white border-[1px] font-serif w-[50%] px-[20px] whitespace-nowrap py-3 font-medium text-xl z-10 bg-[linear-gradient(to_right,rgba(0,102,255,0.55),rgba(0,77,153,0.35))]">
                             Welcome to my Portfolio
                        </span>
                        <h1 className="break-normal pt-4 mb-4">
                            {`Hi I'm Ali and I am a `}
                            <span className="writing">
                                {text}
                            </span>
                        </h1>
                        <p>
                            I am a Software Engineering student looking for a job. Enjoy my developer portfolio...
                        </p>
                        <button className="mt-14 flex font-semibold text-lg items-center" onClick={()=> console.log('connect')}>
                              Let's connect
                              <ArrowRightCircle size={25} className="ml-4"></ArrowRightCircle>
                        </button>
                    </div>
                    <div className="h-full flex justify-center md:justify-end">
                        <img src={computerImg} className='animate-bounce-slow -z-1 max-h-[440px]' alt="Header img" />
                    </div>
                </div>
            </Container>
        </section>
    )
}