import React from 'react';

const PostMedia = (props) => {
    const { title, icon, onClick } = props;
    return (
        <>
            <div onClick={onClick} className="bg-transparent dark:hover:bg-gray-200 dark:hover:text-gray-700 rounded cursor-pointer text-gray-700 dark:text-gray-200 hover:bg-gray-200 flex flex-row justify-between ite px-8 py-2 mx-2">
                {icon}
                <p className="mx-2 capitalize text-sm">
                    {title}
                </p>
            </div>
        </>
    )
}

export default PostMedia;
