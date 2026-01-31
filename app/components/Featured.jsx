'use client'
import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { FaArrowUpLong } from 'react-icons/fa6';

const Featured = () => {

    const cards = [useAnimation(), useAnimation()]
    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    };

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    };

    const [ishovered, setIshovered] = useState(false)


    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className="font-heading text-5xl">
                    Featured Projects
                </h1>
            </div>
            <div className='px-20 w-full '>
                <div className='cards w-full flex gap-10 mt-10'>
                    <div className='flex flex-col w-full'>
                        <div className="flex items-center gap-2 mb-2">
                            <div className='w-2 h-2 bg-white rounded-full'></div>
                            <div className='text-white uppercase text-lg'>fyde</div>
                        </div>
                        <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className='cardcontainer  relative h-[80vh]'>
                            <h1 className='absolute text-6xl z-[9] tracking-tighter leading-none left-full -translate-x-1/2 -translate-y-1/2 top-1/2 flex overflow-hidden text-[#CDEA68]'>{'FYDE'.split('').map((item, index) => {
                                return <motion.span initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                    className='inline-block' key={index}>{item}</motion.span>
                            })}</h1>
                            <div className='card w-full overflow-hidden h-full rounded-xl bg-green-600 '>
                                <img className='w-full h-full ' src="Images/Fyde_Illustration_Crypto.png" alt="" />
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className="flex items-center gap-2 mb-2">
                            <div className='w-2 h-2 bg-white rounded-full'></div>
                            <div className='text-white uppercase text-lg'>vise</div>
                        </div>
                        <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className='cardcontainer relative h-[80vh]'>
                            <div className='card w-full overflow-hidden h-full rounded-xl '>
                                <h1 className='absolute flex overflow-hidden text-6xl z-[9] tracking-tighter leading-none right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]'>{'VISE'.split('').map((item, index) => {
                                    return <motion.span initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                        className='inline-block' key={index}>{item}</motion.span>
                                })}</h1>

                                <img className='w-full h-full' src="Images/Vise.jpg" alt="" />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
            <button onMouseEnter={() => setIshovered(true)} onMouseLeave={() => setIshovered(false)} className='bg-white text-black  h-12 w-52 px-3 rounded-full flex items-center mx-auto mt-8 uppercase text-[14px] font-semibold'>view all  casestudies {
                ishovered ? <motion.span
                    className='p-3 flex justify-center items-center bg-black rounded-full ml-3'
                    initial={{ rotate: 0, scale: 0 }} // Initial state
                    animate={{ scale: 1 }} // Animate to this state
                    transition={{ duration: 0.6, ease: 'easeInOut' }} // Transition settings
                >
                    <FaArrowUpLong className=' text-white rounded-full rotate-45 w-3 h-3 ' />
                </motion.span> : <div className='w-2 h-2 bg-black rounded-full ml-2 '></div>
            }</button>

        </div>
    )
}

export default Featured