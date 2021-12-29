import React, { useEffect } from 'react';
import { LinearWithValueLabel, MainHeader, NavBar, TrollsPage } from "../../../components/components";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import ClientLayout from '../../../layouts/ClientLayout';
import { useSelector } from 'react-redux';

const Trolls = () => {
    const router = useRouter();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (!user) {
            router.replace('/client/members');
        }
    });

    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <TrollsPage />
        </>
    );
}

Trolls.layout = ClientLayout;

export default Trolls;