import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWish } from '../Slices/addToWishSlice';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.addToWish.value);
    const dispatch = useDispatch();

    return (
        <div className="w-full font-sans text-gray-900 pb-20">
            {/* Breadcrumb */}
            <div className="bg-white py-4 px-6 md:px-15 text-[13.5px] text-gray-500">
                <Link to="/" className="text-[#FDB813] hover:underline">Home</Link> / <span className="text-gray-900 font-medium">Wishlist</span>
            </div>

            {/* Page Header */}
            <div className="text-center mt-10 mb-14">
                <h1 className="text-[34px] font-bold">Wishlist</h1>
            </div>

            {/* Wishlist Grid */}
            <div className="max-w-full mx-auto px-6 md:px-15">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {wishlistItems.map((item) => (
                        <div key={item.id} className="flex gap-6">
                            {/* Product Image */}
                            <div className="bg-[#F8F8F8] w-28 h-28 flex items-center justify-center p-2 shrink-0 rounded-[2px]">
                                <img src={item.img1} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                            </div>
                            
                            {/* Product Info */}
                            <div className="flex flex-col justify-center py-2">
                                <h3 className="text-[17px] font-medium text-gray-900 mb-1 leading-snug hover:text-[#AE3F4F] transition-colors cursor-pointer">{item.name}</h3>
                                <p className="text-[15px] text-gray-500 mb-2.5">{item.price}</p>
                                <div>
                                    <button 
                                        className="text-[13px] text-gray-400 border-b border-gray-300 hover:text-red-500 hover:border-red-500 transition-colors pb-0.5 inline-block hover:font-semibold"
                                        onClick={() => dispatch(removeFromWish(item))}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wishlist;