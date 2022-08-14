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
    apiInformationClicks: null,
    apiInformationImpressions: null,
  });

  const [preview, setPreview] = useState([]);
  const [indexPreview, setIndexPreview] = useState(1);
  const [apresentation, setApresentation] = useState(true);
  const [editPageName, setEditPageName] = useState(false);
  const [slides, setSlides] = useState([state]);
  const [slideEditor, setSlideEditor] = useState(state);
  const [resetState, setResetState] = useState(state);
  const [empresas, setEmpresas] = useState([]);
  const [campanhas, setCampanhas] = useState([]);
  const [request, setRequest] = useState({
    empresasId: null,
    campanhaId: null,
  });

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
    if (state.apiInformationClicks || state.apiInformationImpressions) {
      const newCampanha = slides.find(({ id }) => id === indexPreview);
      newCampanha["apiInformationClicks"] = state.apiInformationClicks;
      newCampanha["apiInformationImpressions"] =
        state.apiInformationImpressions;
      setSlideEditor(newCampanha);
    }
  }, [state.apiInformationClicks || state.apiInformationImpressions]);

  useEffect(() => {
    if (state.image) {
      const newSlide = slides.find(({ id }) => id === indexPreview);
      newSlide["image"] = state.image;
      setSlideEditor(newSlide);
    }
  }, [state]);

  const handleChangeId = ({ target }) => {
    const { name, value } = target;
    setRequest({
      ...request,
      [name]: value,
    });
  };

  useEffect(() => {
    async function requestCampanhas() {
      function appendEmpresas(data) {
        setEmpresas(...empresas, data);
      }
      const requestBody = {
        email: "gleybson@dp0.com.br",
        password: "gleybson@dp0.com.br",
      };
      await fetch("https://datasend.orquestraerp.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      })
        .then((e) => e.json())
        .then((e) => e.data.token)
        .then((e) => window.sessionStorage.setItem("token", e));

      await fetch("https://datasend.orquestraerp.com/api/empresas", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
        },
      })
        .then((e) => e.json())
        .then((e) => appendEmpresas(e.data));
    }
    requestCampanhas();
  }, []);

  useEffect(() => {
    if (request.empresasId) {
      async function requestCampanha() {
        function appendCampanhas(data) {
          setCampanhas(...campanhas, data);
        }
        await fetch(
          `https://datasend.orquestraerp.com/api/Campanhas/ObterCampanhaPorEmpresa?empresaId=${request.empresasId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        )
          .then((e) => e.json())
          .then((e) => appendCampanhas(e.data));
      }
      requestCampanha();
    }
    console.log(request.empresasId);
  }, [request.empresasId]);

  useEffect(() => {
    async function semanaImpressions() {
      function ArrayReduceImpressions(data) {
        return data.reduce(
          (total, current) => {
            if (current.semana === "Segunda") {
              total.segunda += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Terça") {
              total.terca += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Quarta") {
              total.quarta += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Quinta") {
              total.quinta += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Sexta") {
              total.sexta += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Sabado") {
              total.sabado += parseInt(current.impressions);
              return total;
            } else if (current.semana === "Domingo") {
              total.domingo += parseInt(current.impressions);
              return total;
            } else {
              return total;
            }
          },
          { ...Semana }
        );
      }

      function ArrayReduceClicks(data) {
        return data.reduce(
          (total, current) => {
            if (current.semana === "Segunda") {
              total.segunda += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Terça") {
              total.terca += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Quarta") {
              total.quarta += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Quinta") {
              total.quinta += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Sexta") {
              total.sexta += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Sabado") {
              total.sabado += parseInt(current.clicks);
              return total;
            } else if (current.semana === "Domingo") {
              total.domingo += parseInt(current.clicks);
              return total;
            } else {
              return total;
            }
          },
          { ...Semana }
        );
      }

      let Semana = {
        segunda: 0,
        terca: 0,
        quarta: 0,
        quinta: 0,
        sexta: 0,
        sabado: 0,
        domingo: 0,
      };

      await fetch(
        `https://datasend.orquestraerp.com/api/DadosYahoo/ObterDadosPorEmpresaCampanha?empresaId=${request.empresasId}&campanhaId=${request.campanhaId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
          },
        }
      )
        .then((e) => e.json())
        .then((e) => e.data)
        .then((e) => {
          setState({
            ...state,
            apiInformationImpressions: ArrayReduceImpressions(e),
            apiInformationClicks: ArrayReduceClicks(e),
          });
        })
        .catch((e) => console.log(e, "caiu no catch"));
    }
    semanaImpressions();
  }, [request.campanhaId]);

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
    handleChangeId,
    empresas,
    setEmpresas,
    request,
    setRequest,
    campanhas,
    setCampanhas,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
};

ProviderPowerPoint.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default ProviderPowerPoint;
