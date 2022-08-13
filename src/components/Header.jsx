import React, { useContext, useState } from "react";
import context from "../context/context";

const Header = () => {
  const { campanhas, empresas, request, setRequest, handleChangeId } =
    useContext(context);

  return (
    <form className="flex w-full">
      <script>request()</script>
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
          name="empresasId"
          onChange={(e) => handleChangeId(e)}
        >
          <option>Choice a client</option>
          {empresas &&
            empresas.map((empresa, index) => (
              <option key={index} value={empresa.id}>
                {empresa.nome}
              </option>
            ))}
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
          name="campanhaId"
          onChange={(e) => handleChangeId(e)}
        >
          <option>Choice a campaign</option>
          {campanhas &&
            campanhas.map((campanha, index) => (
              <option key={index} value={campanha.id}>
                {campanha.nome}
              </option>
            ))}
        </select>
      </div>
    </form>
  );
};

export default Header;
