import React, {useState}  from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'



const Navbar = () => {
  const [navContainer, setNav] = useState(false)
  const handleClick = () => setNav(!navContainer)
  return (
    <section className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b1a31] text-gray-300'>
        <div>
          <img src={logo} alt="logo" style={{width: '100px'}}/>
        </div>

        {/* menu items */}
          <ul className='hidden md:flex'>
            <li>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
             </li>
            <li><Link to="about" smooth={true} duration={500}>
                About
              </Link></li>
            <li><Link to="skills" smooth={true} duration={500}>
                Skills
              </Link></li>
            <li><Link to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link></li>
            <li><Link to="contact" smooth={true} duration={500}>
                Contact
              </Link></li>
          </ul>

        {/* hamburger icons */}
        <div onClick={handleClick}className='md:hidden z-20'>
          {!navContainer ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile view menu */}
        <ul className={!navContainer ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0b1a31] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="portfolio" smooth={true} duration={500}>
                Portfolio
              </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link></li>
        </ul>

        {/* icons for social links */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

          <ul>
            <li className='w-[140px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://linkedin.com/in/abdirahman-aden-08577521b' target='_blank'>
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className='w-[140px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-black'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://github.com/aden-abdirahman' target='_blank'>
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className='w-[140px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="mailto:aden.abdirahman45@gmail.com">
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className='w-[140px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#8d7674]'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href='https://drive.google.com/file/d/1SMFQVA382DEKuvOzt7gbjLRZ_ymDwFax/view?usp=sharing' target='_blank'>
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>


    </section>
  )
}

export default Navbar