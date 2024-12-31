import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import CheckpointsTable from "./logincomponents/checkpointstable";
import { useNavigate } from 'react-router-dom';

const LookingToSell = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

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
                            How soon are you looking to sell?
                        </h1>
                    </div>

                    <div className="flex flex-row justify-between flex-wrap px-6">
                        <CheckpointsTable
                            question="Right Away"
                            isSelected={selectedOption === "Right Away"}
                            onSelect={() => handleOptionChange("Right Away")}
                        />
                        <CheckpointsTable
                            question="1-3 Months"
                            isSelected={selectedOption === "1-3 Months"}
                            onSelect={() => handleOptionChange("1-3 Months")}
                        />
                        <CheckpointsTable
                            question="4+ Months"
                            isSelected={selectedOption === "4+ Months"}
                            onSelect={() => handleOptionChange("4+ Months")}
                        />
                        <CheckpointsTable
                            question="Already Listed"
                            isSelected={selectedOption === "Already Listed"}
                            onSelect={() => handleOptionChange("Already Listed")}
                        />
                    </div>

                    <div className="flex justify-end gap-5 my-6 px-5">
                        <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32"
                             onClick={() => handleNavigate("/addproperty")}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32"
                            onClick={() => handleNavigate("/HomeToSell")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default LookingToSell;
