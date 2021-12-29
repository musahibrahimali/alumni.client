import React from 'react';
import Image from "next/image";

function ResponsibilityCard(props) {
    const {image, tittle, text} = props;

    return (
        <>
            <div className="flex flex-col px-4 pb-4 my-8 md:my-12 justify-between bg-white dark:bg-dark-color-900
                hover:shadow-md md:transform md:hover:-translate-y-8 cursor-default items-center transition-all
                ease-linear duration-200 delay-100 mx-1 p-2">
                <div className="-mt-16 bg-white bg-opacity-10 shadow-sm rounded-full image__shadow">
                    <Image src={image} alt="responsibility"/>
                </div>
                <h2 className="text-lg md:text-2xl mt-4 text-center capitalize text-gray-900 dark:text-gray-100">
                    {tittle}
                </h2>
                <p className="mt-4 text-justify text-gray-700 dark:text-gray-100">
                    {text}
                </p>
            </div>
        </>
    );
}

export default ResponsibilityCard;