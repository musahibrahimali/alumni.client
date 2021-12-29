import React from 'react';
import Image from 'next/image';

function EventCard(props) {
    return (
        <>
            <div className="w-full h-full mx-auto">
                <div className="bg-white hover:shadow-lg border border-gray-200 max-w-sm mb-5
                                transform md:hover:-translate-y-8 transition-all ease-linear duration-300 delay-100">
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://flowbite.com/docs/images/blog/image-1.jpg"
                            // layout="fill"
                            width={800}
                            height={600}
                            alt="placeholder image"/>
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="font-normal text-gray-700 mb-3">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                                    font-medium text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                            Read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventCard;