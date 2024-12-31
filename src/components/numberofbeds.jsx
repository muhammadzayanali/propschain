import React from "react";
import { useState } from "react";
import Layout from "./logincomponents/layout";
import CheckpointsTable from "./logincomponents/checkpointstable";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const NumberOfBeds = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const handleOptionChange = (value) => {
        setSelectedOption(value);
    };

    const Navigate = useNavigate();
    const handleNavigate = (path) => {
        Navigate(path);
    }

    const handleconfirm = () => { 
        Swal.fire({ 
            title: "Congratulations", 
            text: "Your Property Listing Has Been Successfully Added!", 
            icon: "success", 
            confirmButtonText: "Ok", 
        }).then(() => { 
            handleNavigate("/properties"); 
        });

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
                            Select Number of Bedrooms for Your Property Listing
                        </h1>
                    </div>

                    <div className="flex flex-row justify-between flex-wrap px-6">
                        <CheckpointsTable
                            question="1"
                            isSelected={selectedOption === "1"}
                            onSelect={() => handleOptionChange("1")}
                        />
                        <CheckpointsTable
                            question="2"
                            isSelected={selectedOption === "2"}
                            onSelect={() => handleOptionChange("2")}
                        />
                        <CheckpointsTable
                            question="3"
                            isSelected={selectedOption === "3"}
                            onSelect={() => handleOptionChange("3")}
                        />
                        <CheckpointsTable
                            question="4"
                            isSelected={selectedOption === "4"}
                            onSelect={() => handleOptionChange("4")}
                        />
                        <CheckpointsTable
                            question="5"
                            isSelected={selectedOption === "5"}
                            onSelect={() => handleOptionChange("5")}
                        />
                        <CheckpointsTable
                            question="6"
                            isSelected={selectedOption === "6"}
                            onSelect={() => handleOptionChange("6")}
                        />
                    </div>

                    <div className="flex justify-end gap-5 my-6 px-5">
                        <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32"
                            onClick={() => handleNavigate("/homeareyoulooking")}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32"
                            onClick={handleconfirm}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </Layout>

    );
}
export default NumberOfBeds