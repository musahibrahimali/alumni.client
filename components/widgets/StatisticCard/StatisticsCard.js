import React from 'react';
import Image from 'next/image';
import CountTo from "react-count-to";
import {UsersIcon,PicturesIcon,EventsIcon,MedalIcon} from "../../../assets/assets";

const StatisticsCard = () => {
    return (
        <>
            <div className="bg-gray-900 px-12 h-full text-gray-100 grid grid-cols-2 py-20 md:flex justify-around items-center">
                <div className="flex justify-center items-center py-4">
                    <Image src={UsersIcon} height={100} width={100} alt={"members"} />
                    <div className="flex flex-col ml-4 justify-center items-center">
                        <CountTo className="text-xl md:text-4xl" to={4024} speed={12345} />
                        <h2 className="text-lg md:text-2xl uppercase">Members</h2>
                    </div>
                </div>

                <div className="flex justify-center items-center py-4">
                    <Image src={PicturesIcon} height={100} width={100} alt={"pictures"} />
                    <div className="flex flex-col ml-4 justify-center items-center">
                        <CountTo className="text-xl md:text-4xl" to={8725} speed={12345} />
                        <h2 className="text-lg md:text-2xl uppercase">Photos</h2>
                    </div>
                </div>

                <div className="flex justify-center items-center py-4">
                    <Image src={EventsIcon} height={100} width={100} alt={"events"} />
                    <div className="flex flex-col ml-4 justify-center items-center">
                        <div className="flex justify-center items-center">
                            <CountTo className="text-xl md:text-4xl" to={234} speed={12345} />
                            <p className="ml-2 text-xl md:text-2xl">+</p>
                        </div>
                        <h2 className="text-lg md:text-2xl uppercase">Events</h2>
                    </div>
                </div>

                <div className="flex justify-center items-center py-4">
                    <Image src={MedalIcon} height={100} width={100} alt={"awards"} />
                    <div className="flex flex-col ml-4 justify-center items-center">
                        <div className="flex justify-center items-center">
                            <CountTo className="text-xl md:text-4xl" to={34} speed={12345} />
                            <p className="ml-2 text-xl md:text-2xl">+</p>
                        </div>
                        <h2 className="text-lg md:text-2xl uppercase">Awards</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StatisticsCard;