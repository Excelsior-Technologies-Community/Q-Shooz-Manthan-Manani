import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const Section5 = () => {
    const data = [
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540",
            title: "Athletic Footware"
        },
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540",
            title: "Luxury Leather Shoes"
        },
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=540",
            title: "Sustainable Footware"
        },
        {
            image: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=540",
            title: "Scandles & Slides"
        }

    ]
    return (
        <>
            <div className='py-12 md:py-16'>
                <div className='text-center px-6 lg:px-15 mb-8 md:mb-12'>
                    <p className='uppercase text-[10px] md:text-xs tracking-[0.2em] font-medium text-gray-500 mb-4 md:mb-6'>Stylish and comfortable for every season</p>
                    <h2 className='text-3xl md:text-5xl font-semibold text-black mb-4 md:mb-8'>Boots & Booties</h2>
                    <p className='text-sm md:text-base text-gray-500 max-w-xl mx-auto'>Check out our collection of the top New Products <br className='hidden md:block' />that encourage conversion.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 px-6 lg:px-15 pb-10'>
                    {data.map((item, index) => (
                        <div key={index} className='w-full '>
                            <div className='relative group overflow-hidden h-[300px] md:h-[350px]'>
                                <img src={item.image} alt={item.title} className='w-full h-full transition-transform duration-700 group-hover:scale-110' />
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: 'white',
                                            color: 'black',
                                            padding: {xs: '6px 12px', md: '8px 20px'},
                                            fontSize: {xs: '10px', md: '12px'},
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                backgroundColor: '#AE3F4F',
                                                color: 'white',
                                            },
                                            '.group:hover &': {
                                                backgroundColor: '#AE3F4F',
                                                color: 'white',
                                            },
                                        }}
                                        className="absolute bottom-6 md:bottom-18 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300"
                                    >
                                        {item.title}
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Section5