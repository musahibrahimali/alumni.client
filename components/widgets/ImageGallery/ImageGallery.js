import React from 'react';
import Image from 'next/image';
import GalleryItem from "./GalleryItem/GalleryItem";
import CategoryItem from "./GalleryItem/CategoryItem";

const ImageGallery = () => {
    return (
        <>
            <section className="text-gray-700 h-full dark:text-gray-100 body-font bg-blue-50 dark:bg-gray-900">
                <div className="flex justify-center items-center w-full py-8 px-4">
                    <h1 className="text-xl md:text-6xl text-indigo-600 font-bold uppercase dark:text-gray-100">
                        Our Gallery
                    </h1>
                </div>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap justify-center items-center flex-row text-center w-full mb-20">
                        <p className="bg-blue-600 hover:shadow-md capitalize cursor-pointer mx-2 hover:bg-blue-500
                        hover:text-gray-100 px-14 py-2 text-gray-50 dark:hover:bg-indigo-400 dark:bg-indigo-600
                        dark:text-gray-200 font-medium tracking-wide">
                            all
                        </p>
                        <CategoryItem title={"old memories"} />
                        <CategoryItem title={"events"} />
                        <CategoryItem title={"picnics"} />
                        <CategoryItem title={"recent"} />
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                        <GalleryItem />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ImageGallery;