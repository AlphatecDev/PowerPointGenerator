import React, { useContext, useState } from "react";
import context from "../context/context";
import menu from "../images/menu.png";

const Form = () => {
  const {
    state,
    setState,
    handleChange,
    apresentation,
    setApresentation,
    indexPreview,
    slides,
    setSlideEditor,
    slideEditor,
  } = useContext(context);

  const [text, setText] = useState("");

  const handleChangeImage = (target) => {
    const file = target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;
      setState({ ...state, image: readerTarget.result });
    });
    reader.readAsDataURL(file);
  };

  return (
    <form className="flex flex-col h-full w-full">
      <div className="flex pt-2 justify-end w-full">
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
      </div>
      <hr className="border border-gray-600 bg-black my-2" />

      <div className="flex flex-col">
        <label className="mb-1">Chart template</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          type="text"
          name="chartTemplate"
          value={state.chartTemplate}
          onChange={(e) => handleChange(e)}
        >
          <option value="flex justify-start items-center">left</option>
          <option value="flex justify-center items-center">center</option>
          <option value="flex justify-end items-center">rigth</option>
        </select>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col mr-4">
          <label className="mb-1">Text</label>

          <input
            className="outline-none text-center cursor-pointer py-1 border
              border-gray-300 rounded-lg mb-3"
            type="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a text"
          />
        </div>

        <div className="w-1/6 h-full flex items-center pt-4 justify-end">
          <input
            className="border bg-green-500 border-gray-500 py-1 px-3
              rounded-md hover:bg-green-600 duration-500
              cursor-pointer"
            type="button"
            value="X"
            onClick={() => {
              const findIndex = slides.find(({ id }) => id === indexPreview);
              findIndex["text"] = text;
              setSlideEditor({ ...slideEditor, text: text });
              setState({ ...state, text });
              setText("");
            }}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Text template</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="textTemplate"
          value={state.textTemplate}
          onChange={(e) => handleChange(e)}
        >
          <option value="flex justify-start items-start">left</option>
          <option value="flex justify-center">center</option>
          <option value="flex justify-end">rigth</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Font size</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontSize"
          value={state.fontSize}
          onChange={(e) => handleChange(e)}
        >
          <option value="text-xl">small</option>
          <option value="text-2xl">normal</option>
          <option value="text-3xl">big</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Font color</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontColor"
          value={state.fontColor}
          onChange={(e) => handleChange(e)}
        >
          <option value="text-black">black</option>
          <option value="text-white">white</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Font Weight</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontWeight"
          value={state.fontWeight}
          onChange={(e) => handleChange(e)}
        >
          <option value="normal">normal</option>
          <option value="font-bold">bold</option>
        </select>
      </div>

      <div className="flex w-full ">
        <div className="flex items-center justify-center w-5/6">
          <label
            className="flex items-center justify-center cursor-pointer
            w-full h-full border rounded-md border-gray-300 bg-blue-600
            font-bold text-white hover:bg-blue-900 duration-500"
            htmlFor="arquivo"
            onClick={() => setSlideEditor({ ...slideEditor, image: "" })}
          >
            SEND FILE
          </label>
          <input
            id="arquivo"
            className="cursor-pointer hidden rounded-lg"
            type="file"
            onChange={({ target }) => handleChangeImage(target)}
          />
        </div>
        <div className="w-1/6 h-full flex items-center justify-end">
          <input
            id="clear"
            className="border bg-red-500 border-gray-500 py-1 px-3
          rounded-md hover:bg-red-600 duration-500
          cursor-pointer"
            name="delete"
            type="button"
            value="X"
            onClick={() => {
              const findIndex = slides.find(({ id }) => id === indexPreview);
              findIndex["image"] = "";
              setSlideEditor({ ...slideEditor, image: "" });
              setState({ ...state, image: slideEditor.image });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
