import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import DataTableTemp from "./datatabletemp";
import Backarrow from "./logincomponents/backarrow";

const Support = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleClick = (label) => {
    setSelectedItem(label);
  };

  const list = [
    { label: "All New", component: 10 },
    { label: "In Progress", component: 5 },
    { label: "Completed", component: 3 },
  ];

  const obj = [
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "High",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "High",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "High",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "Medium",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "Low",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "High",
      Status: "Solved",
    },
    {
      Ticket: "#2152322",
      Created: "Sheldon D.",
      Date: "15 Feb, 2024",
      Message: "Problem adding a property list",
      Priority: "High",
      Status: "Solved",
    },
  ];

  const columns = [
    { field: "Ticket", header: "Ticket" },
    { field: "Created", header: "Created By" },
    { field: "Date", header: "Created Date" },
    { field: "Message", header: "Message" },
    { field: "Priority", header: "Priority" },
    { field: "Status", header: "Status" },
  ];

  return (
    <Layout>
      <div className="p-5 h-screen">
        <div className="flex flex-row justify-between items-center my-5">
          <div className="flex flex-row items-center gap-3">
            <Backarrow hrf="/localization" />
            <h1 className="text-4xl font-bold">Support and Helpdesk</h1>
          </div>
          <button className="border p-4 bg-blue-900 text-white rounded-md hover:bg-blue-700 flex flex-row gap-1">
            <div>
              {" "}
              <img src="plus.png" alt="" />
            </div>{" "}
            Create Ticket
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
        <div className="mt-5">
          <div className="flex flex-row gap-5 text-sm">
            {list.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(item.label)}
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`flex flex-col items-center text-lg transition-colors duration-200 pb-2 ${
                  selectedItem === item.label || hoveredItem === item.label
                    ? "border-b-2 border-red-800"
                    : "hover:border-b-2 hover:border-red-800"
                }`}
              >
                <div
                  className={`flex flex-row items-center gap-3 transition-all duration-200 ${
                    selectedItem === item.label || hoveredItem === item.label
                      ? "text-red-800"
                      : "text-gray-600"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`border rounded-3xl px-4 py-1 text-sm flex justify-center items-center transition-colors duration-200 ${
                      selectedItem === item.label || hoveredItem === item.label
                        ? "bg-red-800 text-white"
                        : "bg-transparent text-gray-600"
                    }`}
                  >
                    {item.component}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="">
          <DataTableTemp data={obj} columns={columns} hrf="/view" />
        </div>
      </div>
    </Layout>
  );
};

export default Support;
