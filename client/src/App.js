import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./header/Header";
import Form from "./form/Form";
import ItemTodo from "./todos/ItemTodo";
import "./todos/todo.css";

const App = () => {
  const [todos, setTodos] = useState([]);

<<<<<<< HEAD
<<<<<<< HEAD
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
=======
  // useEffect(()=>{
  //   axios.get("/todos").then(res=>
  //   setTodos(res.data))
  // },[])

  const addTodo = async (newTodo) => {
    const response = await axios.post("/todos", { newTodo });
    setTodos(response.data).catch((err) => console.log(err));
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
=======
  // useEffect(()=>{
  //   axios.get("/todos").then(res=>
  //   setTodos(res.data))
  // },[])

  const addTodo = async (newTodo) => {
    const response = await axios.post("/todos", { newTodo });
    setTodos(response.data).catch((err) => console.log(err));
>>>>>>> parent of c4ceac3 (Adionada items box-shaodow e grid template)
  };
  return (
    <div className="App">
      <Header />
      <div className="list-wrapper">
        <Form addTodo={addTodo} />
        <div className="todolist">
<<<<<<< HEAD
<<<<<<< HEAD
          {todos.map((todo, index) => (
            <ItemTodo key={index} todo={todo} deleteTodo={deleteTodo} />
=======
          {todos.map((todo) => (
            <ItemTodo key={todo._id} todo={todo} />
>>>>>>> 56f9e881f33dd1a2447184568f8c3ab94a91a5c7
=======
          {todos.map((todo) => (
            <ItemTodo key={todo._id} todo={todo} />
>>>>>>> parent of c4ceac3 (Adionada items box-shaodow e grid template)
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
