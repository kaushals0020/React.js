import ClassComp1 from "./AllClassComp/ClassComp1";
import ClassComp2 from "./AllClassComp/ClassComp2";
import CompLifeCycleDemo from "./AllClassComp/CompLifeCycleDemo";
import GreetUser from "./AllClassComp/GreetUser";


function App() {
  return (
    <div className="App">
      <ClassComp1></ClassComp1>
      <ClassComp2></ClassComp2>
      <CompLifeCycleDemo></CompLifeCycleDemo>
      <GreetUser></GreetUser>
    </div>
  );
}

export default App;
