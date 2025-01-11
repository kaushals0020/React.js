export default function Demo1(){
    let roll = 10;
    const updateRoll = ()=>{
        roll = roll+1;
        console.log(roll)
    }
    return<>
    <h1>Function Comp</h1>
    <p>Roll = {roll}</p>
    <input type="button" value="click" onClick={updateRoll} />
    </>
}

//Here, the increment will be shown in console only, the UI will not be updated thats y we r going to use useState for that