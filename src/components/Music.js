import React from 'react';

import { FaMusic, FaSpotify} from 'react-icons/fa';
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
                            <h5 className='font-medium text-gray-300'>Wishing - King Han</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6'/>
                    </div>
                    <div className=''>
                    <iframe title='audio' src="https://open.spotify.com/embed/album/1R78rI7RSA3siUu4bBLw09" frameborder="0" allowtransparency="true" allow="encrypted-media" width="100%" height="300"></iframe>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className="flex justify-between items-center">
                    <FaMusic className='w-6 h-6' />
                    <div className="p-3 w-full text-center">
                        <h5 className='font-medium text-gray-300'>Stream My song!</h5>
                        <p className='font-mini'>Available everywhere!</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <TiSocialYoutube className='w-6 h-6' />
                        <div className="p-2 mx-auto">
                            <h5 className='font-medium text-gray-300'>Wishing Music Video</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6'/>
                    </div>
                    <div className=''>
                        <iframe className='w-full h-60 md:h-96' title='youtube-video' src="https://www.youtube.com/embed/bmJFOy5Y0FU?mute=0&autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Music;