import { useState } from "react";

export default function State2(){
    const[name, setName] = useState("Sunny")
    let updateName=()=>{
     setName("Kaushal");
    }

    return <>
    <h1>Name Change State</h1>
    <p>Welcome {name}</p>
    <button onClick={updateName}>Click!</button>
    </>
}