import React, {useState} from 'react';
import Image from "next/image";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';

const TestimonialCard = (props) => {
    const {name, position, testimony, image} = props;
    const [border, setBorder] = useState(false);
    return (
        <>
            <div onMouseEnter={() => setBorder(true)} onMouseLeave={() => setBorder(false)}
                 className="w-80 h-auto mx-2 mb-24 flex flex-col md:transform md:hover:-translate-y-4
                 justify-center items-center transition-all ease-linear duration-200 cursor-default">
                <div className={
                    border ?
                        "border-4 border-opacity-100 transition-all ease-linear duration-300 delay-100 border-blue-600 rounded-full z-10 -mb-24 flex justify-center items-center" :
                        "border-4 border-opacity-0 border-blue-600 rounded-full z-10 -mb-24 flex justify-center items-center"
                }>
                    <Image
                        className="rounded-full"
                        src={image} height={150} width={150}
                        alt="testimonial"
                    />
                </div>
                <div className={
                    border ?
                        "relative w-96 bg-white hover:shadow-md dark:bg-gray-900 mt-12 px-8 py-16" :
                        "relative w-96 bg-white dark:bg-gray-900 mt-12 px-8 py-16"
                }>
                    <div className="flex justify-center items-center">
                        <FormatQuoteOutlinedIcon
                            fontSize="large"
                            className="text-gray-400 dark:text-gray-100 text-4xl"
                        />
                    </div>
                    <p className="text-justify text-gray-700 dark:text-gray-200">
                        {testimony}
                    </p>
                </div>
                <div className="bg-blue-800 absolute bottom-0 -mb-10 -mr-20 px-14 py-2">
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

export default TestimonialCard;