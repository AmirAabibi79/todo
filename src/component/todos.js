import React from "react";
import Todo from "./todo"
const Todos=({todos,setTodos})=>{


return(
    <>
    <h1>Todos</h1>
    <div className={todos.length>1?"todos scroll":"todos"}>
    {todos.map(todo=>(<Todo id={todo.id} date={todo.date} todos={todos} setTodos={setTodos} key={todo.id} name={todo.name} done={todo.done}/>))}
    </div>
    </>
)

}

export default Todos;