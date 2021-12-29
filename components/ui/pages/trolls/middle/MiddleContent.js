import React from 'react';
import Post from "./post/Post";
import CreatePost from './post/CreatePost';
import { useQuery } from 'react-query';

// fetch post with react-query
const fetchTrolls = async () => {
    const url = "http://localhost:5000/troll/all";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await response.json();
    return data;
};



const MiddleContent = () => {
    // make the fetch only and only if user is not null
    const { data, isLoading } = useQuery(
        'trolls',
        fetchTrolls,
        {
            keepPreviousData: true,
            // refech ever 1 seconds
            refetchInterval: 5000,
        }
    );

    return (
        <>
            {
                <div className="flex-grow h-screen overflow-y-auto mx-8 px-4 pt-3">
                    {/* create post */}
                    <CreatePost />

                    {/* post Section */}
                    {
                        data && data.trolls.map((troll, index) => {
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