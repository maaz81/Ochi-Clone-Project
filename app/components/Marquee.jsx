'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="border-t-2 border-b-2 overflow-hidden border-zinc-300 flex whitespace-nowrap">
        {[1, 2].map((_, i) => (
          <motion.h1
            key={i}
            aria-hidden="true"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 10,
            }}
            className="-mt-10 text-[12vw] pr-20 leading-none uppercase pt-10 font-heading font-semibold"
          >
            motion driven design
          </motion.h1>
        ))}
      </div>
    </div>
  )
}

export default Marquee