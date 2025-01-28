import React from "react";
import Layout from "./logincomponents/layout";
import { useNavigate } from "react-router-dom";
import Backarrow from "./logincomponents/backarrow";

const Content = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Layout>
      <div className="p-5 h-screen">
        <div className="flex flex-row items-center gap-3">
          <Backarrow hrf="/User" />
          <h1 className="text-4xl font-bold font-title my-6">
            Content Management
          </h1>
        </div>
        <div className="bg-white p-5 rounded-lg mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            <button
              className="border rounded-lg  p-5 text-start hover:border-red-400 hover:bg-red-"
              onClick={() => handleNavigate("")}
            >
              <img
                className="bg-[#C40C34] rounded-full p-3"
                src="iconglo.png"
                alt="image"
              />
              <div className="my-4">
                <h5 className="font-semibold text-xl">Web Pages</h5>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </button>
            <button
              className="border rounded-lg  p-5 text-start hover:border-red-400"
              onClick={() => handleNavigate("/Blog")}
            >
              <img
                className="bg-[#C40C34] rounded-full p-3"
                src="file-06.png"
                alt="image"
              />
              <div className="my-4">
                <h5 className="font-semibold text-xl">Blogs</h5>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </button>
            <button
              className="border rounded-lg  p-5 text-start hover:border-red-400"
              onClick={() => handleNavigate("/FAQs")}
            >
              <img
                className="bg-[#C40C34] rounded-full p-3"
                src="message-question-circle.png"
                alt="image"
              />
              <div className="my-4">
                <h5 className="font-semibold text-xl">FAQ's</h5>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Content;
