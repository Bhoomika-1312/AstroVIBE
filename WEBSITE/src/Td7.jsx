import { useEffect } from 'react';
import gsap from 'gsap'; // Import GSAP
import Particlebg from './components/particlebg';
import { Link } from 'react-router-dom';

function Td7() {
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
            TD7 Mission
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
              src="https://images.pexels.com/photos/7672272/pexels-photo-7672272.jpeg?auto=compress&cs=tinysrgb&w=600" 
              className="px-12 rounded-3xl mx-4 mission-image "
              alt="Image Description"
            />
            <div className="mission-text text-pretty mt-4 text-left text-xl font-mono">
              The TD7 Mission represents a groundbreaking initiative aimed at exploring new frontiers in science and technology. This mission is designed to push the boundaries of human knowledge and capabilities, whether it involves space exploration, cutting-edge technology, or other scientific advancements.
              <br /><br />
              <strong>Objectives:</strong>
              <ul className='align-top'>
                <li>1.Exploration: Venturing into uncharted territories, whether it's exploring outer space, the depths of the ocean, or new technological fields.</li>
                <li>2.Innovation: Pioneering new technologies that will set the stage for future discoveries. This could include advanced spacecraft, AI systems, or other breakthrough inventions.</li>
                <li>3.Collaboration: Bringing together experts from various fields, including scientists, engineers, and technologists, to solve some of the most pressing challenges of our time.</li>
                <li>4.Sustainability: Incorporating sustainable practices into the mission, whether it involves reducing the environmental impact of space travel or creating technologies that benefit humanity.</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Td7;
