import React from "react";
import InputBox from "./logincomponents/tickbox";

const Languages = () => {
  return (
    <div className="p-5 ">
      <div>
        <div className="flex lg:flex-row flex-col gap-5 mt-4">
          <InputBox lang="English" />
          <InputBox lang="Deutsch" />
        </div>
        <div className="flex lg:flex-row flex-col gap-5 mt-4">
          <InputBox lang="Español" />
          <InputBox lang="Français" />
        </div>
        <div className="flex lg:flex-row flex-col gap-5 mt-4">
          <InputBox lang="Português" />
          <InputBox lang="Italiano" />
        </div>
      </div>
    </div>
  );
};
export default Languages;
