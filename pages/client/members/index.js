import React from 'react';
import { MembersPage } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

const Members = () => {
    return (
        <>
            <MembersPage />
        </>
    );
}

Members.layout = ClientLayout;

export default Members;