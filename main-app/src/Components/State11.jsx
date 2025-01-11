import { useState } from "react";

export default function State11(){
    const [flag, setFlag]=useState(false);
    const [user, setUser]= useState("Shreya");

    const updateFlag=()=>{
        setFlag((prev)=>(!prev));
    }
    const updateUser=(e)=>{
        setUser(e.target.value)
    }
    return<>
    <h1>Conditional Component 2:</h1> <br />
    Username : <input type="text" onChange={updateUser} /> <br /><br />
    <button onClick={updateFlag}>Greet</button>
    <br /><br />
    {flag && `Welcome ${user}`}
    </>
}