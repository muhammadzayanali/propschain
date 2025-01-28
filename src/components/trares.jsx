import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const Trares = () => {
  const location = useLocation();
  const rowData = location.state;

  return (
    <Layout>
      <div className="p-5 h-screen">
        {Breadcrumps("Transactions ", "Sheldon", "/audit")}
        <div className="flex flex-row gap-3 items-center">
          <Backarrow hrf="/audit" />
          <h1 className="text-4xl font-bold my-5">{rowData?.Ticket}</h1>
        </div>

        <div className="border rounded-lg p-5 bg-[#FFFFFF] flex flex-col gap-3">
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Transaction ID:</span>
            {rowData.Ticket}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Email Address:</span>
            {rowData.Email}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Full Name:</span> {rowData.FullName}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Transaction Date:</span>
            {rowData.Date}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Amount:</span> {rowData.Amount}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Credit Card Number:</span>
            {"4532 **** **** 2514"}
          </p>
          <p className="flex justify-between border-b p-2">
            <span className="text-gray-500">Status:</span> {rowData.Status}
            {/* {
                rowData.Status===Completed?(<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium flex justify-center items-center">
                {rowData.Status}
              </span>)
              :(<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium flex justify-center items-center">
              {rowData.Status}
            </span>
            )} */}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Trares;
