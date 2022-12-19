import React from 'react';
import { TiSocialYoutube } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';
import { FaComments } from 'react-icons/fa';

const ContentDetailsThree = () => {
    return (
        <div>
                        <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="md:flex justify-between items-center">
                        <div className='flex justify-between px-5 mb-5'>
                            <FaComments className='w-10 h-10' />
                            <div className="px-5">
                                <h5 className='font-semibold'>Critique your running form 🏃 </h5>
                                <p>$10</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-white px-7 py-3 text-gray-800 rounded-lg w-full">
                                Request Me
                            </button>
                        </div>
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
                        <BsChevronDown className='w-6 h-6' />
                    </div>
                    <div className=''>
                        <iframe className='w-full h-60 md:h-96' title='youtube-video' src="https://www.youtube.com/embed/kFpk7Ho7QEw?mute=0&autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <TiSocialYoutube className='w-6 h-6' />
                        <div className="p-2 mx-auto">
                            <h5 className='font-semibold'>Youtube</h5>
                        </div>
                        <BsChevronDown className='w-6 h-6' />
                    </div>
                    <div className=''>
                        <iframe className='w-full h-60 md:h-96' title='youtube-video' src="https://www.youtube.com/embed/kQPBfyHxK1k?mute=0&autoplay=0" allowFullScreen="allowfullscreen" allow="autoplay; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="md:flex justify-between items-center">
                        <div className='flex justify-between px-5 mb-5'>
                            <FaComments className='w-12 h-12' />
                            <div className="md:w-2/3 px-5 md:px-10">
                                <h5 className='font-semibold'>Link On Pillar</h5>
                                <p className='text-sm'>Have your link on my Pillar page. I have 15k+ visits</p>
                                <p className='text-sm'>$500</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-white px-7 py-3 text-gray-800 rounded-lg w-full">
                                Request Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-5'>
                    <div className="md:flex justify-between items-center">
                    <div className='flex justify-between px-5 mb-5'>
                            <FaComments className='w-12 h-12' />
                            <div className="md:w-2/3 px-5 md:px-10">
                                <h5 className='font-semibold'>Follow Back</h5>
                                <p className='text-sm'>I'll follow you back on ig</p>
                                <p className='text-sm'>$222</p>
                            </div>
                        </div>
                        <div>
                            <button className="bg-white px-7 py-3 text-gray-800 rounded-lg w-full">
                                Request Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentDetailsThree;