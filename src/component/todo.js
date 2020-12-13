import React,{useEffect} from "react";


const Todo=({name,done,id,todos,setTodos,date})=>{

   useEffect(()=>{
       localStorage.setItem("todos",JSON.stringify(todos))
   },[todos])
const toggle=()=>{
    setTodos(todos.filter(filterToggle))
}
const filterToggle=(value)=>{
    if(value.id===id)
    value.done=!value.done
    return value;
}
const Delete=()=>{
    setTodos(todos.filter(filterDelete));
}
const filterDelete=(value)=>{
    if(value.id!==id)
    return value
}
    return(
        <div className={done?"todo done":"todo"}>
            <h1>Todo: {name}</h1>
            <h1>Date: {date}</h1>   
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",margin:"5px"}}>
            <input onClick={toggle}  defaultChecked={done?"checked":""} type="checkbox" ></input>
            <button onClick={Delete}>Delete</button>
            </div>
        </div>
    )
}
export default Todo;