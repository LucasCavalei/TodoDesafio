import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./todo.css";

const Items = ({ todo, deleteNote, editTodo }) => {
  const [onUpdate, setOnUpdate] = useState(false);
  const [dia, setDia] = useState();
  const [description, setDescription] = useState("");

  function callEditTodo(id) {
    editTodo({ dia, description, id });
  }

  return (
    <div className="items-wrapper">
      {!onUpdate ? (
        <div className="item-display">
          <h5>{todo.dia}</h5>
          <h4>{todo.description}</h4>
          <RiDeleteBin5Line
            className="icon delete"
            style={{ color: "white" }}
            onClick={() => deleteNote(todo._id)}
          />
          <FiEdit3
            className="icon edit"
            style={{ color: "white", marginLeft: "30px" }}
            onClick={() => setOnUpdate(!onUpdate)}
          />
        </div>
      ) : (
        <div className="item-edit">
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
          <h5>descricao</h5>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <FiEdit3
            className="icon edit"
            className="delete-icon"
            onClick={() => callEditTodo(todo._id)}
          />
          <button className="edit-icon" onClick={() => setOnUpdate(!onUpdate)}>
            Cancelar update
          </button>
        </div>
      )}
    </div>
  );
};
export default Items;
