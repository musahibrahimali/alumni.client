import React, { useState } from 'react';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Avatar } from '@mui/material';
import PostMedia from './PostMedia';
import { PopUp } from '../../../../../components';
import PostForm from './post-form/PostForm';
import { useSelector } from 'react-redux';

const CreatePost = () => {
    const [openPopUp, setOpenPopUp] = useState(false);
    const user = useSelector((state) => state.user.user);

    // close pop up
    const handleOpenPopUP = () => {
        setOpenPopUp(!openPopUp);
    }

    return (
        <>
            {/* add image and post content */}
            <div>
                <div className="bg-white mt-4 flex flex-col justify-between dark:bg-gray-900 w-full shadow-md px-4 py-2 mb-12">
                    <div className="border-b-2 border-gray-200 flex py-2 pb-4 px-1 flex-row justify-between items-center w-full">
                        <Avatar src={user?.image} />
                        <div onClick={handleOpenPopUP}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-400 cursor-pointer focus:outline-none mx-2 rounded-full w-full p-2 px-2">
                            <p>What&apos;s on your mind? {user?.lastName}</p>
                        </div>
                    </div>

                    <div className="py-2 pt-4 flex flex-row justify-between">
                        {/* live video */}
                        <PostMedia
                            onClick={handleOpenPopUP}
                            title="live video"
                            icon={
                                <VideocamOutlinedIcon
                                    fontSize='medium'
                                    className="text-red-500"
                                />
                            }
                        />

                        {/* photo/video */}
                        <PostMedia
                            onClick={handleOpenPopUP}
                            title="photo/video"
                            icon={
                                <PhotoLibraryOutlinedIcon
                                    fontSize='medium'
                                    className="text-green-500"
                                />
                            }
                        />

                        {/* feeling */}
                        <PostMedia
                            onClick={handleOpenPopUP}
                            title="feelings/activity"
                            icon={
                                <SentimentVerySatisfiedIcon
                                    fontSize='medium'
                                    className="text-yellow-500"
                                />
                            }
                        />
                    </div>

                </div>
            </div>

            {/* create post with pop up */}
            <PopUp
                openPopUp={openPopUp}
                setOpenPopUp={setOpenPopUp}
                title={"Create Post"}>
                <PostForm
                    setOpenPopUp={setOpenPopUp}
                />
            </PopUp>
        </>
    );
}

export default CreatePost;
