import React from 'react';
import PageNumber from "./PageNumber/PageNumber";

function PageNavigation() {
    return (
        <>
            <div className="w-full h-full p-2 mt-8 mb-4 flex justify-center items-center">
                <div className="flex">
                    <a href="#" className="flex items-center px-4 py-2 mx-1 text-gray-500 bg-white
                                cursor-not-allowed dark:bg-gray-800 dark:text-gray-600">
                        previous
                    </a>

                    <PageNumber number={1} />
                    <PageNumber number={2} />
                    <PageNumber number={3} />

                    <a href="#"
                       className="flex items-center px-4 py-2 mx-1 text-gray-700 transition-colors
                                duration-200 transform bg-white dark:bg-gray-800 dark:text-gray-200
                                hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white
                                dark:hover:text-gray-200 items-center justify-center bg-white
                                hover:shadow-md items-center border border-gray-200 dark:border-gray-700">
                        Next
                    </a>
                </div>
            </div>
        </>
    );
}

export default PageNavigation;