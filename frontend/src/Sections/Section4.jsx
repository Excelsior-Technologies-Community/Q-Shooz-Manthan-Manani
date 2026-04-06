import React from 'react'
import wideBanner from '../assets/wide-Banner.png'
import { MoveRight } from 'lucide-react'
import { Button } from 'antd'

const Section4 = () => {
    return (
        <>
            <div className='w-full min-h-[400px] md:h-[580px] relative overflow-hidden'>
                <img src={wideBanner} alt="" className='absolute inset-0 h-full w-full object-cover' />
                <div className='relative z-10 w-full h-full flex items-center justify-center md:items-start md:justify-end p-6 pt-18 md:pt-20 lg:pt-25 md:p-12 lg:pr-15 text-center md:text-end'>
                    <div className='max-w-2xl'>
                        <h1 className='uppercase tracking-[0.2em] text-xs md:text-sm text-black mb-4'>Comfort Meets Fashion</h1>
                        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight'>Discover shoes that look great <br className='hidden md:block' />
                            and feel even better</p>
                        <p className='my-4 md:my-7 text-sm md:text-base text-black md:text-gray-700'>Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</p>
                        <div className='flex justify-center md:justify-end'>
                            <button className='w-36 md:w-40 h-10 md:h-12 bg-[#AE3F4F] uppercase text-white flex items-center justify-center gap-2 hover:bg-black hover:text-white duration-500 cursor-pointer text-sm md:text-base'>Shop Now <MoveRight className='w-4 h-4 md:w-5 md:h-5' /></button>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gradient-to-r from-[#5C7F2B] via-[#9A6B1F] via-[#C4571F] to-[#E02A2A] text-white text-[10px] md:text-[13px] font-medium py-2 md:py-2.5 overflow-hidden flex items-center absolute bottom-0 h-10">
                    <div className="flex animate-marquee whitespace-nowrap items-center h-full">
                        <div className="flex items-center gap-12 sm:gap-24 px-4">
                            <span className="flex items-center">
                                Get 15% off your first purchase when you sign up for our newsletter. <button className="underline hover:text-gray-200 ml-2 hidden sm:inline opacity-80">Dismiss</button>
                            </span>
                            <span className="flex items-center">
                                Enjoy 20% off your entire order with the code <b className="ml-1 tracking-wider uppercase">SHOEFRESH20</b>. <button className="underline hover:text-gray-200 ml-2 hidden sm:inline opacity-80">Dismiss</button>
                            </span>
                        </div>
                        {/* Duplicate for seamless looping */}
                        <div className="flex items-center gap-12 sm:gap-24 px-4" aria-hidden="true">
                            <span className="flex items-center">
                                Get 15% off your first purchase when you sign up for our newsletter. <button className="underline hover:text-gray-200 ml-2 hidden sm:inline opacity-80">Dismiss</button>
                            </span>
                            <span className="flex items-center">
                                Enjoy 20% off your entire order with the code <b className="ml-1 tracking-wider uppercase">SHOEFRESH20</b>. <button className="underline hover:text-gray-200 ml-2 hidden sm:inline opacity-80">Dismiss</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section4