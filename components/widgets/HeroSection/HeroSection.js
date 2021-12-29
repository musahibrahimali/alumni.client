import React from 'react';

const HeroSection = (props) => {
    const { title, url, message } = props;
    return (
        <div className="flex flex-col justify-center items-center w-full h-96 bg-center bg-hero-section bg-no-repeat bg-cover">
            <h1 className="text-lg md:text-4xl text-blue-500 font-bold uppercase mb-2">
                {title}
            </h1>

            <p className="text-gray-200 darK:text-gray-100 text-center mb-2 text-lg md:text-3xl">
                {message}
            </p>

            <a href={url} className="bg-blue-600 hover:bg-blue-500 mt-2 text-white px-12 py-4 text-xl md:text-2xl uppercase">
                Let&apos;s see
            </a>
        </div>
    );
}

export default HeroSection;