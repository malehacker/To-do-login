import "./homepage.css";
import { useState ,useRef} from "react";

import { useNavigate } from 'react-router-dom';

function Homepage(){
  const navigate = useNavigate();
  
  
  const [todoList, settodoList]=useState([]);
  const [ currentTask,setcurrentTask]=useState("");

  const inputTask =useRef(null);

const deleteTask=(tasktoDelete)=>{

  settodoList(todoList.filter((task)=>{
   return task!== tasktoDelete
}))
}
  const updateList=()=>{
    settodoList([...todoList,currentTask])
    inputTask.current.value="";
    
  }
  return(<>
  <div class="main">
    <div class="header"><h1>To Do List</h1></div>
    <input ref ={inputTask} class="inputTask"type="text" placeholder="Task..." onChange={(event)=>{setcurrentTask(event.target.value)}}/>
    <button class="addBtn"onClick={updateList}>Add Task</button>
    <br/>
    <ul>
      {todoList.map((val,key)=>{
        return <div class="list">
        <li>{val}</li>
        <button class="crossBtn" onClick={()=>deleteTask(val)}>x</button>
        </div>
      })}
    </ul>
    
    </div>
    <button onClick={navigate('/login')}> Logout </button>
    </>
  )
}
export default Homepage;