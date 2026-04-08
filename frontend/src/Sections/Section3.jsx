import React, { useState } from 'react';
import { PiShoppingCartSimpleLight, PiEyeLight, PiHeartLight, PiArrowsLeftRightLight } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slices/addToCartSlice';
import { addToWish } from '../Slices/addToWishSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Section3 = () => {
    const [activeTab, setActiveTab] = useState('FEATURED');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state) => state.addToWish.value);
    const handleWishlistClick = (product) => {
        const isEnItemInWishlist = wishlistItems.find((item) => item.id === product.id);

        if (isEnItemInWishlist) {
            navigate('/wishlist');
        } else {
            dispatch(addToWish(product));
        }
    };


    const products = [
        {
            id: 1,
            name: "Classic White Tennis Sneakers",
            brand: "SportyFeet",
            price: "25.00",
            img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720",
            img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540"
        },
        {
            id: 2,
            name: "Waterproof Hiking Boots",
            brand: "TrailGear",
            price: "25.00",
            img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720",
            img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720",
            colors: ['#000000', '#666666', '#000000']
        },
        {
            id: 3,
            name: "Classic Leather Sneakers",
            brand: "UrbanStep",
            price: "21.00",
            img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720",
            img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540"
        },
        {
            id: 4,
            name: "High-Top Canvas Sneakers",
            brand: "TrendyFeet",
            price: "25.00",
            img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720",
            img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540"
        }
    ];

    const tabs = ['FEATURED', 'NEW ARRIVALS', 'BEST SELLER'];

    return (
        <section className="py-12 md:py-20 px-6 md:px-12 lg:px-15">
            <div className="text-center mb-10">
                <p className="text-[10px] md:text-xs tracking-[0.2em] font-medium text-gray-500 uppercase mb-2">
                    THE LATEST TRENDS IN ATHLETIC FOOTWEAR
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 md:mb-10">Sneakers & Kicks</h2>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10 border-b border-gray-100">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-4 text-[10px] md:text-xs font-bold tracking-widest transition-all duration-300 relative uppercase
                                ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                        >
                            {tab}
                            <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-black transition-all duration-300 
                                ${activeTab === tab ? 'opacity-100' : 'opacity-0'}`}></span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7 gap-y-10 md:gap-y-12">
                {products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                        <div className="relative aspect-square mb-4 md:mb-6 overflow-hidden bg-[#F9F9F9]">
                            <img
                                src={product.img1}
                                alt={product.name}
                                className="w-full h-full object-contain p-4 transition-opacity duration-300 lg:group-hover:opacity-0"
                            />
                            <img
                                src={product.img2}
                                alt={product.name}
                                className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100"
                            />
                        </div>

                        <div className="space-y-1 md:space-y-2">
                            {product.colors && (
                                <div className="flex gap-2 mb-2">
                                    {product.colors.map((color, i) => (
                                        <div
                                            key={i}
                                            className="w-3 h-3 rounded-full border border-gray-300 cursor-pointer"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                            )}
                            <p className="text-base md:text-lg text-gray-800 font-medium">${product.price}</p>
                            <h3 className="text-lg md:text-xl text-black lg:group-hover:text-[#AE3F4F] transition-colors leading-tight">
                                {product.name}
                            </h3>
                            <p className="text-lg md:text-xl text-gray-400 font-light">
                                {product.brand}
                            </p>
                        </div>

                        {/* Action Bar - Mobile-first: always visible or slightly faded, Hover on large screens */}
                        <div className="mt-4 md:mt-6 pt-4 border-t border-dotted border-gray-200 flex items-center justify-between opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                            <button className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-wider hover:text-[#AE3F4F] transition-colors"
                                onClick={() => dispatch(addToCart(product))}>
                                <PiShoppingCartSimpleLight className="text-xl md:text-2xl" />
                                ADD TO CART
                            </button>
                            <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-gray-700">
                                <PiEyeLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                <PiHeartLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" onClick={() => handleWishlistClick(product)} />
                                <PiArrowsLeftRightLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section3;
