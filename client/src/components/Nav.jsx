import React from 'react'
import { IoEarth } from "react-icons/io5";
import { GiAstronautHelmet, GiMechanicalArm } from "react-icons/gi";
import { SiDatabricks } from "react-icons/si";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { Link } from 'react-scroll';

const Nav = () => {


  return (
    <nav className='fixed bottom-1 md:bottom-5 lg:bottom-6 w-full overflow-hidden z-50'>
      <div className='h-[96px] container mx-auto'>
        {/* nav inner  */}
        <div className='w-[340px] md:w-full bg-black/20 h-[70px] backdrop-blur-lg rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50'>
          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='home'
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center  rounded-full`}
          >
            <IoEarth />
          </Link>

          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='about'
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center  rounded-full`}
          >
            <GiAstronautHelmet />
          </Link>

          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='tech'
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center  rounded-full`}
          >
            <GiMechanicalArm />
          </Link>

          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='project'
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center  rounded-full`}
          >
            <SiDatabricks />
          </Link>

          <Link
            activeClass='active'
            smooth={true}
            spy={true}
            to='contact'
            className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center  rounded-full`}
          >
            <MdOutlineSatelliteAlt />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
