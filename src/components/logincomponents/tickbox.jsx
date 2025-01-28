import React, { useState } from "react";

const InputBox = ({ lang,sub }) => {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className="flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer"
      onClick={() => setSelected(!selected)}
    >
      <div className="flex flex-col">
        <span className="text-black text-md">{lang}</span>
        <span className="text-[#767C8C] text-sm">{sub}</span>
      </div>
      {selected && <span className="text-green-500 text-xl">✔</span>}
    </div>
  );
};

export default InputBox;
