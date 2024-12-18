import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaGavel, FaHome, FaHeartbeat, FaChevronDown, FaChevronUp, FaGlobe, FaHandHoldingHeart, FaFlag } from "react-icons/fa";

function Helpline() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-700 via-black to-black py-10">
        <div className="max-w-7xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold text-pink-200">Women&apos;s Safety & Helpline Services in India</h1>
          
        </div>
        
        <img 
          src="/issues.png" 
          className="w-full h-auto object-cover mx-auto mb-8 "
          alt="Issues"
        />

        {/* Helplines */}
        <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black max-w-5xl mx-auto p-6  shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mb-8">
          <div className=" mb-8">
            <h2 className="text-3xl font-semibold text-pink-200">National Commission for Women (NCW)</h2>
            <p className="mt-4 text-gray-600">
              The National Commission for Women (NCW) is a statutory body of the Government of India, tasked with advising on policy matters affecting women and ensuring their protection and empowerment.
              <a href="http://www.ncw.nic.in/helplines" className="text-black underline hover:no-underline hover:text-pink-800"> Read more</a>
            </p>
          </div>
          <div className="relative">
            <button
              className="flex items-center justify-between w-full text-left bg-pink-200 px-4 py-3 rounded-[30px] text-pink-900 font-semibold shadow-md"
              onClick={toggleDropdown}
            >
              <span><FaPhoneAlt className="text-pink-600 text-2xl mr-3 inline-block" aria-label="Phone icon" />Women Helpline (All India): 1091</span>
              {isDropdownOpen ? <FaChevronUp className="text-pink-600 text-2xl" /> : <FaChevronDown className="text-pink-600 text-2xl" />}
            </button>

            {isDropdownOpen && (
              <div className="bg-black mt-4 rounded-lg shadow-lg p-4">
                <ul className="space-y-2 text-md">
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong className='text-white' >National Emergency Number:</strong> <a href="tel:112" className="text-pink-500">112</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong className='text-white' >Police:</strong> <a href="tel:100" className="text-pink-500">100</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong className='text-white'>Delhi Women Helpline:</strong> <a href="tel:181" className="text-pink-500">181</a></li>
                  <li><FaPhoneAlt className="text-gray-600 mr-2 inline-block" /> <strong className='text-white' >Domestic Abuse Helpline:</strong> <a href="tel:181" className="text-pink-500">181</a></li>
                  </ul>
                <p className="mt-4 text-sm text-gray-400">Other helplines:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="tel:1098" className="text-pink-500 hover:underline">Child Helpline: 1098</a></li>
                  <li><a href="tel:14567" className="text-pink-500 hover:underline">Senior Citizen Helpline: 14567</a></li>
                  <li><a href="tel:08046110007" className="text-pink-500 hover:underline">Mental Health Helpline: 08046110007</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Counseling */}
        <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black  max-w-5xl mx-auto p-6  shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-100 mb-8">
          <div className=" mb-8">
            <h2 className="text-3xl font-semibold text-pink-200">iCall Counseling Helpline</h2>
            <p className="mt-4 text-gray-600">
              iCall (Indian Centre for Advancement of Community Mental Health) provides psychological support and counseling services for mental health issues. They offer helplines for immediate support and guidance.
              <a href="https://icallhelpline.org" className="text-white underline hover:no-underline hover:text-pink-800"> Read more</a>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">Get support via email:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <li><strong className='text-white' ><FaEnvelope className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Email icon" />Email : </strong> <a href="mailto:icall@tiss.edu" className="text-pink-500">icall@tiss.edu</a></li>
              </ul>
            </div>
            <div>
              <p className="text-gray-600">Mental health and counseling services:</p>
              <ul className="mt-4 space-y-2 text-lg">
                <li><strong className='text-white' ><FaHeartbeat className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Heart icon" />Helpline :</strong> <a href="tel:02225521111" className="text-pink-500">022-25521111</a></li>
                <li><strong className='text-white' ><FaGlobe className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Globe icon" />Website :</strong> <a href="https://icallhelpline.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">icallhelpline.org</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Legal Assistance */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6  shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaGavel className="text-pink-600 text-3xl mr-3" aria-label="Gavel icon" />
              <h2 className="text-2xl font-semibold text-pink-200">Legal Assistance</h2>
            </div>
            <p className="text-gray-600">The National Legal Services Authority provides free legal services and organizes Lok Adalats for speedy resolution of cases.</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Helpline :</strong> <a href="tel:15100" className="text-pink-500">15100</a></li>
              <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://nalsa.gov.in" className="text-pink-500" target="_blank" rel="noopener noreferrer">nalsa.gov.in</a></li>
            </ul>
          </div>

          {/* Shelter Services */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6  shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaHome className="text-pink-600 text-3xl mr-3" aria-label="Home icon" />
              <h2 className="text-2xl font-semibold text-pink-200">Shelter Services</h2>
            </div>
            <p className="text-gray-600">Various NGOs and government agencies offer shelter and support services for women in distress. Reach out for immediate assistance and safe shelter.</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Hotline :</strong> <a href="tel:1091" className="text-pink-500">1091</a></li>
              <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://www.wcd.nic.in/shelters" className="text-pink-500" target="_blank" rel="noopener noreferrer">wcd.nic.in/shelters</a></li>
            </ul>
          </div>

          {/* Health Services */}
          <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6  shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-pink-600 text-3xl mr-3" aria-label="Heartbeat icon" />
              <h2 className="text-2xl font-semibold text-pink-200">Health Services</h2>
            </div>
            <p className="text-gray-600">Health services including mental health support and medical assistance are available for women in need. Reach out to these helplines for support.</p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Helpline :</strong> <a href="tel:1800114666" className="text-pink-500">1800-11-4666</a></li>
              <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://www.mohfw.gov.in" className="text-pink-500" target="_blank" rel="noopener noreferrer">mohfw.gov.in</a></li>
            </ul>
          </div>

           {/* Human Rights */}
        <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6 shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto mb-8">
          <div className="flex items-center mb-4">
            <FaFlag className="text-pink-600 text-3xl mr-3" aria-label="Flag icon" />
            <h2 className="text-2xl font-semibold text-pink-200">Human Rights</h2>
          </div>
          <p className="text-gray-600">Human rights organizations provide assistance and advocate for women&apos;s rights and safety. They offer resources for reporting violations and seeking justice.<a href="https://nalsa.gov.in/" className="text-black underline hover:no-underline hover:text-pink-800" target="_blank" rel="noopener noreferrer"> Read more</a></p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Helpline :</strong> <a href="tel:15100" className="text-pink-500">15100</a></li>
            <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://nalsa.gov.in/" className="text-pink-500" target="_blank" rel="noopener noreferrer">https://nalsa.gov.in/</a></li>
          </ul>
        </div>

        {/* Tarshi Counseling */}
        <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6  shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto mb-8">
          <div className="flex items-center mb-4">
            <FaHandHoldingHeart className="text-pink-600 text-3xl mr-3" aria-label="Heart icon" />
            <h2 className="text-2xl font-semibold text-pink-200">Tarshi Counseling Services</h2>
          </div>
          <p className="text-gray-600">Tarshi provides confidential counseling and support on issues related to sexual health and rights. They offer professional guidance and resources for women seeking help.<a href="http://www.tarshi.net" className="text-black underline hover:no-underline hover:text-pink-800" target="_blank" rel="noopener noreferrer"> Read more</a></p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Helpline :</strong> <a href="tel:0987654321" className="text-pink-500">098-765-4321</a></li>
            <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://tarshi.net" className="text-pink-500" target="_blank" rel="noopener noreferrer">tarshi.net</a></li>
          </ul>
        </div>

        {/* Tarshi Counseling */}
        <div className="border-pink-400 border-2 border-opacity-15 hover:border-opacity-55 rounded-[30px] bg-black p-6  shadow-lg hover:shadow-2xl  transform transition duration-300 ease-in-out hover:scale-100 mx-auto mb-8">
          <div className="flex items-center mb-4">
            <FaHandHoldingHeart className="text-pink-600 text-3xl mr-3" aria-label="Heart icon" />
            <h2 className="text-2xl font-semibold text-pink-200">Adarsh Counseling Services</h2>
          </div>
          <p className="text-gray-600">Adarsh provides confidential counseling and support on issues related to sexual health and rights. They offer professional guidance and resources for women seeking help.<a href="http://www.tarshi.net" className="text-black underline hover:no-underline hover:text-pink-800" target="_blank" rel="noopener noreferrer"> Read more</a></p>
          <ul className="mt-4 space-y-2 text-lg">
            <li><FaPhoneAlt className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Helpline :</strong> <a href="tel:0987654321" className="text-pink-500">098-765-4321</a></li>
            <li><FaGlobe className="text-pink-600 mr-2 inline-block" /><strong className='text-white'>Website :</strong> <a href="https://tarshi.net" className="text-pink-500" target="_blank" rel="noopener noreferrer">adarsh.net</a></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
}

export default Helpline;
