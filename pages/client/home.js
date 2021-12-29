import React from 'react';
import { HomePage, MainHeader, NavBar } from "../../components/components";
import ClientLayout from '../../layouts/ClientLayout';

const HomeView = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <HomePage />
        </>
    )
}

HomeView.layout = ClientLayout;

export default HomeView;
