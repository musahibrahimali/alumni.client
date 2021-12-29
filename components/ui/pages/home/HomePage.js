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


const HomePage = () => {
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