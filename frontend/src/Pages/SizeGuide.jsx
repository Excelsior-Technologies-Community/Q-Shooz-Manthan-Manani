import React from 'react';
import { Link } from 'react-router-dom';

const SizeGuide = () => {
    const sizeData = [
        { ourSize: 'XS', size: '6', bust: '79 - 81', waist: '63 - 66', hip: '91 - 94' },
        { ourSize: 'S', size: '8', bust: '86 - 89', waist: '67 - 70', hip: '95 - 98' },
        { ourSize: 'M', size: '10', bust: '89 - 92', waist: '71 - 74', hip: '99 - 102' },
        { ourSize: 'L', size: '12', bust: '92 - 95', waist: '74 - 77', hip: '102 - 105' },
        { ourSize: 'XL', size: '14', bust: '104 - 107', waist: '86 - 89', hip: '111 - 114' },
    ];

    return (
        <div className="w-full font-sans text-gray-900 pb-20">
            {/* Breadcrumbs */}
            <div className="bg-white py-4 px-6 md:px-15 text-[13.5px] text-gray-500">
                <Link to="/" className="text-[#FDB813] hover:underline">Home</Link> / <span className="text-gray-900 font-medium lowercase">sizeguide</span>
            </div>

            <div className="max-w-full mx-auto px-6 md:px-15 mt-10">
                <h1 className="text-[34px] font-bold mb-4">Size Guide</h1>
                <p className="text-gray-500 text-[15px] mb-10 leading-relaxed max-w-6xl">
                    If you need assistance when choosing your size, don't hesitate to - <Link to="/contact" className="text-gray-400 border-b border-gray-300 hover:text-black hover:border-black transition-colors">contact us</Link>. All sizes shown in the Size Charts are approximate. Please shop carefully and refer to our Size Chart to ensure the best fit.
                </p>

                {/* Size Table */}
                <div className="overflow-x-auto shadow-sm rounded-sm border border-gray-100">
                    <table className="w-full text-left border-collapse bg-white">
                        <thead>
                            <tr className="bg-[#E8ECEF]">
                                <th className="py-4 px-6 font-bold text-[14px]">Our size</th>
                                <th className="py-4 px-6 font-bold text-[14px]">Size</th>
                                <th className="py-4 px-6 font-bold text-[14px]">Bust</th>
                                <th className="py-4 px-6 font-bold text-[14px]">Waist</th>
                                <th className="py-4 px-6 font-bold text-[14px]">Hip</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {sizeData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{row.ourSize}</td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{row.size}</td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{row.bust}</td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{row.waist}</td>
                                    <td className="py-4 px-6 text-[14px] text-gray-600">{row.hip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-6 text-[14px] text-gray-500 italic">
                    * All measurements are in centimeters (cm).
                </p>
            </div>
        </div>
    );
};

export default SizeGuide;
