import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Avatar, IconButton } from '@mui/material';
import { Picker } from "emoji-mart";
import { useSelector } from 'react-redux';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AddToPhotosOutlinedIcon from '@mui/icons-material/AddToPhotosOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { createNewPost } from '../../../../../../utils/utils';
import { InputField, Notification } from '../../../../../../components';
import { useDropzone } from 'react-dropzone';
import "emoji-mart/css/emoji-mart.css";

const PostForm = (props) => {
    const { setOpenPopUp } = props;
    // get data from server
    const [input, setInput] = useState(""); // the input reference
    const [isImg, setIsImg] = useState(false); // this facilitates the image preview
    const [isVid, setIsVid] = useState(false); // this facilitates the video preview
    const [isMed, setIsMed] = useState(false); // no media available
    const [previewImages, setPreviewImages] = useState([]);
    const [previewVideos, setPreviewVideos] = useState([]);
    const [showEmojis, setShowEmojis] = useState(false); // show emojis
    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" }); // notification
    // get theme from redux with useSelector
    const theme = useSelector((state) => state.theme.theme);
    // get user id from redux
    const user = useSelector((state) => state.user.user);
    const userId = user?.userId;

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        maxFiles: 10, // max number of files
        maxSize: 1024 * 1024 * 1000, // 1GB
        accept: "image/*, video/*", // accept all images and videos
        onDrop: (acceptedFiles) => {
            onDrop(acceptedFiles);
        }, // this is where the files are dropped
        onDropRejected: () => {
            setNotify({
                isOpen: true,
                message: "Some files were rejected. Please try again.",
                type: "error"
            });
        }, // this is where the files are rejected
        onFileDialogCancel: () => {
            setNotify({
                isOpen: true,
                message: "No files were selected.",
                type: "error"
            });
        } // this is where the user cancels the file upload
    });

    // on input change
    const onInputChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    }

    // add emoji to the input text
    const addEmoji = (event) => {
        let symbol = event.unified.split("-");
        let codesArray = [];
        symbol.forEach((element) => codesArray.push("0x" + element));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
        handleShowEmoji();
    };

    // handle set emojis
    const handleShowEmoji = () => {
        setShowEmojis(!showEmojis);
    }

    // remove the selected image
    const removeMediaToPost = () => {
        setPreviewImages([]);
        setPreviewVideos([]);
        setInput("");
    }

    // get random number for image id
    const getRandomNumber = () => {
        return Math.random().toString().substring(2, 8);
    }

    // this adds images to local state
    const onDrop = useCallback((acceptedFiles) => {
        let images = [];
        let videos = [];
        // add to images state
        const addPrevImage = (image) => {
            setPreviewImages(prevImages => [...prevImages, {
                id: getRandomNumber(),
                value: image,
            }]);
        }

        // add to videos state
        const addPrevVideo = (video) => {
            setPreviewVideos(prevVideos => [...prevVideos, {
                id: getRandomNumber(),
                value: video,
            }]);
        }

        acceptedFiles.forEach((file) => {
            if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp" || file.type === "image/svg+xml") {
                images.push(file);
            } else if (file.type === "video/mp4" || file.type === "video/quicktime" || file.type === "video/x-msvideo" || file.type === "video/x-ms-wmv" || file.type === "video/x-flv" || file.type === "video/x-matroska" || file.type === "video/webm" || file.type === "video/ogg") {
                videos.push(file);
            } else {
                setNotify({
                    isOpen: true,
                    message: "Invalid file type",
                    type: "error"
                });
            }
        });

        images.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                addPrevImage(reader.result);
            }
            reader.readAsDataURL(file);
        });

        videos.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                addPrevVideo(reader.result);
            }
            reader.readAsDataURL(file);
        });
        // console.log(formData.getAll('images'));
    }, []);

    // create a new post
    const onSubmit = async (event) => {
        event.preventDefault();
        // form data
        const formData = new FormData();
        // check if none of the fields are empty
        if (input.trim() === "" && previewImages.length === 0 && previewVideos.length === 0) {
            setNotify({
                isOpen: true,
                message: "Please enter a post or select an image or  a video",
                type: "error"
            });
        } else {
            // add input to form data
            formData.append('post', input);
            formData.append('userId', userId);
            acceptedFiles.forEach((file) => {
                if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/gif" || file.type === "image/bmp" || file.type === "image/svg+xml") {
                    formData.append('images', file, file.name);
                } else if (file.type === "video/mp4" || file.type === "video/quicktime" || file.type === "video/x-msvideo" || file.type === "video/x-ms-wmv" || file.type === "video/x-flv" || file.type === "video/x-matroska" || file.type === "video/webm" || file.type === "video/ogg") {
                    formData.append('videos', file, file.name);
                } else {
                    setNotify({
                        isOpen: true,
                        message: "Invalid file type",
                        type: "error"
                    });
                }
            });
            // console.log("from submit: ", formData.getAll('images'));
            // create a new post
            const post = await createNewPost(formData);
            if (post.status === 200) {
                setNotify({
                    isOpen: true,
                    message: "Post created successfully",
                    type: "success"
                });
                removeMediaToPost();
                setTimeout(() => {
                    setOpenPopUp(false);
                }, 5000);
            } else {
                setNotify({
                    isOpen: true,
                    message: "There was an error creating post",
                    type: "error"
                });
                removeMediaToPost();
            }
        }
    }

    // update ui when image list changes with useEffect
    useEffect(() => {
        if (previewImages.length > 0) {
            setIsImg(true);
        } else {
            setIsImg(false);
        }
        // check videos lenght
        if (previewVideos.length > 0) {
            setIsVid(true);
        } else {
            setIsVid(false);
        }
        // check there are either images or videos
        if (previewImages.length <= 0 && previewVideos.length <= 0) {
            setIsMed(true);
        } else {
            setIsMed(false);
        }
    }, [previewImages, previewVideos]);

    return (
        <>
            <div className="max-w[900px] xl:min-w[800px]">
                <div className="w-full h-full flex flex-col justify-between">
                    {/* user and user audience status */}
                    <div className="flex flex-row justify-start items-center space-x-2 mb-4 w-full py-2 z-40">
                        <Avatar
                            src={user?.image}
                            alt="user"
                        />
                        <div className="flex flex-col justify-start">
                            <p className="text-gray-700 dark:text-gray-200 cursor-default">
                                {user?.displayName}
                            </p>
                            <div className="flex w-full justify-around items-center space-x-1 bg-gray-400 text-gray-200 rounded-md">
                                <PublicIcon fontSize='small' />
                                <p>public</p>
                                <ArrowDropDownIcon fontSize='small' />
                            </div>
                        </div>
                        <div className=""></div>
                    </div>

                    <form onSubmit={onSubmit} encType="multipart/form-data">
                        {/* add post */}
                        <div className="py-2 mb-4 h-full">
                            <div className="w-full relative mb-4">
                                <InputField
                                    className="w-full"
                                    name='post'
                                    value={input}
                                    onChange={onInputChange}
                                    placeholder={`What&apos;s on your mind? ${user.lastName}`}
                                    multiline={true}
                                    maxRow={10}
                                    rows={2}
                                    endAdornment={
                                        <div onClick={handleShowEmoji}>
                                            <SentimentVerySatisfiedIcon className="text-gray-400 dark:text-gray-200 cursor-pointer" fontSize='small' />
                                        </div>
                                    }
                                />
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
                            {/* image preview after drag and drop or select */}
                            <div className="bg-gray-50 hover:bg-gray-100 border border-gray-200 dark:border-gray-700 rounded-md flex flex-col justify-center items-center w-full h-full max-h-[800px] cursor-pointer relative py-2 px-2">
                                <div className="absolute top-1 origin-top-right right-1 bg-gray-200 rounded-full z-40">
                                    <IconButton onClick={removeMediaToPost}>
                                        <CloseOutlinedIcon className="text-gray-700" fontSize='medium' />
                                    </IconButton>
                                </div>

                                {/* show image or images */}
                                {
                                    isImg &&
                                    <div>
                                        <div className="">
                                            {
                                                previewImages.length === 1 ?
                                                    <Image
                                                        className='h-auto max-w-[800px] w-full'
                                                        src={previewImages[0].value}
                                                        height={500}
                                                        width={500}
                                                        objectFit="contain"
                                                        alt='image'
                                                    /> :
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {
                                                            previewImages.map((image) => {
                                                                return (
                                                                    <div key={image.id} className="w-full h-full">
                                                                        <Image
                                                                            className='h-auto max-w-[800px] w-full' alt='image'
                                                                            src={image.value}
                                                                            height={500}
                                                                            width={500}
                                                                            objectFit="contain"
                                                                        />
                                                                    </div>
                                                                );
                                                            })
                                                        }
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                }

                                {/* show video or videos */}
                                {
                                    isVid &&
                                        previewVideos.length === 1 ?
                                        <video
                                            className='h-auto max-w-[800px] w-full'
                                            src={previewVideos[0].value}
                                            controls
                                        /> :
                                        <div className="grid grid-cols-2 gap-2">
                                            {
                                                previewVideos.map((video) => {
                                                    return (
                                                        <div key={video.value} className="w-full h-full">
                                                            <video
                                                                className='h-auto max-w-[800px] w-full' alt='video'
                                                                src={video.value}
                                                                controls
                                                            />
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                }

                                {/* show the default background and content if no media has been loaded */}
                                {
                                    isMed &&
                                    <div>
                                        <div {...getRootProps({ className: "dropzone" })}>
                                            <input {...getInputProps()} />
                                            <div className="text-black hover:text-blue-600 flex flex-row justify-between items-center rounded-md px-4 py-2 w-full h-44">
                                                <div className="bg-gray-300 mx-2 rounded-full">
                                                    <IconButton>
                                                        <AddToPhotosOutlinedIcon className="text-blue-600 dark:text-blue-400" fontSize='medium' />
                                                    </IconButton>
                                                </div>
                                                <div className="flex flex-col justify-center items-center space-y-1 w-full h-full pt-2">
                                                    <p className="font-semibold text-lg capitalize">
                                                        add photos/videos
                                                    </p>
                                                    <p className="font-light text-sm">
                                                        or drag and drop
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="z-40 w-full">
                            {/* add media */}
                            <div className="flex flex-row justify-between items-center border border-gray-200 rounded px-4 py-2 mb-4">
                                <div className="">
                                    <p className="text-gray-700 font-semibold cursor-default">
                                        Add to your post
                                    </p>
                                </div>
                                <div className="w-24"></div>
                                <div className="flex flex-row justify-end items-center space-x-2">
                                    <div>
                                        <div {...getRootProps({ className: "dropzone" })}>
                                            <input {...getInputProps()} />
                                            <IconButton>
                                                <PhotoLibraryOutlinedIcon className="text-green-600" fontSize='medium' />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div>
                                        <div {...getRootProps({ className: "dropzone" })}>
                                            <input {...getInputProps()} />
                                            <IconButton>
                                                <VideocamOutlinedIcon className="text-red-600" fontSize='medium' />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* submit */}
                            <div onClick={onSubmit} className="flex justify-center items-center w-full bg-blue-700 hover:bg-blue-600 text-gray-50 hover:text-gray-100 cursor-pointer py-1 rounded-md">
                                <p className="text-lg font-semibold">Post</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Action Notification */}
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </>
    );
}

export default PostForm;
