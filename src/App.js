import React,{useState} from "react";
import "./App.css";
import Maketodo from "./component/maketodo";
import Todos from "./component/todos"
const App =()=>{
  const local=()=>{
    if(localStorage.getItem("todos"))
    return JSON.parse(localStorage.getItem("todos"))
    else 
    return [];
  }
const[todos,setTodos]=useState(local)

return(
 <div className="main">
   <div className="mm">
 <Maketodo todos={todos} setTodos={setTodos}/>
  <Todos todos={todos} setTodos={setTodos}/>
  </div>
 </div>
)

}

export default App;
