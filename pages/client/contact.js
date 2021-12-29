import React from 'react';
import { ContactPage, MainHeader, NavBar } from "../../components/components";
import ClientLayout from '../../layouts/ClientLayout';

const Contact = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <ContactPage />
        </>
    );
}

Contact.layout = ClientLayout;

export default Contact;