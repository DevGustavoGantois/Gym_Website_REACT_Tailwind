import React, {useState, useEffect} from 'react';

//import header data
import {header} from '../data';

//import components
import {Nav} from '../components/Nav';
import {NavMobile} from '../components/NavMobile';

//import icons
import {RiMenuFill, RiCloseFill} from 'react-icons/ri';

export function Header() {
    //header state
    const [isActive, setIsActive] = useState(false);
    //navmobile state
    const [navMobile, setNavMobile] = useState(false);
    //scroll event
    useEffect(() => {
        window.addEventListener('scroll', () =>{
           window.scrollY > 80 ? setIsActive(true) : setIsActive(false); 
        })
    }, [])

    const {logo, btnLoginText, btnSignupText} = header;

    return (
        <header className={`${isActive ? 'bg-neutral-500 py-[16px]' : 'bg-transparent py-[20px]'} fixed max-w-[1440px] z-30 left-0 right-0 mx-auto flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}>
            <a href="">
                <img className='h-[30px]' src={logo} alt="" />
            </a>
            <Nav />
            <div className='hidden lg:flex space-x-4'>
                <button className='btn btn-sm text-white hover:text-primary-200 transition'>{btnLoginText}</button>
                <button className='btn btn-sm btn-primary'>{btnSignupText}</button>
            </div>
            <div onClick={() => setNavMobile(!navMobile)} className='lg:hidden absolute right-4'>
                {navMobile ? (<RiCloseFill className='text-primary-200 text-3xl cursor-pointer' />) : ( <RiMenuFill className='text-primary-200 text-3xl cursor-pointer' />) }
                
            </div>
            <NavMobile navMobile={navMobile}/>
        </header>
    )
}