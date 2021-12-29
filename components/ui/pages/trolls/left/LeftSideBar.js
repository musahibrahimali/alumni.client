import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import ContentItem from './ContentItem';

const LeftSideBar = () => {
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
            <div className='px-2 pt-3 h-screen w-[300px] max-w[600px] xl:min-w[300px]'>
                <ul className='w-full text-gray-600'>
                    {
                        !isLoading ?
                            <li className='h-full mb-2 space-x-2 flex items-center justify-between cursor-pointer p-2 rounded-md hover:bg-gray-200'>
                                <div>
                                    <Image
                                        className='w-8 h-8 rounded-full'
                                        src='https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/tInzwsw2pVX.png'
                                        alt='user'
                                        width={60}
                                        height={60}
                                    />
                                </div>
                                <div>
                                    <p className='text-sm font-semibold'>
                                        Covid-19 Information Center
                                    </p>
                                </div>
                            </li> :
                            <div className="bg-gray-200 bg-opacity-70 dark:bg-gray-900 p-4 max-w-sm w-44 mx-auto">
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-gray-50 h-10 w-10"></div>
                                    <div className="flex-1 space-y-2 py-1">
                                        <div className="h-2 bg-gray-50 rounded"></div>
                                        <div className="h-2 bg-gray-50 rounded"></div>
                                    </div>
                                </div>
                            </div>
                    }

                    <ContentItem
                        isLoading={isLoading}
                        content="Schools"
                        image="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png"
                    />
                    <ContentItem
                        isLoading={isLoading}
                        content="Memories"
                        image="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeGOdVncp5dfd8VnIICSOpS_a4YXxTz5jX9rhhfFPPmNf61TghDVEocSPLzWo3IV1jJL4XahtkRxrCpGfIR9YWpX"
                    />

                    <ContentItem
                        isLoading={isLoading}
                        content="Pages"
                        image="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png"
                    />

                    <ContentItem
                        isLoading={isLoading}
                        content="Rooms"
                        image="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png"
                    />

                </ul>
            </div>
        </>
    );
}

export default LeftSideBar;