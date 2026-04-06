import React from 'react'

const Section2 = () => {
    const data = [
        {
            heading: "Trending",
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920",
            title: "Mens Colections",
            button: "Shop Now"
        },
        {
            heading: "Latest",
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920",
            title: "Womens Colections",
            button: "Shop Now"
        },
        {
            heading: "Comfort",
            image: "https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920",
            title: "Kids Collections",
            button: "Shop Now"
        }
    ]
    return (
        <>
            <div className='w-full flex flex-col md:flex-row justify-center py-10 md:py-16 grow gap-5 px-6 md:px-10 lg:px-15'>
                {data.map((item, index) => (
                    <div key={index} className='w-full'>
                        <div className='rounded overflow-hidden relative group'>
                            <img src={item.image} alt="" className='w-full h-auto transition-all duration-4000 group-hover:scale-110'/>
                            <div className='absolute z-10 top-0 left-0 w-full h-full px-6 py-20 md:py-0 md:p-8 lg:p-12 '> 
                                <div className='text-left text-black flex flex-col gap-2 md:gap-3 '>
                                    <p className='text-[10px] md:text-xs uppercase tracking-[0.2em]'>{item.heading}</p>
                                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold md:pr-10 lg:pr-30 leading-tight'>{item.title}</h1>
                                    <button className='text-[#AE3F4F] text-left underline font-semibold mt-2 md:mt-4 hover:text-black duration-300 transition-colors uppercase text-xs tracking-wider'>{item.button}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Section2