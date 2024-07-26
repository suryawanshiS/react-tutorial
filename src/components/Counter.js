import React from "react";
import { useState } from "react";

function Counter(){
    const [Counter,setCounter] = useState(0)
    return (
        <div>
            <h1> Counter: {Counter}</h1>
            <button className="btn" onClick={() => setCounter(Counter + 1)}>
                Increment</button> <br/>
            <button className="btn" onClick={() => setCounter(Counter - 1)}>
                Decrement</button>
                <hr />
                </div>
    )
}

export default Counter