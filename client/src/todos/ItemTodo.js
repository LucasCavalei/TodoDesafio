import React,{useState} from 'react';
import axios from 'axios';
import {BiBookAdd} from 'react-icons/fa';
import "./todo.css";

export const ItemTodo = ({todo}) => {
     
    const [onUpdate, setOnUpdate] = useState(false);
    const [title,setTitle,] = useState("");
    const [description, setDescription] = useState("");
       
    const editSend = () => {
      const updatedTodo = {
         title,
         description
        }
     axios.put(`/todos/${todo._id}`,updatedTodo)
       .then(res=>{
       }).catch(err=>console.log(err));
    }
               
     const deleteNote = () => {
       axios.delete(`/todos/${todo._id}`)
        .then(res=>{
        }).catch(err=>console.log(err))
     }
    return (
        <>
         {!onUpdate ?(
        <div className="item-todo">
            <h4>{todo.title}</h4>
            <h4>{todo.description}</h4>
            <button onClick={()=>deleteNote()}>excluir</button>
            <button onClick={()=>setOnUpdate(!onUpdate)}>editar</button>
        </div>
         ):(
        <div className="item-edit">
            <h5>Titulo</h5>
            <input type="text" name="title" onChange={e => setTitle(e.target.value)} />
            <h5>descricao</h5>
            <input type="text" name="descriptiom" onChange={e => setDescription(e.target.value)} />
            <button onClick={()=>editSend()}>editar</button>
         <button onClick={()=>setOnUpdate(!onUpdate)}>cancelar</button>
          </div>
        )}
    </>
    )
}
