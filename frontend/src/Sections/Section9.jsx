import React from 'react'

const Section9 = () => {
    return (
        <>
            <div className='py-12 md:py-20 px-6 sm:px-10 lg:px-15 bg-[#f5f5f5]'>
                <div className='text-center text-black max-w-4xl mx-auto mb-12 md:mb-20'>
                    <h1 className='text-3xl md:text-5xl font-semibold leading-tight'>Customer Feedback Highlights</h1>
                    <p className='text-gray-500 mt-4 text-sm md:text-base max-w-xl mx-auto font-medium'>Laoreet ridiculus congue magna malesuada <br className='hidden md:block' /> phasellus condimentum taciti mus primis.</p> 
                </div>

                {/* Logo Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-10 max-w-full mx-auto'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <div 
                            key={num} 
                            className='group flex items-center justify-center bg-gray-50/50  hover:bg-white transition-all duration-500 border border-transparent hover:border-gray-100 cursor-pointer'
                        >
                            <img 
                                src={`https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-${num}.png?v=1731499378&width=360`} 
                                alt={`Brand Logo ${num}`} 
                                className='w-[180px] md:w-[240px] h-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700' 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section9

