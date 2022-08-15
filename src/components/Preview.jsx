import React, { useContext } from "react";
import context from "../context/context";

const Preview = () => {
  const { slides, indexPreview } = useContext(context);

  return (
    <div className="w-full flex h-full items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center pb-[50px]">
        <div
          style={{
            backgroundImage: `url(${slides[indexPreview - 1].image})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
          className={`w-[720px] ${
            slides[indexPreview - 1].textTemplate
          } bg-contain border border-gray-300 my-auto h-[480px]`}
        >
          <p
            className={`${slides[indexPreview - 1].fontWeight} ${
              slides[indexPreview - 1].fontColor
            } ${slides[indexPreview - 1].fontSize}
            break-all text-clip overflow-hidden	`}
          >
            {slides[indexPreview - 1].text}
          </p>
        </div>
        <p>{`${indexPreview}/${slides.length}`}</p>
      </div>
    </div>
  );
};

export default Preview;
