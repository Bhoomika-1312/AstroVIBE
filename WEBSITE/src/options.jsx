import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Options() {
  const optionsRef = useRef(null);
  const navRefs = useRef([]);

  useEffect(() => {
    // Animation for the navigation bar appearance
    gsap.fromTo(
      optionsRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out' }
    );

    // Animation for hover effects
    navRefs.current.forEach((item) => {
      if (item) {
        item.addEventListener('mouseenter', () => {
          gsap.to(item, {
            scale: 1.2,
            color: '#f39c12',
            duration: 0.3,
            ease: 'back.out(1.7)',
          });
        });

        item.addEventListener('mouseleave', () => {
          gsap.to(item, {
            scale: 1,
            color: '#D8B3FF',
            duration: 0.3,
            ease: 'back.in(1.7)',
          });
        });
      }
    });

    return () => {
      navRefs.current.forEach((item) => {
        if (item) {
          item.removeEventListener('mouseenter', () => {});
          item.removeEventListener('mouseleave', () => {});
        }
      });
    };
  }, []);

  return (
    <div>
      <div
        ref={optionsRef}
        className="top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-50 bg-opacity-70 backdrop-blur"
      >
        <div className="text-2xl font-bold text-sky-700">
          <img src="/retro.png" alt="Logo" className="w-24" />
        </div>
        <a
        to="/home"
        className="nav-item text-2xl font-extrabold text-purple-300 hover:text-purple-500 focus:text-purple-500"
        aria-label="Navigate to Home"
      >
        Home
      </a>
      <a
        to="/facts"
        className="nav-item text-2xl font-extrabold text-purple-300 hover:text-purple-500 focus:text-purple-500"
        aria-label="Navigate to Facts"
      >
        Facts
      </a>

      {/* Multimedia */}
      <a
        to="/multimedia"
        className="nav-item text-2xl font-extrabold text-purple-300 hover:text-purple-500 focus:text-purple-500"
        aria-label="Navigate to Multimedia"
      >
        Multimedia
      </a>

      {/* Latest */}
      <a
        to="/latest"
        className="nav-item text-2xl font-extrabold text-purple-300 hover:text-purple-500 focus:text-purple-500"
        aria-label="Navigate to Latest"
      >
        Latest
      </a>

      {/* Contact Us */}
      <a
        to="/contactus"
        className="nav-item text-2xl font-extrabold text-purple-300 hover:text-purple-500 focus:text-purple-500"
        aria-label="Navigate to Contact Us"
      >
        Contact Us
      </a>
      </div>
    </div>
  );
}

export default Options;
