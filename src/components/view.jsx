import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const View = () => {
  const location = useLocation();
  const rowData = location.state;

  return (
    <Layout>
      <div className="p-5 h-screen">
        {Breadcrumps("Support", rowData?.Ticket, "/support")}
        <div className="flex flex-row gap-3 items-center">
          <Backarrow hrf="/support" />
          <h1 className="text-4xl font-bold my-5">{rowData?.Ticket}</h1>
        </div>
        <div className="">
          <div className="border rounded-lg p-8 bg-white flex flex-col gap-6">
            <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 justify-center lg:items-center lg:w-full">
              {Object.entries(rowData || {}).map(([key, value]) => (
                <p className="flex flex-col" key={key}>
                  <strong>{key}:</strong>{" "}
                  {value === "Solved" ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium flex justify-center items-center">
                      {value}
                    </span>
                  ) : (
                    value
                  )}
                </p>
              ))}
            </div>
            <div>
              <h1 className="text-lg font-semibold">
                Problem adding a property list
              </h1>
              <p className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div>
              <div className="flex lg:flex-row flex-col gap-5 my-4">
                <div className="lg:w-1/2 flex flex-col">
                  <label>Name</label>
                  <input
                    className="border p-3 w-full rounded-lg"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="lg:w-1/2 flex flex-col">
                  <label>Email</label>
                  <input
                    className="border p-3 w-full rounded-lg"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-5 my-4">
                <div className="flex flex-col">
                  <label>Message</label>
                  <input
                    className="border p-3 w-full rounded-lg"
                    placeholder="Enter your message"
                  ></input>
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-700 font-medium">
                    Attachments
                  </label>
                  <div className="relative">
                    <input type="file" id="file-upload" className="hidden" />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-between w-full p-2 border rounded-lg bg-white cursor-pointer"
                    >
                      <span className="text-gray-500">Choose file</span>
                      <span className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                        Browse
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-5 my-6 ">
              <button className="borders ring-2 hover:bg-blue-600 text-blue-600 hover:text-white p-3 rounded-lg w-32">
                Cancel
              </button>
              <button className="bg-[#002C6B] text-white p-4 rounded-lg hover:bg-blue-800 w-32">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default View;
