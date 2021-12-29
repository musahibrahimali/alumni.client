import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
    const [menu, setMenu] = useState("");

    return (
        <>
            <div className="sticky top-0 left-0 z-40">
                <div className="flex justify-between text-black dark:text-white items-center bg-white shadow-md h-16 dark:bg-gray-900">
                    <div onClick={() => { setMenu("home") }} className="text-xl md:text-2xl text-center px-4 flex justify-center items-center">
                        <Link href="/client/home">
                            <a>Alumni</a>
                        </Link>
                    </div>

                    {/* mobile menu icon */}
                    <div className="block px-4 md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <div className="hidden md:flex">
                        <ul className="flex justify-between items-center">
                            <li onClick={() => { setMenu("home") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/home">
                                    <a className={
                                        menu === "home" ?
                                            "flex justify-center items-center px-8 border-b-8 border-blue-800 border-opacity-100 h-16 hover:bg-blue-50 dark:hover:bg-gray-200 dark:hover:text-gray-900 hover:border-opacity-80 transition-all ease-linear duration-300" :
                                            "flex justify-center items-center px-8 border-b-8 border-blue-800 border-opacity-0 h-16 hover:bg-blue-50 dark:hover:bg-gray-200 dark:hover:text-gray-900 hover:border-opacity-80 transition-all ease-linear duration-300"
                                    }>
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("about") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/about">
                                    <a className={
                                        menu === "about" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        About
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("events") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/events">
                                    <a className={
                                        menu === "events" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        Event
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("gallery") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/gallery">
                                    <a className={
                                        menu === "gallery" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        Gallery
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("blog") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/blog">
                                    <a className={
                                        menu === "blog" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("trolls") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/trolls">
                                    <a className={
                                        menu === "trolls" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        Trolls
                                    </a>
                                </Link>
                            </li>
                            <li onClick={() => { setMenu("contact") }}
                                className="flex justify-center cursor-pointer items-center w-full py-2 h-16">
                                <Link href="/client/contact">
                                    <a className={
                                        menu === "contact" ?
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-100 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300" :
                                            "flex justify-center items-center h-16 px-4 border-b-8 border-blue-800 border-opacity-0 hover:bg-blue-50 hover:border-opacity-80 transition-all dark:hover:bg-gray-200 dark:hover:text-gray-900 ease-linear duration-300"
                                    }>
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;