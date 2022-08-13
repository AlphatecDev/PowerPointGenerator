import React from "react";

const Header = () => {
  return (
    <form className="flex w-full">
      <div className="flex flex-col justify-start items-start mx-2">
        <label
          htmlFor="client"
          className="text-sm my-2 text-gray-900 font-medium"
        >
          Select a client
        </label>
        <select
          className="outline-none previ p-padding rounded-lg border
          border-gray-300 bg-gray-50 text-gray-900
          cursor-pointer text-sm"
          id="client"
        >
          <option>Choice a client</option>
        </select>
      </div>
      <div className="flex flex-col justify-start items-start">
        <label
          htmlFor="campaign"
          className="text-sm my-2 text-gray-900 font-medium"
        >
          Select a campaign
        </label>
        <select
          className="outline-none p-padding rounded-lg border
          border-gray-300 bg-gray-50 text-gray-900
          cursor-pointer text-sm"
          id="campaign"
        >
          <option>Choice a campaign</option>
        </select>
      </div>
    </form>
  );
};

export default Header;
