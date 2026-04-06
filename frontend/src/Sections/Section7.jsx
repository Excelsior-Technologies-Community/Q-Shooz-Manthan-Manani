import React from 'react'

const Section7 = () => {
    return (
        <>
            <div className='w-full py-12 md:py-20 px-6 md:px-12 lg:px-15'>
                <div className='text-center text-black max-w-4xl mx-auto mb-16'>
                    <p className='uppercase text-gray-500 text-[10px] md:text-[14px] tracking-[0.2em] font-medium'>Season's End Sale</p>
                    <h1 className='text-3xl md:text-5xl font-semibold mt-4 md:mt-5 leading-tight'>Huge discounts on last season's styles</h1>
                    <p className='text-gray-500 mt-4 text-sm md:text-base'>Himenaeos nascetur tristique consequat mus ad. <br className='hidden md:block' /> Accumsan fringilla in laoreet id bibendum et.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-full mx-auto'>
                    {[1, 2, 3].map((col) => (
                        <div key={col} className='flex flex-col gap-8 '>
                            <div className='flex items-center gap-6 group cursor-pointer border-b border-gray-200'>
                                <div className='w-24 h-24 bg-[#F9F9F9] flex-shrink-0 overflow-hidden'>
                                    <img 
                                        src="https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" 
                                        alt="Classic White Tennis Sneakers" 
                                        className='w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500' 
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-lg font-medium text-black group-hover:text-[#AE3F4F] transition-colors'>Classic White Tennis Sneakers</h3>
                                    <p className='text-gray-600 font-semibold'>$25.00</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-6 group cursor-pointer border-b border-gray-200'>
                                <div className='w-24 h-24 bg-[#F9F9F9] flex-shrink-0 overflow-hidden'>
                                    <img 
                                        src="https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" 
                                        alt="Waterproof Hiking Boots" 
                                        className='w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500' 
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-lg font-medium text-black group-hover:text-[#AE3F4F] transition-colors'>Waterproof Hiking Boots</h3>
                                    <p className='text-gray-600 font-semibold'>$25.00</p>
                                </div>
                            </div>

                            <div className='flex items-center gap-6 group cursor-pointer border-b border-gray-200'>
                                <div className='w-24 h-24 bg-[#F9F9F9] flex-shrink-0 overflow-hidden'>
                                    <img 
                                        src="https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" 
                                        alt="Classic Leather Sneakers" 
                                        className='w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-500' 
                                    />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-lg font-medium text-black group-hover:text-[#AE3F4F] transition-colors'>Classic Leather Sneakers</h3>
                                    <p className='text-gray-600 font-semibold'>$21.00</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section7