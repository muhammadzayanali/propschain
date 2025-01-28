import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const Results = () => {
  const location = useLocation();
  const rowData = location.state;

  return (
    <Layout>
      <div className="p-5 h-screen">
        {Breadcrumps("Audit Trail", "Sheldon", "/audit")}
        <div className="flex flex-row gap-3 items-center">
          <Backarrow hrf="/audit" />
          <h1 className="text-4xl font-bold my-5">Sheldon</h1>
        </div>
        <div className="border rounded-lg p-5 bg-[#FFFFFF] flex flex-col gap-3">
          <p className="flex justify-between border-b p-2">
            <strong>Name:</strong> {rowData.Ticket}
          </p>
          <p className="flex justify-between border-b p-2">
            <strong>Email Address:</strong> {rowData.email}
          </p>
          <p className="flex justify-between border-b p-2">
            <strong>Action:</strong> {rowData.Action}
          </p>
          <p className="flex justify-between border-b p-2">
            <strong>IP Address:</strong> {rowData.ip}
          </p>
          <p className="flex justify-between border-b p-2">
            <strong>Time stamp:</strong> {rowData.time}
          </p>
          <p className="flex justify-between flex-col p-2">
            <strong>Description:</strong> Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Results;
