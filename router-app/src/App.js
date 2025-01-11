import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MainComp from "./Components/Main";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComp></MainComp>
      </BrowserRouter>
    </div>
  );
}

export default App;
