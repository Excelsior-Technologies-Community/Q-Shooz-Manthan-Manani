import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, ChevronRight, Plus, Minus } from 'lucide-react';

const heroImg = "https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1080";

const Contact = () => {
    const [openFaq, setOpenFaq] = useState(1); // Second FAQ opened by default

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };

    return (
        <div className="w-full font-sans text-gray-900">
            {/* Breadcrumbs */}
            <div className="bg-white py-4 px-6 md:px-15 text-sm text-gray-500 border-b border-gray-100">
                Home &gt; <span className="text-black">Contact</span>
            </div>

            {/* Hero Section */}
            <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 bg-gray-50">
                <div className="w-full h-full">
                    <img src={heroImg} alt="Sneakers" className="w-full h-full object-cover min-h-[400px]" />
                </div>
                <div className="flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 py-16 md:py-24 bg-white">
                    <p className="text-gray-500 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold mb-6">Eco-Friendly, Modern Design</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                        Indulge in Timeless Classics with a Modern Twist
                    </h1>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] md:pr-10">
                        Embrace the return of '90s luxury fashion with our exclusive chunky clean style. From essential whites to statement pieces, redefine elegance with a contemporary touch.
                    </p>
                </div>
            </div>

            {/* Info Section */}
            <div className="max-w-full mx-auto px-6 md:px-15 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex  items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gray-200 flex justify-center items-center">
                        <MapPin className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className='text-start'>
                        <h4 className="font-bold text-[17px] text-black mb-2">Address</h4>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">Copley, South Australia 5732,<br />Australia</p>
                    </div>
                </div>
                <div className="flex  items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gray-200 flex justify-center items-center">
                        <Phone className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className='text-start'>
                        <h4 className="font-bold text-[17px] text-black mb-2">Call Us</h4>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">(123) 4567 8900<br />(123) 4568 1801</p>
                    </div>
                </div>
                <div className="flex  items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gray-200 flex justify-center items-center">
                        <Clock className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className='text-start'>
                        <h4 className="font-bold text-[17px] text-black mb-2">Open</h4>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">Monday - Friday: 8am - 4pm<br />Saturday - Sunday: 9am - 5pm</p>
                    </div>
                </div>
                <div className="flex items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-gray-200 flex justify-center items-center">
                        <Mail className="w-6 h-6 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className='text-start'>
                        <h4 className="font-bold text-[17px] text-black mb-2">Emails</h4>
                        <p className="text-gray-500 text-[14.5px] leading-relaxed">example@example.com<br />example@example.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-5xl mx-auto px-6 md:px-15 py-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Got Any Questions?</h2>
                <p className="text-gray-500 text-[15px] mb-12">Use the form below to get in touch with the sales team</p>

                <form className="flex flex-col gap-6 text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        <input type="text" placeholder="Name" className="w-full border border-gray-200 p-3 text-[14.5px] placeholder-gray-400 focus:outline-none focus:border-black transition-colors" />
                        <input type="email" placeholder="Email *" className="w-full border border-gray-200 p-3 text-[14.5px] placeholder-gray-400 focus:outline-none focus:border-black transition-colors" required />
                    </div>
                    <input type="tel" placeholder="Phone number" className="w-full border border-gray-200 p-3 text-[14.5px] placeholder-gray-400 focus:outline-none focus:border-black transition-colors md:mt-2" />
                    <textarea placeholder="Message" rows={4} className="w-full border border-gray-200 p-3 text-[14.5px] placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none md:mt-2"></textarea>

                    <div className="mt-8 flex justify-center">
                        <button type="submit" className="bg-[#AE3F4F] text-white px-8 py-3 text-[13px] font-semibold tracking-widest hover:bg-black transition-colors flex items-center justify-center gap-2 rounded uppercase">
                            Send <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                </form>

                <p className="text-[14px] text-gray-500 mt-12">
                    This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">Privacy Policy</a> and <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">Terms of Service</a> apply.
                </p>
            </div>

            {/* Store Location Block */}
            <div className="w-full h-[500px] md:h-[600px] relative mt-10 flex items-center">
                <iframe
                    src="https://www.google.com/maps?q=Copley,+South+Australia+5732,+Australia&output=embed"
                    className="absolute inset-0 w-full h-full z-0 border-0"
                    loading="lazy"
                    allowFullScreen
                    title="Store Location"
                ></iframe>
                <div className="max-w-full mx-auto w-full px-6 md:px-15 relative z-10">
                    <div className="bg-white p-12 max-w-sm flex flex-col items-center text-center pointer-events-auto border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold mb-6">Our store</h3>
                        <div className="text-[15px] text-gray-600 leading-relaxed mb-8">
                            Copley, <br />
                            South Australia 5732
                            <br /><br />
                            Mon - Fri, 10am - 9pm<br />
                            Saturday, 11am - 9pm<br />
                            Sunday, 11am - 5pm
                        </div>
                        <button className="bg-[#AE3F4F] text-white px-8 py-3 text-[13px] font-semibold tracking-wider hover:bg-black transition-colors uppercase flex justify-center items-center gap-2">
                            <MapPin className="w-4 h-4" /> GET DIRECTIONS
                        </button>
                    </div>
                </div>
            </div>

            {/* FAQs Section */}
            <div className="max-w-5xl mx-auto px-6 py-20 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-black mb-3">FAQs</h2>
                <p className="text-gray-500 text-[15px] mb-12">Here are some of our common questions</p>

                <div className="flex flex-col text-left">
                    {/* FAQ 1 */}
                    <div className={`border-t border-gray-100 py-6`}>
                        <button onClick={() => toggleFaq(0)} className="w-full flex justify-between items-center text-left focus:outline-none">
                            <span className="font-bold text-[20px] text-gray-900">How long will shipping take?</span>
                            {openFaq === 0 ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                        </button>
                        {openFaq === 0 && (
                            <p className="mt-4 text-[16px] text-gray-500 leading-relaxed pr-10">
                                Orders are processed within 1-2 business days. Shipping takes 3-5 business days depending on your location.
                            </p>
                        )}
                    </div>

                    {/* FAQ 2 */}
                    <div className={`border-t border-gray-100 py-6`}>
                        <button onClick={() => toggleFaq(1)} className="w-full flex justify-between items-center text-left focus:outline-none">
                            <span className="font-bold text-[20px] text-gray-900">How do I know if my order is confirmed?</span>
                            {openFaq === 1 ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                        </button>
                        {openFaq === 1 && (
                            <p className="mt-4 text-[16px] text-gray-500 leading-relaxed pr-10">
                                The future sample of a request change might give his past to turn through its position in respect to whether a strategy is popular than weak.
                            </p>
                        )}
                    </div>

                    {/* FAQ 3 */}
                    <div className={`border-t border-gray-100 py-6 border-b`}>
                        <button onClick={() => toggleFaq(2)} className="w-full flex justify-between items-center text-left focus:outline-none">
                            <span className="font-bold text-[20px] text-gray-900">Can I change my shipping address after my order is placed?</span>
                            {openFaq === 2 ? <Minus className="w-4 h-4 text-gray-400" /> : <Plus className="w-4 h-4 text-gray-400" />}
                        </button>
                        {openFaq === 2 && (
                            <p className="mt-4 text-[16px] text-gray-500 leading-relaxed pr-10">
                                Please contact us immediately via phone or email. Address changes are only possible before the order has been dispatched.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
