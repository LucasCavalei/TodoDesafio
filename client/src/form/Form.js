import React, { useState } from "react";
import Lottie from "react-lottie";
import "./form.css";
import loading from "../assets/lotties/loading.json";
import favorite from "../assets/lotties/favorite.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: favorite,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: loading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Form = ({ getData, addTodo }) => {
  const [dia, setDia] = useState(undefined);
  const [description, setDescription] = useState("");
  const [showLottie, setShowLottie] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);

  const createNote = () => {
    addTodo({ dia, description });
    setIsLoading(true);
    playLotties();
  };
  const playLotties = () => {
    setShowLottie(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowLottie(true);
    }, 1300);
  };

  return (
    <>
      <form className="form-class">
        {isLoading ? (
          <Lottie
            options={defaultOptions2}
            style={{
              zIndex: -2,
              position: "absolute",
              top: "150px",
              height: 300,
              width: 300,
            }}
          />
        ) : null}
        {showLottie ? (
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{
              zIndex: 0,
              position: "absolute",
              top: "100px",
              height: 330,
              width: 330,
            }}
          />
        ) : null}
        <h2>{dia}</h2>
        <label>Dia da semana</label>
        <select
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          className="select"
        >
          <option value="segunda">Segunda</option>
          <option value="terca">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sabado</option>
          <option value="domingo">Domingo</option>
        </select>
        <label>Tarefa</label>
        <input
          className="description"
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="button" className="btn btn2" onClick={() => createNote()}>
          Adicinar nota
        </button>
      </form>
    </>
  );
};
export default Form;
