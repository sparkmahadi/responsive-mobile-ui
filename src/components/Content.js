import React from 'react';
import ContentDetails from './ContentDetails';
import { TiSocialYoutube } from 'react-icons/ti';
import { BsChevronDown } from 'react-icons/bs';

const Content = () => {
    const contents = [
        {
            name: 'Weekly Training',
            details: 'Get the inside view of what I did for training every week! FULL BREAKDOWN',
            img: 'weekly-training.png'
        },
        {
            name: 'Weekly Meals',
            details: 'Each week I will document what I eat in an organised fashion',
            img: 'food.png'
        },
        {
            name: 'Daily Quote!',
            details: 'A quote that will empower you to achieve your dreams!',
            img: 'man.png'
        },
    ]
    return (
        <div className='text-white pb-6'>
            <h3 className="font-bold mb-2 mt-6 text-center"> Exclusive Content </h3>
            <h3 className="block-section-header font-bold mb-2 mt-6 text-center"> Get access to all the following content⬇️ </h3>


            <div className='grid grid-cols-1 gap-5'>
                {
                    contents.map((content, i) => <ContentDetails key={i} content={content}></ContentDetails>)
                }
            </div>

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
                        <h5>Speed Training Playlist</h5>
                        <p className='text-sm'>Get faster for any sport with these speed tips</p>
                    </div>
                </div>
            </div>

            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="flex justify-between items-center mb-6">
                        <TiSocialYoutube className='w-6 h-6' />
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

                {/* form */}
            <div className="border-2 rounded-lg my-5 px-5">
                <div className='py-3'>
                    <div className="text-center mb-6">
                        <h5>Join the squad</h5>
                        <p className='text-sm'>Know when I drop merch & speed vlogs</p>
                    </div>
                    <div className=''>
                        <input type="text" placeholder="Email" className="bg-transparent border rounded-lg p-2 w-full mb-2" />
                        <input type="number" placeholder="Phone #" className="bg-transparent border rounded-lg p-2 w-full" />
                    </div>
                    <div className="flex justify-center gap-5 my-4 text-sm w-full">
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
                <div className="flex justify-between items-center">
                    <TiSocialYoutube className='w-6 h-6' />
                    <div className="p-2 w-full text-center">
                        <h5>Speed Training Playlist</h5>
                        <p className='text-sm'>Get faster for any sport with these speed tips</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Content;