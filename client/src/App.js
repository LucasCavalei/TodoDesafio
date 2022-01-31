import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Lottie from "react-lottie";
import Header from "./header/Header";
import Splash from "./assets/Splash";

import favorite from "./assets/lotties/favorite.json";
import Form from "./form/Form";
import ItemTodo from "./todos/ItemTodo";
import "./todos/todo.css";
import Footer from "./footer/Footer";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [showLottie, setShowLottie] = useState(undefined);
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: favorite,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    getTodos();
  }, [todos]);

  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  };
  const addTodo = (dia, description) => {
    setShowLottie(undefined);
    axios
      .post("/todos", { dia, description })
      .then((res) => {
        setTodos([...todos, res.data]);
        setShowLottie(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteNote = (id) => {
    axios
      .delete(`/todos/${id}`)
      .then((res) => {
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const editTodo = ({ id, dia, description }) => {
    const updatedTodo = {
      dia,
      description,
    };
    axios
      .put(`/todos/${id}`, updatedTodo)
      .then((res) => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, dia, description } : todo
          )
        );
      })
      .catch((err) => console.log("sou errr do upalod", err));
  };

  return (
    <div className="App">
      <Splash />
      <Header />
      {showLottie ? (
        <Lottie
          options={defaultOptions}
          style={{
            zIndex: -2,
            position: "absolute",
            top: "150px",
            height: 300,
            width: 300,
          }}
        />
      ) : null}
      <Form addTodo={addTodo} />
      <div className="todolist">
        {todos.map((todo, index) => (
          <ItemTodo
            key={index}
            todo={todo}
            deleteNote={deleteNote}
            editTodo={editTodo}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
