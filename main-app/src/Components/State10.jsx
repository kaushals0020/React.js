import { useState } from "react";

export default function GreetUser(){
    const[user, setUser] = useState("Ajay");
    const updateUser =(e)=>{
        setFlag(false);
        setUser(e.target.value)
    }
    const[flag, setFlag]=useState(false);
    const updateFlag=()=>{
      setFlag(true);
    }
    return<>
    <h1>Conditional Component:</h1>
    Username : <input type="text" onChange={updateUser} /> <br /><br />
    <button onClick={updateFlag}>Greet</button>
    <br /><br />
    {flag && `Welcome ${user}`}
    </>
}