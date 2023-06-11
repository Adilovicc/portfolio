import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"
import {useState, useEffect} from 'react'
import logo from '../assets/images/logo.svg'
import NavIcon1 from '../assets/images/nav-icon1.svg' 
import NavIcon2 from '../assets/images/nav-icon2.svg' 
import NavIcon3 from '../assets/images/nav-icon3.svg'
import githubLogo from '../assets/images/githubLogo.png'
import githubLogo1 from '../assets/images/githubLogo1.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

          
        window.addEventListener("scroll", onScroll);

       
        return () => window.removeEventListener("scroll", onScroll);

    },[]);
    
    const [dropDownMenuVisible, setDropDownMenuVisible] = useState(false);
    const hamburger =()=>{
       return(
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" className="w-8 h-8">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

       )

    }

    const dropdownMenu = () => {
       return (
             <div className={`dropdownMenu ${dropDownMenuVisible ? 'dropDownMenuVisible' : ''} md:hidden flex flex-col`}>
                  <div className={`dropdownMenu ${dropDownMenuVisible ? 'px-2 flex flex-col' : 'hidden'}`}>
                      <a href="#home" className="no-underline"><p className="text-lg hover:font-semibold  my-[0px] cursor-pointer text-white">Home    </p></a>
                      <a href="#skills" className="no-underline"><p className="text-lg hover:font-semibold  my-[0px] cursor-pointer text-white">Skills  </p></a>
                      <a href="#projects" className="no-underline"><p className="text-lg hover:font-semibold  my-[0px] cursor-pointer text-white">Projects</p></a>
                      <div className="flex w-full justify-center mt-3">
                      <a href="https://www.linkedin.com/in/ali-adilovic-40259727a/" target="_blank" className="relative mr-1 p-2 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)]  rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-0 group-hover:scale-100 transition ease-in-out duration-300 bg-white"></div>
                        <img src={NavIcon1} alt="" className="h-[16px] group-hover:brightness-0 transition ease-in duration-300"></img>
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=100009659624261" target="_blank" className="relative p-2 mr-1 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)]  rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-0 group-hover:scale-100 transition ease-in-out duration-300 bg-white"></div>
                        <img src={NavIcon2} alt="" className="h-[16px] group-hover:brightness-0 transition ease-in duration-300"></img>
                     </a>
                     <a href="https://github.com/Adilovicc" target="_blank" className="relative p-2 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)] rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-0 group-hover:scale-100 transition ease-in-out duration-300 bg-white"></div>
                        <img className="h-[16px] brightness-[200] group-hover:brightness-0 transition ease-in duration-300 scale-[3.3]"  src={githubLogo} alt="github_logo" ></img>
                     </a>
                      </div>
                  </div>
             </div>
       )
    }

    return(
        <section id="navbar"  expand="lg" className={`${scrolled ? "scrolled" : ''} fixed z-50 top-0 w-full px-5 md:px-[100px]  justify-center transform-all transition ease-in-out duration-1000`} > 
        <Container className="flex h-full items-center justify-between ">
          <a href="#home">
               <img src={logo} alt="Logo" className="h-8 my-2"></img>
          </a>
          <div className="md:hidden relative"> 
             <div onClick={()=>setDropDownMenuVisible(!dropDownMenuVisible)}>{hamburger()}</div>
             {dropdownMenu()}
          </div>
          <div className="hidden md:flex h-full items-center">
            <Nav className="grid grid-cols-3">
              <Nav.Link href="#home" className={`${activeLink==='home' ? 'active navbar-link' : 'navbar-link'}`} onClick={()=>{setActiveLink("home")}}> Home <div className="underlined"></div></Nav.Link>
              <Nav.Link href="#skills" className={`${activeLink==='skills' ? 'active navbar-link' : 'navbar-link'}`} onClick={()=>{setActiveLink("skills")}}> Skills  <div className="underlined"></div></Nav.Link>
              <Nav.Link href="#projects" className={`${activeLink==='projects' ? 'active navbar-link' : 'navbar-link'}`} onClick={()=>{setActiveLink("projects")}}>Projects  <div className="underlined"></div></Nav.Link>
            </Nav>
            <span className="navbar-text h-full pl-[20px]">
                <div className="flex h-full items-center space-x-1">
                     <a href="https://www.linkedin.com/in/ali-adilovic-40259727a/" target="_blank" className="relative p-2 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)]  rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-0 group-hover:scale-100 transition ease-in-out duration-300 bg-white"></div>
                        <img src={NavIcon1} alt="" className="h-[16px] group-hover:brightness-0 transition ease-in duration-300"></img>
                     </a>
                     <a href="https://www.facebook.com/profile.php?id=100009659624261" target="_blank" className="relative p-2 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)]  rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-0 group-hover:scale-100 transition ease-in-out duration-300 bg-white"></div>
                        <img src={NavIcon2} alt="" className="h-[16px] group-hover:brightness-0 transition ease-in duration-300"></img>
                     </a>
                     <a href="https://github.com/Adilovicc" target="_blank" className="relative p-2 border-[1px] border-white/75 bg-[rgba(217,217,217,0.1)] rounded-full group">
                        <div className="absolute top-0 left-0 rounded-full h-full w-full scale-100 group-hover:scale-0 transition ease-in-out duration-300 bg-white"></div>
                        <img className="h-[16px] group-hover:brightness-[400] transition ease-in duration-300 scale-[3.3]"  src={githubLogo} alt="" ></img>
                     </a>
                     <button id="lets_connect_button" className="relative h-14 border-2 border-white text-white font-serif  w-[140px] group" onClick={()=>console.log("conn")}>
                       <span className="transition ease-in-out duration-300 group-hover:text-black"> Let's connect</span>
                       <div id="lets_connect_button_cover" className="-z-10"></div>
                    </button>
                </div>
            </span>
          </div>
        </Container>
      </section>
    )
}