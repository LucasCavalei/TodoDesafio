import './App.css';
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import TodoList from './todos/TodoList';


const App = () => {
 
  const [todos, setTodos] = useState([]);
 
  useEffect(()=>{
    axios.get("/todos").then(res=>
    setTodos(res.data))
  },[])

    return (
      <div className="App">
        <TodoList todos={todos} />
      </div>
   );
}

export default App;
