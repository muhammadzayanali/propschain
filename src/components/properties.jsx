import React from "react";
import Layout from "./logincomponents/layout";
import Pagination from "./logincomponents/pagination";
import { useNavigate } from 'react-router-dom';
// import AddProperty from "/addproperty";
// import HomeAreYouLooking from "/homeareyoulooking"


const Properties = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const properties = [
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
        {
            name: "Beautiful 50x100  Zoning R3A",
            price: "$1,120,000 USD",
            type: "New construction",
            address: "157-34 25 Avenue, Whitestone, NY",
            rating: 4.5,
            action:"dots-vertical.png"
        },
    ];
    return (
        <Layout>
            <div className="flex flex-col p-5 bg-gray-100 rounded-l-lg justify-center">
                <div className="flex flex-row justify-between items-center p-5">
                    <h1 className="text-4xl font-bold font-title">Property</h1>
                    <button className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title" onClick={() => handleNavigate('/addproperty')}>
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
                                <th className="">Property Name</th>
                                <th className="">Price</th>
                                <th className="">Type</th>
                                <th className="">Address</th>
                                <th className="">Rating</th>
                                <th className="">Action</th>
                            </tr>
                        </thead>
                        <tbody className="py-8">
                            {properties.map((property) => (
                                <tr key={property.name}>
                                    <td>
                                        <div className="flex flex-row justify-center items-center py-7">
                                            {property.name}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center">
                                            {property.price}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center">
                                            {property.type}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center">
                                            {property.address}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row gap-2 items-center">
                                            <img src="public/component 18.png" alt="image" />
                                            {property.rating}

                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-row justify-center items-center">
                                            <button>    
                                            <img className="border rounded-full p-1 bg-gray-200" src={`/${property.action}`} alt="" />
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
export default Properties;
