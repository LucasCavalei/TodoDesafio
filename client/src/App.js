import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import Form from "./form/Form";
import ItemTodo from "./todos/ItemTodo";
import "./todos/todo.css";

const App = () => {
  const [todos, setTodos] = useState([]);

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
    axios
      .post("/todos", { dia, description })
      .then((res) => {
        console.log("res", res);
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
  return (
    <div className="App">
      <Header />
      <Form addTodo={addTodo} />
      <div className="todolist">
        {todos.map((todo, index) => (
          <ItemTodo key={index} todo={todo} deleteNote={deleteNote} />
        ))}
      </div>
    </div>
  );
};

export default App;
