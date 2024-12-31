import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from 'react-router-dom';


const AddProperty = () => {
      const navigate = useNavigate();
    
        const handleNavigate = (path) => {
            navigate(path);
        };

    const handleFileChange = (e) => {
        const file = e.target.files;
        console.log(file);
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
                <div className="bg-white p-5 rounded-lg mt-5 ">
                    <div className="border-2 border-dashed ">
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col gap-2 justify-center items-center my-7">
                                <img className="border rounded-full p-2 bg-gray-200" src="/vector2.png" alt="" />
                                <p className="text-gray-500">PNG,JPG(Max 800x400px)</p>

                                <div className="my-5">
                                    <label className="bg-red-700 text-white p-2 rounded-full w-36 hover:bg-red-600 text-center inline-block cursor-pointer" >
                                        Browse
                                        <input
                                            type="file"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div>
                        <div className="flex flex-row gap-5 justify-center my-6">
                            <div className="md:w-1/2">
                                <label>Property Name</label>
                                <input className="border p-3 w-full" type="text" placeholder="Enter property name" />

                            </div>
                            <div className="md:w-1/2">
                                <label>Property Type</label>
                                <input className="border p-3 w-full" type="text" placeholder="Enter property type" />
                            </div>
                        </div>
                        <label>Property Description</label>
                        <input className="border p-3 w-full" type="text" placeholder="Enter property Description" />
                        <div className="flex justify-end gap-5 my-6 px-5">
                            <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32" onClick={() => handleNavigate('/properties')}>
                                Cancel
                            </button>
                            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32" onClick={() => handleNavigate('/LookingToSell')}>
                                Next
                            </button>
                        </div>
                    </div>

                </div>
            </div>


        </Layout>
    );
}
export default AddProperty