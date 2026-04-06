import React from 'react';
import { MoveRight } from 'lucide-react';

const img1 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-6.png?v=1731657936&width=900";
const img2 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=720";
const img3 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-4.png?v=1731657941&width=900";
const img4 = "https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=900";

const About3 = () => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-6 md:px-15 text-sm text-gray-500">
        Home &gt; Pages &gt; <span className="text-black">About Us 3</span>
      </div>

      {/* Header Section */}
      <div className="text-center py-20 px-6">
        <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-6">OVERVIEW</p>
        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-gray-900">
          Empowering Businesses Large and Small.
        </h1>
      </div>

      {/* Section 1: Intro with Image */}
      <div className="max-w-full mx-auto px-6 md:px-15 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <img src={img1} alt="Platform Sneakers" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col items-center text-center md:items-start md:text-left px-4 md:px-8">
          <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-semibold mb-6">A HERITAGE LOOK DOES NOT MEAN YOU FEEL OLD-TIME</p>
          <h3 className="text-xl md:text-[22px] font-bold text-gray-900 leading-[1.6] mb-8">
            Introduce Your Company With A Broad Vision Statement. The Viewer Should Come Away With A Strong Sense Of What Your Company Stands For, And What It Is Trying To Achieve.
          </h3>
          <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[12px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
            BUTTON TEXT <MoveRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Section 2: Three Stats */}
      <div className="max-w-6xl mx-auto px-6 md:px-15 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-100 pt-16">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">2011</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-[200px] leading-relaxed">Zealously embrace scale of numbers today.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-2 uppercase text-[11px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">20k</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-[200px] leading-relaxed">Businesses that use our products daily.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-2 uppercase text-[11px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">$100M</h2>
            <p className="text-gray-500 text-sm mb-6 max-w-[200px] leading-relaxed">Total support from the investors.</p>
            <button className="bg-[#AE3F4F] text-white px-6 py-2 uppercase text-[11px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
              BUTTON TEXT <MoveRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Our Story - Off white background */}
      <div className="bg-[#faf8f6] py-24 px-6 md:px-15">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold mb-8">OUR STORY</p>
          <h2 className="text-2xl md:text-[28px] font-bold text-gray-900 leading-[1.6] mb-6">
            Established In 2017, By Husband And Wife Team Rob And Frankie. Hutch Specializes In Helping You Bring The Perfect Houseplants Home.
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10">
            Born Out Of A Passion For All Things Botanical And Frankie's Love Of Planting Up Terrariums, Hutch Began Life As A Short Term Pop Up Shop In Exeter's City Centre. The Aim Was Simple; Create A Jungle Bursting With Exotic Foliage Right In The Centre Of A Bustling City.
          </p>
          <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[13px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
            BUTTON TEXT <MoveRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Section 4: 3 columns with Image on right */}
      <div className="max-w-full mx-auto py-24 px-6 md:px-15 border-b border-gray-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
            {/* Col 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left px-4">
               <h2 className="text-[26px] md:text-3xl font-bold text-gray-900 leading-[1.4] mb-8">
                  We're leading development for modern teams.
               </h2>
               <button className="bg-[#AE3F4F] text-white px-7 py-3 uppercase text-[12px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
                  BUTTON TEXT <MoveRight className="w-3 h-3 ml-1" />
               </button>
            </div>
            
            {/* Col 2 */}
            <div className="flex flex-col items-center text-center px-4">
               <h2 className="text-[44px] font-bold text-gray-900 mb-4">44%</h2>
               <p className="text-gray-500 text-[13px] mb-8 leading-relaxed max-w-[200px]">Less time dealing with infrastructure.</p>
               <button className="bg-[#AE3F4F] text-white px-7 py-3 uppercase text-[12px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
                  BUTTON TEXT <MoveRight className="w-3 h-3 ml-1" />
               </button>
            </div>

            {/* Col 3 */}
            <div className="h-[350px]">
               <img src={img2} alt="Walking shoes" className="w-full h-full object-cover rounded-sm shadow-sm" />
            </div>
         </div>
      </div>

      {/* Section 5: Left Image, Right Text with background */}
      <div className="bg-[#fcf7ef] w-full">
         <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="h-[400px] md:h-[600px] p-6 md:p-12 lg:p-20">
               <img src={img3} alt="Colorful sneakers" className="w-full h-full object-cover object-center shadow-md bg-white p-4" />
            </div>
            <div className="flex flex-col justify-center px-10 md:px-20 lg:px-32 py-16">
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">Over 40% traffic improvements</h2>
               <p className="text-gray-500 text-[15px] leading-relaxed mb-10 max-w-lg">
                  An iterative approach to corporate strategy foster collaborative thinking to further the overall value proposition.
               </p>
               <div>
                  <h4 className="font-bold text-gray-900 text-[17px]">Mike Thomas</h4>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-wide text-[11px] font-semibold">CEO & FOUNDER</p>
               </div>
            </div>
         </div>
      </div>

      {/* Section 6: French text & Stats left, Image right */}
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 mb-20 gap-8 md:gap-0">
         <div className="flex flex-col justify-center px-8 md:pl-24 xl:pl-32 md:pr-16 py-12 order-2 md:order-1">
            <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-6 flex justify-center md:justify-start">OVERVIEW</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-[1.3] mb-12 text-center md:text-left">
               Il n'a jamais été aussi facile de gérer ses finances
            </h2>
            
            <div className="grid grid-cols-2 gap-y-12 gap-x-6 mb-12">
               <div className="text-center md:text-left border-t border-gray-100 pt-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">98%</h3>
                  <p className="text-gray-500 text-xs font-medium">Satisfaction clients</p>
               </div>
               <div className="text-center md:text-left border-t border-gray-100 pt-6">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">205M+</h3>
                  <p className="text-gray-500 text-xs font-medium">En volumes de transactions</p>
               </div>
               <div className="text-center md:text-left border-t border-gray-100 pt-6">
                  <h3 className="text-[28px] font-bold text-gray-900 mb-3">100K+</h3>
                  <p className="text-gray-500 text-xs font-medium text-balance">Nouveaux inscrits en janvier</p>
               </div>
               <div className="text-center md:text-left border-t border-gray-100 pt-6">
                  <h3 className="text-[28px] font-bold text-gray-900 mb-3">55%</h3>
                  <p className="text-gray-500 text-xs font-medium text-balance">Croissance de revenus en 2024</p>
               </div>
            </div>

            <div className="flex justify-center md:justify-start">
               <button className="bg-[#AE3F4F] text-white px-8 py-3 uppercase text-[12px] font-bold tracking-wider hover:bg-black transition-colors flex items-center gap-2">
                  BUTTON TEXT <MoveRight className="w-4 h-4 ml-1" />
               </button>
            </div>
         </div>
         
         <div className="order-1 md:order-2 h-[400px] md:h-[700px] px-6 md:pr-15 py-12 md:py-0">
            <img src={img4} alt="White sneakers" className="w-full h-full object-cover object-center" />
         </div>
      </div>

    </div>
  )
}

export default About3;