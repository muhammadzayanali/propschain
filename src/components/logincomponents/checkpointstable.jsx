import React from "react";

const CheckpointsTable = ({ question, isSelected, onSelect }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center my-4 p-2 py-3 border rounded-lg w-96 cursor-pointer ${
        isSelected ? "border-red-600" : "border-gray-300"
      }`}
      onClick={onSelect}
    >
      <label className="text-gray-700">{question}</label>
      <div
        className={`relative w-4 h-4 rounded-full border ${
          isSelected ? "border-red-600 bg-white flex justify-center items-center" : "border-gray-300"
        }`}
      >
        <input
          type="radio"
          name="sellTime"
          checked={isSelected}
          onChange={onSelect}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <div
          className={`absolute  w-2 h-2 p-1 m-1 rounded-full transition-all duration-200 ${
            isSelected ? "bg-red-600" : "bg-transparent"
          }`}
        />
      </div>
    </div>
  );
};

export default CheckpointsTable;
