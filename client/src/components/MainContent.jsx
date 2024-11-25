import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { WavyBackground } from './wavy-background';

function MainContent() {
  const [typedText, setTypedText] = useState('');
  const fullText = "  Report Any Incident, Anytime!";

  useEffect(() => {
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <WavyBackground className="max-w-6xl mx-auto ">
    <div className="h-[80vh] bg-transparent relative text-white flex flex-col  justify-center py-16 px-8 lg:w-full">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-8xl mx-auto">
        {/* Left Content - Text and Buttons */}
        <div className="md:w-full flex flex-col text-left w-[550px]">
          <h1 className="text-7xl font-bold text-gradient font-extrabold">Stree</h1>
          
          <p className="text-2xl text-pink-300 mt-4">{typedText}</p>

          {/* Buttons in descending width */}
          <div className="mt-16 space-y-4 justify-start">
            <div className="group w-96 h-16 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
              <Link to="/incident-form" className="w-full h-full flex items-center justify-between">
                <span>Report Incident</span>
                <span className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
                  <FaLongArrowAltRight className="text-gray-900" size={24} />
                </span>
              </Link>
            </div>

            <div className="group w-80 h-16 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
              <Link to="/map" className="w-full h-full flex items-center justify-between">
                <span>View Incidents</span>
                <span className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
                  <FaLongArrowAltRight className="text-gray-900" size={24} />
                </span>
              </Link>
            </div>

            <div className="group w-72 h-16 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
              <Link to="/resources" className="w-full h-full flex items-center justify-between">
                <span>Get Resources</span>
                <span className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
                  <FaLongArrowAltRight className="text-gray-900" size={24} />
                </span>
              </Link>
            </div>

            <div className="group w-64 h-16 bg-pink-400 hover:bg-pink-500 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
              <Link to="/helpline" className="w-full h-full flex items-center justify-between">
                <span>Get Help</span>
                <span className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300">
                  <FaLongArrowAltRight className="text-gray-900" size={24} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="mt-10 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-1/2 lg:w-[45%]">
          <img
            src="/mainimg.png" 
            alt="main image"
            className="w-[415px] h-auto object-cover mt-10"
          />
        </div>
      </div>
    </div>
    </WavyBackground>
  );
}

export default MainContent;