import React from "react";
import Layout from "./logincomponents/layout";
import Dropdowndata from "./logincomponents/dropdowndata";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const AddUser = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleconfirm = () => {
        Swal.fire({
            title: "Congratulations",
            text: "You are Successfully Added!",
            icon: "success",
            confirmButtonText: "Ok",
        }).then(() => {
            handleNavigate("/User");
        });

    }

    const dropdownItems = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];
    return (
        <Layout>
            <div className="p-5">
                <div className="flex items-center gap-2">
                    <p className="text-red-700">User Management</p>
                    <img src="/Icon.png" alt="" />
                    Add User
                </div>
                <h1 className="text-3xl font-bold my-6">Add User</h1>
                <div className="bg-white p-5 rounded-lg mt-5 ">
                    <div>
                        <div className="flex flex-row gap-5 justify-center my-6">
                            <div className="md:w-1/2">
                                <label>Name</label>
                                <input className="border p-3 w-full" type="text" placeholder="Enter property name" />

                            </div>
                            <div className="md:w-1/2">
                                <label>E-mail</label>
                                <input className="border p-3 w-full" type="text" placeholder="Enter property type" />
                            </div>
                        </div>

                        <div>
                            <label>User Role</label>
                            <Dropdowndata name="Select Option" menuItems={dropdownItems} />

                        </div>

                        {/* <input className="border p-3 w-full" type="text" placeholder="Enter property Description" /> */}
                        <div className="flex justify-end gap-5 my-6 px-5">
                            <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32" onClick={() => handleNavigate('/User')}>
                                Cancel
                            </button>
                            <button className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 w-32" onClick={handleconfirm}>
                                Save User
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default AddUser