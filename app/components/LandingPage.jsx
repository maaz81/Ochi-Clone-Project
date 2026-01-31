'use client'
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {


    return (
        <div data-scroll data-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900'>
            <div className='flex flex-row justify-between'>
                <div className='textstructure'>
                    <div className="masker pt-10">
                        <h1 className="font-heading uppercase px-16 tracking-tighter leading-[6.5vw] font-medium text-8xl">
                            We Design
                        </h1>
                    </div>
                    <div className="masker flex">
                        <motion.div initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            style={{ transformOrigin: 'left' }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='rounded-md mt-2 ml-16 w-[9vw] h-[5.5vw]'>
                            <Image
                                src="/Images/content-image01.jpg"
                                alt="Creative visual"
                                width={500}
                                height={500}
                                className="object-cover rounded-md"
                            />
                        </motion.div>
                        <h1 className="font-heading px-2 uppercase tracking-tighter leading-[6.5vw] font-medium text-8xl">
                            Impactful
                        </h1>
                    </div>
                    <div className="masker ">
                        <h1 className="font-heading uppercase px-16 tracking-tighter leading-[6.5vw] font-medium text-8xl">
                            Visual Stories
                        </h1>
                    </div>
                </div>
                <div className="bg-red-500 w-20 relative flex flex-col items-center py-6">
                    <h3 className="text-white font-semibold z-10">W.</h3>

                    <span
                        className="
      absolute top-1/2
      -translate-y-1/2
      -rotate-90
      whitespace-nowrap
      uppercase tracking-widest
      font-light text-sm
      text-white
    "
                    >
                        Landing Page
                    </span>
                </div>




            </div>

            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {['For public and private companies', 'From the first pitch to IPO'].map((item, ind) => {
                    return <p key={ind} className='text-md font-light tracking-tight leading-none'>{item}</p>
                })}

                <div className="start flex items-center gap-2 colorChange">
                    <button className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full hover:bg-white hover:text-black'>Start the project</button>
                    <div className='w-10 h-10 border-[1px] flex items-center justify-center border-zinc-500 rounded-full  hover:bg-white hover:text-black'>
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>


            </div>

        </div>


    )
}

export default LandingPage