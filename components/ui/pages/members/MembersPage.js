import React, { useState } from 'react';
import { AnimationContainer } from '../../../components';
import LogIn from './login/LogIn';
import Register from './register/Register';

const MembersPage = () => {
    let [logIn, setLogIn] = useState(true);

    const handleSwitch = () => setLogIn(!logIn);

    return (
        <div className="bg-white dark:bg-gray-900 flex justify-center items-center">
            <AnimationContainer>
                <div className="flex justify-center items-center text-center">
                    <div className="login relative mt-8 mb-8 flex justify-center items-center z-20 px-8 py-4">
                        <div className="bg-white flex justify-center items-center shadow-lg rounded-md h-full z-20 relative">
                            {
                                logIn && (
                                    <LogIn
                                        handleSwitch={handleSwitch}
                                        onClick={handleSwitch} />
                                )
                            }
                            {
                                !logIn && (
                                    <Register
                                        handleSwitch={handleSwitch}
                                        onClick={handleSwitch} />
                                )
                            }
                        </div>

                        <RightSide
                            className={
                                logIn ?
                                    "flex flex-col justify-center items-end cursor-pointer absolute -right-32 text-white font-bold shadow-md transition-all duration-400 ease-in-out z-10 uppercase w-full h-5/6 px-8 bg-blue-600 transform hover:translate-x-8 rounded-md"
                                    :
                                    "flex flex-col justify-center items-start cursor-pointer absolute right-28 text-white font-bold shadow-md transition-all duration-400 ease-in-out z-10 uppercase w-full h-5/6 px-8 bg-blue-600 transform hover:-translate-x-8 rounded-md"
                            }
                            currentActive={logIn ? "Register" : "Login"}
                            onClick={handleSwitch}
                        />
                    </div>
                </div>
            </AnimationContainer>
        </div>
    );
}

const RightSide = (props) => {
    return (
        <>
            <div
                className={props.className}
                onClick={props.onClick}>
                <div className="">
                    <h2 className="text-lg md:text-2xl tracking-wider">
                        {props.currentActive}
                    </h2>
                </div>
            </div>
        </>
    );
};

export default MembersPage;