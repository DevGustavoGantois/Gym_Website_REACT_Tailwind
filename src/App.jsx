import React, {useEffect} from 'react';
import { Banner } from "./components/Banner";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Header } from './components/Header';
import { About } from './components/About';
import { Workout} from './components/Workout';
import { Pricing } from './components/Pricing';
import { Community } from './components/Community';
import { Faq } from './components/Faq';
import { Join } from './components/Join';
import { Footer } from './components/Footer';

export function App() {

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    })
  },[])

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header/>
      <Banner/>
      <About />
      <Workout />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
      
    </div>
  )
}