import React from 'react';
import { EventsPage, MainHeader, NavBar } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

export const getServerSideProps = async ({ req }) => {
    let user = false;
    const cookie = req.cookies['access_token'];
    if (cookie !== undefined) {
        user = true;
    }
    return {
        props: { cookie: user },
    }
}

const Events = (props) => {
    const { cookie } = props;
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader cookie={cookie} />
            <NavBar />
            <EventsPage />
        </>
    );
}

Events.layout = ClientLayout;

export default Events;