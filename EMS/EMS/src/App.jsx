import { useState } from "react";
import "./App.css";
// import "../primitive/src/scss";
import { Index } from "./components/pages";

function App() {
  const [state, setState] = useState(false);
  console.log("state", state);
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;
