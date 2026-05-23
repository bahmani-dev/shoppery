import React from "react";

export default function FilterBar() {
  return (
    
    <div className="w-full lg:flex lg:justify-center  mt-5 lg:mt-7">
      
      {/* Main Container */}
      <div className="flex flex-col lg:mx-2 md:mx-2 sm:mx-2 mx-2 gap-4 lg:flex-row lg:items-center lg:justify-between lg:w-[1500px]">
        
        {/* Left Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          <select className="w-full lg:w-[180px] h-[48px] bg-white border border-gray-700 rounded-md px-4 text-sm text-gray-700 outline-none cursor-pointer">
            <option>Select Category</option>
            <option>Vegetables</option>
          </select>

          <select className="w-full lg:w-[180px] h-[48px] bg-white border border-gray-700 rounded-md px-4 text-sm text-gray-700 outline-none cursor-pointer">
            <option>Select Price</option>
          </select>

          <select className="w-full lg:w-[180px] h-[48px] bg-white border border-gray-700 rounded-md px-4 text-sm text-gray-700 outline-none cursor-pointer">
            <option>Select Rating</option>
          </select>
        </div>

        {/* Right Side */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <select className="w-full sm:w-[180px] h-[48px] bg-white border border-gray-700 rounded-md px-4 text-sm text-gray-700 outline-none cursor-pointer">
            <option>Sort by: Latest</option>
          </select>

          <select className="w-full sm:w-[140px] h-[48px] bg-white border border-gray-700 rounded-md px-4 text-sm text-gray-700 outline-none cursor-pointer">
            <option>Show: 16</option>
          </select>
        </div>
      </div>
    </div>
  );
}