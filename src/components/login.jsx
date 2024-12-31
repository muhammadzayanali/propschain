import React from "react";
import Siderbar from './logincomponents/sidepage'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="fluid-container">
            <div className="grid md:grid-cols-12 grid-cols-1">
                <div className="col-span-5 flex justify-center align-center flex-col m-6 md:p-10 p-0 gap-6">
                    <h1 className="text-3xl font-bold">Login to the PropChain</h1>
                    <div className="flex justify-center align-center flex-col gap-5">
                        <div className="flex flex-col">
                            <label>Email</label>
                            <input className="border p-3" type="email" placeholder="enter your email" />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <div className="flex items-center border p-3">
                                <input
                                    className="flex-grow outline-none"
                                    type="text"
                                    placeholder="Enter password"
                                />
                                <svg
                                    className="w-5 h-5 ml-2 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 4.5C7 4.5 3.2 7.5 1.8 12c1.4 4.5 5.2 7.5 10.2 7.5s8.8-3 10.2-7.5C20.8 7.5 17 4.5 12 4.5z"
                                    />
                                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                        <button className="bg-slate-200 p-3 hover:bg-blue-600 hover:text-white" onClick={() => handleNavigate('/Dashboard')}>Log in</button>
                        <button className="text-red-700 hover:text-red-900" onClick={() => handleNavigate('/resets')}>Reset Password</button>
                    </div>
                </div>
                <div className="col-span-7 w-full min-h-screen flex justify-center items-center bg-pink-100 ">
                    <Siderbar />
                </div>
            </div>
        </div>
    );
}
export default Login