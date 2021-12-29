import React from 'react';
import { PageNavigation, Event } from "../../../../components";

const EventsComponents = () => {
    return (
        <div className="bg-events-color dark:bg-gray-900 dark:text-gray-100 px-12 py-24 flex flex-col justify-between items-center">
            <div className="flex flex-row justify-center items-center">
                <select
                    className="bg-white focus:border-indigo-600 dark:bg-gray-900 mx-4 border border-indigo-600 px-8 py-4 outline-none focus:border-border-indigo-600"
                    name="year" id="year">
                    <option
                        className="text-indigo-600 font-bold dark:text-gray-100 uppercase text-left"
                        value="year">
                        YEAR
                    </option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2020">2021</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2020">2020</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2019">2019</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2018">2018</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2018">2017</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2018">2016</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="2018">2015</option>
                </select>

                <select
                    className="bg-white dark:bg-gray-900 outline-none mx-4 border border-indigo-600 focus:border-indigo-600 px-4 py-4
                                focus:border-border-indigo-600"
                    name="place" id="place">
                    <option
                        className="text-indigo-600 focus:border-indigo-600 font-bold dark:text-gray-100 uppercase text-left"
                        value="place">
                        PLACE
                    </option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="kumasi">Kumasi</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="accra">Accra</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="cape-coast">Cape Coast</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="koforidua">Koforidua</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="tamale">Tamale</option>
                    <option className="text-indigo-600 dark:text-gray-100 text-left" value="hohoe">Hohoe</option>
                </select>

                <select
                    className="bg-white dark:bg-gray-900 outline-none mx-4 border border-indigo-600 focus:border-indigo-600 px-2 py-4
                                focus:border-border-indigo-600"
                    name="type" id="type">
                    <option
                        className="text-indigo-600 focus:border-indigo-600 font-bold dark:text-gray-100 uppercase text-left"
                        value="type">
                        TYPE
                    </option>
                    <option className="text-indigo-600 dark:text-gray-100 uppercase text-left" value="meetup">Meet Up</option>
                    <option className="text-indigo-600 dark:text-gray-100 uppercase text-left" value="seminar">Seminar</option>
                    <option className="text-indigo-600 dark:text-gray-100 uppercase text-left" value="get-together">Get Together</option>
                </select>

                <button className="uppercase bg-blue-600 text-gray-50 px-8 py-2 text-xl">
                    Filter
                </button>
            </div>

            <div className="flex-col justify-between mt-12 mb-10">
                <Event />
                <Event />
                <Event />
                <Event />
                <Event />
            </div>

            <PageNavigation />
        </div>
    );
}

export default EventsComponents;