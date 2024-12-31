import React from "react";
import Layout from "./logincomponents/layout";
import Pagination from "./logincomponents/pagination";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const User = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };

    const handleerror = () => {
        Swal.fire({
            title: "Warning",
            text: "Are you sure you want to delete this user?",
            icon: "warning",
            confirmButtonText: "Yes,delete it!",
            cancelButtonText: "No, cancel!",
        }).then((result) => {
            if(result.isConfirmed){
                Swal.fire('Deleted!','Your file has been deleted.','success')
            }
        });

    }

    const Users = [
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
        {
            name: "Sheldon D. Jaramillo",
            email: "SheldonDJaramillo@jourrapide.com",
            userrole: "Property Owners",
            lastlogin: "15 Feb, 2024",
            action: "dots-vertical.png"
        },
    ];
    return (
        <Layout>
            <div className="flex flex-col p-5 bg-gray-100 rounded-l-lg justify-center">
                <div className="flex flex-row justify-between items-center p-5">
                    <h1 className="text-4xl font-bold font-title">User Management </h1>
                    <button className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title" onClick={() => handleNavigate('/AddUser')}>
                        <span className="h-52 w-52">+</span>Add User
                    </button>
                </div>
                <div className="relative w-96">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="border p-3 rounded-2xl px-6 pl-10 w-full"
                    />
                    <svg
                        className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm8.5 15.5l-4-4"
                        />
                    </svg>
                </div>
                <div className=" bg-white my-11 rounded-md px-6">
                    <table className="w-full mt-5">
                        <thead>
                            <tr className="gap-8 text-start">
                                <th className="text-start">Name</th>
                                <th className="text-start">Email</th>
                                <th className="text-start">User role</th>
                                <th className="text-start">Last logged in</th>
                                <th className="text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody className="py-8">
                            {Users.map((use) => (
                                <tr key={use.name}>
                                    <td>
                                        <div className="flex flex-row text-start items-center py-7">
                                            {use.name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row text-start items-center">
                                            {use.email}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row text-start items-center">
                                            {use.userrole}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row text-start items-center">
                                            {use.lastlogin}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row text-start items-center">
                                            <button onClick={handleerror}>
                                                <img className="border rounded-full p-1 bg-gray-200 m-1" src={`/${use.action}`} alt="" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        </Layout>
    );
};
export default User;
