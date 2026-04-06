import React from 'react'
import { Carousel } from 'antd';
import { MoveRight } from 'lucide-react';
import banner1 from '../assets/banner-1.png'
import banner2 from '../assets/banner-2.png'
import banner3 from '../assets/banner-3.png'
const contentStyle = {
    margin: 0,
    height: '530px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Section1 = () => {
    return (
        <>
            <div className='w-full h-auto min-h-[400px] md:h-[530px]'>
                <Carousel autoplay className=''>
                    <div className='relative h-[400px] md:h-[530px]'>
                        <img style={{...contentStyle, height: '100%'}} src={banner1} alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center'>
                            <div className='container mx-auto px-6 md:px-10 text-white text-left flex flex-col gap-4 md:gap-12 ml-0 md:ml-0 lg:ml-170'>
                                <h1 className="text-xs md:text-sm uppercase tracking-[0.2em]">Step into Style</h1>
                                <div>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'>Discover the latest </p>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'>trends in footwear</p>
                                </div>
                                <p className='text-base md:text-xl lg:text-2xl font-medium max-w-2xl'>From classic sneakers to trendy boots, our collection has something for everyone.</p>
                                <button className='w-36 md:w-40 h-10 md:h-12 bg-[#AE3F4F] uppercase text-white flex items-center justify-center gap-2 hover:bg-black hover:text-white duration-500 cursor-pointer text-sm md:text-base'>Shop Now <MoveRight className='w-4 h-4 md:w-5 md:h-5' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[400px] md:h-[530px]'>
                        <img style={{...contentStyle, height: '100%'}} src={banner2} alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center'>
                            <div className='container mx-auto px-6 md:px-10 text-white text-left flex flex-col gap-4 md:gap-12 ml-0 md:ml-0 lg:ml-170'>
                                <h1 className="text-xs md:text-sm uppercase tracking-[0.2em]">ELEVATE YOUR LOOK</h1>
                                <div>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'>Find The Perfect Pair </p>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'>Of Shoes To Complete. </p>
                                </div>
                                <p className='text-base md:text-xl lg:text-2xl font-medium max-w-2xl'>Explore our wide range of styles, colors, and materials to find the perfect shoes for any occasion.</p>
                                <button className='w-36 md:w-40 h-10 md:h-12 bg-[#AE3F4F] uppercase text-white flex items-center justify-center gap-2 hover:bg-black hover:text-white duration-500 cursor-pointer text-sm md:text-base'>Shop Now <MoveRight className='w-4 h-4 md:w-5 md:h-5' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[400px] md:h-[530px]'>
                        <img style={{...contentStyle, height: '100%'}} src={banner3} alt="" className='w-full h-full object-cover' />
                        <div className='absolute top-0 left-0 w-full h-full bg-black/40 flex items-center'>
                            <div className='container mx-auto px-6 md:px-10 text-white text-left flex flex-col gap-4 md:gap-12'>
                                <h1 className="text-xs md:text-sm uppercase tracking-[0.2em]">COMFORT MEETS FASHION</h1>
                                <div>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'>Discover Shoes That Look </p>
                                    <p className='text-2xl md:text-4xl lg:text-6xl font-bold leading-tight'> Great And Feel Even Better. </p>
                                </div>
                                <p className='text-base md:text-xl lg:text-2xl font-medium max-w-2xl'>Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.</p>
                                <button className='w-36 md:w-40 h-10 md:h-12 bg-[#AE3F4F] uppercase text-white flex items-center justify-center gap-2 hover:bg-black hover:text-white duration-500 cursor-pointer text-sm md:text-base'>Shop Now <MoveRight className='w-4 h-4 md:w-5 md:h-5' /></button>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Section1