import React, { useState, useEffect } from 'react';
import Story from "./Story";
import AddIcon from '@mui/icons-material/Add';

const StorySection = () => {
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
            <div>
                <div className="w-full h-full flex items-center justify-center space-x-2 overflow-hidden cursor-pointer">
                    {
                        !isLoading ?
                            <div
                                className="w-28 h-48 relative rounded-xl shadow "
                                style={{ backgroundImage: `url('https://picsum.photos/400')` }}>
                                <div
                                    className="w-full absolute flex justify-center"
                                    style={{ bottom: '13%' }}>
                                    <button className="focus:outline-none z-40 w-10 h-10 bg-blue-500 rounded-full border-4 border-white">
                                        <AddIcon className="text-white" />
                                    </button>
                                </div>
                                <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
                                    <p className="text-gray-500 text-sm font-semibold">Create Story</p>
                                </div>
                            </div> :
                            <div className="">
                                <div className="bg-gray-300 w-28 animate-pulse h-48 relative rounded-xl shadow">
                                    <div className="absolute z-30 h-44 rounded bg-gray-100"></div>
                                    <div className="w-full absolute flex justify-center"
                                        style={{ bottom: '13%' }}>
                                        <button className="z-40 w-10 h-10 bg-gray-300 rounded-full border-4 border-white flex justify-center items-center">
                                            <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                                        </button>
                                    </div>
                                    <div className="bg-white z-30 absolute text-center bottom-0 p-2 pt-4 w-full h-auto rounded-b-lg ">
                                        <div className="h-4 bg-gray-200 rounded mb-1"></div>
                                    </div>
                                </div>
                            </div>
                    }
                    <Story isLoading={isLoading} />
                    <Story isLoading={isLoading} />
                    <Story isLoading={isLoading} />
                    <Story isLoading={isLoading} />
                </div>
            </div>
        </>
    );
}

export default StorySection;