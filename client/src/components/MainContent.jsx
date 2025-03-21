import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { WavyBackground } from './wavy-background';
import { MdReportProblem } from 'react-icons/md';
import axios from 'axios';
import { useAuth } from "../store/auth";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

function MainContent() {
  const [typedText, setTypedText] = useState('');
  const fullText = "  Report Any Incident, Anytime!";
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);

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

  const handleEmergencyReport = async () => {
    if (!user) {
      alert("Please login to report an emergency");
      navigate("/login");
      return;
    }

    setLoading(true);
    
    try {
      // Get current location
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        
        // Get current date and time
        const now = new Date();
        const date = now.toISOString().split('T')[0];
        const time = now.toTimeString().split(' ')[0].slice(0, 5);
        
        const emergencyDescription = "EMERGENCY: Immediate assistance required at this location";
        
        // Create emergency incident using a valid category from your schema
        const emergencyIncident = {
          name: user.userName,
          description: emergencyDescription,
          category: "shady-area", // Using a valid category from your schema
          date,
          time,
          location: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
        };
        
        // Submit the incident to the database
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        };
        
        const response = await axios.post(
          `${backendUrl}/api/incidents/addIncident`, 
          emergencyIncident, 
          config
        );
        
        console.log('Incident saved:', response.data);
        
        // Send email notification using EmailJS
        const emailTemplateParams = {
          to_name: "Admin", 
          from_name: user.userName, 
          user_email: user?.email || "emergency@example.com", 
          message: emergencyDescription, 
          category: "shady-area", 
          date, 
          time,
          latitude, 
          longitude,
        };
        
        emailjs
          .send(
            'service_w5b3spm', // Your EmailJS service ID
            'template_qg5tkfq', // Your EmailJS template ID
            emailTemplateParams,
            'Rp0u1FT-7l8uvI8yL' // Your EmailJS user ID
          )
          .then((result) => {
            console.log('Email sent:', result.text);
            alert('Emergency reported successfully and notification email sent!');
            setLoading(false);
            navigate("/map");
          })
          .catch((error) => {
            console.error('EmailJS error:', error.text);
            alert('Emergency reported successfully, but email notification failed.');
            setLoading(false);
            navigate("/map");
          });
          
      }, (error) => {
        console.error("Error getting location:", error);
        alert("Could not detect your location. Please enable location services and try again.");
        setLoading(false);
      });
    } catch (error) {
      console.error('Error reporting emergency:', error);
      alert("An error occurred while reporting the emergency. Please try again.");
      setLoading(false);
    }
  };

  return (
    <WavyBackground className="max-w-6xl mx-auto">
      <div className="h-[80vh] bg-transparent relative text-white flex flex-col justify-center py-16 px-8 lg:w-full">
        <div className="flex flex-col md:flex-row items-center gap-20 justify-between max-w-8xl mx-auto">
          {/* Left Content - Text and Buttons */}
          <div className="md:w-1/2 flex flex-col text-left w-[550px]">
            <h1 className="text-7xl text-gradient font-extrabold">Stree</h1>
            
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

          {/* Right Content - Emergency Siren Button */}
          <div className="mt-10 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-1/2 lg:w-[45%] flex justify-center items-center">
            <button 
              onClick={handleEmergencyReport}
              disabled={loading}
              className="emergency-siren-button relative w-72 h-72 bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center border-8 border-red-800 outline-none focus:outline-none"
              style={{
                boxShadow: '0 0 30px rgba(255, 0, 0, 0.6), 0 0 60px rgba(255, 0, 0, 0.3)',
              }}
            >
              {loading ? (
                <div className="animate-pulse">
                  <div className="text-white text-2xl font-bold mb-2">SENDING...</div>
                  <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin mx-auto"></div>
                </div>
              ) : (
                <>
                  <MdReportProblem size={80} className="text-white mb-2" />
                  <div className="text-white text-3xl font-bold mb-2">EMERGENCY</div>
                  <div className="text-white text-lg font-medium">ONE-CLICK REPORT</div>
                </>
              )}
              <div className="absolute inset-0 rounded-full animate-ping bg-red-600 opacity-30"></div>
            </button>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}

export default MainContent;