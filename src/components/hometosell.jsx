import React from "react";
import { useState } from "react";
import Layout from "./logincomponents/layout";
import CheckpointsTable from "./logincomponents/checkpointstable";
import { useNavigate } from 'react-router-dom';

const HomeToSell = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const Navigate= useNavigate();
    const handleNavigate = (path) => {
        Navigate(path);
    }

    return (
        <Layout>
            <div className="p-5">
                <div className="flex items-center gap-2">
                    <p className="text-red-700">Property</p>
                    <img src="/Icon.png" alt="" />
                    Add Property
                </div>
                <h1 className="text-3xl font-bold my-6">Add Property</h1>

                <div className="bg-white p-5 rounded-lg mt-5">
                    <div className="p-6 py-2">
                        <h1 className="text-lg font-bold">
                            How much do you think your home will sell for?
                        </h1>
                    </div>

                    <div className="flex flex-row justify-between flex-wrap px-6">
                        <CheckpointsTable
                            question="$1.3M or more"
                            isSelected={selectedOption === "$1.3M or more"}
                            onSelect={() => handleOptionChange("$1.3M or more")}
                        />
                        <CheckpointsTable
                            question="$1M - $1.3M"
                            isSelected={selectedOption === "$1M - $1.3M"}
                            onSelect={() => handleOptionChange("$1M - $1.3M")}
                        />
                        <CheckpointsTable
                            question="$701K - $1M"
                            isSelected={selectedOption === "$701K - $1M"}
                            onSelect={() => handleOptionChange("$701K - $1M")}
                        />
                        <CheckpointsTable
                            question="$601K - $700K"
                            isSelected={selectedOption === "$601K - $700K"}
                            onSelect={() => handleOptionChange("$601K - $700K")}
                        />
                        <CheckpointsTable
                            question="$401K - $600K"
                            isSelected={selectedOption === "$401K - $600K"}
                            onSelect={() => handleOptionChange("$401K - $600K")}
                        />
                        <CheckpointsTable
                            question="$400K or less"
                            isSelected={selectedOption === "$400K or less"}
                            onSelect={() => handleOptionChange("$400K or less")}
                        />
                    </div>

                    <div className="flex justify-end gap-5 my-6 px-5">
                        <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32"
                            onClick={() => handleNavigate("/lookingtosell")}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32"
                            onClick={() => handleNavigate("/homeareyoulooking")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}
export default HomeToSell