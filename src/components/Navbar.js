import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faHeart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <div className=''>
            <div className="fixed right-[580px] left-[580px] z-20">
                <div className="flex justify-between">
                    <div>
                        <button className="rounded-full h-10 w-10 bg-white relative">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center rounded-full override-default h-10 pl-3 pr-4 bg-white text-blue-500">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className="text-xs sm:text-sm ml-2 font-bold">Subscribe</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;