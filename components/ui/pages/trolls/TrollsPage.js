import React from 'react';
import LeftSideBar from "./left/LeftSideBar";
import MiddleContent from "./middle/MiddleContent";
import RightSideBar from "./right/RightSideBar";

function TrollsPage() {
    return (
        <>
            <div className="bg-events-color dark:bg-gray-900 flex">

                {/* left side bar */}
                <LeftSideBar />

                {/* middle content */}
                <MiddleContent />

                {/* right side bar */}
                <RightSideBar />
            </div>
        </>
    );
}

export default TrollsPage;