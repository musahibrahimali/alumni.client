import React from 'react';
import Image from 'next/image';

const ChatroomItem = (props) => {
    const { image, room, isLoading } = props;

    return (
        <>
            {
                !isLoading ?
                    <li className="h-full mb-1 flex items-center justify-content cursor-pointer space-x-2 px-2 py-1 rounded-md hover:bg-gray-200 hover:text-blue-600">
                        <div>
                            <Image
                                className="w-8 h-8 rounded-full"
                                src={image}
                                alt="chatroom"
                                width={40}
                                height={40}
                            />
                        </div>
                        <div>
                            <p className="text-sm font-semibold">
                                {room}
                            </p>
                        </div>
                    </li> :
                    <div className="bg-gray-200 bg-opacity-70 dark:bg-gray-900 p-4 max-w-sm w-52 mx-auto mt-4 mb-4">
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

export default ChatroomItem;
