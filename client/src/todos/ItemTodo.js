import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
=======
import { BiBookAdd } from "react-icons/bi";
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./todo.css";

<<<<<<< HEAD
const ItemTodo = ({ todo, deleteTodo }) => {
=======
const ItemTodo = ({ todo }) => {
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
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

<<<<<<< HEAD
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
=======
  const deleteNote = () => {
    axios
      .delete(`/todos/${todo._id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {!onUpdate ? (
        <div className="item-todo">
          <h4>{todo.title}</h4>
          <h4>{todo.description}</h4>
          <RiDeleteBin5Line
            className="delete-icon"
            style={{ color: "white" }}
            onClick={() => deleteNote()}
          />
          <FiEdit3
            className="edit-icon"
            style={{ color: "white", marginLeft: "30px" }}
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
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
<<<<<<< HEAD
            className="icon delete"
            onClick={() => editSend()}
          />
          <FiEdit3
            className="icon edit"
=======
            className="delete-icon"
            onClick={() => editSend()}
          />
          <FiEdit3
            className="edit-icon"
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
            onClick={() => setOnUpdate(!onUpdate)}
          />
        </div>
      )}
    </>
  );
};
export default ItemTodo;
