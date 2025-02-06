import React from 'react'
import OchiLogo from '../../public/Images/OchiLogo'

const Footer = () => {
    return (
        <div className='px-20 py-10 w-full h-fit bg-zinc-900 flex'>
            <div className='w-1/2 flex flex-col justify-between'>
                <div className="heading">
                    <h1 className='font-semibold text-[12vh] leading-none uppercase mt-1 tracking-tighter'>Eyes-</h1>
                    <h1 className='font-semibold text-[12vh] leading-none uppercase mt-1 tracking-tighter'>Opening</h1>
                </div>

                <div>
                    <OchiLogo/>
                </div>

            </div>
            <div className='w-1/2 text-xs font-extralight'>
                <div>
                    <h1 className='font-semibold text-[12vh] leading-none uppercase mt-1 tracking-tighter'>Presentations</h1>
                </div>
                <div className=''>
                    {/* <ul className='list-none mt-3'>
                            <li className='underline'>Instagram</li>
                            <li className='underline'>Behance</li>
                            <li className='underline'>Facebook</li>
                            <li className='underline'>LinkedIn</li>
                        </ul> */}


                    <div className='flex flex-col mb-1 mt-4'>

                        <h1 className='mb-3'>S:</h1>

                        {
                            ['Instagram', 'Behance', 'Facebook', 'LinkedIn'].map((item, ind) => {
                                return <a href="#" key={ind} className='underline mt-1 font-light text-[18px]'>{item}</a>
                            })
                        }
                    </div>

                    <div className='flex justify-between '>
                        <div className='flex flex-col mb-1 mt-7'>

                            <h1 className='mb-3'>L:</h1>

                            {
                                ['202-1965 W 4th Ave', 'Vancouver, Canada', '30 Chukarina St', 'Lviv, Ukraine'].map((item, ind) => {
                                    return <a href="#" key={ind} className='underline mt-1 font-light text-[18px]'>{item}</a>
                                })
                            }
                        </div>

                        <div className='flex flex-col mb-1 mt-7'>

                            <h1 className='mb-3'>M:</h1>

                            {
                                ['Home', 'Services', 'Our work', 'About us', 'Insights','Contact us'].map((item, ind) => {
                                    return <a href="#" key={ind} className='underline mt-1 font-light text-[18px]'>{item}</a>
                                })
                            }
                        </div>
                    </div>

                    <div className='flex flex-col mb-1 mt-7'>

                        <h1 className='mb-3'>E:</h1>

                        {
                            ['hello@ochi.design'].map((item, ind) => {
                                return <a href="#" key={ind} className='underline mt-1 font-light text-[18px]'>{item}</a>
                            })
                        }
                    </div>

                    <div className='flex mb-1 mt-7 justify-between text-xs opacity-0.3 h-fit'>
                        <div> &copy; ochi design 2025. <a href="#" className='underline underline-offset-3'>Legal Terms</a></div>
                        <a href="#">Website by Obys</a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Footer