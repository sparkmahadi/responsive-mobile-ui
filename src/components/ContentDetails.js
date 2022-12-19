import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';

const ContentDetails = ({ content }) => {
    const { name, img, imgPhone, details } = content;
    return (
        <div className="border-2 rounded-lg">
            <div className="flex">
                <div className="relative w-1/3 flex-shrink-0 flex justify-center items-center">
                    <img className="absolute object-cover w-full h-full hidden md:block" src={img} alt='' />
                    <img className="absolute object-cover w-full h-full md:hidden" src={imgPhone} alt='' />
                </div>
                <div className="p-5">
                    <h5 className="font-medium text-gray-300"> {name} </h5>
                    <p className="font-mini text-gray-300"> {details} </p>
                    <button className="bg-white px-5 py-3 text-gray-800 rounded-lg mt-6">
                        <span className='flex items-center gap-3'>
                            <AiTwotoneHeart />
                            <p className='hidden md:block'>Subscribe to Unlock</p>
                            <p className='md:hidden'>Subscribe</p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentDetails;