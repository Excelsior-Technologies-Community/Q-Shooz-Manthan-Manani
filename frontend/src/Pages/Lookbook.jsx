import React from 'react';
import { ArrowLeftRight, Heart, Search, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section3 from '../Sections/Section3';

// Images Provided
const heroImg = "https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695";

const season1 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1920";
const season2 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-6.png?v=1731657936&width=1920";

const timelessImg = "https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900";

const collAthletic = "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=900";
const collBoots = "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=900";
const collLuxury = "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=900";

const feat1 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-3.png?v=1731657937&width=1920";
const feat2 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1920";
const feat3 = "https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=1920";

const Lookbook = () => {
    return (
        <div className="w-full font-sans text-gray-900">
            {/* Breadcrumbs */}
            <div className="bg-white py-4 px-6 md:px-15 text-[13.5px] text-gray-500 border-b border-gray-100">
                <Link to="/" className="text-[#FDB813]">Home</Link> / <span className="text-gray-900 font-medium">Lookbook</span>
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[350px] md:h-[500px]">
                <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
                    <p className="text-white/90 text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">Eco-Friendly, Modern Design</p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Your Everyday Fashion, Runway Ready</h1>
                    <p className="text-white/80 text-sm md:text-base max-w-2xl px-4">
                        Discover the art of fashion from essential basics to striking silhouettes, our collections are meticulously designed to empower your unique.
                    </p>
                </div>
            </div>

            {/* Chase the Seasons */}
            <div className="py-24 px-6 md:px-15 max-w-full mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Chase the Seasons in Style</h2>
                <p className="text-gray-500 text-[15px] mb-14 max-w-lg mx-auto leading-relaxed">Embrace the return of '90s luxury fashion with our exclusive chunky clean style. From essential whites to statement pieces.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="flex flex-col items-center">
                        <img src={season1} alt="Express Your Authenticity" className="w-full aspect-[4/5] object-cover mb-6 rounded-sm shadow-sm" />
                        <h3 className="text-xl font-bold mb-2 text-black">Express Your Authenticity</h3>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed mb-4">Your individual charm starts with your everyday fashion choices.</p>
                        <Link to="#" className="text-[12.5px] font-bold tracking-widest text-[#AE3F4F] border-b-2 border-[#AE3F4F] pb-1 uppercase hover:text-black hover:border-black transition-colors">Shop Now</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={season2} alt="Seasonal Chic Unveiled" className="w-full aspect-[4/5] object-cover mb-6 rounded-sm shadow-sm" />
                        <h3 className="text-xl font-bold mb-2 text-black">Seasonal Chic Unveiled</h3>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed mb-4">Your individual charm starts with your everyday fashion choices.</p>
                        <Link to="#" className="text-[12.5px] font-bold tracking-widest text-[#AE3F4F] border-b-2 border-[#AE3F4F] pb-1 uppercase hover:text-black hover:border-black transition-colors">Shop Now</Link>
                    </div>
                </div>
            </div>

            {/* Middle Banner */}
            <div className="bg-[#f7f5f0] py-20 px-6 text-center shadow-inner">
                <p className="text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Eco-Friendly, Modern Design</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Style Meets Comfort in Every Outfit</h2>
                <p className="text-gray-500 text-[15px] max-w-2xl mx-auto leading-relaxed mt-4">Embrace the union of style and comfort effortlessly. Discover confidence in our meticulously curated ensembles today.</p>
            </div>

            {/* Timeless Elegance Product Grid */}
            <div >
                <Section3 />
            </div>

            {/* Timeless Pieces Banner Split */}
            <div className="max-w-full mx-auto h-[800px] p-15 relative overflow-hidden relative">
                <div className='flex flex-wrap'>
                    <div className='w-1/2'>
                        <img src={timelessImg} alt="" className='h-full w-full' />
                    </div>
                    <div className="md:w-[52%] bg-[#FAF8F5] flex flex-col justify-center items-center text-center py-20 px-10 lg:px-20 shadow-xl z-20 -ml-0 md:-ml-8">
                        <p className="text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Eco-Friendly, Modern Design</p>
                        <h2 className="text-3xl md:text-[36px] font-bold mb-6 leading-tight text-black">Timeless Pieces For Every Occasion</h2>
                        <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-sm">
                            The future sample of a request change might give his past to turn through its position in respect to whether a strategy is popular than weak.
                        </p>
                        <button className="bg-[#AE3F4F] text-white px-10 py-3.5 text-[13px] font-bold tracking-widest uppercase hover:bg-black transition-colors rounded-sm shadow-md">
                            Shop Now
                        </button>
                    </div>                    
            </div>
            <div className='bg-red-300 w-[30%] h-full absolute -z-10 top-0 left-0' />
        </div>

            

            {/* Our Collections */ }
    <div className="pb-24 pt-10 max-w-[1600px] mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black">Our Collections</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Tall */}
            <div className="relative group overflow-hidden cursor-pointer h-[500px] md:h-[700px] rounded-sm shadow-md">
                <img src={collAthletic} alt="Athletic Footwear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                    <h3 className="text-white text-3xl md:text-4xl font-bold bg-transparent px-8 py-3 tracking-wide">
                        Athletic Footwear
                    </h3>
                </div>
            </div>
            {/* Right Stacked */}
            <div className="grid grid-rows-2 gap-6 h-[500px] md:h-[700px]">
                <div className="relative group overflow-hidden cursor-pointer rounded-sm shadow-md">
                    <img src={collBoots} alt="Boots For Every Occasion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center">
                            Boots For Every <br />Occasion
                        </h3>
                    </div>
                </div>
                <div className="relative group overflow-hidden cursor-pointer rounded-sm shadow-md">
                    <img src={collLuxury} alt="Luxury Leather Shoes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide text-center">
                            Luxury Leather<br />Shoes
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Best Seller */ }
    <div >
        <Section3 />
    </div>

    {/* Featured Picks */ }
    <div className="py-24 px-6 md:px-15 max-w-full mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-5 text-black">Featured Picks of the Week</h2>
        <p className="text-gray-500 text-[15px] mb-14 max-w-md mx-auto leading-relaxed">Discover the latest trends and styles that we've hand-picked just for you.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm shadow-sm">
                    <img src={feat1} alt="Featured 1" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Featured Edition</h4>
                <h3 className="font-bold text-[22px] mb-3 group-hover:text-[#AE3F4F] transition-colors text-black">Urban Athletics</h3>
                <Link to="#" className="text-[13px] font-bold tracking-widest text-[#AE3F4F] border-b-[2px] border-[#AE3F4F] pb-1 uppercase hover:text-black hover:border-black transition-colors">Shop Now</Link>
            </div>

            <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm shadow-sm">
                    <img src={feat2} alt="Featured 2" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">New Arrival</h4>
                <h3 className="font-bold text-[22px] mb-3 group-hover:text-[#AE3F4F] transition-colors text-black">Coastal Run Sneaks</h3>
                <Link to="#" className="text-[13px] font-bold tracking-widest text-[#AE3F4F] border-b-[2px] border-[#AE3F4F] pb-1 uppercase hover:text-black hover:border-black transition-colors">Shop Now</Link>
            </div>

            <div className="group cursor-pointer">
                <div className="overflow-hidden mb-6 rounded-sm shadow-sm">
                    <img src={feat3} alt="Featured 3" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Trending Choice</h4>
                <h3 className="font-bold text-[22px] mb-3 group-hover:text-[#AE3F4F] transition-colors text-black">Elevated Basics</h3>
                <Link to="#" className="text-[13px] font-bold tracking-widest text-[#AE3F4F] border-b-[2px] border-[#AE3F4F] pb-1 uppercase hover:text-black hover:border-black transition-colors">Shop Now</Link>
            </div>
        </div>
    </div>

        </div >
    );
};

export default Lookbook;
