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
  }, []);

  const getTodos = () => {
    axios
      .get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  const addTodo = ({ title, description }) => {
    axios
      .post("/todos", { title, description })
      .then((res) => setTodos([...todos, res.data]))
      .catch((err) => console.log(`err`, err));
    // const response = await axios.post("/todos", title, description);
  };

  const deleteTodo = (id) => {
    axios
      .delete(`/todos/${id}`)
      .then((res) => {
        // todos: [...todos.filter((todo) => todo._id !== todo._id)])
        const deletedTodos = todos.filter((res) => res._id !== id);
        setTodos(deletedTodos);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Header />
      <div className="list-wrapper">
        <Form addTodo={addTodo} />
        <div className="todolist">
          {todos.map((todo, index) => (
            <ItemTodo key={index} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
