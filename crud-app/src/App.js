import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MainComp from "./crudComp/MainComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
