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
                    <h5 className="font-medium"> {name} </h5>
                    <p className="text-sm"> {details} </p>
                    <button className="bg-white px-5 py-3 text-gray-800 rounded-lg mt-6">
                        <span className='flex items-center gap-3'>
                            <p>Buy for ${price}</p>
                            <BsBoxArrowUpRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NFTs;