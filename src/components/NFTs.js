import React from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const NFTs = ({data}) => {
    const {name, img, details, price} = data;
    return (
        <div className="border-2 rounded-lg">
            <div className="flex">
                <div className="relative w-1/3 flex-shrink-0 flex justify-center items-center">
                    <img className="absolute object-cover w-full h-full" src={img} alt='' />
                </div>
                <div className="p-5">
                    <h5 className="font-medium text-gray-300"> {name} </h5>
                    <p className="font-mini"> {details} </p>
                    <button className="bg-white px-5 py-3 text-gray-800 rounded-lg mt-6">
                        <span className='flex items-center justify-center gap-3'>
                            <p className='whitespace-nowrap'>Buy for ${price}</p>
                            <BsBoxArrowUpRight className='w-3 h-3'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NFTs;