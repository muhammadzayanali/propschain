import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';
import Backarrow from "./logincomponents/backarrow";


const Backup = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <Layout>
            <div className="p-5 h-screen">
                <div className="flex flex-rwo items-center gap-3">

                <Backarrow hrf="/setting"/>
                <h1 className="text-4xl font-bold font-title my-4">Backup & Recovery</h1>
                </div>
                <div className="bg-white p-5 rounded-lg mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="border p-5 ">
                            <img className="bg-[#C40C34] rounded-full p-3" src="upload-cloud.png" alt="" />
                            <div className="my-3">
                                <h5 className="font-bold text-lg">Create Backup</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            </div>
                            <div>
                                <button className="bg-[#002C6B] rounded-lg text-white p-4 hover:bg-blue-700 w-full" onClick={() => {handleNavigate('/backup2')}}>Get Started</button>
                            </div>
                        </div>
                        <div className="border p-5">
                            <img className="bg-[#C40C34] rounded-full p-3" src="download-cloud.png" alt="" />
                            <div className="my-3 ">
                                <h1 className="font-bold text-lg">Restore Backup</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            </div>
                            <div>
                                <button className="bg-[#002C6B] rounded-lg text-white p-4 hover:bg-blue-700 w-full" onClick={() => {handleNavigate('/restore')}}>Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Backup;