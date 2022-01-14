import React from 'react';
import { ContactPage, MainHeader, NavBar } from "../../components/components";
import ClientLayout from '../../layouts/ClientLayout';

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

const Contact = (props) => {
    const { cookie } = props;
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader cookie={cookie} />
            <NavBar />
            <ContactPage />
        </>
    );
}

Contact.layout = ClientLayout;

export default Contact;