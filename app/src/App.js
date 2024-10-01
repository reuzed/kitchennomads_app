import "./App.css";
import RandomPicker from "./RandomPicker";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(0);
  return (
    <>
      <h1>Kitchen Nomads</h1>
      <button className="App" onClick={() => setClicked(1)}>
        Click Me To Order a Box
      </button>
      <br />
      {clicked && <RandomPicker></RandomPicker>}
      <br />
      <h2 className="App">4000 5 Star Reviews</h2>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4 className="App">Supports abolition of 2cbc</h4>
    </>
  );
}

export default App;
