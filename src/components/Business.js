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
                            <h5 className='font-semibold'>Speed Socks ⚡️</h5>
                            <p>Socks created for speed by speed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="flex justify-between items-center">
                        <FaAssistiveListeningSystems className='w-6 h-6' />
                        <div className="text-center">
                            <h5 className='font-semibold'>High Frequency Highway</h5>
                            <p>My app with a library of positive frequencies </p>
                        </div>
                        <FaEthereum className='w-6 h-6' />
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex flex-row-reverse justify-between items-center">
                    <HiBolt className='w-6 h-6' />
                    <div className="p-2 w-full text-center">
                        <h5>Speed Training Playlist</h5>
                        <p className='text-sm'>Get faster for any sport with these speed tips</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex justify-between items-center">
                    <FaKey className='w-6 h-6' />
                    <div className="p-5 w-full text-center">
                        <p className=''>Make your own page like this for free with Pillar</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex justify-between items-center">
                    <FaStar className='w-6 h-6' />
                    <div className="p-5 w-full text-center">
                        <p className=''>Famous Birthdays</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Business;