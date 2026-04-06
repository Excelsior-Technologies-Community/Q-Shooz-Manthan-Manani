import React, { useState } from 'react';
import { MoveRight, ChevronLeft, ChevronRight } from 'lucide-react';

const videoUrl = "https://cdn.shopify.com/videos/c/o/v/4625c676b883437ebb9472d75b2f720c.mp4";
const prideImg = "https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900";
const testimonialImgs = [
  "https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817&width=900",
  "https://qx-shooz.myshopify.com/cdn/shop/files/testi4.jpg?v=1731662817&width=900",
  "https://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817&width=900"
];
const guaranteeImg = "https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1080";

const About2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialImgs.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialImgs.length - 1 : prev - 1));
  };

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 md:px-15 text-sm text-gray-500">
        Home &gt; Pages &gt; <span className="text-black">About Us 2</span>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[500px] md:h-[600px]">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4">WHO WE ARE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">From source to style</h1>
          <p className="text-[15px] pb-1 border-b border-white">The real fitness everywhere</p>
        </div>
      </div>

      {/* Mission Text Section */}
      <div className="max-w-4xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-[28px] font-semibold text-gray-900 leading-[1.6] mb-8">
          As A Modern Sexual Wellness Company Built On Quality, Simplicity And Inclusivity, We're On A Mission To Make Intimacy Better—For All People.
        </h2>
        <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[13px] font-semibold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
          BUTTON TEXT <MoveRight className="w-4 h-4" />
        </button>
      </div>

      {/* We Pride Ourselves Section */}
      <div className="max-w-full mx-auto px-6 md:px-15 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img src={prideImg} alt="We Pride Ourselves" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left pr-0 md:pr-12">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-4">OUR MISSION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">We Pride<br/>Ourselves</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            We don't just sell products; we sell an experience. We pride ourselves on the quality of our garments and our commitment to helping our customers find the perfect fit. From casual daily wear to formal attire, we've got you covered. You can rely on us to look and feel your best, every day.
          </p>
          <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[13px] font-semibold tracking-wider hover:bg-black transition-colors">
            READ MORE
          </button>
        </div>
      </div>

      {/* Three Columns Orange Background Section */}
      <div className="bg-[#f09f70] py-20">
        <div className="max-w-full mx-auto px-6 md:px-15 grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 text-center text-black">
          <div className="flex flex-col items-center px-4">
            <h4 className="font-bold text-xl mb-4 leading-tight">Premium<br />Quality</h4>
            <p className="text-[15px] mb-8 text-black/80 font-medium">This is a short sentence here. A brief text about your brand that captivates.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-3 uppercase text-[12px] font-bold tracking-widest hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col items-center px-4 md:border-x border-black/10">
            <h4 className="font-bold text-xl mb-4 leading-tight">Unparalleled<br />Prices</h4>
            <p className="text-[15px] mb-8 text-black/80 font-medium">This is a short sentence here. A brief text about your brand that captivates.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-3 uppercase text-[12px] font-bold tracking-widest hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col items-center px-4">
            <h4 className="font-bold text-xl mb-4 leading-tight">From the<br />Source</h4>
            <p className="text-[15px] mb-8 text-black/80 font-medium">This is a short sentence here. A brief text about your brand that captivates.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-3 uppercase text-[12px] font-bold tracking-widest hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Slider Section */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 py-20">
        <div className="flex flex-col justify-center px-6 md:px-15 py-16 md:py-24 order-2 md:order-1 bg-white">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">TESTIMONIALS</p>
          <div className="flex text-black space-x-[2px] text-xl mb-6">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
          <h2 className="text-[26px] md:text-3xl font-bold text-gray-900 leading-[1.4] mb-8">
            "Absolutely Loved It. The Fit, The Quality And The Color. This Is A Slim Fit Jean Like None Other And The Only One I Will Buy."
          </h2>
          <p className="text-gray-400 text-sm mb-10">Max W.</p>
          <div className="flex gap-4">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-[#AE3F4F] hover:text-white transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 hover:bg-[#AE3F4F] hover:text-white transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 h-[400px] md:h-auto">
          <img 
            src={testimonialImgs[currentSlide]} 
            alt="Testimonial" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 30+ Day Guarantee Section */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="h-[400px] md:h-[600px]">
          <img src={guaranteeImg} alt="30+ Day Guarantee" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center items-center text-center px-6 md:px-20 py-16 md:py-24 bg-gray-50">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-4">WHY SHOP WITH US</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">30+ Day<br/>Guarantee</h2>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-full">
            We prioritize that your product functions exactly as expected. We guarantee it for 30 days after arrival. With friendly and professional customer care representatives, we are here to ensure your shopping experience reflects our quality standards.
          </p>
          <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[13px] font-semibold tracking-wider hover:bg-black transition-colors">
            READ MORE
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default About2;