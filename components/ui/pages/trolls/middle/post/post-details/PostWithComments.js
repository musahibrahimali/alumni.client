import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { InputField } from '../../../../../../components';
import { Picker } from 'emoji-mart';
import moment from 'moment';
import { Avatar } from '@mui/material';
import { commentOnPost } from '../../../../../../utils/request_helpers';

const PostWithCommentsForm = (props) => {
    const { troll } = props;
    const [comment, setComment] = useState('');
    const [showEmojis, setShowEmojis] = useState(false);

    const comments = troll.comments;

    // user
    const user = useSelector((state) => state.user.user);
    const userId = user?._id;

    // get theme from redux with useSelector
    const theme = useSelector((state) => state.theme.theme);

    const onCommentChange = (event) => {
        event.preventDefault();
        setComment(event.target.value);
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
        const addComment = await commentOnPost(troll?._id, comment, userId);
        if (addComment.data) {
            setComment('');
        }
    }

    return (
        <>
            {/* show all comments */}
            <div className="flex flex-col justify-start items-start">
                {
                    comments &&
                    <div className="w-full flex flex-col justify-between items-start space-y-1 mb-8 py-2">
                        {
                            comments.map((comment, index) => {
                                return (
                                    <div key={index} className="bg-gray-200 rounded dark:bg-gray-200 flex flex-row space-x-1 justify-start items-center py-1 px-4">
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={comment.user?.image}
                                            sx={{ width: 30, height: 30 }}
                                        />
                                        <div className="px-2 flex flex-col text-gray-800">
                                            <p className="font-bold underline font-sans text-sm">
                                                {comment.user.lastName}
                                            </p>
                                            <p>
                                                {comment.comment}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                }
            </div>
            {/* show comment input */}
            <div>
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
            </div>
        </>
    )
}

export default PostWithCommentsForm;
