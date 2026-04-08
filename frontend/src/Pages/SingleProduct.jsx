import React, { useState } from 'react';
import { PiMinusLight, PiPlusLight, PiHeartLight, PiArrowsLeftRightLight, PiShareNetworkLight, PiShoppingBagOpenLight, PiTruckLight, PiArrowsCounterClockwiseLight, PiShieldCheckLight, PiCaretDownThin, PiShoppingCartSimpleLight, PiEyeLight } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Slices/addToCartSlice';
import { addToWish } from '../Slices/addToWishSlice';
import { useNavigate } from 'react-router-dom';

const FAQItem = ({ faq, defaultOpen }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className="border-b border-gray-100 py-6">
            <div 
                className="flex items-center justify-between cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-xl font-bold text-black">{faq.q}</h3>
                <span className="text-2xl font-light text-black transition-transform">
                    {isOpen ? "−" : "+"}
                </span>
            </div>
            {isOpen && (
                <p className="mt-4 text-gray-600 leading-relaxed text-[15px] animate-fadeIn">
                    {faq.a}
                </p>
            )}
        </div>
    );
};

const SingleProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const wishlistItems = useSelector((state) => state.addToWish.value);

    const [quantity, setQuantity] = useState(1);
    const [activeImg, setActiveImg] = useState("https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=960");
    const [activeTab, setActiveTab] = useState('Description');

    const handleWishlistClick = (product) => {
        const isEnItemInWishlist = wishlistItems.find((item) => item.id === product.id);
        if (isEnItemInWishlist) {
            navigate('/wishlist');
        } else {
            dispatch(addToWish(product));
        }
    };

    const thumbnails = [
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=960",
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=180",
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg?v=1731310945&width=180",
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-20.jpg?v=1731310945&width=180",
        "https://qx-shooz.myshopify.com/cdn/shop/files/product-21.jpg?v=1731310946&width=180"
    ];

    const currentProduct = {
        name: "Breathable Mesh Slip-On",
        price: "25.00",
        id: 99,
        brand: "UrbanStep",
        img1: thumbnails[0],
        img2: thumbnails[1],
        price_old: "32.00"
    };

    const relatedProducts = [
        { id: 101, name: "Classic Leather Sneakers", brand: "UrbanStep", price: "21.00", img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=720", img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540" },
        { id: 102, name: "Waterproof Hiking Boots", brand: "TrailGear", price: "25.00", img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=720", img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=720" },
        { id: 103, name: "Classic White Tennis Sneakers", brand: "SportyFeet", price: "25.00", img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=720", img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540" },
        { id: 104, name: "High-Top Canvas Sneakers", brand: "TrendyFeet", price: "25.00", img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=720", img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540" }
    ];

    const ProductCard = ({ product }) => (
        <div className="group cursor-pointer">
            <div className="relative aspect-square mb-4 md:mb-6 overflow-hidden bg-[#F9F9F9]">
                <img src={product.img1} alt={product.name} className="w-full h-full object-contain p-4 transition-opacity duration-300 lg:group-hover:opacity-0" />
                <img src={product.img2} alt={product.name} className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-300 lg:group-hover:opacity-100" />
            </div>
            <div className="space-y-1 md:space-y-2 text-center md:text-left">
                <p className="text-base md:text-lg text-gray-800 font-medium">${product.price}</p>
                <h3 className="text-lg md:text-xl text-black lg:group-hover:text-[#AE3F4F] transition-colors leading-tight font-medium">{product.name}</h3>
                <p className="text-lg md:text-xl text-gray-400 font-light">{product.brand}</p>
            </div>
            <div className="mt-4 md:mt-6 pt-4 border-t border-dotted border-gray-200 flex items-center justify-between opacity-100 md:opacity-0 translate-y-0 md:translate-y-2 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300">
                <button className="flex items-center gap-2 text-[10px] md:text-sm font-bold uppercase tracking-wider hover:text-[#AE3F4F] transition-colors"
                    onClick={(e) => { e.stopPropagation(); dispatch(addToCart(product)); }}>
                    <PiShoppingCartSimpleLight className="text-xl md:text-2xl" /> ADD TO CART
                </button>
                <div className="flex items-center gap-3 md:gap-4 text-lg md:text-xl text-gray-700">
                    <PiEyeLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                    <PiHeartLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" onClick={(e) => { e.stopPropagation(); handleWishlistClick(product); }} />
                    <PiArrowsLeftRightLight className="hover:text-[#AE3F4F] cursor-pointer transition-colors" />
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen">
            {/* Breadcrumbs */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-5 border-b border-gray-50">
                <nav className="text-xs uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2 font-bold">
                    <span className="hover:text-black cursor-pointer" onClick={() => navigate('/')}>Home</span>
                    <span>/</span>
                    <span className="text-black">{currentProduct.name}</span>
                </nav>
            </div>

            {/* Main Product Info */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-8 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
                    {/* Gallery */}
                    <div className="space-y-6">
                        <div className="relative aspect-square bg-[#F9F9F9] overflow-hidden group">
                            <img src={activeImg} alt="product" className="w-full h-full object-contain p-10 transition-transform duration-700 hover:scale-105" />
                            <div className="absolute top-6 left-6 bg-white p-4 shadow-2xl flex items-center gap-5 border border-gray-50 animate-fadeIn">
                                <img src={thumbnails[1]} className="w-14 h-14 object-contain bg-gray-50" />
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#AE3F4F] mb-1">New Arrival</p>
                                    <p className="text-sm font-bold text-black">{currentProduct.name}</p>
                                    <p className="text-xs font-medium text-gray-400">$25.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {thumbnails.map((img, i) => (
                                <div key={i} onClick={() => setActiveImg(img)} className={`w-20 h-20 md:w-28 md:h-28 bg-[#F9F9F9] cursor-pointer p-2 border-2 transition-all ${activeImg === img ? 'border-black' : 'border-transparent hover:border-gray-200'}`}>
                                    <img src={img} alt="thumb" className="w-full h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meta Detail Area */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight">{currentProduct.name}</h1>
                            <p className="text-2xl md:text-3xl font-bold text-black tracking-tighter">$25.00</p>
                        </div>

                        {/* Quantity & Cart Action */}
                        <div className="space-y-6 pt-2">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-gray-200 w-fit h-14 px-2">
                                    <button className="w-10 h-full flex items-center justify-center text-xl" onClick={() => setQuantity(q => Math.max(1, q - 1))}><PiMinusLight /></button>
                                    <input type="text" value={quantity} readOnly className="w-12 h-full text-center font-bold text-base focus:outline-none" />
                                    <button className="w-10 h-full flex items-center justify-center text-xl" onClick={() => setQuantity(q => q + 1)}><PiPlusLight /></button>
                                </div>
                                <button className="flex-1 h-14 bg-[#AE3F4F] text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-black transition-all" onClick={() => dispatch(addToCart({ ...currentProduct, quantity }))}>Add to Cart</button>
                                <button className="w-14 h-14 border border-gray-200 flex items-center justify-center text-2xl hover:text-[#AE3F4F] transition-colors"><PiHeartLight /></button>
                            </div>
                            <button className="w-full h-14 bg-black text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#AE3F4F] transition-all">Buy It Now</button>
                        </div>

                        {/* Info Rows */}
                        <div className="space-y-4 pt-6">
                            <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-black">
                                <PiTruckLight className="text-xl" /> Shipping Information <PiCaretDownThin className="ml-auto" />
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-black">
                                <PiArrowsCounterClockwiseLight className="text-xl" /> Returns & Exchanges <PiCaretDownThin className="ml-auto" />
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-3 pt-4">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Secure Payments:</p>
                            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/payment.png?v=1731652695" className="h-6 opacity-70 grayscale hover:grayscale-0 transition-all cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs & Related Sidebar Block */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16 border-t border-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-20">
                <div className="lg:col-span-2">
                    <div className="flex gap-12 border-b border-gray-100 mb-10">
                        {['Description', 'Material', 'Reviews'].map(tab => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-4 text-lg md:text-xl font-medium relative transition-all ${activeTab === tab ? 'text-black' : 'text-gray-400'}`}>
                                {tab}
                                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black" />}
                            </button>
                        ))}
                    </div>
                    <div className="text-gray-500 text-base leading-relaxed animate-fadeIn space-y-6">
                        {activeTab === 'Description' && (
                            <>
                                <p>Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada.</p>
                                <p>Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla pede sit amet augue. In turpis. Pellentesque posuere.</p>
                            </>
                        )}
                        {activeTab === 'Material' && <p>Premium mesh upper with high-density foam padding. Eco-friendly recycled rubber sole for maximum grip and durability. Breathable fabric lining for all-day comfort.</p>}
                        {activeTab === 'Reviews' && <p>No reviews yet. Be the first to review this product!</p>}
                    </div>
                </div>

                <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-black mb-10">Related products</h3>
                    <div className="space-y-12">
                        {relatedProducts.slice(0, 2).map(product => (
                            <div key={product.id} className="group cursor-pointer">
                                <div className="relative aspect-square mb-6 overflow-hidden bg-[#F9F9F9]">
                                    <img src={product.img1} alt={product.name} className="w-full h-full object-contain p-4" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold text-black group-hover:text-[#AE3F4F] transition-colors">{product.name}</h4>
                                    <p className="text-base text-gray-800 font-medium">${product.price}</p>
                                    <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-1 hover:text-[#AE3F4F] hover:border-[#AE3F4F] transition-all">
                                        + Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chic Styles Banner Section */}
            <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
                <img 
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Chic Styles"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-center px-4 space-y-4">
                    <p className="text-white text-xs font-bold uppercase tracking-[0.3em]">Exclusive Collection</p>
                    <h2 className="text-4xl md:text-7xl font-bold text-white tracking-widest uppercase">Chic Styles For The Modern Woman</h2>
                    <button className="mt-4 bg-white text-black px-10 py-4 uppercase text-[11px] font-bold tracking-[0.2em] hover:bg-[#AE3F4F] hover:text-white transition-all shadow-2xl">Explore Looks</button>
                </div>
            </div>

            {/* Section 2 from About Us - Timeless Styles */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900" alt="Fashion mate" className="w-[88%] h-auto relative z-0" />
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=540" alt="Sneaker detail" className="w-[50%] h-auto absolute top-1/2 right-0 -translate-y-1/2 z-10 border-8 border-white shadow-2xl" />
                </div>
                <div className="flex flex-col items-start gap-5 pr-12">
                    <p className="text-[#AE3F4F] text-xs uppercase tracking-[0.3em] font-bold">Timeless Styles</p>
                    <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight tracking-tighter">
                        Timeless Styles With A Modern Edge
                    </h2>
                    <p className="text-gray-500 leading-8 text-base">
                        Experience a new level of fashion with our exclusive range of apparel. Our fashion caters to your multiple clothing needs seamlessly. Elevate your everyday style effortlessly. Indulge in premium fashion from our collection today.
                    </p>
                    <button className="mt-4 bg-[#AE3F4F] text-white px-10 py-4 uppercase text-[11px] font-bold tracking-[0.2em] hover:bg-black transition-all">
                        Discover Now
                    </button>
                </div>
            </div>

            {/* Features Row */}
            <div className="bg-gray-50 border-y border-gray-100 py-12">
                <div className="max-w-full mx-auto px-6 md:px-15 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div className="space-y-3">
                        <PiTruckLight className="text-4xl mx-auto text-gray-800" />
                        <h4 className="font-bold text-sm tracking-widest uppercase">Free Shipping</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">On orders over $99</p>
                    </div>
                    <div className="space-y-3">
                        <PiShareNetworkLight className="text-4xl mx-auto text-gray-800" />
                        <h4 className="font-bold text-sm tracking-widest uppercase">Weekly Support</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">24/7 dedicated help</p>
                    </div>
                    <div className="space-y-3">
                        <PiShieldCheckLight className="text-4xl mx-auto text-gray-800" />
                        <h4 className="font-bold text-sm tracking-widest uppercase">Safe Payment</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">100% secure checkout</p>
                    </div>
                    <div className="space-y-3">
                        <PiShoppingBagOpenLight className="text-4xl mx-auto text-gray-800" />
                        <h4 className="font-bold text-sm tracking-widest uppercase">Gift Voucher</h4>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">Best gifting options</p>
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="w-full h-[450px] md:h-[600px] overflow-hidden relative group">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
                    <source src="https://cdn.shopify.com/videos/c/o/v/4625c676b883437ebb9472d75b2f720c.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all z-10" />
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div className="text-center text-white space-y-4">
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase opacity-80">Shooz Life</h2>
                        <div className="w-20 h-[2px] bg-white mx-auto" />
                    </div>
                </div>
            </div>

            {/* Promotional Banner - For the Explorers */}
            <div className="relative h-[350px] md:h-[500px] w-full flex items-center justify-center overflow-hidden">
                <img 
                    src="https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=960" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%]"
                    alt="Promo"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative text-center space-y-4 px-4">
                    <p className="text-white text-xs font-medium flex items-center justify-center gap-1">
                        ★★★★★ <span className="text-[11px] tracking-widest ml-1">3000+ REVIEWS</span>
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">For the Explorers.</h2>
                    <p className="text-white/80 text-sm md:text-base font-medium tracking-wide">Weekends are better with friends</p>
                </div>
            </div>

            {/* FAQs Block */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16 md:py-24">
                <div className="text-center mb-12 space-y-3">
                    <h2 className="text-5xl font-medium text-black tracking-tight">FAQs</h2>
                    <p className="text-sm text-gray-500">Have a question ? We are here to help.</p>
                </div>
                
                <div className="max-w-[1000px] mx-auto border-t border-gray-100">
                    {[
                        { q: "Is the shipping free?", a: "Yes. Worldwide shipping is already included in the price. We use DHL express with 3 days delivery time." },
                        { q: "When will I receive my item?", a: "Most items are delivered within 3-5 business days depending on your location." },
                        { q: "Can I change or return my item?", a: "You can return or exchange any item within 30 days of receiving it. Please contact our support for a return label." }
                    ].map((faq, i) => (
                        <FAQItem key={i} faq={faq} defaultOpen={i === 0} />
                    ))}
                </div>
            </div>

            {/* Sale Banner */}
            <div className="bg-black py-12 md:py-16">
                <div className="max-w-full mx-auto px-6 md:px-15 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left space-y-3">
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Sale Event</h3>
                        <p className="text-gray-400 text-sm md:text-base font-medium max-w-[500px]">
                            We've refreshed our sale with discounts of up to 50% on select styles.
                        </p>
                    </div>
                    
                    <div className="hidden lg:block bg-[#F8EFD4] text-[#8B7E58] px-6 py-3 rounded-md font-bold text-sm">
                        End Deal
                    </div>

                    <button className="border border-white/20 text-white px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all">
                        Shop Collection
                    </button>
                </div>
            </div>

            {/* Fixed Compare Badge */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-6 flex flex-col items-center gap-4 rounded-l-lg z-[100] cursor-pointer shadow-2xl hover:pr-4 transition-all">
                <span className="[writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.2em] uppercase">Compare</span>
                <span className="bg-white text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">0</span>
            </div>

            {/* Related Products - You May Also Like */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 tracking-tight text-center">You may also like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
            </div>

            {/* Recently Viewed */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16 border-t border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-10 tracking-tight">Recently viewed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;