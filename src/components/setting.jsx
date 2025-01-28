import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import Profile from "./profile";
import Preferences from "./preferences";
import ChangePassword from "./changepassword";
import Backarrow from "./logincomponents/backarrow";

const Setting = () => {
  const [selectedItem, setSelectedItem] = useState("Profile");

  const list = [
    { label: "Profile", component: <Profile /> },
    { label: "Preferences", component: <Preferences /> },
    { label: "Change Password", component: <ChangePassword /> },
  ];

  const handleClick = (label) => {
    setSelectedItem(label);
  };

  return (
    <Layout>
      <div className="p-5 h-screen">
        <div className="flex flex-row items-center gap-3">
          <Backarrow hrf="/security" />
          <h1 className="text-4xl font-bold font-title my-4">Setting</h1>
        </div>
        <div className="flex flex-row gap-5 text-sm"> 
          {list.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item.label)}
              className={`text-lg ${
                selectedItem === item.label
                  ? "text-red-600 underline"
                  : "text-gray-600"
              } hover:text-red-600 hover:underline transition-colors duration-200`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-lg mt-5">
          {selectedItem
            ? list.find((item) => item.label === selectedItem)?.component
            : " "}
        </div>
      </div>
    </Layout>
  );
};

export default Setting;
