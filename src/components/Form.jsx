import React, { useContext } from "react";
import context from "../context/context";
import menu from "../images/menu.png";

const Form = () => {
  const {
    state,
    setState,
    template,
    text,
    fontSize,
    fontColor,
    fontWeight,
    handleChange,
    apresentation,
    setApresentation,
    editPageName,
    setEditPageName,
    indexPreview,
    slides,
    setSlideEditor,
    slideEditor,
  } = useContext(context);

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
            setState({ ...state, pageName: "", image: "" });
          }}
          className="cursor-pointer"
          src={menu}
          alt="menu"
          width="25px"
        />
      </div>
      <hr className="border border-gray-600 my-2" />

      <div className="flex w-full">
        <div className="flex flex-col mr-4">
          <label className="mb-1">Nome Da Página</label>
          {editPageName ? (
            <input
              className="outline-none text-center cursor-pointer py-1 border
                border-gray-300 rounded-lg mb-3"
              type="text"
              value={state.pageName}
              name="pageName"
              placeholder={editPageName && "Editar nome da página"}
              onChange={(e) => handleChange(e)}
              onClick={() => {
                setEditPageName(!editPageName);
              }}
            />
          ) : (
            <input
              className="outline-none text-center cursor-pointer py-1 border
              border-gray-300 rounded-lg mb-3"
              type="text"
              name="pageName"
              value={slides[indexPreview - 1].pageName}
              disabled={editPageName}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        <div className="w-1/6 h-full flex items-center pt-4 justify-end">
          {editPageName ? (
            <input
              id="clear"
              className="border bg-red-500 border-gray-500 py-1 px-3
                rounded-md hover:bg-red-600 duration-500
                cursor-pointer"
              type="button"
              value="X"
              onChange={(e) =>
                handleChange({ ...state, pageName: e.target.value })
              }
              onClick={() => {
                setEditPageName(!editPageName);
              }}
            />
          ) : (
            <input
              id="clear"
              className="border bg-green-500 border-gray-500 py-1 px-3
              rounded-md hover:bg-green-600 duration-500
              cursor-pointer"
              type="button"
              value="X"
              onClick={() => {
                setEditPageName(!editPageName);
                  const findIndex = slides.find(({ id }) => id === indexPreview);
                  findIndex["pageName"] = state.pageName;
                  setEditPageName(!editPageName);
                  setState({ ...state, pageName: '' })
              }}
            />
          )}
        </div>
        {/* <div className="w-1/6 h-full flex items-center pt-4 justify-end">
          <input
            id="clear"
            className="border bg-red-500 border-gray-500 py-1 px-3
                rounded-md hover:bg-red-600 duration-500
                cursor-pointer"
            type="button"
            value="X"
            onChange={(e) =>
              handleChange({ ...state, pageName: e.target.value })
            }
            onClick={() => {
              const findIndex = slides.find(({ id }) => id === indexPreview);
              findIndex["pageName"] = state.pageName;
              setEditPageName(!editPageName);
              setState({ ...state, pageName: '' })
            }}
          />
        </div> */}
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Texto</label>
        <input
          className="outline-none text-center cursor-pointer py-1 border border-gray-300 rounded-lg mb-3"
          type="text"
          name="text"
          value={text}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Template</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="template"
          value={template}
          onChange={(e) => handleChange(e)}
        >
          <option value="flex justify-start items-start">
            canto superior esquerdo
          </option>
          <option value="flex justify-center">centro superior</option>
          <option value="flex justify-end">canto superior direito</option>
          <option value="flex justify-start items-center">
            centro esquerdo
          </option>
          <option value="flex justify-center items-center">centro</option>
          <option value="flex justify-end items-center">centro direito</option>
          <option value="flex justify-start items-end">
            canto inferior esquerdo
          </option>
          <option value="flex justify-center items-end">centro inferior</option>
          <option value="flex justify-end items-end">
            canto inferior direito
          </option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Tamanho da Fonte</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontSize"
          value={fontSize}
          onChange={(e) => handleChange(e)}
        >
          <option value="text-xl">pequeno</option>
          <option value="text-2xl">médio</option>
          <option value="text-3xl">normal</option>
          <option value="text-4xl">grande</option>
          <option value="text-5xl">extra-grande</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Cor Da Fonte</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontColor"
          value={fontColor}
          onChange={(e) => handleChange(e)}
        >
          <option value="text-black">preto</option>
          <option value="text-white">branco</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label className="mb-1">Peso da Fonte</label>
        <select
          className="outline-none cursor-pointer py-2 border border-gray-300 rounded-lg mb-3"
          name="fontWeight"
          value={fontWeight}
          onChange={(e) => handleChange(e)}
        >
          <option value="normal">normal</option>
          <option value="font-bold">negrito</option>
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
            ENVIAR ARQUIVO
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
              // setSlideEditor({ ...slideEditor, image: "" })
              const findIndex = slides.find(({ id }) => id === indexPreview);
              findIndex["image"] = "";
              setState({ ...state, image: "" });
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
