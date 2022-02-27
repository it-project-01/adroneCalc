import "./App.css";
import Calc from "./Calc";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-10 col-lg-4">
          <Calc />
        </div>
      </div>
    </div>
  );
}

export default App;
