import React from 'react';
import { MdVerified, MdLocationPin, MdEmail } from 'react-icons/md';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { FaTwitch, FaTiktok, FaSpotify, FaAppStoreIos} from 'react-icons/fa';
import { TiSocialYoutube } from 'react-icons/ti';
import { BsDiscord, BsLinkedin } from 'react-icons/bs';

const Profile = () => {
    return (
        <div className='text-gray-400 relative flex flex-col items-center pt-7 font-tertiary'>
            <div className="avatar">
                <div className="w-24 rounded-full">
                    <img src="man.png" alt='' />
                </div>
            </div>
            <div className='flex items-center justify-center gap-1'>
                <h1 class="text-xl font-semibold text-white"> J Johnson Jr </h1>
                <MdVerified className='w-5 h-5 mt-1 text-blue-600' />
            </div>
            <p class="mt-1"> Created by different elements ⚛️ Athlete & CEO </p>
            <p class="mt-1 flex items-center gap-1"><MdLocationPin /><span>Raleigh, NC</span></p>

            <div className='grid grid-cols-5 md:grid-cols-10 gap-5 my-2'>
                <div className='border-white rounded-full p-3 border-2'>
                    <MdEmail className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <AiFillInstagram className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <FaTwitch className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <AiOutlineTwitter className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <TiSocialYoutube className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <BsDiscord className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <FaTiktok className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <BsLinkedin className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <FaSpotify className='w-6 h-6'/>
                </div>
                <div className='border-white rounded-full p-3 border-2'>
                    <FaAppStoreIos className='w-6 h-6'/>
                </div>
            </div>
        </div>
    );
};

export default Profile;