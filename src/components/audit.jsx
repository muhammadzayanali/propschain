import React from "react";
import Layout from "./logincomponents/layout";
import DataTableTemp from "./datatabletemp";
import Backarrow from "./logincomponents/backarrow";

const Audit = () => {
  const obj = [
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
    {
      Ticket: "Sheldon",
      email: "Sheldon@jourrapide.com",
      Action: "List Modification",
      ip: "192.168.1.0",
      time: " 15 Feb, 2024 12:38am",
    },
  ];

  const columns = [
    { field: "Ticket", header: "Name" },
    { field: "email", header: "Email" },
    { field: "Action", header: "Action" },
    { field: "ip", header: "IP Address" },
    { field: "time", header: "Time" },
  ];
  return (
    <Layout>
      <div className="p-5 h-screen">
        <div className="flex flex-row items-center gap-3">

        <Backarrow hrf="/backup"/>
        <h1 className="text-4xl font-bold font-title my-4">Audit Trails</h1>
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
        <div className=" my-11 rounded-md">
        <DataTableTemp data={obj} columns={columns} hrf="/results"/>
        </div>
      </div>
    </Layout>
  );
};
export default Audit;
