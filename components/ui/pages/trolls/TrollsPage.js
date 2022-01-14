import React from 'react';
import LeftSideBar from "./left/LeftSideBar";
import MiddleContent from "./middle/MiddleContent";
import RightSideBar from "./right/RightSideBar";

function TrollsPage() {
    return (
        <>
            <div className="bg-events-color dark:bg-gray-900 flex flex-row justify-between">
                <div className="w-1/4">
                    {/* left side bar */}
                    <LeftSideBar />
                </div>
                <div className="col-span-4 h-screen overflow-y-auto">
                    {/* middle content */}
                    <MiddleContent />
                </div>
                <div className="w-1/4">
                    {/* right side bar */}
                    <RightSideBar />
                </div>
            </div>
        </>
    );
}

export default TrollsPage;