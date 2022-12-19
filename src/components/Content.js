import React from 'react';
import ContentDetails from './ContentDetails';
import Business from './Business';
import Music from './Music';
import NFTs from './NFTs';
import ContentDetailsTwo from './ContentDetailsTwo';
import ContentDetailsThree from './ContentDetailsThree';

const Content = () => {
    const contents = [
        {
            name: 'Weekly Training',
            details: 'Get the inside view of what I did for training every week! FULL BREAKDOWN',
            img: 'weekly-training.png',
            imgPhone: 'weekly-training-phone.png',
        },
        {
            name: 'Weekly Meals',
            details: 'Each week I will document what I eat in an organised fashion',
            img: 'food.png',
            imgPhone: 'food-phone.png',
        },
        {
            name: 'Daily Quote!',
            details: 'A quote that will empower you to achieve your dreams!',
            img: 'man.png',
            imgPhone: 'man-phone.png',
        },
    ]

    const nft = [
        {
            name: 'J Johnson Jr on the moon',
            details: 'Buy a collectible 1 of 1 NFT designed by me!',
            img: 'nft1.png',
            price: 777
        },
        {
            name: " J Johnson Jr's Dream",
            details: 'Buy a collectible 1 of 1 NFT designed by me!',
            img: 'nft2.png',
            price: 777
        },
        {
            name: " Nike ZoomX Invincible Run Flyknit",
            details: ' New Nike running Shoes 💨 ',
            img: 'nft3.jfif',
            price: 180
        }
    ]

    return (
        <div className='text-gray-300 pb-5'>
            <h3 className="font-bold mb-2 mt-6 text-center text-xl text-white"> Exclusive Content </h3>
            <h3 className="block-section-header font-bold mb-2 mt-6 text-center text-lg text-white"> Get access to all the following content⬇️ </h3>


            <div className='grid grid-cols-1 gap-5'>
                {
                    contents.map((content, i) => <ContentDetails key={i} content={content}></ContentDetails>)
                }
            </div>

            <ContentDetailsTwo></ContentDetailsTwo>

            <h3 className='text-center text-xl font-medium text-white'>Business</h3>
            <Business></Business>

            <h3 className='text-center text-xl font-medium text-white'>Music</h3>
            <Music></Music>

            <h3 className='text-center text-xl font-medium mb-5 text-white'>NFT's</h3>
            <div className='grid grid-cols-1 gap-5'>
                {
                    nft.map((data, i) => <NFTs key={i} data={data}></NFTs>)
                }
            </div>

            <ContentDetailsThree></ContentDetailsThree>

        </div>
    );
};

export default Content;