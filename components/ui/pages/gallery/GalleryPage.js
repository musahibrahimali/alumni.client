import React, { useState } from 'react';
import Image from 'next/image';
import { HeroSection } from "../../../widgets/widgets";

function GalleryPage() {
    const [category, setCategory] = useState('all');
    return (
        <>
            <HeroSection
                url={"/client/gallery"}
                title={"Gallery"}
                message={"Alumni Needs enables you to harness the power of your alumni network. Whatever may be the need"}
            />
            {/* general gallery */}
            <div className="flex flex-col justify-between items-center py-24 bg-white dark:bg-gray-900">
                <div className="border-b-4 border-blue-600 w-full flex justify-center items-center">
                    <p onClick={() => { setCategory("all") }}
                        className={
                            category === "all" ?
                                "bg-blue-600 cursor-pointer w-28 text-white capitalize font-bold dark:text-gray-200 mx-4 px-4 py-4 text-center" :
                                "bg-blue-200 cursor-pointer w-28 text-black capitalize font-bold dark:text-gray-200 mx-4 px-4 py-4 text-center"
                        }>
                        All
                    </p>

                    <p onClick={() => { setCategory("seminar") }}
                        className={
                            category === "seminar" ?
                                "bg-blue-600 cursor-pointer w-28 text-white capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center" :
                                "bg-blue-200 cursor-pointer w-28 text-black capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center"
                        }>
                        Seminar
                    </p>

                    <p onClick={() => { setCategory("event") }}
                        className={
                            category === "event" ?
                                "bg-blue-600 cursor-pointer w-28 text-white capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center" :
                                "bg-blue-200 cursor-pointer w-28 text-black capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center"
                        }>
                        Event
                    </p>

                    <p onClick={() => { setCategory("picnic") }}
                        className={
                            category === "picnic" ?
                                "bg-blue-600 cursor-pointer w-28 text-white capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center" :
                                "bg-blue-200 cursor-pointer w-28 text-black capitalize font-bold dark:text-gray-700 mx-4 px-4 py-4 text-center"
                        }>
                        Picnic
                    </p>
                </div>

                <div>
                    <div className="text-gray-600 py-12">
                        <div className="container shadow-md dark:bg-gray-900 px-5 py-12 flex flex-wrap">
                            <div className="flex flex-col w-full mb-20 flex-wrap">
                                <div className="flex justify-between items-center py-8">
                                    <h1 className="text-2xl md:text-4xl cursor-pointer font-normal text-gray-700 dark:text-gray-100 mb-4">
                                        <span className="border-b pb-4 border-gray-700 dark:border-gray-400">
                                            Our last Meetup in
                                        </span> 2018
                                    </h1>
                                    <p className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-8 py-4 text-white capitalize font-medium">
                                        view album
                                    </p>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200">
                                    Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac
                                    massa at ligula laoreet iaculis. Praesent ac massa at ligula laoreet iaculis.
                                    sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
                                    ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.
                                </p>
                            </div>
                            <div className="flex flex-wrap md:-m-2 -m-1">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/500x300"
                                            height={300} width={500}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/501x301"
                                            height={301} width={501}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/600x360"
                                            height={360} width={600}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/601x361"
                                            height={361} width={601}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/502x302"
                                            height={302} width={502}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/503x303"
                                            height={303} width={503}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container shadow-md dark:bg-gray-900 mt-24 px-5 py-12 flex flex-wrap">
                            <div className="flex flex-col w-full mb-20 flex-wrap">
                                <div className="flex justify-between items-center py-8">
                                    <h1 className="text-2xl cursor-pointer md:text-4xl font-normal text-gray-700 dark:text-gray-100 mb-4">
                                        <span className="border-b pb-4 border-gray-700 dark:border-gray-400">
                                            Our last Meetup in
                                        </span> 2019
                                    </h1>
                                    <p className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-8 py-4 text-white capitalize font-medium">
                                        view album
                                    </p>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200">
                                    Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac
                                    massa at ligula laoreet iaculis. Praesent ac massa at ligula laoreet iaculis.
                                    sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
                                    ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.
                                </p>
                            </div>
                            <div className="flex flex-wrap md:-m-2 -m-1">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/500x300"
                                            height={300} width={500}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/501x301"
                                            height={301} width={501}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/600x360"
                                            height={360} width={600}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/601x361"
                                            height={361} width={601}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/502x302"
                                            height={302} width={502}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/503x303"
                                            height={303} width={503}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container shadow-md dark:bg-gray-900 mt-24 px-5 py-12 flex flex-wrap">
                            <div className="flex flex-col w-full mb-20 flex-wrap">
                                <div className="flex justify-between items-center py-8">
                                    <h1 className="text-2xl cursor-pointer md:text-4xl font-normal text-gray-700 dark:text-gray-100 mb-4">
                                        <span className="border-b pb-4 border-gray-700 dark:border-gray-400">
                                            Our last Meetup in
                                        </span> 2020
                                    </h1>
                                    <p className="bg-blue-600 hover:bg-blue-500 cursor-pointer px-8 py-4 text-white capitalize font-medium">
                                        view album
                                    </p>
                                </div>
                                <p className="text-gray-700 dark:text-gray-200">
                                    Etiam vitae tortor. Curabitur nisi. In hac habitasse platea dictumst. Praesent ac
                                    massa at ligula laoreet iaculis. Praesent ac massa at ligula laoreet iaculis.
                                    sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis
                                    ante odio sit amet eros. Nullam quis ante. Curabitur vestibulum.
                                </p>
                            </div>
                            <div className="flex flex-wrap md:-m-2 -m-1">
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/500x300"
                                            height={300} width={500}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/501x301"
                                            height={301} width={501}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/600x360"
                                            height={360} width={600}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap w-1/2">
                                    <div className="md:p-2 p-1 w-full">
                                        <Image
                                            className="w-full h-full object-cover object-center block"
                                            src="https://dummyimage.com/601x361"
                                            height={361} width={601}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/502x302"
                                            height={302} width={502}
                                            alt="gallery"
                                        />
                                    </div>
                                    <div className="md:p-2 p-1 w-1/2">
                                        <Image
                                            className="w-full object-cover h-full object-center block"
                                            src="https://dummyimage.com/503x303"
                                            height={303} width={503}
                                            alt="gallery"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default GalleryPage;