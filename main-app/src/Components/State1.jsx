import { useState } from "react"

export default function State1(){
    const [roll, setRoll]=useState(4);
    
    let updateRoll = ()=>{
        setRoll(roll+1);
    }

    return<>
    <h1>Roll={roll}</h1>
    <h1>Using Use State </h1>
    <button onClick={updateRoll}>Click me</button>
    </>
}