import "./App.css";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";

function App() {
  const [palavra, setPalavra] = useState();
  const [chutes, setChutes] = useState([]);
  const isGameRunning = palavra && chutes.length < 6;

  return (
    <div className="App">
      <img src={`assets/forca${chutes.length}.png`}></img>
      <button
        onClick={() =>
          setPalavra(palavras[Math.floor(Math.random() * palavras.length)])
        }
      >
        Escolher palavra
      </button>
      <Letras
        chutes={chutes}
        setChutes={setChutes}
        isGameRunning={isGameRunning}
      />
    </div>
  );
}

export default App;
