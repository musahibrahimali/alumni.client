import React from 'react';
import Link from 'next/link';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { setUser } from "../../../provider/provider";
import { useQuery } from 'react-query';

// fetch user details
const fetchUserProfile = async () => {
    return await axios({
        url: `http://localhost:5000/client/profile`,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

const MainHeader = (props) => {
    const { cookie } = props;
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    const { data } = useQuery(
        'user',
        fetchUserProfile,
        {
            keepPreviousData: true,
            enabled: !!cookie,
        }
    );

    if (data) {
        dispatch(setUser(data.data));
    }

    // handle log out
    const handleLogOut = async () => {
        await axios({
            url: "http://localhost:5000/client/logout",
            method: "GET",
            withCredentials: true,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        }).then(() => {
            dispatch(setUser(null));
            router.reload(window.location.pathname);
            // router.replace('/client/members');
        }).catch(error => console.log(error));
    }

    return (
        <>
            <div className="bg-blue-500 w-full h-14 px-4 py-4 text-white flex flex-row justify-end md:justify-between">
                <div className="hidden md:flex justify-between items-center">
                    <ul className="flex justify-between items-center">
                        <li className="ml-4 px-4 py-1 text-sm cursor-pointer font-light border border-gray-200
                                        border-opacity-0 hover:border-opacity-80">
                            <Link href="">
                                <a>alumni.edu.gh@email.com</a>
                            </Link>
                        </li>

                        <li className="ml-4 px-4 py-1 text-sm cursor-pointer font-light border border-gray-200
                                        border-opacity-0 hover:border-opacity-80">
                            <Link href="">
                                <a>000 000 000 0</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <ul className="flex justify-between items-center">
                        {
                            !user ?
                                <li className="px-4 mx-2 cursor-pointer hover:bg-gray-700 border border-gray-300
                                    hover:border-opacity-0 font-bold" onClick={() => {
                                        router.push('/client/members');
                                    }}>
                                    <p>sign in</p>
                                </li> : <div> </div>
                        }

                        {
                            !user ?
                                <li
                                    className="px-4 mx-2 cursor-pointer hover:bg-gray-700 border border-gray-300
                                        hover:border-opacity-0 font-bold" onClick={() => { router.push('/client/members') }}>
                                    <p>sign up</p>
                                </li> : <div> </div>
                        }
                    </ul>
                    {
                        user ?
                            <div>
                                <div className="dropdown inline-block relative">
                                    <button className="hover:bg-gray-200 rounded-full text-gray-100 hover:text-gray-800 p-1 inline-flex items-center">
                                        <div className="relative flex flex-row justify-between items-center">
                                            <div className="bg-transparent flex flex-row justify-between items-center">
                                                <Avatar
                                                    src={user?.image}
                                                    sx={{ width: 28, height: 28 }}
                                                    alt="user"
                                                />
                                                <h3 className="ml-2 font-medium capitalize">
                                                    {user?.displayName}
                                                </h3>
                                            </div>
                                        </div>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="bg-white origin-top-right right-0 w-56 shadow-lg z-50 dropdown-menu absolute hidden">
                                        <div className="">
                                            <a href="#" className="text-gray-700 hover:text-gray-100 hover:bg-blue-600 block px-4 py-2 text-sm">
                                                Account settings
                                            </a>
                                            <a href="#" className="text-gray-700 hover:text-gray-100 hover:bg-blue-600 block px-4 py-2 text-sm">
                                                Support
                                            </a>
                                            <a href="#" className="text-gray-700 hover:text-gray-100 hover:bg-blue-600 block px-4 py-2 text-sm">
                                                License
                                            </a>
                                            <button onClick={handleLogOut} className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:text-gray-100 hover:bg-blue-600">
                                                Sign out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div> </div>
                    }
                </div>
            </div>
        </>
    );
}


export default MainHeader;