import React from "react";
import Siderbar from './logincomponents/sidepage'
import DigitInputs from './logincomponents/DigitInputs'
import { useNavigate } from 'react-router-dom';
import Backarrow from "./logincomponents/backarrow";

const Verification = () => {
    const Navigate = useNavigate();
    const handleNavigate = (path) => {
        Navigate(path);
    }
    return (
        <div className="conatiner-fluid">
            <div className="grid md:grid-cols-12 grid-cols-1">
                <div className="col-span-5 flex justify-center flex-col m-6 md:p-10 p-0 gap-6">
                    <Backarrow hrf="/resets"/>
                    <h1 className="text-3xl font-bold justify-start">Verification Required</h1>
                    <p>We’ve sent a One Time Password (OTP) to the email
                        ahmerilyassial@gmail.com  Please enter it below.</p>
                    <div className="flex justify-center flex-col gap-5">
                        <div className="flex justify-center items-center gap-10">
                            <DigitInputs />
                        </div>

                        <button className="bg-slate-200 p-3 hover:bg-blue-600 hover:text-white font-title" onClick={() => handleNavigate("/")}>Continue</button>
                        <button className="text-red-700 hover:text-red-900" >Resend OPT</button>
                    </div>
                </div>
                <div className="col-span-7 w-full min-h-screen flex justify-center items-center bg-pink-100 ">
                    <Siderbar />
                </div>
            </div>
        </div>
    );
}
export default Verification