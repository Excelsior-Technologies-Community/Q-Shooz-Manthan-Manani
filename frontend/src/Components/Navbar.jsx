import React, { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import authService from '../services/auth';
import { PiArrowsLeftRightLight, PiEyeLight, PiHeartLight, PiShoppingCartSimpleLight } from 'react-icons/pi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { status, userData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        authService.logout();
        dispatch(logout());
        navigate('/login');
    };

    const navLinks = [
        { name: 'Home', path: '/', badge: null },
        { name: 'Shop', path: '#', badge: null, hasDropdown: true },
        { name: 'Product', path: '#', badge: null, hasDropdown: true },
        { name: 'Blog', path: '#', badge: null, hasDropdown: true },
        { name: 'Pages', path: '#', badge: null, hasDropdown: true },
        { name: 'Buy Now', path: '/buy', badge: 'Sale' },
    ];

    return (
        <header className={`w-full font-sans sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
            {/* Top Banner Ticker */}
            <div className={`w-full bg-gradient-to-r from-[#5B4BA6] via-[#8B4C7A] to-[#C1444A] text-white text-[9px] sm:text-[11px] md:text-[13px] font-medium overflow-hidden flex items-center relative transition-all duration-400 ease-in-out ${scrolled ? 'h-0 py-0 opacity-0' : 'h-10 py-2.5 opacity-100'}`}>
                <div className="flex animate-marquee whitespace-nowrap items-center h-full">
                    <div className="flex items-center gap-12 sm:gap-24 px-4">
                        <span className="flex items-center">
                            Get 15% off your first purchase when you sign up for our newsletter.
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                        <span className="flex items-center">
                            Enjoy 20% off your entire order with the code <b className="ml-1 tracking-wider">SHOEFRESH20</b>.
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                        <span className="flex items-center">
                            Free Shipping on all orders over $99!
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                    </div>
                    {/* Duplicate set for seamless looping */}
                    <div className="flex items-center gap-12 sm:gap-24 px-4" aria-hidden="true">
                        <span className="flex items-center">
                            Get 15% off your first purchase when you sign up for our newsletter.
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                        <span className="flex items-center">
                            Enjoy 20% off your entire order with the code <b className="ml-1 tracking-wider">SHOEFRESH20</b>.
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                        <span className="flex items-center">
                            Free Shipping on all orders over $99!
                            <button className="underline hover:text-gray-200 ml-2 hidden xs:inline opacity-80">Dismiss</button>
                        </span>
                    </div>
                </div>
            </div>

            {/* Middle Bar - Hidden on extra small mobile */}
            <div className="bg-[#f8f8f8] border-b border-gray-200 text-[#555] text-[10px] md:text-[12px] py-2 px-6 md:px-14 flex justify-between items-center overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="hidden sm:block">One Day Delivery Available</div>
                <div className="flex items-center space-x-4 md:space-x-6 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="flex items-center space-x-1 cursor-pointer hover:text-black transition-colors">
                        {status ? (
                            <>
                                <span className="font-semibold text-green-600">Hi, {userData?.name || "User"}</span>
                                <span className="px-1 text-gray-400">|</span>
                                <span onClick={handleLogout} className="hover:text-red-500 cursor-pointer">Logout</span>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <span className="px-1 text-gray-400">/</span>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-5 border-l border-gray-300 pl-4 md:pl-6">
                        <FaFacebookF size={10} className="cursor-pointer hover:text-black transition-colors" />
                        <FaTwitter size={10} className="cursor-pointer hover:text-black transition-colors" />
                        <FaInstagram size={11} className="cursor-pointer hover:text-black transition-colors" />
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <div className="bg-white py-4 md:py-8 px-6 md:px-14 flex justify-between items-center relative z-20 border-b border-gray-100">
                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2 -ml-2 text-gray-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Logo */}
                <Link to="/" className="flex items-center absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                    <img
                        src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360"
                        alt="Shooz Logo"
                        className="h-[18px] md:h-[24px]"
                    />
                </Link>

                {/* Desktop Links */}
                <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[15px] font-medium text-gray-900 tracking-wide">
                    {navLinks.map((link) => (
                        <div key={link.name} className={`group py-6 -my-6 flex items-center ${['Shop', 'Product', 'Blog'].includes(link.name) ? 'static' : 'relative'}`}>
                            <Link
                                to={link.path}
                                className={`flex items-center transition-colors group-hover:text-[#bc4b5a] relative ${link.name === 'Home' ? 'text-[#bc4b5a]' : ''}`}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="ml-1 text-gray-400 group-hover:text-[#bc4b5a] transition-colors" />}
                                {link.name === 'Home' && <span className="absolute -bottom-1.5 w-full h-[1.5px] bg-[#bc4b5a]"></span>}
                                {['Shop', 'Product', 'Blog', 'Pages'].includes(link.name) && <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-[#bc4b5a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>}
                                {link.badge && (
                                    <span className="absolute -top-3.5 -right-6 bg-[#2ecc71] text-white text-[9px] font-bold px-[5px] py-[2px] rounded inline-block leading-none">{link.badge}</span>
                                )}
                            </Link>

                            {/* Mega Menu for Shop */}
                            {link.name === 'Shop' && (
                                <div className="absolute left-0 top-[100%] w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-100 cursor-default">
                                    <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-10 flex gap-8">
                                        {/* Layout Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Layout</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    '1. Filter Sidebar', '2. Filter Top', '3. Filter Drawer',
                                                    '4. Without Filter', '5. Collection - 2 columns',
                                                    '6. Collection - 3 columns', '7. Collection - 4 columns'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Features Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Features</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Banner Image', 'Banner No Image', 'Banner Split',
                                                    'Collection list', 'Sub Collection', 'Pagination',
                                                    'Infinity', 'Load More'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Hover Style Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Hover Style</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Hover Style 1', 'Hover Style 2', 'Hover Style 3',
                                                    'Hover Style 4', 'Hover Style 5', 'Hover Style 6',
                                                    'Hover Style 7', 'Hover Style 8'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Images Column */}
                                        <div className="flex-[2] flex gap-6">
                                            <div className="flex-1 group/img cursor-pointer">
                                                <div className="overflow-hidden mb-4 bg-gray-100">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                        alt="Athletic Footwear"
                                                        className="w-full h-[280px] object-cover group-hover/img:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h4 className="font-bold text-center text-[16px] text-gray-900 group-hover/img:text-[#bc4b5a] transition-colors">Athletic Footwear</h4>
                                                <p className="text-center text-[#888] text-[13px] mt-1.5">8 products</p>
                                            </div>
                                            <div className="flex-1 group/img cursor-pointer">
                                                <div className="overflow-hidden mb-4 bg-gray-100">
                                                    <img
                                                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                        alt="Boots for Every Occasion"
                                                        className="w-full h-[280px] object-cover group-hover/img:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <h4 className="font-bold text-center text-[16px] text-gray-900 group-hover/img:text-[#bc4b5a] transition-colors">Boots for Every Occasion</h4>
                                                <p className="text-center text-[#888] text-[13px] mt-1.5">8 products</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mega Menu for Product */}
                            {link.name === 'Product' && (
                                <div className="absolute left-0 top-[100%] w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-100 cursor-default">
                                    <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-10 flex gap-8">
                                        {/* Product Layouts */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Product Layouts</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    '1. Thumbnails - bottom', '2. Thumbnails - left', '3. Thumbnails - right',
                                                    '4. Without Thumbnails', '5. List - stacked', '6. List - grid',
                                                    '7. Collage - style 1', '8. Collage - style 2'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Product Type */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Product Type</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Simple Product', 'Variable Product', 'With Video', 'Sold Out - Coming'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* List Featured 1 */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">List Featured 1</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Sticky ATC', 'Frequently Bought Together', 'Count Down',
                                                    'Cross Selling', 'Upsell Popup', 'Low Stock Alert', 'Pickup Store'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* List Featured 2 */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">List Featured 2</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Dropdown Variant', 'Swatch Variant Color', 'Swatch Variant Image',
                                                    'Variant Image Square', 'Size Guide', 'Description Accordion', 'Description Tab Center'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Featured Product Image */}
                                        <div className="group/one cursor-pointer">
                                            <div className="relative aspect-square mb-4 md:mb-6 overflow-hidden bg-[#F9F9F9]">
                                                <img
                                                    src="https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=540"
                                                    alt=""
                                                    className="w-60 h-66 object-contain p-4 transition-opacity duration-300 lg:group-hover/one:opacity-0"
                                                />
                                                <img
                                                    src="https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=360"
                                                    alt=""
                                                    className="absolute inset-0 w-60 h-66 object-contain p-4 opacity-0 transition-opacity duration-300 lg:group-hover/one:opacity-100"
                                                />
                                            </div>

                                            <div className="space-y-1 md:space-y-2">

                                                <div className="flex gap-2 mb-2">

                                                    <div
                                                        className="w-3 h-3 rounded-full border border-gray-300 cursor-pointer"
                                                    />
                                                </div>
                                                <p className="text-base md:text-lg text-gray-800 font-medium"></p>
                                                <h3 className="text-lg md:text-xl text-black lg:group-hover/one:text-[#AE3F4F] transition-colors leading-tight">
                                                </h3>
                                                <p className="text-lg md:text-xl text-gray-400 font-light">
                                                </p>
                                            </div>

                                            {/* Action Bar - Mobile-first: always visible or slightly faded, Hover on large screens */}
                                            <div className="mt-4 md:mt-6 pt-4 border-t border-dotted border-gray-200 flex items-center justify-between opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 lg:group-hover/one:opacity-100 lg:group-hover/one:translate-y-0 transition-all duration-300">
                                                <button className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-wider hover:text-[#AE3F4F] transition-colors">
                                                    <PiShoppingCartSimpleLight className="text-xl md:text-2xl" />
                                                    ADD TO CART
                                                </button>
                                                <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-gray-700">
                                                    <PiEyeLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                                    <PiHeartLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                                    <PiArrowsLeftRightLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Mega Menu for Blog */}
                            {link.name === 'Blog' && (
                                <div className="absolute left-0 top-[100%] w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-100 cursor-default">
                                    <div className="max-w-[1400px] mx-auto px-6 md:px-14 py-10 flex gap-8">
                                        {/* List Layout Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">List Layout</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'List Left Sidebar', 'List Right Sidebar', 'List Item Basic',
                                                    'List Item Overlay', 'List Item Box', 'List Item Classic',
                                                    'List Item Classic Box'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        {/* Grid Layout Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Grid Layout</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Grid Left Sidebar', 'Grid Right Sidebar', 'Grid Item Basic',
                                                    'Grid Item Overlay', 'Grid Item Box', 'Grid Item Classic'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Article Column */}
                                        <div className="flex-1">
                                            <h3 className="font-bold text-[15px] mb-6 text-gray-900 tracking-wide">Article</h3>
                                            <ul className="space-y-4 text-[14px] text-gray-500">
                                                {[
                                                    'Title in image', 'Title after image', 'Title before image',
                                                    'Left Sidebar', 'Right Sidebar', 'Title Center', 'Article Video'
                                                ].map((item, i) => (
                                                    <li key={i}><Link to="#" className="hover:text-[#bc4b5a] hover:translate-x-1 inline-block transition-all">{item}</Link></li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Featured Article Image/Card */}
                                        <div className="flex-[2] pl-8">
                                            <div className="group/article cursor-pointer">
                                                <div className="overflow-hidden mb-6 bg-gray-100 rounded-sm">
                                                    <img 
                                                        src="https://qx-shooz.myshopify.com/cdn/shop/files/filler1.png?v=1731501348&width=540" 
                                                        alt="Article Preview" 
                                                        className="w-full object-cover group-hover/article:scale-105 transition-transform duration-700" 
                                                    />
                                                </div>
                                                <h4 className="font-bold text-[20px] text-gray-900 group-hover/article:text-[#bc4b5a] transition-colors leading-tight mb-3">Enjoy a 50% Price Slash</h4>
                                                <p className="text-gray-500 text-[15px] mb-6">Revamp Your Wardrobe at Jaw-Dropping Prices.</p>
                                                <Link to="#" className="inline-block text-gray-900 text-[13px] font-bold tracking-wider uppercase border-b-[2px] border-gray-900 pb-0.5 hover:text-[#bc4b5a] hover:border-[#bc4b5a] transition-colors">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Simple Dropdown for Pages */}
                            {link.name === 'Pages' && (
                                <div className="absolute left-0 top-[100%] w-[220px] bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t border-gray-100 cursor-default py-4">
                                    <ul className="flex flex-col">
                                        {[
                                            'About Us 1', 'About Us 2', 'About Us 3',
                                            'Contact', 'Faqs', 'Lookbook', 'sizeguide', 'Wishlist'
                                        ].map((item, i) => (
                                            <li key={i}>
                                                <Link to="#" className="block px-6 py-2.5 text-[15px] text-gray-500 hover:text-[#bc4b5a] hover:translate-x-1 transition-all">
                                                    {item}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-3 md:space-x-6 text-gray-900">
                    <button className="hover:text-[#bc4b5a] transition-colors cursor-pointer block lg:block">
                        <Search size={22} strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button className="hidden sm:block hover:text-[#bc4b5a] transition-colors cursor-pointer">
                        <User size={22} strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                    <button className="hover:text-[#bc4b5a] transition-colors cursor-pointer relative flex items-center">
                        <Heart size={22} strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="absolute -bottom-1 -right-2 bg-[#bc4b5a] text-white text-[9px] font-bold w-[15px] h-[15px] flex items-center justify-center rounded-full leading-none">0</span>
                    </button>
                    <button className="hover:text-[#bc4b5a] transition-colors cursor-pointer flex items-center">
                        <ShoppingBag size={22} strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6" />
                        <span className="hidden sm:inline-block ml-[5px] text-[14px] font-medium text-black tracking-widest">(0)</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`
                lg:hidden fixed inset-0 z-10 transition-transform duration-300 transform bg-white
                ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="pt-32 px-8 flex flex-col space-y-6 text-lg font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`flex items-center justify-between py-2 border-b border-gray-100 ${link.name === 'Home' ? 'text-[#bc4b5a]' : 'text-gray-900'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="flex items-center">
                                {link.name}
                                {link.badge && (
                                    <span className="ml-2 bg-[#2ecc71] text-white text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">
                                        {link.badge}
                                    </span>
                                )}
                            </span>
                            {link.hasDropdown && <ChevronDown size={18} className="text-gray-400" />}
                        </Link>
                    ))}

                    {/* Extra Mobile Actions */}
                    <div className="pt-10 flex flex-col space-y-4">
                        <button className="flex items-center space-x-3 text-gray-700">
                            <User size={20} />
                            <span>My Account</span>
                        </button>
                        <div className="flex space-x-6 pt-6 text-gray-400">
                            <FaFacebookF size={18} className="hover:text-black" />
                            <FaTwitter size={18} className="hover:text-black" />
                            <FaInstagram size={20} className="hover:text-black" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-[5]"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;