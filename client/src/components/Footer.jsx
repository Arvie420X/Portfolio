import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { VscGithub } from 'react-icons/vsc';

export const socials = [
    {
      href: 'https://www.facebook.com/arvielobaton28',
      icon: FaFacebook,
    },
    {
      href: 'https://www.linkedin.com/in/arvidas-lobaton-3449841a3/',
      icon: SiLinkedin,
    },
    {
      href: 'https://github.com/Arvie420X',
      icon: VscGithub,
    },
  ]

const Footer = () => {
  return (
    <footer className='footer bg-[#141E27] text-white py-12 h-[450px] lg:h-[500px]'>
      <div className='container mx-auto w-[82%]'>
        <div className='hrContainer h-16 mt-5'>
          <hr className="hr-element" />
        </div>

        <div className='flex flex-col  space-y-9  items-center justify-between'>
          {/* social icons */}
          <div className='front flex space-x-6 items-center justify-center'>
            {socials.map((item, index) => {
              const { href, icon: Icon } = item;
              return (
                <a className='text-2xl' href={href} key={index}>
                  <Icon />
                </a>
              );
            })}
          </div>

          {/* logo */}
          <div className='front'>
            <h1 className='text-gradient text-2xl md:text-5xl'>Arvidas Lobaton | Portfolio</h1>
          </div>

          {/* copyright */}
          <p className='front'>
            &copy; {new Date().getFullYear()} APL. All rights reserved. 
          </p>
        </div>

        <div className='hrContainer h-16 mt-20'>
          <hr className="hr-element" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
