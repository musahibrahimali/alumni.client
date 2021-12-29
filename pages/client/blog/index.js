import React from 'react';
import { BlogPage, MainHeader, NavBar } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

const Blog = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <BlogPage />
        </>
    );
}

Blog.layout = ClientLayout;

export default Blog;