import React from "react";
import Frame from '../../assets/Frame.png';


const Sidebar = () => {
    return (
        <div className="flex justify-center items-center w-full h-full p-6">
            <img src={Frame} alt="Description" className="h-10"/>
        </div>
    );
}
export default Sidebar