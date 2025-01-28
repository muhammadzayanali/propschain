import React from "react";
import Layout from "./logincomponents/layout";

const Preferences = () => {
    return (
        <div className="p-6 px-8">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col items-center gap-6">
                    <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500">
                        <div>
                            <p className="text-gray-900 font-medium text-start">Email notification
                            </p>
                            <p className="text-gray-500 text-sm text-start">
                                Allow to receive email notification
                            </p>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500">
                        <div>
                            <p className="text-gray-900 font-medium text-start">Neweletters
                            </p>
                            <p className="text-gray-500 text-sm text-start">
                                Allow to stay updated and receive neweletter
                            </p>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                    <div className="border border-gray-300 rounded-xl p-4 flex justify-between items-center w-full hover:border-gray-500">
                        <div>
                            <p className="text-gray-900 font-medium text-start">Automated reports
                            </p>
                            <p className="text-gray-500 text-sm text-start">
                                Allow to send us report automatically incase of any issue
                            </p>
                        </div>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-red-600 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-red-600 peer-checked:bg-red-600"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5">
                    <button className="borders ring-2 hover:bg-blue-600 text-[#19191A] hover:text-white p-3 rounded-lg w-32" >
                        Cancel
                    </button>
                    <button className=" bg-blue-600 text-white p-4 rounded-lg w-32" >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Preferences