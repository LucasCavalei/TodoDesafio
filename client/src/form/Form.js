import axios from "axios";
import React, { useState } from "react";
import "./form.css";

const Form = ({ getData }) => {
  const [date, setDate] = useState();
  const [description, setDescription] = useState("");

  const createNote = () => {
    const newTodo = {
      date,
      description,
    };

    axios
      .post("/todos", newTodo)
      .then((res) => {
        console.log("resoinsa axios do backend", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="form-wrapper">
      <form className="form-class">
        <div className="form-sub">
          <label>Dia da semana</label>
          <h2>{date}</h2>
          <select value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="segunda">Segunda</option>
            <option value="terca">Terça</option>
            <option value="quarta">Quarta</option>
            <option value="quinta">Quinta</option>
            <option value="sexta">Sexta</option>
            <option value="sabado">Sabado</option>
            <option value="domingo">Domingo</option>
          </select>
        </div>
        <div className="form-sub">
          <label>descrição</label>
          <input
            class="date"
            type="text"
            name="date"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn2" onClick={() => createNote()}>
          Adicinar nota
        </button>
      </form>
    </div>
  );
};
export default Form;
