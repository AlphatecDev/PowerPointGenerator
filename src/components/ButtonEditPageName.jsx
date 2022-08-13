import React, { useContext } from "react";
import context from "../context/context";

const ButtonEditPageName = () => {
  const { editPageName, setEditPageName } = useContext(context);
  return (
    <div className="flex flex-col w-full">
      <label className="mb-1">Nome Da Página</label>
      <input
        className="text-center outline-none cursor-pointer py-1 border
        border-gray-300 rounded-lg mb-3 bg-gray-300 hover:bg-gray-500 w-full"
        value="EDITAR"
        type="button"
        onClick={() => setEditPageName(!editPageName)}
      />
    </div>
  );
};

export default ButtonEditPageName;
