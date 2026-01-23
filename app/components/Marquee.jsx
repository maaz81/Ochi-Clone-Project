// import  {motion}  from 'framer-motion'
// import React from 'react'
// const Marquee = () => {
//   return (
//     <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
//         <div className='text border-t-2 border-b-2 gap-10 overflow-hidden border-zinc-300 flex whitespace-nowrap'>
//             <h1 initial={{x:0}} animate={{x:"-100%"}}  className='-mt-10 text-[12vw] leading-none uppercase pt-10 font-semibold'>we are ochi</h1>
            
//             <h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear', repeat:Infinity, duration:5}} className='-mt-10 text-[12vw] leading-none uppercase pt-10 font-semibold'>we are ochi</h1>

//         </div>
//     </div>
//   )
// }

// export default Marquee




import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.2' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2  overflow-hidden border-zinc-300 flex whitespace-nowrap'>
            <motion.h1
              initial={{ x: 0 }} 
              animate={{ x: "-100%" }}
              transition={{repeat:Infinity, ease: 'linear', repeat: Infinity, duration: 10 }}
              className='-mt-10 text-[12vw] pr-20 leading-none uppercase pt-10 font-semibold'>
              we are ochi
            </motion.h1>
            <motion.h1
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{repeat:Infinity, ease: 'linear', repeat: Infinity, duration: 10 }}
              className='-mt-10 text-[12vw] pr-20 leading-none uppercase pt-10 font-semibold'>
              we are ochi
            </motion.h1>
        </div>
    </div>
  )
}

export default Marquee