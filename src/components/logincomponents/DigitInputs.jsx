import React, { useState } from "react";

const DigitInputs = () => {
  const [inputs, setInputs] = useState(["", "", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) { 
      const newInputs = [...inputs];
      newInputs[index] = value;
      setInputs(newInputs);
    }
  };

  return (
    <div className="flex gap-5">
      {inputs.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          onChange={(e) => handleChange(e.target.value, index)}
          maxLength={1}
          className="w-10 h-10 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
};

export default DigitInputs;
