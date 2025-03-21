import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { useAuth } from "../store/auth";
import { IoMdArrowDropdown } from "react-icons/io";
import GoogleTranslate from "./GoogleTranslate";


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="bg-transparent text-white fixed w-full mx-auto z-20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="bg-black max-w-5xl mx-auto flex items-center justify-center h-16 border-2 border-t-0 border--0 shadow-2xl shadow-zinc-700 border-pink-700 rounded-[30px]">
          <div className="flex items-center px-20">
            <div className="hidden md:flex space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

              

              <Link
                to="/incident-form"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Report Incident
              </Link>
              <Link
                to="/map"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Map
              </Link>
              <Link
                to="/user-profile"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                User Profile
              </Link>
              {/* Dropdown Menu */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-300 hover:bg-pink-700 flex items-center gap-2 justify-center hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services <IoMdArrowDropdown size={20} />


                </button>
                {isDropdownOpen && (
                  <div className="absolute bg-black mt-2 py-2 w-48 rounded-md shadow-lg z-30">
                    <Link
                      to="/resources"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-700 hover:text-white"
                    >
                      Resources
                    </Link>
                    <Link
                      to="/helpline"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-700 hover:text-white"
                    >
                      Helpline
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/contact-us"
                className="text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact us
              </Link>

              <GoogleTranslate />
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
        <div>
          {isLoggedIn ? (
            <Link
              to="/login"
              onClick={LogoutUser}
              className="hover:bg-pink-200 text-gray-300 hover:text-black px-3 py-2 rounded-md text-sm font-medium flex gap-2"
            >
              <img
                src="/images/logout.png"
                alt="main image"
                className="w-6 h-full object-cover"
              />
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="hover:bg-pink-700 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex gap-2"
            >
              <img
                src="/images/logIcon.png"
                alt="main image"
                className="w-6 h-full object-cover invert"
              />
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 max-h-64 overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/register"
              className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <div>
              <button className="block text-gray-300 px-3 py-2">Services</button>
              <div className="ml-4">
                <Link
                  to="/resources"
                  className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Resources
                </Link>
                <Link
                  to="/helpline"
                  className="block text-gray-300 hover:bg-pink-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Helpline
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
