import "./App.css";
import Letras from "./Letras";
import { useState } from "react";

function App() {
  const [palavra, setPalavra] = useState();
  const [chutes, setChutes] = useState([]);
  const isGameRunning = palavra && chutes.length < 6;

  return (
    <div className="App">
      <Letras
        chutes={chutes}
        setChutes={setChutes}
        isGameRunning={isGameRunning}
      />
    </div>
  );
}

export default App;
