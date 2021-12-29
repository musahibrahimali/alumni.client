import React from 'react';
import Image from "next/image";
import styles from './JobCard.module.css';

const JobCard = (props) => {
    const { logo, title, text, isExpired } = props;
    return (
        <>
            <div className="flex flex-col justify-center items-center transition-all ease-linear duration-300 delay-100 border border-gray-100 dark:border-gray-600 bg-white dark:bg-gray-900 hover:shadow-md px-4 py-4">
                <div className="mb-4 bg-transparent dark: bg-white rounded-full p-4 h-24 w-24 flex justify-center items-center">
                    <Image src={logo} alt="logo" height={80} width={100} />
                </div>
                <div className="flex flex-col justify-between items-center">
                    <h1 className="uppercase py-2 px-4 text-gray-900 dark:text-gray-200 mb-2 text-center hover:text-indigo-500 cursor-pointer font-bold">
                        {title}
                    </h1>
                    <p className="text-gray-700 dark:text-gray-200 text-justify">
                        {text}
                    </p>
                    <p className={isExpired ? styles.expired : styles.apply}>
                        {isExpired ? "Expired" : "apply now"}
                    </p>
                </div>
            </div>
        </>
    );
}

export default JobCard;