import './App.css';
import Particlebg from './components/particlebg';
import './index.css';
import Preload from './components/preload';
import Options from './options';
import { NavLink } from "react-router-dom";
function App() {
  return (
    <div>
          <div className="min-h-screen w-full bg-[url('https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg')] 
                    bg-cover bg-center bg-no-repeat relative"
      >
        <div className="absolute inset-0 flex justify-center items-center text-white z-10">
          <h1 className="text-6xl font-extrabold uppercase shadow-lg">
            Welcome to AstroVIBE
          </h1>
        </div>
        {/* Other Components */}
        <Preload />
        <Particlebg />
        <Options />
        {/* Further Sections */}
      </div>

      {/* TD7 Mission Section */}
      <div className="min-h-[150vh] w-full bg-[url('https://img.freepik.com/premium-photo/crowd-is-watching-space-shuttle-launching-into-space-night-creating-bright-orange-glow-sky_1103944-10656.jpg?w=900')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-end items-center px-4 border-t-2 border-white"
      >
        <div className="text-right text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            TD7 Mission
          </h2>
          <NavLink
            to="/td7"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
                : "bg-white text-black my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
            }
          >
            Read More
          </NavLink>
        </div>
      </div>

      {/* Night Sky Section */}
      <div className="min-h-[117vh] w-full bg-[url('https://img.freepik.com/free-vector/falling-stars-beautiful-night-background_23-2148273840.jpg?t=st=1732135492~exp=1732139092~hmac=5d044b088b3cfca14a0be4aeb004f995c5e83cdc177efededb159a9b27673681&w=900')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-start items-center px-4 border-t-2 border-white"
      >
        <div className="text-left text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            Night Sky
          </h2>
          <NavLink
            to="/night"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
                : "bg-white text-black my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
            }
          >
            Read More
          </NavLink>
        </div>
      </div>

      {/* Universe View Section */}
      <div className="min-h-[150vh] w-full bg-[url('https://img.freepik.com/free-photo/view-universe-with-planets_1048-2420.jpg?t=st=1732136049~exp=1732139649~hmac=51b73942076c08395b0d6d38b8e8fbe806e9ed109a0ce9953a2a396bdee1709c&w=996')] 
                   bg-cover bg-center bg-no-repeat relative flex justify-end items-center px-4 border-t-2 border-white"
      >
        <div className="text-right text-white">
          <h2 className="text-6xl font-extrabold uppercase shadow-xl mb-6">
            THE Moon
          </h2>
          <NavLink
            to="/moon"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-500 text-white my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
                : "bg-white text-black my-5 font-bold py-2 px-3 rounded-full text-lg hover:bg-gray-300 transition-all duration-300"
            }
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
