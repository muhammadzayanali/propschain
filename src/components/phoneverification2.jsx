import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';
import Dropdowndata from "./logincomponents/dropdowndata";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const Phoneverification2 = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const obj = [
        { label: "Pakistan", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ]
    return (
        <Layout>
            <div className="p-6 h-screen">
            {Breadcrumps("Security", "Phone Verification", "/security")}
                <Backarrow hrf="/phoneverification" />
                <h1 className="text-4xl font-bold font-title my-4">Phone Verification</h1>

                <div className="bg-white p-5 rounded-lg my-7">
                    <div>
                        <h1 className="text-lg font-medium">
                            Change your phone number
                        </h1>
                        <p className="text-sm text-gray-700">
                            Please answer the security question so we can make sure it's you
                        </p>
                        <div className="flex flex-col gap-12">

                            <div className="mt-4 flex flex-col gap-3">
                                <div className="">
                                    <label>Country</label>
                                    <Dropdowndata name="Pakistan" menuItems={obj} />
                                </div>
                                <div className="">
                                <label>Phone number</label>
                                <input className="border p-3 w-full" type="text" placeholder="Enter phone number" />
                                </div>
                            </div>
                            <div className="flex justify-end gap-5 my-6 ">
                                <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32" onClick={() => handleNavigate('/phoneverification')}>
                                    Cancel
                                </button>
                                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32" onClick={() => handleNavigate('/PhoneVerificationPin')}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Phoneverification2