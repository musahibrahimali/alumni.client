import React from 'react';
import Image from "next/image";

const CommitteeCard = (props) => {
    const {name, image, position} = props;
    return (
        <>
            <div className="w-80 h-auto mx-2 mb-24 bg-blue-600 flex flex-col hover:shadow-md md:transform md:hover:-translate-y-4
                 justify-center items-center transition-all ease-linear duration-200 cursor-default">
                <Image className="relative" src={image}  />
                <div className="bg-blue-600 absolute bottom-0 -mb-16 px-12 py-8">
                    <h2 className="text-gray-100 text-center uppercase font-bold text-xl md:text-2xl">
                        {name}
                    </h2>
                    <p className="text-gray-200 text-center capitalize">
                        {position}
                    </p>
                </div>
            </div>
        </>
    );
}

export default CommitteeCard;