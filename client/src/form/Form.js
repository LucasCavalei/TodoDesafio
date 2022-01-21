import React, { useState } from "react";
import "./form.css";
import Blob from "../assets/Blob";
const Form = ({ getData, addTodo }) => {
  const [dia, setDia] = useState("");
  const [description, setDescription] = useState("");

  const createNote = () => {
    addTodo({ dia, description });
  };

  return (
    <>
      <Blob style={{ width: "40%", index: -1 }} />
      <form className="form-class">
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
        <label>descrição</label>
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
