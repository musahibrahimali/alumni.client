import React from 'react';
import Link from 'next/link';
import { LogoFour, LogoOne, LogoThree, LogoTwo } from "../../../../../../assets/assets";
import { JobCard } from "../../../../../components";

const defaultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid asperiores atque beatae dolor " +
    "dolorem esse et, iste labore minima minusnesciunt nobis officiis pariatur, recusandae rem sit tempore, totam " +
    "voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque beatae dolor " +
    "dolorem esse et, iste labore minima minus nesciunt nobis officiis pariatur, recusandae rem sit tempore, " +
    "totam voluptatum."

const RecentJobs = () => {
    return (
        <>
            <div className="bg-white dark:bg-gray-900 flex flex-col h-full justify-between items-center px-4 py-6">
                <div className="flex justify-center items-center p-8 mb-4">
                    <h1 className="text-xl uppercase md:text-4xl text-indigo-900 font-bold dark:text-gray-200">
                        Recent Jobs
                    </h1>
                </div>
                <div className="w-full grid md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
                    <JobCard
                        logo={LogoOne}
                        title={"urgent need five data center specialist"}
                        text={defaultText}
                        isExpired={false}
                    />
                    <JobCard
                        logo={LogoTwo}
                        title={"Backend Developer"}
                        text={defaultText}
                        isExpired={true}
                    />
                    <JobCard
                        logo={LogoThree}
                        title={"IT technician"}
                        text={defaultText}
                        isExpired={false}
                    />
                    <JobCard
                        logo={LogoFour}
                        title={"Sales engineer"}
                        text={defaultText}
                        isExpired={true}
                    />
                    <JobCard
                        logo={LogoOne}
                        title={"Product manager"}
                        text={defaultText}
                        isExpired={false}
                    />
                    <JobCard
                        logo={LogoOne}
                        title={"Human Resource Personnel"}
                        text={defaultText}
                        isExpired={true}
                    />

                </div>
                <div className="w-full h-full p-4 mt-8 mb-4 flex justify-center items-center">
                    <Link href="/allJobs">
                        <a className="text-white bg-blue-600 font-bold uppercase px-8 py-2">
                            all job list
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default RecentJobs;