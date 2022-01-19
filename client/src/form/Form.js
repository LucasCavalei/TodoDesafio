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
    <div className = "form-wrapper">
       <form className="form-class">
         <div className='form-sub'>
           <label>titulo</label>
           <input class="title" type="text" name="title" onChange={e => setTitle(e.target.value)} />
           </div>
           <div className='form-sub'>
            <label>descrição</label>
            <input class="description" type="text" name="description" onChange={e => setDescription(e.target.value)} />
            </div>
          <button type="button" className="btn btn2" onClick={()=> createNote()}>Adicinar nota</button>
       </form>
    </div>
    )
}
export default Form;