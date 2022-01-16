import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import Form from "./form/Form";
import ItemTodo from "./todos/ItemTodo";
import "./todos/todo.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  // useEffect(()=>{
  //   axios.get("/todos").then(res=>
  //   setTodos(res.data))
  // },[])

  const addTodo = async (newTodo) => {
    const response = await axios.post("/todos", { newTodo });
    setTodos(response.data).catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Header />
      <div className="list-wrapper">
        <Form addTodo={addTodo} />
        <div className="todolist">
          {todos.map((todo) => (
            <ItemTodo key={todo._id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
