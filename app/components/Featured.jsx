import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {

    const cards = [useAnimation(),useAnimation()]
    const handleHover=(index)=>{
        cards[index].start({y: "0"})
    };

    const handleHoverEnd=(index)=>{
        cards[index].start({y: "100%"})
    };


    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-5xl'>Fetrued projects</h1>
            </div>
            <div className='px-20 '>
                <div className='cards w-full flex gap-10 mt-10'>
                    <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer  relative w-1/2 h-[80vh]'>
                        <h1 className='absolute text-6xl z-[9] tracking-tighter leading-none left-full -translate-x-1/2 -translate-y-1/2 top-1/2 flex overflow-hidden text-[#CDEA68]'>{'FYDE'.split('').map((item,index)=>{
                            return <motion.span initial={{y:"100%"}} 
                            animate={cards[0]} 
                            transition={{ease:[0.22,1,0.36,1], delay: index*.05}} 
                            className='inline-block' key={index}>{item}</motion.span>
                        })}</h1>
                        <div className='card w-full overflow-hidden h-full rounded-xl bg-green-600 '>
                            <img className='w-full h-full ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)}  className='cardcontainer relative   w-1/2 h-[80vh]'>
                        <div className='card w-full overflow-hidden h-full rounded-xl '>
                            <h1 className='absolute flex overflow-hidden text-6xl z-[9] tracking-tighter leading-none right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-[#CDEA68]'>{'VISE'.split('').map((item, index) => {
                               return <motion.span initial={{y:"100%"}} 
                               animate={cards[1]} 
                               transition={{ease:[0.22,1,0.36,1], delay: index*.05}} 
                               className='inline-block' key={index}>{item}</motion.span>
                            })}</h1>

                            <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Featured