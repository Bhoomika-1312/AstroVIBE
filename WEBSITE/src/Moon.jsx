import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Particlebg from './components/particlebg';

function Moon() {
  const [day, setDay] = useState(1);
  const [rashi, setRashi] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleDateChange = (e) => {
    setInputValue(e.target.value);
  };

  const getRashi = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries (Mesh)';
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus (Vrishab)';
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini (Mithun)';
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer (Kark)';
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo (Singh)';
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo (Kanya)';
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra (Tula)';
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio (Vrishchik)';
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius (Dhanu)';
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn (Makar)';
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius (Kumbh)';
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return 'Pisces (Meen)';
    return 'Invalid Date';
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(inputValue);
    if (!isNaN(date)) {
      const calculatedRashi = getRashi(date);
      setRashi(calculatedRashi);
    } else {
      setRashi('Please enter a valid date!');
    }
  };

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    timeline.fromTo(
      '.moon',
      { clipPath: 'inset(0 50% 0 0)' },
      {
        clipPath: 'inset(0 0 0 0)',
        duration: 28,
        ease: 'power2.inOut',
        onUpdate: () => {
          const progress = timeline.progress() * 28;
          setDay(Math.ceil(progress));
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black relative">
      <Particlebg />
      <h2 className="mission-title text-white text-6xl font-extrabold uppercase shadow-lg text-center pt-10">
        The Moon
      </h2>

      {/* Moon Phases Container */}
      <div className="moon-phase-container absolute top-10 right-10 flex flex-col items-center">
        <div className="moon-phase w-[120px] h-[120px] bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg">
          <div className="moon bg-white w-full h-full rounded-full"></div>
        </div>
        <div className="day-number text-white mt-3 text-lg font-semibold">
          Day {day}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-20">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-xl w-80">
          <label className="text-white font-semibold mb-2 block">
            Enter Date of Birth (YYYY-MM-DD):
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={handleDateChange}
            placeholder="YYYY-MM-DD"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Get Rashi
          </button>
        </form>
        {rashi && (
          <div className="text-white mt-6 text-xl font-medium bg-gray-700 p-4 rounded-lg shadow-lg">
            Your Rashi: <span className="font-bold text-blue-400">{rashi}</span>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default Moon;
