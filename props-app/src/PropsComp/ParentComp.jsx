import ChildComp1 from "./ChildComp1";
import ChildComp2 from "./ChildComp2";
import ChildComp3 from "./ChildComp3";
import ChildComp4 from "./ChildComp4";

export default function ParentComp(){

    //case1 child 1
   let data = "Kaushal";

   //case 2 child 2
   let userName = "Ram";

   //case3 child 3
   let emp ={
    id :123,
    ename :"jaya",
    salary: 39000
   }

   //case 4 child4
   let allStud = [
    {roll:101, sName:"Rohan", per:98},
    {roll:102, sName:"Shalu", per:84},
    {roll:108, sName:"Preeti", per:86},
    {roll:105, sName:"Prachi", per:78}
   ]


    return <>

    <ChildComp1 data={data}></ChildComp1>
    <ChildComp2 user={userName}></ChildComp2>
    <ChildComp3 employee={emp}></ChildComp3>
    <ChildComp4 allStudent={allStud}></ChildComp4>
    </>
}