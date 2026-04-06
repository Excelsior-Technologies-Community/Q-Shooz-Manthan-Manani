import { MessageSquareText } from 'lucide-react'
import React from 'react'

const Section10 = () => {
    return (
        <>
            <div className='w-full px-15'>
                <div className='py-12'>
                    <p className='tracking-[0.2em] uppercase text-[10px] md:text-xs text-gray-500 font-medium'>From The Blog</p>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl my-3 md:my-6 font-semibold leading-tight text-black'>
                        Recently Our Posts
                    </h1>
                    <p className='text-gray-500'>Sit amet conse ctetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.</p>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='relative group overflow-hidden'>
                        <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=900" alt="" className='group-hover:scale-105 transition-all duration-500 h-full object-cover ' />
                        <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent'>
                            <div className='absolute bottom-0 p-12 text-white'>
                                <div className='flex gap-8 '>
                                    <p>Oct 28 2024</p>
                                    <span className='flex gap-2 items-center text-medium'><MessageSquareText />0 comments</span>
                                </div>
                                <p className='font-semibold text-xl mt-5'>The Future of Footwear: A Look Ahed</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex gap-5 items-center group '>
                            <div className='w-3/9 overflow-hidden '>
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=360" alt="" className='group-hover:scale-110 duration-500' />
                            </div>
                            <div className=''>
                                <div className='flex gap-8 text-gray-500 '>
                                    <p>Oct 28 2024</p>
                                    <span className='flex gap-2 items-center text-medium'><MessageSquareText />0 comments</span>
                                </div>
                                <p className='font-semibold text-xl'>Eco-Friendly Footwear: Sustainable Style</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center group '>
                            <div className='w-3/9 overflow-hidden '>
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=360" alt="" className='group-hover:scale-110 duration-500' />
                            </div>
                            <div className=''>
                                <div className='flex gap-8 text-gray-500 '>
                                    <p>Oct 28 2024</p>
                                    <span className='flex gap-2 items-center text-medium'><MessageSquareText />0 comments</span>
                                </div>
                                <p className='font-semibold text-xl'>The Ultimate Guide to Sneaker Care</p>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center group '>
                            <div className='w-3/9 overflow-hidden '>
                                <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360" alt="" className='group-hover:scale-110 duration-500' />
                            </div>
                            <div className=''>
                                <div className='flex gap-8 text-gray-500 '>
                                    <p>Oct 28 2024</p>
                                    <span className='flex gap-2 items-center text-medium'><MessageSquareText />0 comments</span>
                                </div>
                                <p className='font-semibold text-xl'>How to Style Your Favorite Sneakers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section10