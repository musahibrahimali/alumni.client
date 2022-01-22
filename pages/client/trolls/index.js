import React, { useEffect } from 'react';
import { NavBar, TrollsPage } from "../../../components/components";
import { useRouter } from 'next/router';
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

const Trolls = (props) => {
    const { cookie } = props;
    const router = useRouter();

    useEffect(() => {
        if (!cookie) {
            router.replace('/client/members');
        }
    });

    return (
        <>
            {/*default header (not navbar) */}
            <NavBar />
            <TrollsPage />
        </>
    );
}

Trolls.layout = ClientLayout;

export default Trolls;