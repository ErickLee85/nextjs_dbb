"use client"
import LiquidEther from '../components/LiquidEther'
import DarkVeil from '../components/DarkVeil'
import TextPressure from '../components/TextPressure'
import CodingTerminal from '../components/CodingTerminal';
import SparklesCore from '../components/ui/sparkles';
import MagicBento from '../components/MagicBento';
import MobileDevelopment from '../components/MobileDevelopment';
import LampDemo from '../components/Lamp';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, ScrollSmoother } from 'gsap/all';
import { SplitText } from 'gsap/all';
import Image from 'next/image'
import ToolTip from '../components/ToolTip'
import { TracingBeam } from '../components/ui/tracing-beam'

export default function Page() {
const modernTextRef = useRef<HTMLParagraphElement>(null);
const headerRef = useRef<HTMLHeadingElement>(null);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);


  useGSAP(() => {
      const navigator = window.navigator
      const availPlatforms = ["Win32", "Win16", "WinCE", "MacIntel", "MacPPC", "Mac68K"];
      if(availPlatforms.includes(navigator.platform) ) {
        ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 3,
        effects: true,
        normalizeScroll: true,
        smoothTouch: false
      })

      }

      const words = document.querySelectorAll('.word');
      let split = SplitText.create(".description",{type:"words"})
      gsap.from(split.words,{opacity:0,delay:1.2,duration:2,ease:"sine.out",stagger:0.1})
      gsap.fromTo(".company-logo",{filter: 'blur(20px)',opacity: 0,y: 50},{filter: 'blur(0px)',opacity: 1,y: 0,duration: 1});
      gsap.fromTo(words,{filter: 'blur(20px)',opacity: 0,y: 50},{filter: 'blur(0px)',opacity: 1,y: 0,duration: 1.2,delay: 0.3,stagger: 0.15});
      gsap.fromTo(".hero-btn", {opacity:0, y:20},{opacity:0.8, y:0,duration:1, delay:3.5})
      gsap.fromTo(".terminal",{opacity:0,x:20},{opacity:1,x:0,duration:1,delay:0.25})
      gsap.fromTo(".bento-wrapper",{opacity:0,y:50},{opacity:1,y:0,duration:2,delay:1})

  }, []);

  function EtherBG() {
    return (
          <LiquidEther
            colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
            mouseForce={40}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0}
            className='ether'
          /> 
    )
  }


  function Bento() {
    return (
      
      <MagicBento 
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={20}
        glowColor="255,255,255"
      />
    )
  }

  function Pressure() {
    return (
            <TextPressure
              text="Services"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={34}
            />
    )
  }
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className='hero'>
            <div className='hero-content'>
              <div className="hero-left">
                <Image 
                  className='company-logo'
                  src='/logo_light.png' 
                  alt='Desoto Bits & Bytes Logo'
                  width={300}
                  height={200}
                />
                <p ref={modernTextRef}>
                  <span className="word" style={{fontStyle:'italic'}}>Modern</span>{' '}
                  <span className="word">Software</span>{' '}
                  <span className="word">Solutions</span>
                </p>
                <h1 className='description' ref={headerRef}>We build enterprise grade software ranging from Mobile & Progressive Web Applications to low latency APIs and AI Integrations.</h1>
                <button className='hero-btn'>Contact Us</button>
              </div>
              <div className="hero-right terminal">
                  <CodingTerminal />
              </div>
            </div>
          </div>
  
          <div className="service-section">     
              <TracingBeam>
                  <LampDemo />
                  <div className="bento-wrapper">
          
                      <Bento />
          
                  </div>
              </TracingBeam>
          </div>
          <MobileDevelopment /> 
        </div>
      </div>
    </>
  )
}