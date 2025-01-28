import React from "react";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const ProgressBar = ({ value, max }) => {
  const progressPercentage = (value / max) * 100;

  return (
    <div className="w-full  p-4 bg-white">
      <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
        <div
          className="bg-[#C40C34] h-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Restore = () => {
  return (
    <Layout>
      <div className="p-5 h-screen">
        {/* <div className="flex items-center gap-2">
          <p className="text-[#C40C34]">Backup & Recovery</p>
          <img src="/Icon.png" alt="" />
          Restore Backup
        </div> */}
        {Breadcrumps("Backup & Recovery", "Restore Backup", "/backup")}
        <div className="flex flex-row gap-3 justify-start items-center my-6">
          <Backarrow hrf="/backup" />
          <h1 className="text-3xl font-bold ">Restore Backup</h1>
        </div>
        <div className="bg-white p-5 rounded-lg mt-5 ">
          <div>
            <div className="border p-5 rounded-lg">
              <div className="flex justify-between items-center py-3">
                <div className="flex flex-row gap-5">
                  <img
                    className="border rounded-full p-3 bg-[#EBEDF0]"
                    src="file.png"
                    alt=""
                  />
                  <div>
                    <h2 className="text-lg font-semibold">Backup file name </h2>
                    <div className="flex gap-2">
                      <p>20 mb</p>
                      <img src="Line 8.png" alt="" />
                      <p>10% Restored</p>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="bg-[#EBEDF0] rounded-full p-3"
                    src="x.png"
                    alt=""
                  />
                </div>
              </div>
              <ProgressBar value={40} max={100} />
            </div>
            <div className="border p-5 rounded-lg mt-5">
              <div className="flex justify-between items-center py-1">
                <div className="flex flex-row gap-5">
                  <img
                    className="border rounded-full p-3 bg-[#EBEDF0]"
                    src="file.png"
                    alt=""
                  />
                  <div>
                    <h2 className="text-lg font-semibold">Backup file name </h2>
                    <div className="flex gap-2">
                      <p>20 mb</p>
                      <img src="Line 8.png" alt="" />
                      <p>Created on: 21 Feb, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <img
                    className="bg-[#EBEDF0] rounded-full p-3"
                    src="upload-cloud-02.png"
                    alt=""
                  />
                  <img
                    className="bg-[#EBEDF0] rounded-full p-3"
                    src="trash-04.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Restore;
