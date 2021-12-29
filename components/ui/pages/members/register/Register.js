import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { Facebook, Google } from '@mui/icons-material';
import { LoginImage } from '../../../../../assets/assets';
import { setUser } from '../../../../../provider/provider';
import Cookies from 'js-cookie';
// initial values
const initialValues = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
};

const Register = ({ handleSwitch }) => {
    const [values, setValues] = useState(initialValues); // initial field values
    const [errors, setErrors] = useState({}); // errors if any
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // router for route navigation
    const dispatch = useDispatch(); // dispatch to update the state

    // handle sign up request
    const handleSignUpRequest = async () => {
        const response = await fetch('http://localhost:5000/users/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.emailAddress,
                password: values.password
            }),
        });
        const data = await response.json();
        if (data.errors) {
            setIsLog(false);
            if (data.errors.email) {
                setErrors({
                    ...errors,
                    emailAddress: data.errors.email
                });
            }

            if (data.errors.password) {
                setErrors({
                    ...errors,
                    password: data.errors.password
                });
            }
            if (data.errors.firstName) {
                setErrors({
                    ...errors,
                    firstName: data.errors.firstName
                })
            }
            if (data.errors.lastName) {
                setErrors({
                    ...errors,
                    lastName: data.errors.lastName
                })
            }
        } else {
            if (data.data) {
                dispatch(setUser(data.data));
                Cookies.set('user', true);
                router.replace('/client/home');
            }
        }
    }

    /* validate form */
    const validateForm = (fieldValues = values) => {
        let temp = { ...errors };
        if ('firstName' in fieldValues) {
            temp.firstName = fieldValues.firstName ? "" : "This Field is Required";
        }
        if ('lastName' in fieldValues) {
            temp.lastName = fieldValues.lastName ? "" : "This Field is Required";
        }
        if ('emailAddress' in fieldValues) {
            temp.emailAddress = (/$^|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Invalid Email";
        }
        if ('password' in fieldValues) {
            temp.password = fieldValues.password.length >= 8 ? "" : "Invalid Password (password must be at least 8 characters)";
        }
        setErrors({
            ...temp
        });

        if (fieldValues === values) {
            return Object.values(temp).every(x => x === "");
        }
    }

    // handle input change
    const handleInputChange = (event) => {
        event.preventDefault();
        setErrors({}); // reset all errors to defaults
        const { name, value } = event.target; // get name and value of input element
        setValues({
            ...values,
            [name]: value,
        })
    }

    // facebook log in
    const FacebookLogin = async () => {
        Cookies.set('user', true);
        window.open('http://localhost:5000/users/facebook', '_self');
    }

    // google log in
    const GoogleLogin = async () => {
        Cookies.set('user', true);
        window.open('http://localhost:5000/users/google', '_self');
    }

    // handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            await handleSignUpRequest();
        }
    }

    return (
        <>
            <div className="flex flex-col px-4 py-2 w-full justify-center">
                <div className="flex justify-center items-center mb-2">
                    <h1 className="text-2xl md:text-4xl font-bold uppercase text-indigo-700">
                        Sign Up
                    </h1>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="w-96 mb-2 mt-2">
                        <Image className="w-full h-full" src={LoginImage} alt="this is a graphic" />
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-center mb-1">
                                {/* first name */}
                                <div className="flex flex-col items-start mb-1">
                                    <label className="capitalize text-lg md:text-xl" htmlFor="firstName">First Name</label>
                                    <input
                                        className="bg-gray-300 w-full px-2 py-2 rounded outline-none focus:outline-none text-gray-700 mt-1 transition-all duration-200 ease-in-out focus:shadow-lg"
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleInputChange}
                                        placeholder="John"
                                    />
                                    <p className="text-red-500 pt-1 px-2">
                                        {errors.firstName}
                                    </p>
                                </div>
                                {/* last name */}
                                <div className="flex flex-col items-start mb-1">
                                    <label className="capitalize text-lg md:text-xl" htmlFor="lastName">Last Name</label>
                                    <input
                                        className="bg-gray-300 w-full px-2 py-2 rounded outline-none focus:outline-none text-gray-700 mt-1 transition-all duration-200 ease-in-out focus:shadow-lg"
                                        type="text"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Doe"
                                    />
                                    <p className="text-red-500 pt-1 px-2">
                                        {errors.lastName}
                                    </p>
                                </div>
                                {/* email address */}
                                <div className="flex flex-col items-start mb-1">
                                    <label className="capitalize text-lg md:text-xl" htmlFor="emailAddress">Email Address</label>
                                    <input
                                        className="bg-gray-300 w-full px-2 py-2 rounded outline-none focus:outline-none text-gray-700 mt-1 transition-all duration-200 ease-in-out focus:shadow-lg"
                                        type="text"
                                        name="emailAddress"
                                        value={values.emailAddress}
                                        onChange={handleInputChange}
                                        placeholder="johndoe@email.com"
                                    />
                                    <p className="text-red-500 pt-1 px-2">
                                        {errors.emailAddress}
                                    </p>
                                </div>
                                {/* password */}
                                <div className="flex flex-col items-start mb-1">
                                    <label className="capitalize text-lg md:text-xl" htmlFor="password">Password</label>
                                    <input
                                        className="bg-gray-300 w-full px-2 py-2 rounded outline-none focus:outline-none text-gray-700 mt-1 transition-all duration-200 ease-in-out focus:shadow-lg"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleInputChange}
                                        placeholder="password"
                                    />
                                    <p className="text-red-500 pt-1 px-2">
                                        {errors.password}
                                    </p>
                                </div>
                            </div>
                            <div className="footer">
                                {
                                    !isLoading ?
                                        <button
                                            type="submit"
                                            className="bg-indigo-700 hover:bg-indigo-600 rounded-md cursor-pointer px-12 mb-2 py-2 text-white font-normal text-lg md:text-xl">
                                            Register
                                        </button> :
                                        <div className="flex justify-around">
                                            <span className="inline-flex bg-pink-600 mb-2 rounded-md shadow-sm">
                                                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-rose-600 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed" disabled="">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing
                                                </button>
                                            </span>
                                        </div>
                                }

                                <p className="md:hidden mb-2 cursor-default px-4 py-2 text-gray-700 dark:text-gray-100" onClick={handleSwitch}>
                                    Already have an account?
                                    <span className="text-blue-500 hover:text-green-500 px-2 cursor-pointer capitalize">login</span>
                                </p>
                            </div>
                        </form>
                        {/* social media log in */}
                        <div className="flex flex-row justify-center items-center py-2">
                            {/* facebook http://localhost:5000/facebook */}
                            <p onClick={FacebookLogin} className="flex flex-row justify-center items-center bg-blue-700 hover:bg-blue-600 mx-2 px-8 py-2 text-white hover:shadow-md cursor-pointer">
                                <Facebook />
                                <p className="mx-1 capitalize">facebook</p>
                            </p>
                            {/* google http://localhost:5000/google */}
                            <p onClick={GoogleLogin} className="flex flex-row justify-center items-center bg-pink-700 hover:bg-pink-600 mx-2 px-8 py-2 text-white hover:shadow-md cursor-pointer">
                                <Google />
                                <p className="mx-1 capitalize">Google</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
