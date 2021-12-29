import React, { useEffect, useState } from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatroomItem from './ChatroomItem';

const RightSideBar = () => {
    const [isLoading, setIsLoading] = useState(true);

    // handle isLoading
    const handleIsLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        handleIsLoading();
    }, []);

    return (
        <>
            <div className="px-2 pt-3 h-screen max-w[600px] xl:min-w[300px]">
                <div className="w-full text-gray-600 border-b-2 pb-2 mb-2 border-gray-300">
                    <p className="font-semibold mb-2">Your Streams</p>
                    <ul className="text-gray-500 text-sm flex flex-col justify-between">
                        <li className="h-8 mb-2 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200 hover:text-blue-600">
                            <div>
                                <NotificationsIcon />
                            </div>
                            <div>
                                <p className="text-xs">Notification</p>
                            </div>
                        </li>
                        <li className="h-8 flex items-center justify-content cursor-pointer space-x-3 p-2 rounded-md hover:bg-gray-200 hover:text-blue-600">
                            <div>
                                <NotificationsActiveIcon />
                            </div>
                            <div>
                                <p className="text-xs">Create promotion</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="flex justify-between items-center text-gray-600">
                        <div className="mr-10">
                            <p className="text-sm font-semibold cursor-default">rooms</p>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500">
                            <button className="w-8 h-8 flex justify-center items-center focus:outline-none rounded-full hover:bg-gray-200 hover:text-red-600">
                                <YouTubeIcon />
                            </button>
                            <button className="w-8 h-8 flex justify-center items-center focus:outline-none rounded-full hover:bg-gray-200 hover:text-blue-600">
                                <SearchIcon />
                            </button>
                            <button className="w-8 h-8 flex justify-center items-center focus:outline-none rounded-full hover:bg-gray-200 hover:text-green-600">
                                <MoreHorizIcon />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <ul className="w-full text-gray-600">
                            <ChatroomItem
                                isLoading={isLoading}
                                room="Amass Phobia"
                                image="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
                            />
                            <ChatroomItem
                                isLoading={isLoading}
                                room="Bleeoo"
                                image="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
                            />
                            <ChatroomItem
                                isLoading={isLoading}
                                room="Odade3"
                                image="https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png"
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RightSideBar;