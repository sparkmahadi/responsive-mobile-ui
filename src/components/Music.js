import React from 'react';

import { FaTwitch, FaMusic, FaSpotify, FaAppStoreIos} from 'react-icons/fa';
import { BsChevronDown} from 'react-icons/bs';
import { TiSocialYoutube } from 'react-icons/ti';

const Music = () => {
    return (
        <div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <FaSpotify className='w-6 h-6' />
                        <div className="p-2 mx-auto">
                            <h5>Workout Vlog With Batman!</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6'/>
                    </div>
                    <div className=''>
                        <iframe className='w-full h-96' title='youtube-video' src="https://www.youtube.com/embed/fJGDnvoLKFA?mute=0&amp;autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex justify-between items-center">
                    <FaMusic className='w-6 h-6' />
                    <div className="p-3 w-full text-center">
                        <h5 className='font-semibold'>Stream My song!</h5>
                        <p className='text-sm'>Available everywhere!</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <TiSocialYoutube className='w-6 h-6' />
                        <div className="p-2 mx-auto">
                            <h5 className='font-semibold'>Wishing Music Video</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6'/>
                    </div>
                    <div className=''>
                        <iframe className='w-full h-96' title='youtube-video' src="https://www.youtube.com/embed/bmJFOy5Y0FU?mute=0&autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Music;