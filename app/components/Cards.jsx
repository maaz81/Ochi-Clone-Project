'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image'

const Cards = () => {
    return (
        <div className='w-full bg-zinc-900 h-screen flex gap-5 py-20 px-10'>
            <div className='cardcontainer w-1/2'>
                <div className='card w-full h-[55vh] bg-[#004D43] rounded-xl '>
                    <div className='flex justify-center items-center  h-[80%]'>
                        <Image
                            src="/Images/five-star.svg"
                            alt="Five star rating"
                            width={120}
                            height={120}
                        />
                    </div>
                    <h1 className='font-body border-2 text-[#CDEA68] border-[#CDEA68] py-1 px-2 rounded-full w-fit ml-8 mt-1 text-[14px]'>&copy; 2024-2026</h1>
                </div>


            </div>

            <div className='cardcontainer w-1/2 flex gap-5'>
                <div className='card w-full h-[55vh] bg-[#212121] rounded-xl '>
                    <div className='flex justify-center items-center  h-[80%]'>
                        <Image
                            src="/Images/five-star.svg"
                            alt="Five star rating"
                            width={120}
                            height={120}
                        />

                    </div>
                    <motion.h1
                        className='font-body uppercase border-2 border-l text-xs w-fit py-1 px-2 rounded-full ml-5 mb-10 border-zinc-100 font-extralight cursor-pointer'
                        whileHover={{
                            backgroundColor: '#ffffff', // Change background to white
                            transition: { duration: 1.5, ease: 'easeInOut' },
                            color: 'black',

                            // Animation duration
                        }}
                    >
                        Award-winning UI
                    </motion.h1>

                </div>

                <div className='card w-full h-[55vh] bg-[#212121] rounded-xl'>
                    <div className='flex justify-center items-center h-[80%]'>
                        <Image
                            src="/Images/Maaz_profile.jpg"
                            alt="Five star rating"
                            className='rounded-full'
                            width={120}
                            height={120}
                        />
                    </div>
                    <motion.h1
                        className='font-body uppercase border-2 border-l text-xs w-fit py-1 px-2 rounded-full ml-5 mb-10 border-zinc-100 font-extralight cursor-pointer'
                        whileHover={{
                            backgroundColor: '#ffffff', // Change background to white
                            transition: { duration: 1.5 },
                            color: 'black',


                            // Animation duration
                        }}
                    >
                        Maaz Ahmad Khan
                    </motion.h1>
                </div>
            </div>

        </div>
    )
}

export default Cards