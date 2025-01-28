import React from "react";
import { useNavigate } from "react-router-dom";

const Backarrow = (props) => {
  const Navigate = useNavigate();
  const handleNavigate = (path) => {
      Navigate(path);
  }
  return (
  <div className="my-4">
    <button
      className="rounded-full bg-slate-200 p-1"
      onClick={() => handleNavigate(props.hrf)}
    >
      <img src="Arrow.png" alt="Description" className="image" />
    </button>
  </div>
  );
};
export default Backarrow;