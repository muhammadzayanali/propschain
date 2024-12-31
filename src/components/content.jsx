import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';

const Content = () => {
     const navigate = useNavigate();
        const handleNavigate = (path) => {
            navigate(path);
        };
    return (
        <Layout>
            <div className="p-5 h-screen">
                {/* <div className="flex items-center gap-2">
                    <p className="text-red-700">Content Management</p>
                    <img src="/Icon.png" alt="" />
                    Dashboard
                </div> */}
                <h1 className="text-3xl font-bold my-6">Content Management</h1>
                <div className="bg-white p-5 rounded-lg mt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    <button className="border w-72 p-5 text-start hover:border-red-400 hover:bg-red-" onClick={() => handleNavigate("")}>
                            <img className="bg-red-600 rounded-full p-3" src="public/iconglo.png" alt="image" />
                            <div className="my-4">
                                <h5 className="font-semibold text-xl">Web Pages</h5>
                                <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            </div>
                        </button>
                        <button className="border w-72 p-5 text-start hover:border-red-400" onClick={() => handleNavigate("/Blog")}>
                            <img className="bg-red-600 rounded-full p-3" src="public/iconglo.png" alt="image" />
                            <div className="my-4">
                                <h5 className="font-semibold text-xl">Blogs</h5>
                                <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            </div>
                        </button>
                        <button className="border w-72 p-5 text-start hover:border-red-400" onClick={() => handleNavigate("/FAQs")}>
                            <img className="bg-red-600 rounded-full p-3" src="public/iconglo.png" alt="image" />
                            <div className="my-4">
                                <h5 className="font-semibold text-xl">FAQ's</h5>
                                <p className="text-sm text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default Content