import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import "./todo.css";

const ItemTodo = ({ todo, deleteNote, editTodo }) => {
  const [onUpdate, setOnUpdate] = useState(false);
  const [dia, setDia] = useState();
  const [description, setDescription] = useState("");

  function callEditTodo(id) {
    editTodo({ dia, description, id });
  }
  const myFunc = (id) => {
    setOnUpdate(!onUpdate);
    axios
      .get(`/todos/${id}`)
      .then((res) => {
        console.log(res.data);
        setDescription(res.data.description);
        setDia(res.data.dia);
      })
      .catch((err) => console.log("sou nova myFcun get", err));
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
            onClick={() => myFunc(todo._id)}
          />
        </div>
      ) : (
        <div className="edit-form">
          <div className="edit-dia">
            <h5>Dia</h5>
            <input
              style={{ position: "relative", top: "-20px" }}
              type="text"
              name="title"
              value={dia}
              onChange={(e) => setDia(e.target.value)}
            />
          </div>
          <div
            className="edit-tarefa"
            style={{ position: "relative", top: "-35px" }}
          >
            <h5>Tarefa</h5>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {/* <div 
            className="icon edit"
            className="delete-icon"
            onClick={() => callEditTodo(todo._id)}
          /> */}
          <div
            className="edit-button"
            style={{ position: "relative", top: "-55px" }}
          >
            <button onClick={() => myFunc(todo._id)}>Pronto</button>
            <button
              className="edit-icon"
              onClick={() => setOnUpdate(!onUpdate)}
            >
              Cancelar edição
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default ItemTodo;
