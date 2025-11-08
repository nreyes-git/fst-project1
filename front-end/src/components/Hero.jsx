import React from 'react';
import Hero_img from '../assets/hero_image.png';

const Hero = () => {
  return (
    <section className="flex flex-wrap flex-col md:flex-row items-center justify-evenly mt-15">
        <div className='max-w-lg text-center md:text-left'>
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Sit and Shop, we got you!</h1>
            <p className='text-gray-600 text-sm md:text-base mb-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </p>  
            <button className='bg-primary text-white rounded text-sm px-5 py-2 hover:bg-primary-hover'>Shop Now!</button>
        </div>

        <div className="">
            <img src={Hero_img} alt="hero_img" className='w-full max-w-md object-cover'/>
        </div   >
    </section>
  )
}

export default Hero