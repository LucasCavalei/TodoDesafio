import React, { useState } from "react";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./todo.css";

const ItemTodo = ({ todo, deleteNote }) => {
  const [onUpdate, setOnUpdate] = useState(false);
  const [dia, setDia] = useState();
  const [description, setDescription] = useState("");

  const editSend = () => {
    const updatedTodo = {
      dia,
      description,
    };
    axios
      .put(`/todos/${todo._id}`, updatedTodo)
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!onUpdate ? (
        <div className="item-todo">
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
          <h5>Titulo</h5>
          <input
            type="text"
            name="title"
            onChange={(e) => setDia(e.target.value)}
          />
          <h5>descricao</h5>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <FiEdit3
            className="icon edit"
            className="delete-icon"
            onClick={() => editSend()}
          />
          <button className="edit-icon" onClick={() => setOnUpdate(!onUpdate)}>
            Cancelar update
          </button>
        </div>
      )}
    </>
  );
};
export default ItemTodo;
