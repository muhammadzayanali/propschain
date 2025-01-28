import React from "react";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";

const Records = () => {
    const obj = [
        { label: "Transaction ID", data: "2143566435434" },
        { label: "Transaction Date", data: "15 Feb, 2024" },
        { label: "Full Name", data: "Sheldon D." },
        { label: "Email Address", data: "SheldonDJ@jourrapide.com" },
        { label: "Amount", data: "$1,499,000 USD" },
        { label: "Address", data: "705 Cross St. Falls Church, VA 22041" },
        { label: "Credit Card Number", data: "4532 **** **** 2514" },
        { label: "Status", data: "Failed" },
    ]
    return (
        <Layout>
            <div className="p-6 h-screen">
                {/* <div className="flex items-center gap-2">
                    <p className="text-red-700">Transaction</p>
                    <img src="/Icon.png" alt="" />
                    2143566435434
                </div> */}
                {Breadcrumps("Transaction", "2143566435434", "/transactions")}
                <h1 className="text-3xl font-bold my-6">Transactions Details</h1>
                <div className="bg-white p-5 rounded-lg mt-5">
                    <div className="flex flex-col">
                        {obj.map((item, index) => (
                            <div key={index} className="flex justify-between items-center w-full mb-3">
                                <div>
                                    <p>{item.label}</p>
                                </div>
                                <div>
                                    <p>{item.data}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Layout>
    );
}
export default Records