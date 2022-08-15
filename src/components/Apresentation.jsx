import React, { useContext } from "react";
import context from "../context/context";
import rigth from "../images/seta-direita.png";
import left from "../images/seta-esquerda.png";
import menu from "../images/menu.png";
import mais from "../images/mais.png";
import download from "../images/download-solid.svg";

const Apresentation = () => {
  const {
    indexPreview,
    setIndexPreview,
    state,
    setState,
    apresentation,
    setApresentation,
    slides,
    setSlides,
  } = useContext(context);

  return (
    <div className="flex w-full">
      <div className="flex flex-col items-center px-1 w-10 pt-2 justify-start">
        <img
          onClick={() => {
            setApresentation(!apresentation);
            setState({ ...state, image: "" });
          }}
          className="cursor-pointer"
          src={menu}
          alt="menu"
          width="25px"
        />
        <hr className="border w-full border-gray-600 my-2" />
      </div>
      <div className="flex items-center h-full flex-col w-full">
        <div className="flex w-full items-center pb-10 pr-24 h-full">
          <div className="flex flex-col h-full items-center w-12">
            <div className="flex items-center h-full">
              <img
                className="pr-1 cursor-pointer active:scale-75 scale-75 hover:scale-100"
                src={left}
                alt="seta-esquerda"
                width="40px"
                onClick={() => {
                  if (indexPreview === 1) {
                    return setIndexPreview(slides.length);
                  }
                  setIndexPreview(indexPreview - 1);
                }}
              />
            </div>
            <div className="flex w-full justify-center">
              <p>{`${indexPreview}/${slides.length}`}</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${slides[indexPreview - 1].image})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
            className={`w-full ${
              slides[indexPreview - 1].template
            } bg-cover border border-gray-500 h-full`}
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
          <div className="flex flex-col h-full items-center w-12">
            {indexPreview === slides.length ? (
              <div className="flex items-center h-full">
                <img
                  className="pl-1 cursor-pointer active:scale-75 scale-75 hover:scale-100"
                  src={mais}
                  alt="main"
                  width="40px"
                  onClick={() => {
                    if (indexPreview === slides.length) {
                      const resetState = {
                        id: indexPreview + 1,
                        image: "",
                        textTemplate: "flex justify-start items-start",
                        chartTemplate: "flex justify-start items-center",
                        text: "",
                        fontSize: "font-xl",
                        fontColor: "black",
                        fontWeight: "normal",
                        apiInformationClicks: null,
                        apiInformationImpressions: null,
                      };
                      setSlides([...slides, resetState]);
                      return setIndexPreview(indexPreview + 1);
                    }
                    setIndexPreview(indexPreview + 1);
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center h-full">
                <img
                  className="pl-1 cursor-pointer active:scale-75 scale-75 hover:scale-100"
                  src={rigth}
                  alt="seta-direita"
                  width="40px"
                  onClick={() => {
                    if (indexPreview === slides.length) {
                      setState({ ...state, id: state.id + 1 });
                      setSlides([...slides, { ...state, id: state.id + 1 }]);
                      return setIndexPreview(indexPreview + 1);
                    }
                    setIndexPreview(indexPreview + 1);
                    return console.log("nao entrei");
                  }}
                />
              </div>
            )}
            <img
              className="cursor-pointer"
              src={download}
              width="50px"
              alt="botao de download"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apresentation;
