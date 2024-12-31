import React from "react";
import Layout from "./logincomponents/layout";

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex flex-col p-5 ">
                <h1 className="text-4xl font-bold font-title p-5">Dashboard</h1>
                <div className="flex flex-row justify-center items-center gap-5 my-5">
                    <div className="flex xl:flex-row flex-col justify-center items-center gap-7">
                        <div className="flex flex-col gap-5 p-5 bg-white rounded-lg w-72">
                            <img className="h-10 w-10 bg-red-100 p-2" src="/apartment.png" alt="" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold font-title">$24,000</h1>
                                <p className="text-gray-400 font-title">Total Properties</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-5 p-5 bg-white rounded-lg w-80">
                            <img className="h-10 w-10 bg-red-100 p-2" src="/apartment.png" alt="" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold font-title">$24,000</h1>
                                <p className="text-gray-400 font-title">Properties for Sale</p>
                            </div>

                        </div>

                        <div className="flex flex-col gap-5 p-5 bg-white rounded-lg w-80">
                            <img className="h-10 w-10 bg-red-100 p-2" src="/apartment.png" alt="" />
                            <div className="flex flex-col gap-2">
                                <h1 className="text-2xl font-bold font-title">$24,000</h1>
                                <p className="text-gray-400 font-title">Properties for Rent</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <img className="w-auto" src="/Frame2.png" alt="" />
                </div>

            </div>
        </Layout>
    );
}
export default Dashboard