import React from 'react'
import { MoveRight, Truck, HeadphonesIcon, Undo2, Gift, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const col1 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900";
const filler3 = "https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900";
const filler4 = "https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=540";
const filler5 = "https://qx-shooz.myshopify.com/cdn/shop/files/filler5.png?v=1731661778&width=900";
const filler6 = "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/filler6.png?v=1731662117";

const About = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 md:px-15 text-sm text-gray-500">
        Home &gt; Pages &gt; <span className="text-black">About Us</span>
      </div>

      {/* Hero / Section 1 */}
      <div className="max-w-full mx-auto px-6 md:px-15 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col items-start gap-4">
          <p className="text-[#AE3F4F] text-sm uppercase tracking-widest font-semibold">Up To 40% Off Sale!</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Upgrade Your Wardrobe for the Season
          </h1>
          <button className="mt-4 bg-[#AE3F4F] text-white px-8 py-3 uppercase text-sm font-semibold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
            Shop Now <MoveRight className="w-4 h-4" />
          </button>
        </div>
        <div>
          <img src={col1} alt="Upgrade Your Wardrobe" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-full mx-auto px-6 md:px-15 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={filler3} alt="Fashion mate" className="w-[88%] h-auto relative z-0" />
          <img src={filler4} alt="Sneaker detail" className="w-[50%] h-auto absolute top-1/2 right-0 -translate-y-1/2 z-10 border-8 border-white shadow-xl" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Your Everyday Fashion Mate</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Style that Speaks<br />Comfort and Glamour
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Experience a new level of fashion with our exclusive range of apparel. Our fashion caters to your multiple clothing needs seamlessly. Elevate your everyday style effortlessly. Indulge in premium fashion from our collection today.
          </p>
          <button className="mt-4 bg-[#AE3F4F] text-white px-8 py-3 uppercase text-sm font-semibold tracking-wider hover:bg-black transition-colors">
            Discover Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 border-y border-gray-200 py-12">
        <div className="max-w-full mx-auto px-6 md:px-15 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-gray-800">
          <div className="flex flex-col items-center gap-3">
            <Truck className="w-10 h-10 mb-2" strokeWidth={1} />
            <h4 className="font-bold text-lg">Free Shipping</h4>
            <p className="text-sm text-gray-500">Free return on orders over $100</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <HeadphonesIcon className="w-10 h-10 mb-2" strokeWidth={1} />
            <h4 className="font-bold text-lg">Quality Support</h4>
            <p className="text-sm text-gray-500">24/7 online feedback</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Undo2 className="w-10 h-10 mb-2" strokeWidth={1} />
            <h4 className="font-bold text-lg">Return & Refund</h4>
            <p className="text-sm text-gray-500">Return money within 30 days</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Gift className="w-10 h-10 mb-2" strokeWidth={1} />
            <h4 className="font-bold text-lg">Gift Voucher</h4>
            <p className="text-sm text-gray-500">20% off when you shop online</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="max-w-full mx-auto px-6 md:px-15 py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start gap-4 pr-10">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold">Unlock Your Inner Style</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Timeless Elegance,<br />Modern Flair
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Deliver unique products globally and support the business values of our buyers. Optimize business models dynamically. Objectively visualize user-centric infrastructure and leverage technology seamlessly. Let us inspire your shopping journey today!
            </p>
          </div>
          <div className="w-[70%] ml-auto mt-6 mr-12">
             <img src={filler6} alt="Timeless elegance" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="pt-24">
          <img src={filler5} alt="Modern flair" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-full mx-auto px-6 md:px-15 py-16">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
             
             {/* Card 1 */}
             <div className="relative bg-white pt-4 pb-8 pr-6">
                 <Quote className="absolute top-4 right-0 w-12 h-12 text-gray-100 fill-gray-100" />
                 <div className="flex items-center gap-5 mb-6 relative z-10">
                     <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817&width=300" alt="Emily Johnson" className="w-16 h-16 rounded-full object-cover" />
                     <div>
                         <h4 className="font-medium text-gray-900 text-lg">Emily Johnson</h4>
                         <p className="text-sm text-gray-400">Fashion Enthusiast</p>
                         <div className="flex text-black text-sm mt-1">★★★★★</div>
                     </div>
                 </div>
                 <h3 className="font-bold text-xl mb-4 text-black">Perfect !</h3>
                 <p className="text-gray-500 text-[15px] leading-relaxed">
                     "I've shopped at many online fashion stores, but Gluck is truly exceptional. Their quality and style are unmatched. I keep coming back for more!"
                 </p>
             </div>
             
             {/* Card 2 */}
             <div className="relative bg-white pt-4 pb-8 pr-6">
                 <Quote className="absolute top-4 right-0 w-12 h-12 text-gray-100 fill-gray-100" />
                 <div className="flex items-center gap-5 mb-6 relative z-10">
                     <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817&width=300" alt="David Smith" className="w-16 h-16 rounded-full object-cover" />
                     <div>
                         <h4 className="font-medium text-gray-900 text-lg">David Smith</h4>
                         <p className="text-sm text-gray-400">Trendsetter</p>
                         <div className="flex text-black text-sm mt-1">★★★★★</div>
                     </div>
                 </div>
                 <h3 className="font-bold text-xl mb-4 text-black">Awesome !</h3>
                 <p className="text-gray-500 text-[15px] leading-relaxed">
                     "Gluck is my go-to for the latest fashion trends. Their collection is always up-to-date, and the shopping experience is a breeze. I recommend them to all my friends."
                 </p>
             </div>

             {/* Card 3 */}
             <div className="relative bg-white pt-4 pb-8 pr-6">
                 <Quote className="absolute top-4 right-0 w-12 h-12 text-gray-100 fill-gray-100" />
                 <div className="flex items-center gap-5 mb-6 relative z-10">
                     <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi3.jpg?v=1731662817&width=300" alt="Sarah Anderson" className="w-16 h-16 rounded-full object-cover" />
                     <div>
                         <h4 className="font-medium text-gray-900 text-lg">Sarah Anderson</h4>
                         <p className="text-sm text-gray-400">Fashion Blogger</p>
                         <div className="flex text-black text-sm mt-1">★★★★★</div>
                     </div>
                 </div>
                 <h3 className="font-bold text-xl mb-4 text-black">Amazing !</h3>
                 <p className="text-gray-500 text-[15px] leading-relaxed">
                     "I've had the pleasure of collaborating with Gluck multiple times. Their commitment to style and quality is evident in every piece they offer."
                 </p>
             </div>
             
         </div>
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

      {/* Contact Form */}
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-widest font-semibold mb-2">Say Hello To Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">Send us an email</h2>
          
          <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Name *" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" />
                  <input type="email" placeholder="Email *" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" />
              </div>
              <input type="text" placeholder="Phone number" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition-colors" />
              <textarea placeholder="Message" rows={4} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
              
              <div className="mt-4">
                  <button type="submit" className="bg-[#AE3F4F] text-white px-12 py-4 text-sm font-semibold tracking-wider hover:bg-black transition-colors uppercase flex mx-auto items-center">
                      Send <MoveRight className="w-4 h-4 ml-2" />
                  </button>
              </div>
          </form>

          <p className="text-medium text-black mt-10">
              This site is protected by reCAPTCHA and the Google <a href="" className="text-gray-400 underline">Privacy Policy</a> and <a href="" className="text-gray-400 underline">Terms of Service</a> apply.
          </p>
      </div>

    </div>
  )
}

export default About