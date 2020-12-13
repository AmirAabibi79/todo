import React,{useRef,useEffect} from "react";


const Maketodo=({todos,setTodos})=>{
    const refName=useRef();
    const refDate=useRef();
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const make=()=>{
        const date=new Date();
        if(refName.current.value==="")return
        const todo={
            name:refName.current.value,
            done:false,
            id:Math.floor(Math.random()*100),
            date:refDate.current.value?refDate.current.value:date.getFullYear()+"-"+date.getMonth()+"-"+date.getDay()
        };
        refName.current.value=""
        refDate.current.value=""
        setTodos([...todos,todo]);
        
    }
    return(
        <div className="make" >
        <h1 style={{margin:"0 0 5px 0"}}>New Todo</h1>
        <label htmlFor="inpu">Name</label>
        <input autoComplete="off" ref={refName} className="inpu" type="text" name="inpu"></input>
        <label htmlFor="date">Date</label>
        <input autoComplete="off" ref={refDate} className="inpu" type="Date" name="date"></input>
        <input onClick={make} className="sub" type="submit" placeholder="make"></input>
        </div>
    )
}


export default Maketodo;