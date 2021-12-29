import React from 'react';

function PopularTag({url, tag}) {
    return (
        <div>
            <a href={url.toString()}
               className="flex items-center capitalize justify-center bg-white hover:shadow-md px-4 py-2 mx-1
                         text-gray-700 transition-colors border border-gray-200 dark:border-gray-700
                         duration-200 transform bg-white dark:bg-gray-800 dark:text-gray-200
                         hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-gray-200">
                {tag}
            </a>
        </div>
    );
}

export default PopularTag;