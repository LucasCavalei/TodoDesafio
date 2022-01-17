import React from "react";
import Form from "../form/Form";
import { Header } from "../header/Header";
import { ItemTodo } from "./ItemTodo";

import "./todo.css";

const TodoList = ({ todos }) => {
  return (
    <>
      <Header />
      <div className="list-wrapper">
        <Form />
        <div className="todolist">
          {todos.map((todo, index) => (
            <ItemTodo key={index} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};
export default TodoList;
