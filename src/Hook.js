import React, {useState} from "react";

export default function Hook()
{
    const [count, setCount]=useState(1);
    return(
        <div>
            <h1>Hooks in fuctional component {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
    )
}