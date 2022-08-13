import React, { useEffect, useState } from "react";
import context from "./context";
import PropTypes from "prop-types";

const ProviderPowerPoint = ({ children }) => {
  const [state, setState] = useState({
    id: 1,
    pageName: "",
    image: "",
    template: "flex justify-start items-start",
    text: "",
    fontSize: "font-xl",
    fontColor: "black",
    fontWeight: "normal",
  });

  const [preview, setPreview] = useState([]);
  const [indexPreview, setIndexPreview] = useState(1);
  const [apresentation, setApresentation] = useState(true);
  const [editPageName, setEditPageName] = useState(false);
  const [slides, setSlides] = useState([state]);
  const [slideEditor, setSlideEditor] = useState([]);
  const [resetState, setResetState] = useState(state);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
    const newSlide = slides.find(({ id }) => id === indexPreview);
    newSlide[name] = value;
    setSlideEditor(newSlide);

    handleChangeImage(target);
  };

  const handleChangeImage = (target) => {
    if (target.name === "image") {
      const file = target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", function (e) {
        const readerTarget = e.target;
        setState({ ...state, image: readerTarget.result });
      });
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (state.image) {
      const newSlide = slides.find(({ id }) => id === indexPreview);
      newSlide["image"] = state.image;
      setSlideEditor(newSlide);
    }
  }, [state]);

  const contextValue = {
    resetState,
    setResetState,
    state,
    setState,
    handleChange,
    slides,
    setSlides,
    preview,
    setPreview,
    indexPreview,
    setIndexPreview,
    apresentation,
    setApresentation,
    editPageName,
    setEditPageName,
    slideEditor,
    setSlideEditor,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

ProviderPowerPoint.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderPowerPoint;
