import React, { useState } from "react";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./todo.css";

const ItemTodo = ({ todo, deleteTodo }) => {
  const [onUpdate, setOnUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const editSend = () => {
    const updatedTodo = {
      title,
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
        <div className="item-todo" key={todo.id}>
          <h4>{todo.title}</h4>
          <h4>{todo.description}</h4>
          <RiDeleteBin5Line
            className="icon delete"
            onClick={() => deleteTodo(todo._id)}
          />
          <FiEdit3
            className="icon edit"
            onClick={() => setOnUpdate(!onUpdate)}
          />
        </div>
      ) : (
        <div className="item-edit">
          <h5>Titulo</h5>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <h5>descricao</h5>
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <RiDeleteBin5Line
            className="icon delete"
            onClick={() => editSend()}
          />
          <FiEdit3
            className="icon edit"
            onClick={() => setOnUpdate(!onUpdate)}
          />
        </div>
      )}
    </>
  );
};
export default ItemTodo;
