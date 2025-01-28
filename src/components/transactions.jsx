import React from "react";
import Layout from "./logincomponents/layout";
import DataTableTemp from "./datatabletemp";
import Backarrow from "./logincomponents/backarrow";

const Transactions = () => {
  const obj = [
    {
      Ticket: 2143566435434,
      Email: "SheldonDJ@jourrapide.com",
      FullName: "Sheldon D.",
      Date: "15 Feb, 2024",
      Amount: "$1,499,000 USD",
      Status: "Failed",
    },
    {
      Ticket: 2143566435435,
      Email: "JohnSmith@jourrapide.com",
      FullName: "John Smith",
      Date: "20 Jan, 2024",
      Amount: "$2,000,000 USD",
      Status: "Completed",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
    {
      Ticket: 2143566435436,
      Email: "JaneDoe@jourrapide.com",
      FullName: "Jane Doe",
      Date: "10 Jan, 2024",
      Amount: "$500,000 USD",
      Status: "Pending",
    },
  ];

  const columns = [
    { field: "Ticket", header: "Transaction ID" },
    { field: "Email", header: "Email Address" },
    { field: "FullName", header: "Full Name" },
    { field: "Date", header: "Transaction Date" },
    { field: "Amount", header: "Amount" },
    { field: "Status", header: "Status" },
  ];

  return (
    <Layout>
      <div className="p-5">
        <div className="flex justify-between items-center mb-5">
          <div className="flex flex-row items-center gap-3">

          <Backarrow hrf="/messaging"/>
          <h1 className="text-4xl font-bold font-title">Transactions</h1>
          </div>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex flex-row justify-center items-center gap-2">
            <div>
              <img className="w-5" src="Icon (1).png" alt="" />
            </div>
            Export CSV
          </button>
        </div>
        <div className="relative w-96 mb-5">
          <input
            type="text"
            placeholder="Search here"
            className="border border-gray-300 p-3 rounded-full px-6 pl-10 w-full"
          />
        </div>
        <div className="h-screen">
          <DataTableTemp data={obj} columns={columns} hrf="/trares" />
        </div>
      </div>
    </Layout>
  );
};

export default Transactions;
