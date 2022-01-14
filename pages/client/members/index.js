import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { MembersPage } from "../../../components/components";
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

const Members = (props) => {
    const { cookie } = props;
    const router = useRouter();

    useEffect(() => {
        if (cookie) {
            router.replace('/client/home');
        }
    });

    return (
        <>
            <MembersPage />
        </>
    );
}

Members.layout = ClientLayout;

export default Members;