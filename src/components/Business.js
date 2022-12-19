import React from 'react';

import { FaAssistiveListeningSystems, FaEthereum, FaStar, FaKey } from 'react-icons/fa';
import { HiBolt } from 'react-icons/hi2';

const Business = () => {
    return (
        <div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <h5 className='font-medium text-gray-300'>Speed Socks ⚡️</h5>
                            <p>Socks created for speed by speed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="flex justify-between items-center gap-3">
                        <FaAssistiveListeningSystems className='w-6 h-6' />
                        <div className="text-center">
                            <h5 className='font-medium text-gray-300'>High Frequency Highway</h5>
                            <p className='font-mini'>My app with a library of positive frequencies </p>
                        </div>
                        <FaEthereum className='w-6 h-6' />
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 p-5">
                <div className="flex flex-row-reverse justify-between items-center">
                    <HiBolt className='w-6 h-6' />
                    <div className="w-full text-center">
                        <h5 className='font-medium text-gray-300'>Purium Super Food</h5>
                        <p className='font-mini'>Organic whole food so you can perform at your best</p>
                    </div>
                    <FaEthereum className='w-6 h-6 invisible'/>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 p-5">
                <div className="flex justify-between items-center gap-3">
                    <FaKey className='w-6 h-6' />
                    <div className="w-full text-center">
                        <h5 className='font-medium text-gray-300'>Make your own page like this for free with Pillar</h5>
                    </div>
                    <FaEthereum className='w-6 h-6 invisible' />
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 p-5">
                <div className="flex justify-between items-center gap-3">
                    <FaStar className='w-6 h-6' />
                    <div className="w-full text-center">
                        <h5 className='font-medium text-gray-300'>Famous Birthdays</h5>
                    </div>
                    <FaEthereum className='w-6 h-6 invisible' />
                </div>
            </div>

        </div>
    );
};

export default Business;