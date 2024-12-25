import { useEffect } from 'react';
import gsap from 'gsap'; 
import Particlebg from './components/particlebg';
import { Link } from 'react-router-dom';

function Night() {
  useEffect(() => {
    gsap.fromTo(".mission-title", 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power4.out" } 
    );
    
    gsap.fromTo(".mission-button", 
      { opacity: 0, y: 50 }, // Starting values (invisible and slightly below)
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power4.out" } // Animate with a slight delay
    );
    
    // GSAP animation for the image
    gsap.fromTo(".mission-image", 
      { opacity: 0, x: -100 }, // Start from left (invisible)
      { opacity: 1, x: 0, duration: 1.5, delay: 1, ease: "power4.out" } // Animate to normal position
    );
    
    // GSAP animation for the text content
    gsap.fromTo(".mission-text", 
      { opacity: 0, x: 100 }, // Start from right (invisible)
      { opacity: 1, x: 0, duration: 1.5, delay: 1.2, ease: "power4.out" } // Animate to normal position
    );
  }, []); 

  return (
    <div className="min-h-screen bg-black flex flex-col px-0">
        <Particlebg />
        <div className="text-white text-center">
          <h2 className="mission-title text-6xl font-extrabold uppercase shadow-xl mb-6">
            Night Sky
          </h2>
          <Link 
            to="/" // Use the root route for the main page
            className="mission-button bg-white text-black my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
          >
            Back
          </Link>
          
          {/* Image Section */}
          <div className="flex justify-start items-center w-full mt-6">
            <img 
              src="https://img.freepik.com/free-photo/mesmerizing-view-reflection-mountain-lake-starry-night-sky_181624-24967.jpg?t=st=1733604888~exp=1733608488~hmac=e1fe588312ba389836652661dae57562ba1f8c6fd643e1de07c17930bda1fb9f&w=360" 
              className="px-4 rounded-3xl mx-4 mission-image "
              alt="Image Description"
            />
            <div className="mission-text text-pretty mt-4 text-left text-xl font-mono">
            The night sky is a mesmerizing canvas filled with wonders and fascinating facts. Stars twinkle not because they’re flickering, but due to Earth’s atmosphere bending their light; in the vacuum of space, stars shine steadily. Our galaxy, the Milky Way, is a staggering 100,000 light-years across and holds over 100 billion stars, many of whose light has traveled millions of years to reach us, making every glance at the sky a glimpse into the past. The Moon, often glowing brightly, doesn’t emit its own light but reflects sunlight, appearing the same size as the Sun because of its proximity to Earth despite being 400 times smaller. Shooting stars, those fleeting streaks of light, are actually meteoroids burning up in our atmosphere, while constellations like Orion and Cassiopeia tell stories passed down through ancient cultures. Even the dark spaces between stars aren’t empty—they’re filled with gas, dust, and invisible forces shaping the universe. The night sky is more than a sight; it’s a living story of the cosmos, waiting to be explored. 🌌
            </div>
          </div>
          <div className="flex justify-end items-center w-full mt-6 ">
            <div className="mission-text text-pretty mt-4 mx-5 text-right text-xl font-mono">
            The brightest star in the night sky, Sirius, is twice as massive as the Sun and lies about 8.6 light-years away. Venus, often called the “Evening Star” or “Morning Star,” is so bright it’s frequently mistaken for a UFO. The Andromeda Galaxy, visible on clear nights, is the closest major galaxy to us, at 2.5 million light-years away, and is on a slow collision course with the Milky Way. During a new moon or in remote areas free from light pollution, you can see around 2,500 stars with the naked eye.

            Astronomical phenomena like the Aurora Borealis (Northern Lights) occur when charged particles from the Sun interact with Earth’s magnetic field, creating stunning light displays. The vast majority of stars in the night sky are binary systems, where two stars orbit each other, though they often appear as a single point of light. The planet Jupiter has the most visible moons, with its four largest (the Galilean moons) often observable with a small telescope. Even the dark spaces between stars aren’t empty—they’re filled with gas, dust, and mysterious forces like dark matter that shape the universe.
            </div>
            <img 
              src="https://img.freepik.com/free-photo/vertical-shot-empty-road-greenery-starry-blue-sky_181624-15045.jpg?ga=GA1.1.425622669.1699528792&semt=ais_hybrid" 
              className="rounded-3xl mission-image ml-auto" 
              alt="Image Description"
            />
          </div>
        </div>
    </div>
  );
}

export default Night;
