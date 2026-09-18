import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
            <h2 className='text-5xl font-bold'>Learning of your children</h2>
            <p className='font-bold'>buy every toy with up to 15% discount</p>
            <button className='btn btn-primary btn-outline'>Explore more</button>
            </div>
            <div className='flex-1'>
                <Image 
                alt='banner'
                src={'/assets/banner-2.png'}
                width={500}
                height={100}></Image>
            </div>
        </div>
    );
};

export default Banner;