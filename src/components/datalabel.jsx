import React, {useState} from "react";

const Data = () => {
    const [selected ,setselected] = useState(null)
    const handleClick= (item) => {
        setselected(item)
    }
    const data =[
        {label:"Day"},
        {label:"Week"},
        {label:"Month"},
        {label:"Year"}
    ];
    return(
        <div className="flex flex-row gap-5 border bg-gray-200 rounded-lg p-3 ">
            {data.map( (item) =>(
                <button onClick={() => handleClick(item.label)} className={`${selected === item.label
                    ? "bg-red-600 text-white border rounded-lg p-1"
                    : "text-gray-600"
                    }`}>{item.label}</button>
            ))}
        </div>
    );
}
export default Data