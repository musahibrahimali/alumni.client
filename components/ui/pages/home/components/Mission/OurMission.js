import React from 'react';

const OurMission = () => {
    return (
        <>
            {/*<Image src={RespFour} />*/}
            <div className="h-full w-full mt-24 py-4 px-4 bg-white dark:bg-dark-color-900 my-4 flex flex-col md:flex-row
                justify-center md:justify-center items-center mb-16">
                <div className="bg-mission bg-no-repeat bg-cover h-banner w-1/3 mx-1">

                </div>
                <div className="flex justify-center items-center bg-white dark:bg-dark-color-900 -ml-32 h-full w-2/3
                    md:border-8 border-gray-200 dark:border-gray-700 mx-1">
                    <div className="px-4 py-8 flex flex-col justify-center
                        md:justify-between items-center w-full h-full md:mx-8 md:my-6 md:px-12 md:py-6">
                        <h1 className="flex md:flex-col justify-center sm:items-center md:justify-center
                            mb-1 md:mb-4 text-2xl font-bold md:text-4xl text-gray-800 dark:text-gray-100">
                            Our Mission
                        </h1>
                        <p className="flex justify-center items-center text-justify text-gray-700 text-sm
                        dark:text-gray-100 font-normal p-4 md:p-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur dolor
                            eos eum exercitationem fugit incidunt odio placeat quaerat, quas quod reiciendis repellat
                            sequi velit voluptatem. Dolore laborum laudantium nostrum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur dolor
                            eos eum exercitationem fugit incidunt odio placeat quaerat, quas quod reiciendis repellat
                            sequi velit voluptatem. Dolore laborum laudantium nostrum.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur dolor
                            eos eum exercitationem fugit incidunt odio placeat quaerat, quas quod reiciendis repellat
                            sequi velit voluptatem. Dolore laborum laudantium nostrum.
                        </p>
                        <p className="flex justify-center items-center text-center text-white w-44 mt-8 rounded
                            md:mt-1 font-bold px-8 py-2 bg-blue-500 cursor-pointer hover:bg-blue-400 hover:text-gray-200">
                            Learn More
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurMission;