import React,{useState, useEffect} from "react";

export default function UseEffect(){

    const [count, setCount]=useState(1);
    useEffect(()=>{
    console.log(count);
    })
    return(
        <div>
        <h1>Use of UseEffect...{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}