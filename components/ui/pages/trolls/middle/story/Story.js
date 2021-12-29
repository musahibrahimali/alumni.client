import { Avatar } from '@mui/material';
import React from 'react';

const Story = (props) => {
    const { isLoading } = props;
    return (
        <>
            {
                !isLoading ?
                    <div
                        className='w-28 h-48 relative rounded-xl p-3 to-pink-500 shadow cursor-pointer transform hover:scale-95 transition-transform duration-300 delay-100'
                        style={{ backgroundImage: `url('https://picsum.photos/400')` }}
                    >
                        <div className='absolute'>
                            <Avatar className="border-4 border-blue-600" src="https://picsum.photos/400" />
                        </div>
                        <div className='absolute text-center' style={{ bottom: '5%' }}>
                            <p className='text-white font-semibold'>Saiful Islam</p>
                        </div>
                    </div> :
                    <div className="">
                        <div className="bg-gray-300 w-28 animate-pulse h-48 relative rounded-xl shadow">
                            <div className="absolute z-30 h-44 rounded bg-gray-100"></div>
                            <div className="w-full absolute flex justify-center"
                                style={{ bottom: '75%', right: '25%' }}>
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
        </>
    );
};

export default Story;
