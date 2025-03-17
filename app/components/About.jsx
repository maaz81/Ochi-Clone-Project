import { motion, animate } from 'framer-motion'; // Import motion and animate from framer-motion
import { React, useState } from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div // Use motion.div for animations
      animate={{}} // Add animation properties here if needed
      className='w-full py-20 pl-10 pr-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'
    >
      <h1 className='text-[3.6vw] mr-8 leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to{' '}
        <u>raise funds, sell products, explain complex ideas,</u> and <u>hire great people.</u>
      </h1>

      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
        <div className="w-1/2">
          <h1 className='text-4xl'>Our Approach</h1>
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='px-6 py-3 w-44 bg-zinc-900 mt-6 flex items-center gap-6 rounded-full text-white'
          >
            Read More
            <div
              className={`flex justify-center items-center rounded-full bg-zinc-100 overflow-hidden  transition-all duration-300 ${
                isHovered ? 'h-6 w-6 text-black' : 'w-2 h-2'
              }`}
            >
              <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
              </span>
            </div>
          </button>
        </div>

        {/* Use motion.div for the image container */}
        <motion.div
          className='w-1/2'
          animate={{ scale: isHovered ? 0.9 : 1 }} // Example animation on hover
          transition={{ duration: 0.8 }} // Smooth transition
        >
          <img src="/Images/about1.jpeg" alt="hil" className='rounded-xl w-full h-auto' />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;