import React from 'react';
import { GalleryPage, MainHeader, NavBar } from "../../../components/components";
import ClientLayout from '../../../layouts/ClientLayout';

const Gallery = () => {
    return (
        <>
            {/*default header (not navbar) */}
            <MainHeader />
            <NavBar />
            <GalleryPage />
        </>
    );
}

Gallery.layout = ClientLayout;

export default Gallery;