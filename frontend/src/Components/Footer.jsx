import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Plus, Minus } from 'lucide-react';

const Footer = () => {
    const [openSection, setOpenSection] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }

            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (scrollHeight > 0) {
                const progress = (currentScroll / scrollHeight) * 100;
                setScrollProgress(progress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerSections = [
        {
            title: 'INFOMATION',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Returns Policy', path: '/returns' },
                { name: 'Shipping Policy', path: '/shipping' },
                { name: 'Terms & Conditions', path: '/terms' },
            ]
        },
        {
            title: 'QUICK LINKS',
            links: [
                { name: 'My Account', path: '/account' },
                { name: 'My Cart', path: '/cart' },
                { name: 'Size Chart', path: '/size-chart' },
                { name: 'Wishlist', path: '/wishlist' },
                { name: 'Gift Card', path: '/gift-card' },
            ]
        },
        {
            title: 'CATEGORIES',
            links: [
                { name: 'Athletic Footwear', path: '/shop' },
                { name: 'Boots for Every Occasion', path: '/shop' },
                { name: 'Luxury Leather Shoes', path: '/shop' },
                { name: 'Sandals & Slides', path: '/shop' },
                { name: 'Sneakerhead\'s Haven', path: '/shop' },
            ]
        },
        {
            title: 'SUPPORT',
            links: [
                { name: 'Contact Us', path: '/contact' },
                { name: 'Newsletter', path: '/newsletter' },
                { name: 'Gift Cards', path: '/gift-cards' },
                { name: 'Sign In', path: '/login' },
                { name: 'My Account', path: '/account' },
            ]
        }
    ];

    return (
        <footer className="w-full font-sans bg-[#ebebe3] relative mt-40 md:mt-60">
            {/* Newsletter Section */}
            <div className="absolute container left-1/2 -translate-x-1/2 px-6 sm:px-10 lg:px-15 -top-32 md:-top-40 z-10 ">
                <div className=" border border-black flex flex-col lg:flex-row w-full overflow-hidden shadow-xl ">
                    {/* Left Side: Subscribe Content */}
                    <div className="bg-[#bc4b5a] lg:w-1/2 p-8 md:p-16 flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
                            SUBSCRIBE TO OUR NEWS <br className="hidden md:block" />
                            ARTICALS
                        </h2>
                        <div className="flex w-full max-w-md bg-white p-1 mx-auto lg:mx-0">
                            <input 
                                type="email" 
                                placeholder="Your email" 
                                className="flex-grow px-4 py-2 md:py-3 outline-none text-gray-700 text-sm"
                            />
                            <button className="bg-black text-white px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors ">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                    {/* Right Side: Image */}
                    <div className="bg-white lg:w-1/2 min-h-[200px] md:min-h-[300px]">
                        <img 
                            src="https://qx-shooz.myshopify.com/cdn/shop/files/newslatter-image.jpg?v=1731408076&width=1920" 
                            alt="Sneaker Newsletter" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Main Footer Links */}
            <div className="container mx-auto px-6 sm:px-10 lg:px-14 pt-60 md:pt-80 pb-20">
                {/* Desktop Grid View */}
                <div className="hidden lg:grid grid-cols-5 gap-8">
                    {footerSections.slice(0, 2).map((section) => (
                        <div key={section.title} className="text-center">
                            <h4 className="text-[20px] font-bold uppercase tracking-widest mb-8 text-black">{section.title}</h4>
                            <ul className="space-y-4 text-[16px] text-gray-600">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-[#bc4b5a] transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Central Logo Column */}
                    <div className="flex flex-col items-center text-center -mt-2">
                        <Link to="/">
                            <img 
                                src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" 
                                alt="Shooz Logo" 
                                className="h-8 mb-8" 
                            />
                        </Link>
                        <div className="space-y-3 text-[16px] text-gray-600">
                            <p>T: + (08) 9055 0269</p>
                            <p>E: example@example.com</p>
                            <p className="max-w-[220px] mx-auto">50 Porana Place, West Casuarinas, Western Australia, Australia.</p>
                        </div>
                    </div>

                    {footerSections.slice(2).map((section) => (
                        <div key={section.title} className="text-center">
                            <h4 className="text-[20px] font-bold uppercase tracking-widest mb-8 text-black">{section.title}</h4>
                            <ul className="space-y-4 text-[16px] text-gray-600">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link to={link.path} className="hover:text-[#bc4b5a] transition-colors">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Mobile Accordion View */}
                <div className="lg:hidden flex flex-col space-y-2 mt-15">
                    {footerSections.slice(0, 2).map((section) => (
                        <div key={section.title} className="border-b border-black/10">
                            <button 
                                onClick={() => toggleSection(section.title)}
                                className="w-full py-4 flex justify-between items-center text-[18px] font-bold uppercase tracking-widest text-black"
                            >
                                <span>{section.title}</span>
                                {openSection === section.title ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSection === section.title ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                                <ul className="space-y-4 text-[16px] text-gray-900 text-left">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} className="hover:text-[#bc4b5a] transition-colors">{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <div className="flex flex-col items-center text-center py-10 border-b border-black/10">
                        <Link to="/">
                            <img 
                                src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360" 
                                alt="Shooz Logo" 
                                className="h-8 mb-6" 
                            />
                        </Link>
                        <div className="space-y-2 text-[16px] text-gray-900">
                            <p>T: + (08) 9055 0269</p>
                            <p>E: example@example.com</p>
                            <p className="max-w-[250px] mx-auto">50 Porana Place, West Casuarinas, Western Australia, Australia.</p>
                        </div>
                    </div>

                    {footerSections.slice(2).map((section) => (
                        <div key={section.title} className="border-b border-black/10">
                            <button 
                                onClick={() => toggleSection(section.title)}
                                className="w-full py-4 flex justify-between items-center text-[18px] font-bold uppercase tracking-widest text-black"
                            >
                                <span>{section.title}</span>
                                {openSection === section.title ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openSection === section.title ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                                <ul className="space-y-4 text-[16px] text-gray-900 text-left">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link to={link.path} className="hover:text-[#bc4b5a] transition-colors">{link.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-300 py-8 bg-[#ebebe3]">
                <div className="container mx-auto px-6 sm:px-10 lg:px-14 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[14px] md:text-[18px] text-gray-600 text-center md:text-left">
                      Copyright © 2024 <span className="text-[#bc4b5a] cursor-pointer">Shooz</span>. All rights reserved
                    </p>
                    <div className="flex items-center flex-wrap justify-center gap-3 grayscale opacity-70">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/074/162/453/small/american-express-logo-high-quality-free-vector.jpg" className="h-6" />
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968500.png" alt="payment" className="h-6" />
                        <img src="https://www.pymnts.com/wp-content/uploads/2014/03/Discover-logo-e1416429693676.jpg" alt="payment" className="h-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg" alt="payment" className="h-6" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnq3OHoIhFhnPeKl5Knl6J-I0_ZXfuIJcGog&s" alt="payment" className="h-6" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDHuPvNpIxTh6rDsGBiOm_D1cjNd_il7xLrA&s" alt="payment" className="h-6" />
                    </div>
                </div>
            </div>

            {/* Scroll to Top */}
            {showScrollTop && (
                <button 
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all z-50 group active:scale-95"
                >
                    <svg className="absolute w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 48 48">
                        {/* Background track */}
                        <circle
                            cx="24"
                            cy="24"
                            r="22"
                            stroke="#f3f4f6"
                            strokeWidth="2"
                            fill="none"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="24"
                            cy="24"
                            r="22"
                            stroke="#bc4b5a"
                            strokeWidth="2.5"
                            fill="none"
                            strokeDasharray={22 * 2 * Math.PI}
                            strokeDashoffset={22 * 2 * Math.PI - (scrollProgress / 100) * (22 * 2 * Math.PI)}
                            strokeLinecap="round"
                            className="transition-all duration-150 ease-out"
                        />
                    </svg>
                    <ChevronUp size={20} className="text-gray-600 relative z-10" />
                </button>
            )}
        </footer>
    );
};

export default Footer;