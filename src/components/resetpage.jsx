import React from "react";
import { useNavigate } from 'react-router-dom';
import Backarrow from "./logincomponents/backarrow";

import Siderbar from './logincomponents/sidepage';

const Resets = () => {
    const Navigate = useNavigate();
    const handleNavigate = (path) => {
        Navigate(path);
    }


    return (
        <div className="fluid-container">
            <div className="grid md:grid-cols-12 grid-cols-1">
                <div className="col-span-5 flex justify-center align-center flex-col m-6 md:p-10 p-0 gap-6">
                    <div className="my-3">
                        <Backarrow hrf="/"/>
                        <h1 className="text-3xl font-bold font-title">Enter Email Address</h1>
                        <p className="font-title">We will send you a reset password link to your email address.</p>
                    </div>

                    <div className="flex justify-center align-center flex-col gap-5">
                        <div className="flex flex-col">
                            <label className="font-title">Email</label>
                            <input className="border p-3 font-title" type="email" placeholder="enter your email" />
                        </div>
                        <button className="bg-slate-200 p-3 hover:bg-blue-600 hover:text-white font-title" onClick={() => handleNavigate("/Verification")}>Reset Password</button>
                    </div>
                </div>
                <div className="col-span-7 w-full min-h-screen flex justify-center items-center bg-pink-100 ">
                    <Siderbar />
                </div>
            </div>
        </div>
    );
}
export default Resets