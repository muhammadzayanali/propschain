import React from "react";
import Frame from '../../assets/Frame.png';
import Dropdown from "./dropaown";

const Header = () => {
    return (
        <div className="py-4 flex items-center justify-between ">
            <div className="flex items-center gap-x-32 flex-row">
                <img src={Frame} alt="image" className="h-7 mx-4 ps-2" />
                <div className="relative w-96">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="border p-3 rounded-full px-6 pl-10 w-full bg-gray-100"
                    />
                    <svg
                        className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 4a7 7 0 1 0 0 14a7 7 0 0 0 0-14zm8.5 15.5l-4-4"
                        />
                    </svg>
                </div>
            </div>


            <div className="flex items-center gap-3 flex-row me-3">
                <button className="border rounded-full p-2 hover:bg-slate-300"><img src="/bell-02.png" alt="" /></button>
                <div className="flex flex-row gap-1">
                    
                <img src="/Frame1.png" alt="" />
                <Dropdown name="Admin"/>
                </div>
            </div>
        </div>
    );
}
export default Header