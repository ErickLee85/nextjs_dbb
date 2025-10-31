"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import { Iphone } from '@/components/ui/iphone';
import { useSpotlight } from '@/hooks/useSpotlight';
import ShinyText from './ShinyText';

gsap.registerPlugin(ScrollTrigger, useGSAP, SplitText);


export default function MobileDevelopment() {
  const iphoneRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);
  const spotlightContainerRef = useRef<HTMLDivElement>(null);

  // Add spotlight effect to the mobile content blocks
  useSpotlight({ 
    containerRef: spotlightContainerRef,
    itemSelector: '.mobile-content-block',
    radius: 400,
  });


  useGSAP(() => {
     const blocks = document.querySelectorAll('.mobile-content-block');
     const titles = document.querySelectorAll('.mobile-title')
     const descriptions = document.querySelectorAll('.mobile-description')
     const title = document.querySelector('.mobile-container-title')

     if (title) {
       // Split the text into characters
       let split = new SplitText(title, { type: 'chars' });
       
       // Animate each character from the right (positive x)
       gsap.from(split.chars, {
         x: 150,
         opacity: 0,
         duration: 0.7, 
         ease: "power4",
         stagger: 0.04,
         scrollTrigger: {
           trigger: ".mobile-container",
           start: 'top 80%',
           toggleActions: 'play none none reverse',
           markers: true
         }
       });
     }

     descriptions.forEach((description) => {
        let split = new SplitText(description, {
          type: "words",
        
        })
        
        gsap.from(split.words, {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: description,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        })
     })

     titles.forEach((title) => {
        let split = new SplitText(title, {
          type: "words",
        })

        gsap.from(split.words, {
          opacity: 0,
          duration: 2,
          ease: "power3.out",
          x:50,
          stagger: 0.1,
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          onComplete:() => split.revert()
        })
     })

     if (iphoneRef.current && mobileContentRef.current && window.innerWidth > 768) {
        ScrollTrigger.create({
        trigger: mobileContentRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: iphoneRef.current,
        pinSpacing: false,
      });
    }

    blocks.forEach((block) => {
      gsap.fromTo(
        block,
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          animationDuration:3,
          scrollTrigger: {
            trigger: block,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
            scrub: 2, // instant scrubbing
          }
        }
      );
    });
  })

  return (
    <div className="mobile-development-section spotlight-container spotlight-purple spotlight-intense" id="mobile-sec" ref={spotlightContainerRef}>
            <h2 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight md:text-7xl pb-50 mobile-container-title'>Mobile Development</h2>
      <div className="mobile-container" id="mobile-con">
  
        <div className="mobile-phone-sticky" ref={iphoneRef}>
          <Iphone src="https://placehold.co/900x1600?text=Hello+World" />
        </div>
        
        <div className="mobile-content" ref={mobileContentRef}>
          <div className="mobile-content-block spotlight-item">
            <h2 className=''>
              <ShinyText 
                text="Cross Platform" 
                disabled={false} 
                speed={3} 
                className='mobile-title' 
              />
            </h2>
            <p className='mobile-description'>
              We leverage React Native to build high-performance mobile applications that work seamlessly 
              on both iOS and Android. With a single codebase, we deliver native-quality experiences while 
              significantly reducing development time and costs.
            </p>
          </div>

          <div className="mobile-content-block spotlight-item">
            <h2 className='mobile-title'>
              <ShinyText 
                text="Performance" 
                disabled={false} 
                speed={3} 
                className='mobile-title' 
              />
            </h2>
            <p className='mobile-description'>
              React Native bridges the gap between web and mobile development. Our apps utilize native 
              components and APIs, ensuring smooth animations, fast load times, and a truly native feel 
              that users expect from premium mobile applications.
            </p>
          </div>

          <div className="mobile-content-block spotlight-item">
            <h2 className='mobile-title'>
               <ShinyText 
                text="Development" 
                disabled={false} 
                speed={3} 
                className='mobile-title' 
              />
            </h2>
            <p className='mobile-description'>
              Hot reloading and a rich ecosystem of pre-built components allow us to iterate quickly. 
              We can deliver MVPs faster, gather user feedback, and continuously improve your app with 
              regular updates across both platforms simultaneously.
            </p>
          </div>

          <div className="mobile-content-block spotlight-item">
            <h2 className='mobile-title'>
               <ShinyText 
                text="Scalability" 
                disabled={false} 
                speed={3} 
                className='mobile-title' 
              />
            </h2>
            <p className='mobile-description'>
              We build mobile apps with scalability in mind. From state management with Redux to 
              modular component architecture, our React Native solutions are designed to grow with 
              your business and handle millions of users.
            </p>
          </div>

          <div className="mobile-content-block spotlight-item">
            <h2 className='mobile-title'>Integration</h2>
            <p className='mobile-description'>
              Whether it's integrating with your existing APIs, third-party services, or device features 
              like camera, GPS, and push notifications, we ensure your mobile app works flawlessly with 
              your entire tech ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
