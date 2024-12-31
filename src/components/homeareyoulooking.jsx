import React from "react";
import { useState } from "react";
import Layout from "./logincomponents/layout";
import CheckpointsTable from "./logincomponents/checkpointstable";
import { useNavigate } from 'react-router-dom';

const HomeAreYouLooking = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const Navigate = useNavigate();
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
                            What kind of home are you looking to sell in Queens County?
                        </h1>
                    </div>

                    <div className="flex flex-row justify-between flex-wrap px-6">
                        <CheckpointsTable
                            question="Single Family"
                            isSelected={selectedOption === "Single Family"}
                            onSelect={() => handleOptionChange("Single Family")}
                        />
                        <CheckpointsTable
                            question="Condominium"
                            isSelected={selectedOption === "Condominium"}
                            onSelect={() => handleOptionChange("Condominium")}
                        />
                        <CheckpointsTable
                            question="Townhouse"
                            isSelected={selectedOption === "Townhouse"}
                            onSelect={() => handleOptionChange("Townhouse")}
                        />
                        <CheckpointsTable
                            question="Multi-Family"
                            isSelected={selectedOption === "Multi-Family"}
                            onSelect={() => handleOptionChange("Multi-Family")}
                        />
                        <CheckpointsTable
                            question="Vacant Lot/Other"
                            isSelected={selectedOption === "Vacant Lot/Other"}
                            onSelect={() => handleOptionChange("Vacant Lot/Other")}
                        />
                        <CheckpointsTable
                            question="Commercial"
                            isSelected={selectedOption === "Commercial"}
                            onSelect={() => handleOptionChange("Commercial")}
                        />
                    </div>

                    <div className="flex justify-end gap-5 my-6 px-5">
                        <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32"
                            onClick={() => handleNavigate("/hometosell")}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32"
                            onClick={() => handleNavigate("/numberofbeds")}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}
export default HomeAreYouLooking