import React from "react";


const ChangePassword = () => {
    return (
        <div className="p-5">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <div className="flex lg:flex-row flex-col gap-5 my-4">
                        <div className="md:w-1/2 flex flex-col">
                            <label>Old Password</label>
                            <input className="border p-3 w-full rounded-lg" type="text" placeholder="Enter property old password" />
                        </div>
                        <div className="md:w-1/2 flex flex-col">
                            <label>New password</label>
                            <input className="border p-3 w-full rounded-lg" type="email" placeholder="Enter new password" />
                        </div>
                    </div>
                    <div className=" flex flex-col">
                        <label>Confirm Password</label>
                        <input className="border p-3 w-full rounded-lg" type="text" placeholder="Enter confirm password" />
                    </div>
                </div>
                <div className="flex justify-end gap-5 my-6">
                    <button className="borders ring-2 hover:bg-blue-600 text-[#19191A] hover:text-white p-3 rounded-lg w-32" >
                        Cancel
                    </button>
                    <button className="bg-[#EBEDF0] text-[#767C8C] hover:bg-blue-600 hover:text-white p-4 rounded-lg  w-32">
                        Save User
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ChangePassword