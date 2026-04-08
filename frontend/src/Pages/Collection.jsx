import React, { useState } from 'react';
import { PiShoppingCartSimpleLight, PiEyeLight, PiHeartLight, PiArrowsLeftRightLight, PiCaretDownThin, PiFunnelThin, PiListThin, PiSquaresFourThin, PiCaretRightThin } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Slices/addToCartSlice';
import { addToWish } from '../Slices/addToWishSlice';
import { useNavigate } from 'react-router-dom';

const Collection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state) => state.addToWish.value);
    
    const [activeFilter] = useState('Featured');
    const [showSidebar, setShowSidebar] = useState(true);
    const [priceRange, setPriceRange] = useState(142);
    const [expandedFilters, setExpandedFilters] = useState({
        "Collection": true,
        "Availability": false,
        "Price": false,
        "Brand": false,
        "Category": false,
        "Color": false,
        "Material": false,
        "More filters": false,
        "Size": false,
        "Product type": false
    });

    const toggleFilter = (title) => {
        setExpandedFilters(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    const handleWishlistClick = (product) => {
        const isEnItemInWishlist = wishlistItems.find((item) => item.id === product.id);
        if (isEnItemInWishlist) {
            navigate('/wishlist');
        } else {
            dispatch(addToWish(product));
        }
    };

    const categoriesGrid = [
        { name: "Athletic Footwear", img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=360", count: 20 },
        { name: "Boots for Every", img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=360", count: 14 },
        { name: "Luxury Leather", img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=360", count: 16 },
        { name: "Sandals", img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=360", count: 18 },
        { name: "Sneakers Head", img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=360", count: 22 },
    ];

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

    const sidebarFilters = [
        {
            title: "Collection",
            type: "checkbox",
            options: [
                { label: "ADVENTURE READY", count: 90 },
                { label: "Boots for Every Occasion", count: 14 },
                { label: "Luxury Leather Shoes", count: 16 },
                { label: "Sandals & Slides", count: 18 },
                { label: "Sneakers & Kicks", count: 42 }
            ]
        },
        {
            title: "Availability",
            type: "checkbox",
            options: [
                { label: "In stock", count: 71 },
                { label: "Out of stock", count: 19 }
            ]
        },
        {
            title: "Price",
            type: "range",
            range: { min: 0, max: 142 }
        },
        {
            title: "Brand",
            type: "checkbox",
            options: [
                { label: "ADIDAS", count: 2 },
                { label: "BAODASHA", count: 2 },
                { label: "Canvas Sneakers", count: 4 },
                { label: "Comfortable", count: 1 },
                { label: "DR.MARTENS", count: 2 },
                { label: "Duct Feet", count: 2 },
                { label: "Exclusive", count: 2 },
                { label: "Footwear", count: 2 }
            ],
            showMore: true
        },
        {
            title: "Category",
            type: "checkbox",
            options: [
                { label: "Fragrance", count: 5 },
                { label: "Kids Wear", count: 2 },
                { label: "Makeup", count: 1 },
                { label: "Nail Care", count: 3 },
                { label: "Shampoo", count: 5 }
            ]
        },
        {
            title: "Color",
            type: "color",
            options: ["#000000", "#FFFFFF", "#8B4513", "#D2B48C", "#C0C0C0", "#000000", "#3E4A89", "#D9C0A3", "#7D4E32", "#4A1C17", "#B12D1F", "#E63946", "#F1FAEE", "#A8DADC", "#457B9D", "#1D3557"]
        },
        {
            title: "Material",
            type: "checkbox",
            options: [
                { label: "Canvas", count: 13 },
                { label: "Leather", count: 26 },
                { label: "Mesh", count: 18 },
                { label: "Nylon", count: 2 }
            ]
        },
        {
            title: "Men, Mens",
            type: "checkbox",
            options: [
                { label: "Bestseller", count: 8 },
                { label: "Boot Shoes", count: 9 },
                { label: "Boots", count: 7 },
                { label: "Casual", count: 3 },
                { label: "Chelsea", count: 2 },
                { label: "Chuck", count: 4 },
                { label: "Classic", count: 2 },
                { label: "Comfort", count: 2 }
            ],
            showMore: true
        },
        {
            title: "Size",
            type: "size",
            options: ['S', 'M', 'L']
        },
        {
            title: "Product type",
            type: "checkbox",
            options: [
                { label: "Beanie", count: 2 },
                { label: "Boots", count: 1 },
                { label: "Hiking Boots", count: 13 },
                { label: "Leather", count: 2 },
                { label: "Necklace", count: 3 },
                { label: "Pumps", count: 1 },
                { label: "Running Shoes", count: 13 },
                { label: "Sandals", count: 3 }
            ],
            showMore: true
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Main Header Banner */}
            <div className="relative h-[200px] md:h-[400px] w-full flex items-center justify-center overflow-hidden">
                <img 
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1944" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Products Banner"
                />
                <div className="absolute inset-0 bg-black/5" />
                <h1 className="relative text-3xl md:text-5xl font-bold text-white tracking-widest drop-shadow-sm uppercase">
                    Products
                </h1>
            </div>

            <div className="max-w-[1550px] mx-auto px-4 md:px-10 py-10 md:py-16">
                {/* Category Links Horizontal */}
                <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10 pb-8 text-[11px] font-bold tracking-widest text-[#B1B1B1]">
                    {sidebarFilters[0].options.map((cat, idx) => (
                        <div key={idx} className="cursor-pointer hover:text-black transition-colors flex items-center gap-1.5 uppercase">
                            {cat.label} <span className="opacity-60 text-[10px]">({cat.count})</span>
                        </div>
                    ))}
                </div>

                {/* Category Card Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-16">
                    {categoriesGrid.map((cat, idx) => (
                        <div key={idx} className="group relative aspect-[1/1] overflow-hidden cursor-pointer">
                            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center p-4">
                                <h3 className="text-white text-xs md:text-sm font-bold text-center uppercase tracking-[0.2em] px-2 py-1 flex flex-col items-center">
                                    {cat.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sidebar Filters */}
                    <aside className={`w-full lg:w-[320px] shrink-0 ${showSidebar ? 'block' : 'hidden lg:block'}`}>
                        <h2 className="text-3xl font-medium text-black mb-12">Filter:</h2>
                        
                        <div className="border-t border-gray-100">
                            {sidebarFilters.map((filter, idx) => (
                                <div key={idx} className="border-b border-gray-100">
                                    <div 
                                        className="flex items-center justify-between py-6 cursor-pointer group"
                                        onClick={() => toggleFilter(filter.title)}
                                    >
                                        <h4 className="text-[20px] font-medium text-black group-hover:text-gray-600 transition-colors">{filter.title}</h4>
                                        <PiCaretRightThin className={`text-xl transition-transform duration-300 ${expandedFilters[filter.title] ? 'rotate-90' : ''}`} />
                                    </div>

                                    {expandedFilters[filter.title] && (
                                        <div className="pb-8 animate-fadeIn">
                                            {filter.type === 'checkbox' && (
                                                <div className="space-y-4">
                                                    {filter.options.map((opt, i) => (
                                                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                            <input type="checkbox" className="w-[16px] h-[16px] border-gray-300 rounded focus:ring-0 focus:ring-offset-0 accent-black" />
                                                            <span className="text-[15px] text-black transition-colors flex-1">{opt.label}</span>
                                                            {opt.count !== undefined && (
                                                                <span className="text-[14px] text-gray-400">({opt.count})</span>
                                                            )}
                                                        </label>
                                                    ))}
                                                    {filter.showMore && (
                                                        <button className="text-[14px] font-medium text-black underline underline-offset-4 mt-2">Show more</button>
                                                    )}
                                                </div>
                                            )}

                                            {filter.type === 'range' && (
                                                <div className="pt-2">
                                                    <input 
                                                        type="range" 
                                                        min={filter.range.min} 
                                                        max={filter.range.max} 
                                                        value={priceRange} 
                                                        onChange={(e) => setPriceRange(e.target.value)}
                                                        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black mb-6" 
                                                    />
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex-1 flex items-center gap-2 border border-gray-200 p-3">
                                                            <span className="text-gray-400">₹</span>
                                                            <input type="text" value="0" readOnly className="w-full text-sm focus:outline-none" />
                                                        </div>
                                                        <span className="text-gray-300">-</span>
                                                        <div className="flex-1 flex items-center gap-2 border border-gray-200 p-3">
                                                            <span className="text-gray-400">₹</span>
                                                            <input type="text" value={priceRange} readOnly className="w-full text-sm focus:outline-none" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {filter.type === 'color' && (
                                                <div className="flex flex-wrap gap-3">
                                                    {filter.options.map((color, i) => (
                                                        <div 
                                                            key={i} 
                                                            className="w-7 h-7 rounded-full border border-gray-100 cursor-pointer p-0.5 hover:border-black transition-all"
                                                        >
                                                            <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {filter.type === 'size' && (
                                                <div className="flex flex-wrap gap-3">
                                                    {filter.options.map((size) => (
                                                        <button key={size} className="w-12 h-12 border border-gray-100 text-sm font-medium hover:border-black hover:bg-black hover:text-white transition-all uppercase">{size}</button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                         </div>
                    </aside>

                    {/* Product Grid Area */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center justify-between gap-6 mb-8 pb-4">
                            <div className="flex items-center gap-6">
                                <button className="lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-gray-200 px-5 py-2 rounded-full" onClick={() => setShowSidebar(!showSidebar)}>
                                    <PiFunnelThin className="text-lg" />
                                    Filter
                                </button>
                                <div className="hidden md:flex items-center gap-4 text-gray-800">
                                    <PiSquaresFourThin className="text-xl cursor-pointer" />
                                    <PiListThin className="text-xl cursor-pointer opacity-20" />
                                </div>
                                <p className="text-[11px] text-gray-500 font-bold tracking-widest uppercase">
                                    {products.length} Products
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B1B1B1]">Sort by:</span>
                                <div className="flex items-center gap-1 cursor-pointer group">
                                    <span className="text-[11px] font-bold uppercase tracking-widest">{activeFilter}</span>
                                    <PiCaretDownThin className="text-xs group-hover:translate-y-0.5 transition-transform" />
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-16">
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
                                        <h3 className="text-lg md:text-xl text-black lg:group-hover:text-[#AE3F4F] transition-colors leading-tight font-medium">
                                            {product.name}
                                        </h3>
                                        <p className="text-lg md:text-xl text-gray-400 font-light">
                                            {product.brand}
                                        </p>
                                    </div>

                                    {/* Action Bar - Mobile-first: always visible or slightly faded, Hover on large screens */}
                                    <div className="mt-4 md:mt-6 pt-4 border-t border-dotted border-gray-200 flex items-center justify-between opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                                        <button className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-wider hover:text-[#AE3F4F] transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                dispatch(addToCart(product));
                                            }}>
                                            <PiShoppingCartSimpleLight className="text-xl md:text-2xl" />
                                            ADD TO CART
                                        </button>
                                        <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-gray-700">
                                            <PiEyeLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                            <PiHeartLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" onClick={(e) => {
                                                e.stopPropagation();
                                                handleWishlistClick(product);
                                            }} />
                                            <PiArrowsLeftRightLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Placeholder */}
                        <div className="mt-20 flex justify-center items-center gap-2">
                            <div className="w-8 h-8 bg-[#AE3F4F] text-white flex items-center justify-center font-bold text-xs cursor-pointer">1</div>
                            <div className="w-8 h-8 flex items-center justify-center font-bold text-xs cursor-pointer hover:bg-gray-100 transition-colors">2</div>
                            <div className="w-8 h-8 flex items-center justify-center font-bold text-gray-400 cursor-pointer">
                                <PiCaretDownThin className="-rotate-90 text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collection;