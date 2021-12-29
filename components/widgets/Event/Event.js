import React from 'react';
import Image from "next/image";
import {Event1} from "../../../assets/assets";

const Event = (props) => {
    return (
        <>
            <div className="flex flex-col justify-between py-8">
                <div className="flex justify-between bg-blue-800 px-12 py-8">
                    <div className="px-4 flex flex-col justify-center items-center">
                        <Image src={Event1} width={2000} height={1300} alt="Event" />
                        <div className="bg-white text-center px-4 py-4 border-b-8 border-black w-full">
                            <h3 className="text-gray-700 text-lg md:text-2xl font-bold">
                                It&apos;s 27th February 2022
                            </h3>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-row mb-4">
                            {/* days */}
                            <div className="flex flex-col mx-2 justify-center items-center">
                                <h3 className="text-white font-bold mt-2">
                                    Days
                                </h3>
                                <p className="bg-black text-white px-4 py-2 border border-gray-200">
                                    00
                                </p>
                            </div>

                            {/* hours */}
                            <div className="flex flex-col mx-2 justify-center items-center">
                                <h3 className="text-white font-bold mt-2">
                                    Hr
                                </h3>
                                <p className="bg-black text-white px-4 py-2 border border-gray-200">
                                    00
                                </p>
                            </div>

                            {/* minutes */}
                            <div className="flex flex-col mx-2 justify-center items-center">
                                <h3 className="text-white font-bold mt-2">
                                    Min
                                </h3>
                                <p className="bg-black text-white px-4 py-2 border border-gray-200">
                                    00
                                </p>
                            </div>

                            {/* seconds */}
                            <div className="flex flex-col mx-2 justify-center items-center">
                                <h3 className="text-white font-bold mt-2">
                                    Sec
                                </h3>
                                <p className="bg-black text-white px-4 py-2 border border-gray-200">
                                    00
                                </p>
                            </div>
                            <div className="flex justify-end items-end mx-4">
                                <p className="text-white text-lg md:text-2xl font-bold">
                                    Remaining
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col text-gray-50 mt-4 mb-4">
                            <h1 className="text-2xl md:text-4xl tracking-wider font-bold mb-2">
                                We are going to arrange a get together!
                            </h1>
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi commodi
                                iusto minima molestiae, quae. Accusamus at blanditiis ea earum eligendi molestias
                                nemo perspiciatis praesentium quae, qui, quibusdam sit veritatis!
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi commodi
                                iusto minima molestiae, quae. Accusamus at blanditiis ea earum eligendi molestias
                                nemo perspiciatis praesentium quae, qui, quibusdam sit veritatis!
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="/events" className="px-12 py-4 bg-blue-700 text-white hover:bg-white hover:text-gray-900
                                               border border-gray-200 uppercase font-bold text-xl md:text-2xl">
                                Join Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;