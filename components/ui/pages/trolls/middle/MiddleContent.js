import React from 'react';
import Post from "./post/Post";
import CreatePost from './post/CreatePost';
import { useQuery } from 'react-query';
import axios from 'axios';

// fetch post with react-query
const fetchTrolls = async () => {
    return await axios({
        url: `http://localhost:5000/troll/all-trolls`,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};

const MiddleContent = () => {
    // make the fetch only and only if user is not null
    const { data, isLoading } = useQuery(
        'trolls',
        fetchTrolls,
        {
            keepPreviousData: true,
            // refech ever 1 seconds
            refetchInterval: 1000,
        }
    );

    return (
        <>
            {
                <div className="mx-8 px-4 pt-3">
                    {/* create post */}
                    <CreatePost />

                    {/* post Section */}
                    {
                        data && data.data?.map((troll, index) => {
                            return (
                                <Post
                                    key={index}
                                    isLoading={isLoading}
                                    troll={troll}
                                />
                            );
                        })
                    }
                </div>
            }
        </>
    );
}

export default MiddleContent;