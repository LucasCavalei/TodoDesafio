import axios from 'axios';
import React,{useState} from 'react'
import "./form.css"


const  Form = ({getData}) => {

  const [title,setTitle,] = useState("");
  const [description, setDescription] = useState("");

  const createNote = () => {
     const newTodo = {
       title,
        description
      }
      
     axios.post("/todos",newTodo).then(res=>{
        console.log(res.data);
        }).catch(err =>console.log(err));
        }
       
          return (
        <div className="form-wrapper">
          <form className="form-class">
            <h2>titulo</h2>
            <input class="title" type="text" name="title" onChange={e => setTitle(e.target.value)} />
            <h2>descricao</h2>
            <input class="description" type="text" name="description" onChange={e => setDescription(e.target.value)} />
            <button  type="submit" onClick={()=> createNote()}>Adicinar nota</button>
            
            {/* {console.log("sou o form", title,description)} */}
          </form>
        </div>
    )
}
export default Form;