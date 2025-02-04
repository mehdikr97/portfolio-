import { useState, useContext } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { ThemeContext } from "../Component/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white dark:bg-[#0a192f] text-gray-900 dark:text-gray-300 shadow-md z-50">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="work" smooth={true} duration={500}>Work</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Bouton de mode sombre */}
      <button onClick={toggleTheme} className="text-xl ml-4">
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu mobile */}
      <ul className={`absolute top-0 left-0 w-full h-screen bg-white dark:bg-[#0a192f] flex flex-col justify-center items-center transition-transform transform ${nav ? "translate-x-0" : "-translate-x-full"}`}>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="work" smooth={true} duration={500}>Work</Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
