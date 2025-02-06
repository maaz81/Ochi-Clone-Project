import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
          <div className="w-1/2">
            <h1 className='text-7xl'>Our Approach</h1>
            <button className='px-20 py-6 bg-zinc-900 mt-10 flex items-center gap-10 rounded-full text-white '>Read More
              <div className='w-3 h-3 rounded-full bg-zinc-100'></div>
            </button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl">
              <img src="/Images/about1.jpeg" alt="hil" />
          </div>
        </div>



    </div>
  )
}

export default About