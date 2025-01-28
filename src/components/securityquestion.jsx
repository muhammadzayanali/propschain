import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';
import Dropdowndata from "./logincomponents/dropdowndata";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const SecurityQuestion = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const obj = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ]
    return (
        <Layout>
            <div className="p-6 h-screen">
            {Breadcrumps("Security", "Security Question", "/security")}
                <Backarrow hrf="/security" />
                <h1 className="text-4xl font-bold font-title my-4">Security Question</h1>

                <div className="bg-white p-5 rounded-lg my-7">
                    <div>
                        <h1 className="text-lg font-medium">
                            Answer Security Question
                        </h1>
                        <p className="text-sm text-gray-700">
                            To help keep your account secure, we'll ask you to submit a Security Question when using a new device to log in.
                        </p>
                        <div className="flex flex-col gap-20">

                            <div className="mt-4 flex flex-col gap-3">
                                <div className="">
                                    <label>What was the name of your first pet?</label>
                                    <Dropdowndata name="Your answer" menuItems={obj} />
                                </div>
                                <div className="">
                                    <label>In what city did your parents meet?</label>
                                    <Dropdowndata name="Your answer" menuItems={obj} />
                                </div>
                            </div>
                            <div className="flex justify-end gap-5 my-6 px-5">
                                <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32" onClick={() => handleNavigate('/security')}>
                                    Cancel
                                </button>
                                <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32">
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
export default SecurityQuestion