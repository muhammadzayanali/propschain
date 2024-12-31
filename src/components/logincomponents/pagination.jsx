import React from "react";

const Pagination = () => {

    return (
        <div className=" ">
            <div className=" flex flex-row gap-4 justify-center items-center">
                <div className="border">
                    <button className="flex justify-center items-center bg-white text-gray-400 hover:text-gray-600 p-3 w-24 hover:bg-gray-200 ">
                        <div className="flex flex-row gap-2 items-center">
                            <img src="public/vector.png" alt="" />
                            Previous
                        </div>

                    </button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>1</button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>2</button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>3</button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>4</button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>5</button>
                </div>
                <div className="border flex justify-center items-center p-3 px-5 bg-white hover:bg-gray-100">
                    <button><img src="/Menu Dots.png" alt="image" /></button>
                </div>
                <div className="border p-3 px-5 bg-white hover:bg-gray-100">
                    <button>20</button>
                </div>
                <div className="border">
                    <button className="flex justify-center items-center text-white p-3 bg-blue-600 w-24 hover:bg-blue-700">
                        <div className="flex flex-row gap-2 items-center">
                            Next
                            <img src="public/vector right.png" alt="" />
                        </div>
                    </button>


                </div>
            </div>
        </div>
    );
}
export default Pagination