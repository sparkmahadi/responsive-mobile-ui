import React from 'react';

import { TiSocialYoutube } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';

const ContentDetailsTwo = () => {
    return (
        <div>
            <div className="border-2 rounded-lg my-5">
                <div className="flex items-center">
                    <div className="h-56 relative w-1/2 flex justify-center items-center">
                        <img className="absolute object-cover w-full h-full" src="workout-plan.png" alt='' />
                    </div>
                    <div className="p-5 w-1/2 mx-auto">
                        <button className="bg-white px-5 py-3 text-gray-800 rounded-lg w-full">
                            Buy for $4.99
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex justify-between items-center">
                    <TiSocialYoutube className='w-6 h-6' />
                    <div className="p-2 w-full text-center">
                        <h5 className='text-gray-200'>Speed Training Playlist</h5>
                        <p className='text-sm'>Get faster for any sport with these speed tips</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <TiSocialYoutube className='w-6 h-6' />
                        <div className="p-2 mx-auto">
                            <h5 className='text-gray-200'>Workout Vlog With Batman!</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6' />
                    </div>
                    <div className=''>
                        <iframe className='w-full h-60 md:h-96' title='youtube-video' src="https://www.youtube.com/embed/fJGDnvoLKFA?mute=0&amp;autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

            {/* form */}
            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="text-center mb-6">
                        <h5 className='text-gray-200'>Join the squad</h5>
                        <p className='text-sm'>Know when I drop merch & speed vlogs</p>
                    </div>
                    <div className=''>
                        <input type="text" placeholder="Email" className="bg-transparent border rounded-lg p-2 w-full mb-2" />
                        <input type="number" placeholder="Phone #" className="bg-transparent border rounded-lg p-2 w-full" />
                    </div>
                    <div className="flex justify-center gap-5 my-4 text-sm w-full text-gray-200">
                        <label className="flex items-center gap-2">
                            <input type="radio" value="fan" />
                            <span>I'm a Fan</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" value="brand" />
                            <span>I'm a Brand</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <input type="radio" value="creator" />
                            <span className="form-error">I'm a Creator</span>
                        </label>
                    </div>
                    <div className="p-2 flex justify-center">
                        <button className="bg-white px-10 py-3 text-gray-800 rounded-lg">
                            Submit
                        </button>
                    </div>

                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="flex justify-between items-center">
                        <TiSocialYoutube className='w-6 h-6' />
                        <div className="">
                            <h5 className='text-gray-200'>Racing people for $$$</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentDetailsTwo;