import { useState } from "react";

export default function State3(){
    const[userName, setUserName] = useState("Kaushal");
    let updateName=(event)=>{
        setUserName(event.target.value);
    }
    return <>
    Enter the UserName: <input type="text" onChange={updateName} value={userName} /><br /><br />
    <h3>Hello {userName} !</h3>
    </>
}