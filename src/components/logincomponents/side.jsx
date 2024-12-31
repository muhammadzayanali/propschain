import React from "react";
import { Link, useLocation } from "react-router-dom";

const Side = () => {
    const location = useLocation();  // Get the current location/pathname

    // Define sidebar items
    const sidebarItems = [
        { label: "Dashboard", icon: "icon1.png", to: "/dashboard" },
        { label: "Property", icon: "icon2.png", to: "/properties" },
        { label: "User Management", icon: "icon3.png", to: "/user" },
        { label: "Content Management", icon: "icon4.png", to: "/content" },
        { label: "Analytics & Reporting", icon: "icon5.png", to: "/analytics" },
        { label: "Messaging", icon: "icon6.png", to: "/messaging" },
        { label: "Transactions", icon: "icon7.png", to: "/transactions" },
        { label: "Security", icon: "icon8.png", to: "/security" },
        { label: "Setting", icon: "icon9.png", to: "/setting" },
        { label: "Backup & Recovery", icon: "icon10.png", to: "/backup" },
        { label: "Audit Trail", icon: "icon11.png", to: "/audit" },
        { label: "Localization", icon: "icon12.png", to: "/localization" },
        { label: "Support", icon: "icon13.png", to: "/support" },
    ];

    // Function to check if the current path is active (exact or child route)
    const isActive = (path) => {
        // Get the current path
        const currentPath = location.pathname;

        // Check if the current path starts with the item path or is exactly the same
        return currentPath === path || currentPath.startsWith(path + "/");
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
                {sidebarItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.to}
                        className={`flex gap-4 justify-start items-center p-4 rounded-2xl w-full ${
                            isActive(item.to)
                                ? "bg-red-600 text-white"  // Active state
                                : "hover:bg-red-600 hover:text-white"  // Hover state
                        }`}
                    >
                        <img src={`/${item.icon}`} alt={item.label} />
                        <p>{item.label}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Side;
