import React from 'react';
import { FaClipboardList } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosTime } from "react-icons/io";
import { dog } from '../assets'; // Make sure to replace with the correct image path

export default function HydHero() {
    return (
        <div className='flex justify-center'>
            <div className='relative md:w-[1700px] flex flex-col md:flex-row items-center justify-between h-[100%] md:h-[400px] bg-gray-50 rounded-lg p-4 md:p-8 overflow-hidden'>
                {/* Background Image */}
                <div className="absolute inset-0 bg-no-repeat bg-cover bg-[url('/path/to/background/image')] opacity-20"></div>

                {/* Text and Buttons */}
                <div className='z-10 mb-6 md:mb-0'>
                    <h2 className='text-sm text-gray-600'>I'm lovin' it!</h2>
                    <h1 className='text-[#03081F] font-bold text-2xl md:text-4xl lg:text-5xl pb-3 md:pb-5'>
                        McDonald’s East London
                    </h1>
                    <div className='flex hydBut gap-3 md:gap-4'>
                        <button className='bg-[#2B2B2B] w-[260px] text-white rounded-full flex items-center px-3 py-2 md:px-4 md:py-2 font-semibold gap-2'>
                            <FaClipboardList size={18} className='hidden sm:block' /> Minimum Order: 12 GBP
                        </button>
                        <button className='bg-[#2B2B2B] w-[260px] text-white rounded-full flex items-center px-3 py-2 md:px-4 md:py-2 font-semibold gap-2'>
                            <TbTruckDelivery size={18} className='hidden sm:block' /> Delivery in 20-25 Minutes
                        </button>
                    </div>
                </div>

                {/* Image and Rating */}
                <div className='relative z-10 w-full md:w-auto mb-10'>
                    <img src={dog} alt="McDonald's Food" className='w-full md:w-[300px] lg:w-[500px] rounded-lg object-cover' />
                    <div className='absolute bottom-2 left-2 bg-white p-2 md:p-3 rounded-lg shadow-lg flex items-center flex-col'>
                        <div className='text-2xl md:text-5xl font-bold text-gray-900'>3.4</div>
                        <div className='ml-1 md:ml-2 text-yellow-500'>
                            ★★★☆☆
                        </div>
                        <div className='ml-1 md:ml-2 text-xs md:text-sm text-gray-500'>
                            1,360 reviews
                        </div>
                    </div>
                </div>

                {/* Bottom Left Button */}
                <div className='absolute bottom-0 left-0'>
                    <button className='bg-[#FF7A00] text-white rounded-r-lg flex items-center px-3 py-2 md:px-4 md:py-2 font-semibold text-xs md:text-sm gap-2'>
                        <IoIosTime /> Open until 3:00 AM
                    </button>
                </div>
            </div>
        </div>
    );
}
