import { useState } from "react"

export default function State5(){
    const [counter, setCounter] = useState(0);
    let updateCounter = () =>{
     setCounter(counter+1)
    }
    return<>
    <button onClick={updateCounter}>Button clicked {counter} times!</button>
    </>
}