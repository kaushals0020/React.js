import { useState } from "react";

export default function State6() {
    const [count, setCount] = useState(0);

    let incCount = () =>{
        setCount(count+1);
    }
    let decCount = () =>{
    setCount(count-1);
    }
    
    return<>
    <h1>Count = {count}</h1><br />
    <button onClick={incCount}>Increment</button>
    <button onClick={decCount}>Decrement</button>
    </>
}