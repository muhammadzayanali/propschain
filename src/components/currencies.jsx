import React from "react";
import InputBox from "./logincomponents/tickbox";

const Currencies = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <div className="flex lg:flex-row flex-col gap-5">
          <InputBox lang="United States Dollar" sub="USD - $" />
          <InputBox lang="Euro" sub="EUR - €" />
        </div>
        <div className="flex lg:flex-row flex-col gap-5 ">
          <InputBox lang="British Pound" sub="GBP - £" />
          <InputBox lang="Australian Dollar" sub="AUD - A$" />
        </div>
      </div>
    </div>
  );
};
export default Currencies;
