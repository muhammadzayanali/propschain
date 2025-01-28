import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';
import Backarrow from "./logincomponents/backarrow";

const Security = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    return (
        <Layout>
            <div className="p-5 h-screen">
                <div className="flex flex-row justify-between items-center py-5">
                    <div className="flex flex-row items-center gap-3">

                    <Backarrow hrf="/transactions"/>
                    <h1 className="text-4xl font-bold font-title">Security</h1>
                    </div>

                </div>
                <div className="bg-white p-5 rounded-lg mt-5">
                    <div className="flex flex-col gap-5">
                        <button className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500" onClick={() => handleNavigate('/phoneverification')}>
                            <div>
                                <p className="text-gray-900 font-medium text-start">Phone verification</p>
                                <p className="text-gray-500 text-sm">
                                    Your phone is verified with PropChain. Click edit to change your phone number.
                                </p>
                            </div>


                            <div className="flex items-center gap-2 cursor-pointer">
                                <img
                                    src="/Icon (2).png"
                                    alt="Edit Icon"
                                    className="w-4 h-4"
                                />
                                <p className="text-red-700 font-medium text-sm">Edit</p>
                            </div>
                        </button>

                        <button className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500" onClick={() => handleNavigate('/securityquestion')}>
                            <div>
                                <p className="text-gray-900 font-medium text-start">Security Question </p>
                                <p className="text-gray-500 text-sm text-start xl:w-full">
                                    Bycreating a security question,you will add an additional layer of protection for your revenue withdrwals and for changing your password.
                                </p>
                            </div>


                            <div className="flex items-center gap-2 cursor-pointer">
                                <img
                                    src="/Icon (2).png"
                                    alt="Edit Icon"
                                    className="w-4 h-4"
                                />
                                <p className="text-red-700 font-medium text-sm xl:p-0 pr-3">Edit</p>
                            </div>
                        </button>
                        <button className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500">
                            <div>
                                <p className="text-gray-900 font-medium text-start">Two factor Authentication
                                </p>
                                <p className="text-gray-500 text-sm text-start">
                                    To help keep your account secure,we'll ask you to submitt a code when using a new device to log in.we'll send code via SMS. email,or Propchain notification
                                </p>
                            </div>

                            <div className="flex items-center gap-2 cursor-pointer">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" />
                                    <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-red-600"></div>
                                </label>
                            </div>
                        </button>
                    </div>
                </div>

                {/* <div className="my-3">
                    <Data />
                </div> */}
            </div>
        </Layout>
    );
}
export default Security