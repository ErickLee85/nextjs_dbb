"use client"
import LiquidEther from '../components/LiquidEther'
import TextPressure from '../components/TextPressure'
import CodingTerminal from '../components/CodingTerminal';
import SparklesCore from '../components/ui/sparkles';
import MagicBento from '../components/MagicBento';
import MobileDevelopment from '../components/MobileDevelopment';
import LampDemo from '../components/Lamp';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image'
import ToolTip from '../components/ToolTip'

export default function Page() {
const modernTextRef = useRef<HTMLParagraphElement>(null);
const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
      const words = document.querySelectorAll('.word');
      gsap.fromTo(".company-logo",{filter: 'blur(20px)',opacity: 0,y: 50},{filter: 'blur(0px)',opacity: 1,y: 0,duration: 1});
      gsap.fromTo(words,{filter: 'blur(20px)',opacity: 0,y: 50},{filter: 'blur(0px)',opacity: 1,y: 0,duration: 1.2,delay: 0.3,stagger: 0.15});
      gsap.fromTo(".description", {opacity:0, y:20},{opacity:0.8, y:0,duration:1, delay:1})
      gsap.fromTo(".hero-btn", {opacity:0, y:20},{opacity:0.8, y:0,duration:1, delay:1.25})
      gsap.fromTo(".terminal",{opacity:0,x:20},{opacity:1,x:0,duration:1,delay:0.25})

  }, []);

  function SparklesPreview() {
    return (
      <div className="h-[40rem] w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="font-bold text-center text-white relative z-20" style={{fontSize:'clamp(3.5rem, 5vw, 5rem)'}}>
        Our Services
          </h1>
          <div className="w-[80rem] h-100 relative">
            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
    
            {/* Core component */}
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
    
            {/* Radial Gradient to prevent sharp edges */}
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
          </div>
        </div>
    );
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
      <div className='hero'>
          <div className='ether-background'>
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
          </div>
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
              <h1 className='description' ref={headerRef}>We build enterprise grade software ranging from Mobile & Web Apps to low latency APIs and AI Integrations.</h1>
              <button className='hero-btn'>Contact Us</button>
            </div>
            <div className="hero-right terminal">
                <CodingTerminal />
            </div>
          </div>
      </div>
      <div className="service-section">
        <LampDemo />
      </div>
                    {/* <ToolTip/> */}

      {/* <MobileDevelopment /> */}
    </>
  )
}