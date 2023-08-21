import { useState } from "react";

export function Counter(){
    const [Counter,setCounter]  = useState(0);
    // const [,setDec] = useState(0);

    return(
        <div className="bigBox">
            <div className="box">
            <h1>{Counter} </h1>
            <button onClick={() =>setCounter(Counter+1)} >Increment</button>
            <button onClick={() =>setCounter(Counter-1)}>Decrement</button>
            </div>
        </div>
    )
}