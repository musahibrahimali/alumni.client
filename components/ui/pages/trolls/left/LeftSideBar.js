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
            <div className="px-2 pt-3 h-full w-full">
                <ul className="w-full text-gray-600">
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