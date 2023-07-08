
// countup
// import CountUp from 'react-countup'
// intersection observer hook
// import { useInView } from 'react-intersection-observer';
// motion 
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../utils/variants';

import aboutImg from '../assets/SpaceXCrew.png'

import Experience from './Experience'

const About = () => {

  // const [ref, inView] = useInView({
  //   thereshold: 0.5,
  // });
  return (
    <div id='about' className='bg-black flex flex-col items-center justify-center min-h-screen h-auto'>

      <div className='w-full md:w-[82%] min-h-screen h-auto mt-32 md:mt-10'>

      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }} 
        className='flex justify-start md:justify-end items-center text-white text-5xl md:text-8xl ml-8 md:ml-0 mb-2'>
          <h1 className='front'>About</h1>
        </motion.div>

        <div className='flex flex-col lg:flex-row text-white mt-24 lg:mt-0 md:space-y-10'>
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} 
            className='flex bg-contain bg-no-repeat h-[450px] md:h-[640px] lg:h-auto w-full lg:w-1/2 mix-blend-lighten'>
            <img className='h-[400px] md:h-[640px] lg:h-auto w-full p-2 object-cover mix-blend-lighten rounded-3xl' src={aboutImg} alt='aboutImage' />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }} 
            className='flex flex-col justify-center lg:pl-8 lg:w-1/2'>
            <h1 className='front text-center text-gradient lg:text-left text-base px-7 md:text-xl'>
              Driven by a strong passion for technology, I am a career shifter eagerly seeking fresh opportunities to discover. I have dedicated my time to acquiring knowledge in web development. To achieve this, I pursued a combination of bootcamp training and self-study. While my focus has primarily been on the MERN stack, I remain open to exploring other technologies as well. Throughout my learning journey, I have discovered that my true interest lies in back-end development.           
            </h1>
          </motion.div>
        </div>


        <div>
          <Experience />
        </div>

      </div>

      
      
    </div>
  )
}

export default About