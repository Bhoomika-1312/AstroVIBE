import { useEffect, useRef } from 'react';
import './App.css';
import Particlebg from './components/particlebg';
import './index.css';
import Preload from './components/preload';
import Options from './options';

function App() {
  return (
    <>
      <div
        className="min-h-screen w-full bg-[url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1732130329~exp=1732133929~hmac=729fb66e4a114da04ec6cd1bef2916f775af4cd01c9db6120645af210c97e516&w=900')] 
                   bg-cover bg-center bg-no-repeat relative"
      >
        <Preload />
        <Particlebg />
        <Options />
        {/* Adding text to the first image */}
        <div className="absolute inset-0 flex justify-center items-center text-white">
          <h1 className="text-6xl font-extrabold uppercase shadow-lg">
            Welcome to AstroVIBE
          </h1>
        </div>
      </div>

      {/* Second Section with Different Background (keeping the same URL for the second image) */}
      <div className="min-h-[150vh] w-full bg-[url('https://img.freepik.com/premium-photo/crowd-is-watching-space-shuttle-launching-into-space-night-creating-bright-orange-glow-sky_1103944-10656.jpg?w=900')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-end items-center px-4 border-t-2 border-white"
      >
        {/* Content on the right side */}
        <div className="text-right text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            TD7 Mission
          </h2>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-300 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Third Section with Falling Stars Background */}
      <div className="min-h-[117vh] w-full bg-[url('https://img.freepik.com/free-vector/falling-stars-beautiful-night-background_23-2148273840.jpg?t=st=1732135492~exp=1732139092~hmac=5d044b088b3cfca14a0be4aeb004f995c5e83cdc177efededb159a9b27673681&w=900')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-start items-center px-4 border-t-2 border-white"
      >
        {/* Content on the left side */}
        <div className="text-left text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            Night Sky
          </h2>
          <button className="bg-white text-black my-5 font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-300 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>

      {/* Fourth Section with Universe View Background */}
      <div className="min-h-[150vh] w-full bg-[url('https://img.freepik.com/free-photo/view-universe-with-planets_1048-2420.jpg?t=st=1732136049~exp=1732139649~hmac=51b73942076c08395b0d6d38b8e8fbe806e9ed109a0ce9953a2a396bdee1709c&w=996')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-end items-center px-4 border-t-2 border-white"
      >
        {/* Content on the right side */}
        <div className="text-right text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            THE Moon
          </h2>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full text-lg hover:bg-gray-300 transition-all duration-300">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
