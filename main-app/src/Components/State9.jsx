import { useState } from "react";

export default function State9(){
    const[no1, setNo1] = useState(0);
    const[no2, setNo2] = useState(0);
    const[add, setAdd] = useState(0);


return <>
<input type="text" onChange={(e)=>{setNo1(e.target.value)}} /> <br />  
<input type="text" onChange={(e)=>{setNo2(e.target.value)}} /> <br /><br />
<button onClick={()=>{setAdd(parseInt(no1)+parseInt(no2))}}>Add</button><br /> <br /><br /><br />

<h1>
Num1 = {no1} <br />
Num2 = {no2} <br /><br />
Sum = {add}
</h1>


</>
}

