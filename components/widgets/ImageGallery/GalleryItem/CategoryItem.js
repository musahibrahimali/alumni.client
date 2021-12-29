import React from 'react';

function CategoryItem(props) {
    const {title} = props;
    return (
        <>
            <p className="bg-blue-200 hover:shadow-md capitalize cursor-pointer mx-2 hover:bg-blue-600
                        hover:text-gray-100 px-14 py-2 text-gray-700 dark:bg-blue-400 dark:hover:bg-indigo-600
                        dark:text-gray-200 font-medium tracking-widest transition-all ease-linear duration-200">
                {title}
            </p>
        </>
    );
}

export default CategoryItem;