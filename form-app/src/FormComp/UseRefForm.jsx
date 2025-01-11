import {useRef, useState} from 'react';
export default function SampleRefComp(){
    
    const nameRef = useRef("abc");

    const [flag, setFlag] = useState(false);

    const focusText = () =>{
        nameRef.current.focus();
    }

    const readName = () =>{
        console.log(nameRef.current.value);
        setFlag(true);
    }

    const show = ()=>{
        return <h2>Welcome {nameRef.current.value}</h2>
    }

    return <>
    <h2>UseRef Demo</h2>
    Name <input type='text' ref={nameRef}></input> <br />
    <button onClick={focusText}>Click</button>
    <button onClick={readName}>Greet!</button>
    {flag && show()}
    </>
}