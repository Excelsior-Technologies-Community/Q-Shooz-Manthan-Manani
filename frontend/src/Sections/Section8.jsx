import {  CircleDashed, CirclePlay, MoveRight } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Section8 = () => {
    return (
        <>
            <div className='w-full p-6 md:p-15 flex flex-col md:flex-row items-center gap-10'>
                <div className='w-full md:w-1/2 order-2 md:order-1'>
                    <p className='tracking-[0.2em] uppercase text-[10px] md:text-xs text-gray-500 font-medium'>Our most popular styles</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl my-6 md:my-8 font-semibold leading-tight text-black'>
                        Save big on shoes <br />
                        from last season</h1>
                    <p className='text-gray-600 leading-relaxed max-w-xl'>Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.
                    </p>
                    <p className='mt-4 md:mt-5 text-gray-600 leading-relaxed max-w-xl'>Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus</p>
                    <button className='mt-6 md:mt-8 bg-[#AE3F4F] text-white px-8 py-3.5 font-bold uppercase tracking-widest text-xs hover:bg-black transition-all duration-500 flex items-center gap-2 group'>
                        Shop Now
                        <MoveRight className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
                    </button>
                </div>
                <div className='w-full md:w-1/2 relative order-1 md:order-2'>
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-lg">
                        {/* Rotating Circle - Adjusted for responsiveness */}
                        <motion.div
                            className="absolute top-30 left-25 md:top-40 md:left-26 lg:top-50 lg:left-50 opacity-30 sm:opacity-50"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity
                            }}
                        >
                            <CircleDashed className="hidden lg:block lg:w-36 lg:h-36 text-white" />
                        </motion.div>

                        {/* Play Icon - Center for mobile action focus */}
                        <div className="absolute top-25 right-30 md:top-22 md:right-26 lg:top-30 lg:right-50 opacity-60 sm:opacity-70 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer">
                            <CirclePlay className="hidden lg:block lg:w-36 lg:h-36 text-white" />
                        </div>
                    </div>
                    <div className='rounded-lg overflow-hidden'>
                        <img 
                            src="https://qx-shooz.myshopify.com/cdn/shop/files/video-pic.png?v=1731407733&width=900" 
                            alt="Shoe collection showcase" 
                            className='w-full h-auto object-cover' 
                        />
                    </div>
                </div>
            </div>

            {/* banner  */}
            <div className='bg-gradient-to-r from-[#5B4BA6] via-[#8B4C7A] to-[#C1444A] py-6 md:py-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10 px-6 sm:px-10 lg:px-40 text-center md:text-left'>
                <h1 className='text-white font-semibold text-xl  md:text-xl lg:text-2xl max-w-xl'>Discover Our Stores: Your Local Shoe Haven</h1>
                <button className='bg-[#4E4991] px-8 py-3 md:py-4 text-white flex items-center gap-2 hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg uppercase text-xs font-bold tracking-widest'>
                    Find Store
                    <MoveRight className='w-5 h-5' />
                </button>
            </div>
        </>
    )
}

export default Section8