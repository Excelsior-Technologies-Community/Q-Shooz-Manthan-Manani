import React from 'react'

const Section6 = () => {
    return (
        <>
            <div className='bg-[#333333] py-12 md:py-16'>
                <div className='text-center px-6 mb-8 md:mb-12'>
                    <p className='text-white uppercase tracking-[0.2em] text-[10px] md:text-sm font-medium'>Fashion Sneakers</p>
                    <h1 className='text-white text-3xl md:text-5xl font-semibold mt-4 md:mt-5 max-w-3xl mx-auto'>Timeless styles for everyday wear</h1>
                    <p className='text-white/80 mt-4 md:mt-8 text-sm md:text-base'>High-performance footwear for sports and <br className='hidden md:block' /> workouts</p>
                </div>
                <div className='px-6 md:px-15 '>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8'>
                        <div className='relative group overflow-hidden rounded-lg'>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045532&width=1920" alt="" className='w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform' />
                            <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent'>
                                <p className='uppercase tracking-[0.2em] text-white text-[10px] md:text-[12px] font-semibold'>Comfort meets fashion</p>
                                <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold my-3 md:my-5'>Discover Shoes <br />That Looks Great</h1>
                                <button className='underline text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#AE3F4F] transition-colors'>Shop Now</button>
                            </div>
                        </div>
                        <div className='relative group overflow-hidden rounded-lg'>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920" alt="" className='w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform' />
                            <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent'>
                                <p className='uppercase tracking-[0.2em] text-white text-[10px] md:text-[12px] font-semibold'>Elevate Your Look</p>
                                <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold my-3 md:my-5'>Find the perfect pair  <br />of shoes</h1>
                                <button className='underline text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#AE3F4F] transition-colors'>Shop Now</button>
                            </div>
                        </div>
                        <div className='relative group overflow-hidden rounded-lg md:col-span-2 lg:col-span-1'>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920" alt="" className='w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform' />
                            <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent'>
                                <p className='uppercase tracking-[0.2em] text-white text-[10px] md:text-[12px] font-semibold'>Step into Style</p>
                                <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold my-3 md:my-5'>The latest trends in <br />Footware</h1>
                                <button className='underline text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#AE3F4F] transition-colors'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                        <div className='relative group overflow-hidden rounded-lg'>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-4.png?v=1731045517&width=1920" alt=""
                                className='w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform' />
                            <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent '>
                                <p className='uppercase tracking-[0.2em] text-white text-[10px] md:text-[12px] font-semibold'>Shop by Brand</p>
                                <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold my-3 md:my-5'>Find Your Favorite <br />brands and styles</h1>
                                <button className='underline text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#AE3F4F] transition-colors'>Shop Now</button>
                            </div>
                        </div>
                        <div className='relative group overflow-hidden rounded-lg'>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-5.png?v=1731045518&width=1920" alt="" className='w-full h-full object-cover group-hover:scale-110 duration-700 transition-transform' />
                            <div className='absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-12 bg-gradient-to-t from-black/60 to-transparent '>
                                <p className='uppercase tracking-[0.2em] text-white text-[10px] md:text-[12px] font-semibold'>Sale and Clearance</p>
                                <h1 className='text-white text-xl md:text-2xl lg:text-3xl font-semibold my-3 md:my-5'>Shop our latest deals <br />and discounts</h1>
                                <button className='underline text-white text-xs md:text-sm font-bold uppercase tracking-widest hover:text-[#AE3F4F] transition-colors'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section6