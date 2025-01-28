import React from "react";
import Layout from "./logincomponents/layout"
import { useNavigate } from "react-router-dom";
import DataTableTemp from "./datatabletemp";
import Backarrow from "./logincomponents/backarrow";
// import AddProperty from "/addproperty";
// import HomeAreYouLooking from "/homeareyoulooking"

const Properties = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  const obj = [
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: "/dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: " /dots-vertical.png",
    },
    {
      name: "Beautiful 50x100  Zoning R3A",
      price: "$1,120,000 USD",
      type: "New construction",
      address: "157-34 25 Avenue, Whitestone, NY",
      rating: 4.5,
      action: " /dots-vertical.png",
    },
  ];
  const columns = [
    { field: "name", header: "Property Name" },
    { field: "price", header: "Price" },
    { field: "type", header: "Type" },
    { field: "address", header: "Address" },
    { field: "rating", header: "Rating" },
    { field: "action", header: "Action" },
  ];

  return (
    <Layout>
      <div className="flex flex-col p-5 bg-gray-100 rounded-l-lg justify-center">
        <div className="flex flex-row justify-between items-center my-5 mb-12">
          <div className="flex flex-row items-center gap-3">

          <Backarrow hrf="/Dashboard"/>
          <h1 className="text-4xl font-bold font-title">Property</h1>
          </div>
          <button
            className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title flex flex-row gap-1"
            onClick={() => handleNavigate("/addproperty")}
          >
            <div>
              <img src="plus.png" alt="" />
              </div>Add User
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
        <div className="h-screen mb-5">
          <DataTableTemp data={obj} columns={columns} />
        </div>
      </div>
    </Layout>
  );
};
export default Properties;
