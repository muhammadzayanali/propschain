import React from "react";
import Layout from "./logincomponents/layout";
import Breadcrumps from "./logincomponents/breadcrumps";
import Backarrow from "./logincomponents/backarrow";

const Blog = () => {
  return (
    <Layout>
      <div className="p-5">
        {/* <div className="flex items-center gap-2">
                    <p className="text-red-700">Content Management</p>
                    <img src="/Icon.png" alt="" />
                    Dashboard
                </div> */}
        {Breadcrumps("Content Management", "Blogs", "/content")}
        <div className="flex flex-row justify-between items-center my-5">
          <div className="flex flex-row gap-3 justify-center items-center">
            <Backarrow hrf="/content" />
            <h1 className="text-4xl font-bold font-title">Blogs </h1>
          </div>
          <button
            className="border p-2 w-32 bg-blue-900 text-white rounded-md hover:bg-blue-700 font-title flex flex-row gap-1"
            onClick={() => handleNavigate("")}
          >
            <div>
              {" "}
              <img src="plus.png" alt="" />
            </div>
            Add User
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="">
              <img
                className="onject-cover"
                src="Search.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="onject-cover"
                src="Search2.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="onject-cover"
                src="Search3.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="onject-cover"
                src="Search.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="onject-cover"
                src="Search2.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="">
              <img
                className="onject-cover"
                src="Search3.png"
                alt="image"
              />
              <div className="w-72">
                <h5 className="font-semibold">
                  The best perks on offer from new-build developers
                </h5>
                <p className="text-sm text-gray-500">22 February 2024</p>
                <p className="text-sm text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Blog;
