import React from 'react';
import {EventCard} from "../../../../../components";

function RecentNews(props) {
    return (
        <div className="flex flex-col flex-wrap justify-between items-center bg-gray-200 py-24 px-4 ">
            <div className="flex justify-center items-center pb-16 mb-12">
                <h1 className="uppercase font-bold text-indigo-600 text-xl md:text-4xl">
                    Recent News
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-2 md:flex justify-between items-center">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    );
}

export default RecentNews;