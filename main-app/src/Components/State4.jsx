import { useState } from "react";

export default function State4(){

    //UseState for storing Variable of Num1, Num2 & Sum
    //one way Data Binding - view to Component
    //Changing in component will reflect in view

    const [no1, setNo1] = useState(0);
    const [no2, setNo2] = useState(0);
    const [sum, setSum] = useState(0);

    let  updateNo1=(event)=>{
     setNo1(event.target.value);
    }

    let updateNo2 = (event) =>{
        setNo2(event.target.value);
    }

    let updateSum = ()=>{
        setSum(parseInt(no1)+parseInt(no2));
    }

    return <>
    Num1 <input type = "text" onChange={updateNo1} /> <br /><br />
    Num2 <input type = "text" onChange={updateNo2} /> <br /> <br />
   
    <button onClick={updateSum}>Add</button><br />      
    <h1>
    Num1 = {no1}<br />
    Num2 = {no2}<br />
    Addition = {sum}
    </h1>
    </>
}