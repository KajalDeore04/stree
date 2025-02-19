import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-pink-400">Stree</h4>
          <p className="mt-2 text-sm">For our fierce warriors and their never diminishing light</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-pink-400">ABOUT US</h4>
          <ul className="mt-2 space-y-2 text-sm">
            {/* <li><Link to="/about-team" className="hover:text-pink-600">About team</Link></li> */}
            <li><Link to="/contact-us" className="hover:text-pink-600">Contact us</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-pink-400">COMMUNITY</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="https://codess.cafe/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                Codess Cafe
              </a>
            </li>
            <li>
              <a href="https://www.womenwhocode.com/delhi" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                Women Who Code Delhi
              </a>
            </li>
            <li>
              <a href="https://www.girlscript.tech/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                GirlScript Foundation
              </a>
            </li>
            <li>
              <a href="https://www.womentechmakers.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                Women Tech Makers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-pink-400">SOCIAL MEDIA</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="https://github.com/KajalDeore04" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kajal-deore" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Linkedin</a>
            </li>
            <li>
              <a href="https://www.discordapp.com/users/kajal9123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Discord</a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
        <p className="text-sm">© Copyright 2024</p>
        <div className="flex space-x-4 text-white">
          <a href="https://www.discordapp.com/users/kajal9123" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://github.com/KajalDeore04" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/kajal-deore" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
