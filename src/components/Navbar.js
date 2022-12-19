import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket, faHeart } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
           window.removeEventListener("scroll", listenToScroll);
      }, [])
      const listenToScroll = () => {
        const winScroll = document.body.scrollTop ||
            document.documentElement.scrollTop;
      
        if (winScroll > 60) {
           isVisible &&      // to limit setting state only the first time
             setIsVisible(false);
        }
        else {
             setIsVisible(true);
        }
      };
    return (
        <div className=''>
            <div className="fixed top-5 right-5 left-5 md:left-10 md:right-10 max-w-2xl mx-auto z-20">
                <div className="flex justify-between">
                    <div>
                        <button className="rounded-full h-10 w-10 bg-white relative">
                            <FontAwesomeIcon icon={faArrowUpFromBracket} />
                        </button>
                    </div>
                    <div>
                        <button className="inline-flex items-center rounded-full override-default h-10 pl-3 pr-4 bg-white text-blue-500">
                        <FontAwesomeIcon icon={faHeart} />
                        <span className={`text-xs sm:font-mini ml-2 font-bold ${isVisible || 'hidden lg:block'}`}>Subscribe</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;