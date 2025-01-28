import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';
import DigitInputs from "./logincomponents/DigitInputs";
import Swal from "sweetalert2";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const PhoneVerificationPin = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const handleconfirm = () => {
            Swal.fire({
                title: "Number Updated",
                text: "Your Number has been updated successfully",
                icon: "success",
                confirmButtonText: "Ok",
            }).then(() => {
                handleNavigate("/security");
            });
    
        }
    return (
        <Layout>
            <div className="p-6 h-screen">
            {Breadcrumps("Security", "Phone Verification", "/security")}
                <Backarrow hrf="/phoneverification2" />
                <h1 className="text-4xl font-bold font-title my-4">Phone Verification</h1>

                <div className="bg-white p-5 rounded-lg my-7">
                    <div>
                        <h1 className="text-lg font-medium">
                            Verify Your New Mobile Number
                        </h1>
                        <p className="text-sm text-gray-700">
                            We’ve sent a One Time Password (OTP) to the +923088930390  Please enter it below.
                        </p>
                        <div className="flex flex-col gap-20">
                            <div className="my-6">
                                <DigitInputs/>
                            </div>
                            <div className="flex justify-end gap-5 my-6 px-5">
                                <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32" onClick={() => handleNavigate('/phoneverification2')}>
                                    Cancel
                                </button>
                                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32" onClick={handleconfirm}>
                                    Verify
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default PhoneVerificationPin