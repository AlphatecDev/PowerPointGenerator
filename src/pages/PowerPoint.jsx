import React, { useContext } from "react";
import Apresentation from "../components/Apresentation";
import Form from "../components/Form";
import Header from "../components/Header";
import Preview from "../components/Preview";
import context from "../context/context";
// import context from "../context/context"

const PowerPoint = () => {
  const { apresentation } = useContext(context);

  
  
  return (
    <div className="bg-gray-300 font-sans pl-32 w-screen h-screen">
      <div className="pl-24 h-screen bg-bggray">
        <div className="h-1/6 pt-3">
          <Header />
        </div>
        {!apresentation ? (
          <div className="flex h-5/6">
            <div className="px-1">
              <Form />
            </div>
            <div className="w-full">
              <Preview />
            </div>
          </div>
        ) : (
          <div className="flex h-5/6">
            <Apresentation />
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerPoint;
