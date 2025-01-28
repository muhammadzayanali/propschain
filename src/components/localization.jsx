import React, { useState } from "react";
import Layout from "./logincomponents/layout";
import Languages from "./languages";
import Currencies from "./currencies";
import Backarrow from "./logincomponents/backarrow";

const Localization = () => {
  const [selectedItem, setSelectedItem] = useState("Languages");

  const list = [
    { label: "Languages", component: <Languages /> },
    { label: "Currencies", component: <Currencies /> },
  ];

  const handleClick = (label) => {
    setSelectedItem(label);
  };

  return (
    <Layout>
      <div className="p-5 h-screen">
        <div className="flex flex-row items-center gap-3">
          <Backarrow hrf="/audit" />
          <h1 className="text-4xl font-bold font-title my-4">
            Localization and Internationalization
          </h1>
        </div>
        <div className="flex flex-row gap-5 text-sm">
          {list.map((item) => (
            <button
              key={item.label}
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
          {list.find((item) => item.label === selectedItem)?.component}
        </div>
      </div>
    </Layout>
  );
};

export default Localization;
