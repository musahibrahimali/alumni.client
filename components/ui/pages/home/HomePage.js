import React from 'react';
import {
    HeroSection,
    OurMission,
    RecentJobs,
    Responsibility,
    DemoOp,
    RecentNews,
} from './components/home';
import { ImageGallery, StatisticsCard } from "../../../components";
import {
    getEvents,
    getJobs,
    getNews,
} from '../../../utils/utils';
import { useQuery } from 'react-query';


const HomePage = () => {
    // The following queries will execute in parallel
    const eventsQuery = useQuery(
        'events', getEvents,
        {
            keepPreviousData: true,
        }
    );

    const jobsQuery = useQuery(
        'jobs', getJobs,
        {
            keepPreviousData: true,
        }
    );

    const newsQuery = useQuery(
        'news', getNews,
        {
            keepPreviousData: true,
        }
    );

    // get the data from each query


    return (
        <>
            <HeroSection />
            <OurMission />
            <Responsibility />
            <StatisticsCard />
            <RecentJobs />
            <ImageGallery />
            <RecentNews />
            <DemoOp />
        </>
    );
}

export default HomePage;