import React from 'react';
import Image from 'next/image';

const ContentItem = (props) => {
    const { image, content, isLoading } = props;
    return (
        <>
            {
                !isLoading ?
                    <li className="h-full w-full mb-2 flex items-center justify-content cursor-pointer space-x-2 py-2 px-4 rounded-md hover:bg-gray-200">
                        <div>
                            <Image
                                className="w-10 h-10 rounded-full"
                                src={image}
                                width={40}
                                height={40}
                                alt='user'
                            />
                        </div>
                        <div>
                            <p className='text-sm font-semibold'>{content}</p>
                        </div>
                    </li> :
                    <div className="bg-gray-200 bg-opacity-70 dark:bg-gray-900 px-4 mb-2 mt-2 py-2 max-w-sm mx-auto w-44">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-gray-50 h-10 w-10"></div>
                            <div className="flex-1 space-y-2 py-1">
                                <div className="h-2 bg-gray-50 rounded"></div>
                                <div className="h-2 bg-gray-50 rounded"></div>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ContentItem;
