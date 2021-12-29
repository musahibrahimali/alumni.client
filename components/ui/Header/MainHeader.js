import React, { useEffect } from 'react';
import Link from 'next/link';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";
import { setUser } from "../../../provider/provider";
import Cookies from 'js-cookie';

const MainHeader = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const isAuthenticated = Cookies.get('user');

    // handle log out
    const handleLogOut = () => {
        axios({
            method: "get",
            url: "http://localhost:5000/users/logout",
            withCredentials: true,
        }).then(() => {
            dispatch(setUser(null));
            Cookies.remove('user');
            router.replace('/client/home').then(() => { });
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        // fetch user details
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:5000/users/done', {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Credentials": true,
                    },
                });
                if (response.status === 200) {
                    const data = await response.json();
                    if (data.data) {
                        dispatch(setUser(data.data));
                    }
                } else {
                    Cookies.remove('user');
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (isAuthenticated) {
            fetchUser();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

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