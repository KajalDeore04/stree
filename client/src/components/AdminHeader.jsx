import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { useAuth } from "../store/auth";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white fixed w-full  mx-auto z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="bg-black max-w-5xl mx-auto flex items-center justify-center h-16 border-2 border-t-0 border--0 shadow-2xl shadow-zinc-700 border-pink-700 rounded-[30px]">
          {/* <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link to="/">
              <img
            src="favicon.ico" 
            alt="main image"
            className="w-8 h-auto object-cover"
          />
          </Link>
            </h1>
          </div> */}
          <div className="flex items-center p-20">
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/admin"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              
              {/* <Link to="/forum" className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Forum
              </Link> */}
              <Link
                to="/admin/users"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </Link>
              <Link
                to="/admin/incidents"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Incidents
              </Link>
              <Link
                to="/admin/contacts"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Messages
              </Link>
              
              
              {/* <Link to="/about-us" className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About us
              </Link> */}
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <RxCrossCircled
                    className="block h-6 w-6"
                    aria-hidden="true"
                  />
                ) : (
                  <IoMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="">
        {isLoggedIn ? (
                <Link
                  to="/login"
                  onClick={LogoutUser}
                  className=" hover:bg-pink-200 text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex gap-2"
                >
                  <img
                    src="/images/logout.png"
                    alt="main image"
                    className="w-6 h-full object-cover"
                  />Logout
                </Link>
              ) : (
                <>
                  
                  <Link
                    to="/login"
                    className=" hover:bg-pink-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium  flex gap-2 "
                  >
                    <img
                    src="/images/logIcon.png"
                    alt="main image"
                    className="w-6 h-full object-cover invert"
                  />Login
                  </Link>
                </>
              )}
        </div>
      </div>


      


      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 max-h-64 overflow-y-auto ">
          <div className="px-2 pt-2 pb-3 sm:pb-20 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            
            <Link
              to="/login"
              className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            
              
              {/* <Link to="/forum" className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Forum
              </Link> */}
            <Link
                to="/admin/users"
                className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                Users
            </Link>
            <Link
                to="/admin/incidents"
                className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
                Incidents
              </Link>
              <Link
                to="/admin/contacts"
                className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Messages
              </Link>  
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
