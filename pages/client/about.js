import React from 'react';
import { AboutPage, MainHeader, NavBar } from "../../components/components";
import ClientLayout from '../../layouts/ClientLayout';

const About = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <AboutPage />
        </>
    );
}

About.layout = ClientLayout;

export default About;