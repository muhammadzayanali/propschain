import React from "react";
import Layout from "./logincomponents/layout";
import Accordian from "./logincomponents/accordian";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const FAQs = () => {
  return (
    <Layout>
      <div className="p-5 h-screen">
        {/* <div className="flex items-center gap-2">
                    <p className="text-red-700">Content Management</p>
                    <img src="/Icon.png" alt="" />
                    FAQ's
                </div> */}
        {Breadcrumps("Content Management", "FAQ's", "/content")}
        <div className="flex flex-row justify-between items-center my-4">
          <div className="flex flex-row gap-3 items-center">
            <Backarrow hrf="/content" />
            <h1 className="text-4xl font-bold font-title">FAQ's</h1>
          </div>
          <button
            className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title"
            onClick={() => handleNavigate("/addproperty")}
          >
            <span className="h-52 w-52">+</span>Add User
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg mt-5">
          <Accordian />
        </div>
      </div>
    </Layout>
  );
};
export default FAQs;
