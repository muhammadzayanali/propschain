import React, { useState } from "react";

const Dropdown = ({ name, menuItems }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(name);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (label) => {
        setSelected(label);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full text-left">
            <button
                onClick={toggleDropdown}
                className="inline-flex justify-between w-full p-3 text-sm font-medium border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                {selected}
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-white border border-gray-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {menuItems.map((item) => (  
                            <button
                                key={item.value}
                                className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                onClick={() => handleSelect(item.label)}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
