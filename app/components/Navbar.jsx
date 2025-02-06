import React from 'react'
import OchiLogo from '../../public/Images/OchiLogo'

const Navbar = () => {
  return (
    <div className='w-full  bg-zinc-900 px-16 py-8 flex justify-between items-center font-[NenuMontreal-Regular]'>
      <div className='logo'>
        <OchiLogo/>
      </div>

      <div className="links flex gap-10">
        {['Services', 'Our Work', 'About Us', 'Insights','Contract us'].map((item, index) => {
          return <a key={index} className={`text-md font-semibold capatilize text-white ${index === 4 && 'ml-32'}`}>{item}</a>

        })}
      </div>
    </div>
  )
}

export default Navbar