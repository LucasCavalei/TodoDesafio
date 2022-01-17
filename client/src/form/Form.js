import React, { useState } from "react";
import "./form.css";

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const createNote = () => {
    const newTodo = {
      title: title,
      description: description,
    };
    addTodo(newTodo);
  };

  return (
    <div className="form-wrapper">
      <form className="form-class">
        <div className="form-sub">
          <label>titulo</label>
          <input
            className="title"
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-sub">
          <label>descrição</label>
          <input
            className="description"
            type="text"
            name="description"
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
