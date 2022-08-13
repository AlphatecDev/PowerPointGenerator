import React, { useContext } from "react";
import context from "../context/context";

const Preview = () => {
  const { slides, indexPreview } = useContext(context);

  return (
    <div className="w-full h-full">
      <div className="h-10 flex items-center justify-center">
        <p className="text-xl text-center">{slides[indexPreview - 1].pageName}</p>
      </div>
      <div className="h-90 w-full flex justify-center items-center pb-16">
        <div
          style={{
            backgroundImage: `url(${slides[indexPreview - 1].image})`,
            backgroundSize: "768px 432px",
            backgroundRepeat: "no-repeat",
          }}
          className={`w-pw ${slides[indexPreview - 1].template} bg-contain border border-gray-300 h-ph`}
        >
          <p
            className={`${slides[indexPreview - 1].fontWeight} ${slides[indexPreview - 1].fontColor} ${slides[indexPreview - 1].fontSize}
            break-all text-clip overflow-hidden	`}
          >
            {slides[indexPreview - 1].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
