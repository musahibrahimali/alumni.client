import React, { useEffect } from 'react';
import { LinearWithValueLabel, MainHeader, NavBar, TrollsPage } from "../../../components/components";
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import ClientLayout from '../../../layouts/ClientLayout';

const Trolls = () => {
    const router = useRouter();
    const isAuthenticated = Cookies.get('user');
    useEffect(() => {
        const redirectUser = () => {
            if (!isAuthenticated) {
                router.replace('/client/members');
            }
        };
        redirectUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            {
                isAuthenticated ?
                    <TrollsPage /> :
                    <div className="bg-events-color dark:bg-gray-900 flex justify-center items-center px-44 py-12 h-screen w-full">
                        <LinearWithValueLabel />
                    </div>
            }
        </>
    );
}

Trolls.layout = ClientLayout;

export default Trolls;