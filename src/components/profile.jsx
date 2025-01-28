import React from "react";
import Dropdown from "./logincomponents/dropdowndata";
import Swal from "sweetalert2";

const Profile = () => {
     const handleconfirm = () => {
            Swal.fire({
                title: "Congratulations",
                text: "You are Successfully Added!",
                icon: "success",
                confirmButtonText: "Ok",
            }).then(() => {
                handleNavigate("/User");
            });
    
        }
    const obj = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ]

    return (
        <div className="bg-white rounded-lg p-5">
            <div className="flex flex-col gap-12">
                <div>
                    <div className="flex lg:flex-row flex-col gap-5">
                        <div className="md:w-1/2 flex flex-col">
                            <label>Name</label>
                            <input className="border p-3 w-full rounded-lg" type="text" placeholder="Enter property name" />
                        </div>
                        <div className="md:w-1/2 flex flex-col">
                            <label>Email</label>
                            <input className="border p-3 w-full rounded-lg" type="email" placeholder="Enter property email" />
                        </div>

                    </div>
                    <div className="flex lg:flex-row flex-col gap-5 my-4">
                        <div className="md:w-1/2 flex flex-col">
                            <label>Mobile number</label>
                            <input className="border p-3 w-full rounded-lg" type="text" placeholder="Enter property number" />
                        </div>
                        <div className="md:w-1/2 flex flex-col">
                            <label>Address</label>
                            <input className="border p-3 w-full rounded-lg" type="email" placeholder="Enter property address" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-5 my-4">
                        <div className="md:w-1/2 flex flex-col">
                            <label>Country</label>
                            <Dropdown name="Select" menuItems={obj} />
                        </div>
                        <div className="md:w-1/2 flex flex-col">
                            <label>City</label>
                            <input className="border p-3 w-full rounded-lg" type="text" placeholder="Enter property number" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5 mt-5">
                    <button className="borders ring-2 hover:bg-blue-600 text-[#19191A] hover:text-white p-3 rounded-lg w-32" >
                        Cancel
                    </button>
                    <button className="bg-[#EBEDF0] text-[#767C8C] hover:bg-blue-600 hover:text-white p-4 rounded-lg  w-32" onClick={handleconfirm}>
                        Save User
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Profile