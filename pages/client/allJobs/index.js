import React from 'react';
import { LogoFour, LogoOne, LogoThree, LogoTwo } from "../../assets/assets";
import { NavBar, JobCard, MainHeader, PageNavigation } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

const defaultText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Aliquid asperiores atque beatae dolor " +
    "dolorem esse et, iste labore minima minusnesciunt nobis officiis pariatur, recusandae rem sit tempore, totam voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores atque beatae dolor dolorem esse et, iste labore minima minus nesciunt nobis officiis pariatur, recusandae rem sit tempore, totam voluptatum."

const AllJobList = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <div className="flex flex-col h-full justify-between items-center px-4 py-6">
                <div className="flex justify-center items-center p-8 mb-4">
                    <h1 className="text-xl uppercase md:text-4xl text-indigo-900 font-bold dark:text-gray-200">
                        Recent Jobs
                    </h1>
                </div>
                <div className="w-full grid md:grid-cols-2 gap-2 lg:grid-cols-3">
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

                    <JobCard
                        logo={LogoOne}
                        title={"Human Resource Personnel"}
                        text={defaultText}
                        isExpired={false}
                    />

                    <JobCard
                        logo={LogoOne}
                        title={"Human Resource Personnel"}
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
                <PageNavigation />
            </div>
        </>
    );
}

AllJobList.layout = ClientLayout;

export default AllJobList;