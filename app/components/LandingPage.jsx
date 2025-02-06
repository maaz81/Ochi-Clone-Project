import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {


    return (
        <div data-scroll data-section data-scroll-speed='-.3' className='w-full h-screen bg-zinc-900'>
            <div className='textstructure'>
                <div className="masker pt-10">
                    <h1 className='uppercase px-16 tracking-tighter leading-[6.5vw] font-["FoundersGrotesk-Samibold"] font-medium text-8xl' >We Create</h1>
                </div>
                <div className="masker flex">
                    <motion.div initial={{ width: 0 }} animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1] }} className='rounded-md mt-2 ml-16 w-[9vw] h-[5.5vw]'>
                        <img src="/Images/content-image01.jpg" />
                    </motion.div>
                    <h1 className='px-2 uppercase tracking-tighter leading-[6.5vw] font-["FoundersGrotesk-Samibold"] font-medium text-8xl'>Eye Opening</h1>
                </div>
                <div className="masker ">
                    <h1 className='uppercase px-16 tracking-tighter leading-[6.5vw] font-["FoundersGrotesk-Samibold"] font-medium text-8xl' >Presentations</h1>
                </div>
            </div>

            <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
                {['For public and private campanies', 'From the first pitch to IPO'].map((item, ind) => {
                    return <p key={ind} className='text-md font-light tracking-tight leading-none'>{item}</p>
                })}

                <div className="start flex items-center gap-2 colorChange">
                    <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div>
                    <div className='w-10 h-10 border-[1px] flex items-center justify-center border-zinc-500 rounded-full'>
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