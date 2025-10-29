"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Iphone } from '@/components/ui/iphone';

gsap.registerPlugin(ScrollTrigger);

export default function MobileDevelopment() {
  const iphoneRef = useRef<HTMLDivElement>(null);
  const mobileContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pin iPhone while scrolling through mobile content (desktop only)
    if (iphoneRef.current && mobileContentRef.current && window.innerWidth > 768) {
      const trigger = ScrollTrigger.create({
        trigger: mobileContentRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: iphoneRef.current,
        pinSpacing: false,
      });

      return () => {
        trigger.kill();
      };
    }
  }, []);

  return (
    <div className="mobile-development-section">
      <div className="mobile-container">
        <div className="mobile-phone-sticky" ref={iphoneRef}>
          <Iphone src="https://placehold.co/900x1600?text=Hello+World" />
        </div>
        
        <div className="mobile-content" ref={mobileContentRef}>
          <div className="mobile-content-block">
            <h2>Cross-Platform Mobile Development</h2>
            <p>
              We leverage React Native to build high-performance mobile applications that work seamlessly 
              on both iOS and Android. With a single codebase, we deliver native-quality experiences while 
              significantly reducing development time and costs.
            </p>
          </div>

          <div className="mobile-content-block">
            <h2>Native Performance</h2>
            <p>
              React Native bridges the gap between web and mobile development. Our apps utilize native 
              components and APIs, ensuring smooth animations, fast load times, and a truly native feel 
              that users expect from premium mobile applications.
            </p>
          </div>

          <div className="mobile-content-block">
            <h2>Rapid Development Cycle</h2>
            <p>
              Hot reloading and a rich ecosystem of pre-built components allow us to iterate quickly. 
              We can deliver MVPs faster, gather user feedback, and continuously improve your app with 
              regular updates across both platforms simultaneously.
            </p>
          </div>

          <div className="mobile-content-block">
            <h2>Scalable Architecture</h2>
            <p>
              We build mobile apps with scalability in mind. From state management with Redux to 
              modular component architecture, our React Native solutions are designed to grow with 
              your business and handle millions of users.
            </p>
          </div>

          <div className="mobile-content-block">
            <h2>Seamless Integration</h2>
            <p>
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
