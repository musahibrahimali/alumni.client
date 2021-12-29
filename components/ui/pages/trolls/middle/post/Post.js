import React, { useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import MoreHorizSharpIcon from '@mui/icons-material/MoreHorizSharp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Avatar } from '@mui/material';
import moment from 'moment';
import { commentOnPost, likePost } from '../../../../../components';
import { InputField } from '../../../../../components';
import { Picker } from 'emoji-mart';

const Post = (props) => {
    const { isLoading, troll } = props;
    const [isAddComm, setIsAddComm] = useState(false);
    const [comment, setComment] = useState('');
    const [showEmojis, setShowEmojis] = useState(false); // show emojis
    const likes = troll?.likes.length;
    const comments = troll?.comments.length;
    const shares = troll?.shares.length;
    const user = troll?.user;
    const images = troll?.images;
    const videos = troll?.videos;
    const date = moment(troll?.updatedAt).fromNow();

    // user
    const usr = useSelector((state) => state.user.user);
    const userId = usr?.userId;

    // get theme from redux with useSelector
    const theme = useSelector((state) => state.theme.theme);

    const onCommentChange = (event) => {
        event.preventDefault();
        setComment(event.target.value);
    }

    const onLikePost = () => {
        likePost(troll?.trollId, userId);
    }

    const onComment = () => {
        setIsAddComm(!isAddComm);
    }

    const onShare = () => {
        console.log('share');
    }

    // add emoji to the input text
    const addEmoji = (event) => {
        let symbol = event.unified.split("-");
        let codesArray = [];
        symbol.forEach((element) => codesArray.push("0x" + element));
        let emoji = String.fromCodePoint(...codesArray);
        setComment(comment + emoji);
        handleShowEmoji();
    };

    // handle set emojis
    const handleShowEmoji = () => {
        setShowEmojis(!showEmojis);
    }

    const onSubmitComment = async (event) => {
        event.preventDefault();
        const addComment = await commentOnPost(troll?.trollId, comment, userId);
        if (addComment.status === 200) {
            setComment('');
            onComment();
        }
    }

    return (
        <>
            {
                !isLoading ?
                    <div className='w-full mb-4 shadow h-auto bg-white dark:bg-gray-900 dark:text-gray-200 my-2 rounded-md'>
                        <div className='flex items-center space-x-2 p-3 px-4'>
                            <div className='w-10 h-10'>
                                <Avatar src={user?.image} />
                            </div>
                            <div className='flex-grow flex flex-col ml-2'>
                                <div className='text-gray-700 dark:text-gray-200 font-semibold'>
                                    <p>{user?.displayName}</p>
                                </div>
                                <span className='text-xs text-gray-400 dark:text-gray-200'>
                                    {date}
                                </span>
                            </div>
                            <div className='w-8 h-8'>
                                <button className='w-full h-full hover:bg-gray-100 rounded-full text-gray-400 focus:outline-none'>
                                    <MoreHorizSharpIcon />
                                </button>
                            </div>
                        </div>
                        <div className='text-gray-500 dark:text-gray-200 px-3'>
                            {troll?.post}
                        </div>
                        {/* render images */}
                        <div className='w-full h-full max-h-[900px]'>
                            {/* render only a ful image if images is only one otherwise render a grid of images */}
                            {
                                images && images.length === 1 ?
                                    <div className='px-2 py-1 overflow-hidden'>
                                        <Image
                                            src={images[0].img}
                                            alt='postimage'
                                            width={1080}
                                            height={800}
                                            objectFit='cover'
                                            objectPosition='center'
                                        />
                                    </div> :
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2 py-1'>
                                        {
                                            images && images.map((image, index) => {
                                                return (
                                                    <div key={index} className='w-full h-full'>
                                                        <Image
                                                            src={image.img}
                                                            alt='postimage'
                                                            className='w-full h-full'
                                                            width={1080}
                                                            height={800}
                                                            objectFit='cover'
                                                            objectPosition='center'
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>
                        {/* render videos */}
                        <div className='w-full h-full max-h-[900px]'>
                            {/* render only a ful video if videos is only one otherwise render a grid of videos */}
                            {
                                videos && videos.length === 1 ?
                                    <div className='px-2 py-1 overflow-hidden'>
                                        <video
                                            src={videos[0].vid}
                                            controls
                                            allowFullScreen
                                        />
                                    </div> :
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-2 py-1'>
                                        {
                                            videos && videos.map((video, index) => {
                                                return (
                                                    <div key={index} className='w-full h-full'>
                                                        <video
                                                            src={video.vid}
                                                            controls
                                                            allowFullScreen
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                            }
                        </div>
                        <div className='w-full flex flex-col space-y-2 p-2 px-4'>
                            <div className='flex items-center justify-between px-3 pb-2 border-b border-gray-200 dark:border-gray-700'>
                                <div className='flex  justify-between items-center'>
                                    <div className='flex justify-center items-center text-gray-400 text-sm'>
                                        <button className='focus:outline-none flex items-center justify-center w-4 h-4 rounded-full text-red-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <button className='focus:outline-none flex items-center justify-center w-4 h-4 rounded-full text-blue-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                            </svg>
                                        </button>
                                        <button className='focus:outline-none flex items-center justify-center w-4 h-4 rounded-full text-yellow-500'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                                            </svg>
                                        </button>
                                        <div className='ml-1'>
                                            <p>{likes} Likes</p>
                                        </div>
                                    </div>
                                </div>
                                {/* comments */}
                                <div onClick={() => { }} className="cursor-pointer">
                                    <p className='text-gray-400 text-sm'>
                                        {comments} Comments
                                    </p>
                                </div>
                                {/* shares */}
                                <div className="cursor-default">
                                    <p className='text-gray-400 cursor-default text-sm'>
                                        {shares} Shares
                                    </p>
                                </div>
                            </div>
                            <div className='flex space-x-3 text-gray-400'>
                                <button onClick={onLikePost} className='flex-1 flex justify-center items-center h-8 focus:outline-none space-x-2 hover:bg-gray-100 rounded-md hover:text-blue-600'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Like</p>
                                    </div>
                                </button>
                                <button onClick={onComment} className='flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md hover:text-blue-600'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Comment</p>
                                    </div>
                                </button>
                                <button onClick={onShare} className='flex-1 flex items-center h-8 focus:outline-none justify-center space-x-2 hover:bg-gray-100 rounded-md hover:text-blue-600'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className='font-semibold text-sm'>Share</p>
                                    </div>
                                </button>
                            </div>
                            {
                                isAddComm &&
                                <form onSubmit={onSubmitComment}>
                                    <div className="w-full flex flex-row space-x-2 relative mb-4">
                                        <InputField
                                            className="w-full"
                                            name='post'
                                            value={comment}
                                            onChange={onCommentChange}
                                            placeholder={`Add a comment ${user.lastName}...`}
                                            multiline={true}
                                            maxRow={5}
                                            rows={1}
                                            endAdornment={
                                                <div onClick={handleShowEmoji}>
                                                    <SentimentVerySatisfiedIcon className="text-gray-400 dark:text-gray-200 cursor-pointer" fontSize='small' />
                                                </div>
                                            }
                                        />
                                        <button
                                            type='submit'
                                            className='bg-blue-700 hover:bg-blue-600 text-white rounded focus:outline-none text-sm px-4'
                                            onClick={onSubmitComment}>
                                            comment
                                        </button>
                                        <div className="absolute w-auto top-8 origin-top-right -right-2 z-50">
                                            {
                                                showEmojis &&
                                                <div>
                                                    <Picker
                                                        onSelect={addEmoji}
                                                        showPreview={false}
                                                        theme={theme ? 'dark' : 'light'}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </form>
                            }
                        </div>
                    </div> :
                    <div>
                        <div className="bg-white shadow rounded-md p-4 w-full mx-auto mt-2 mb-2">
                            <div className="animate-pulse flex space-x-4">
                                <div className="rounded-full bg-gray-100 h-10 w-10"></div>
                                <div className="flex-1 space-y-6 py-1">
                                    <div className="h-2 bg-gray-100 rounded"></div>
                                    <div className="space-y-3">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-gray-100 rounded col-span-2"></div>
                                            <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                        </div>
                                        <div className="h-44 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                        <div className="h-2 bg-gray-100 rounded col-span-1"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-4 bg-gray-100 rounded col-span-1"></div>
                                        <div className="h-4 bg-gray-100 rounded col-span-1"></div>
                                        <div className="h-4 bg-gray-100 rounded col-span-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default Post;
