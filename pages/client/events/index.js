import React from 'react';
import { EventsPage, MainHeader, NavBar } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

const Events = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <EventsPage />
        </>
    );
}

Events.layout = ClientLayout;

export default Events;