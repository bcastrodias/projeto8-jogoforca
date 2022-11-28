import "./App.css";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import Chute from "./Chute";

function App() {
  const [palavra, setPalavra] = useState();
  const [chutes, setChutes] = useState([]);
  const [palpite, setPalpite] = useState();
  const isGameRunning = palavra && chutes.length < 6 && !palpite;

  const onClickPalavra = () => {
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setPalpite(undefined);
    setChutes([]);
  };

  return (
    <div className="App">
      <img src={`assets/forca${chutes.length}.png`}></img>
      <button onClick={onClickPalavra}>Escolher palavra</button>
      <Letras
        chutes={chutes}
        setChutes={setChutes}
        isGameRunning={isGameRunning}
      />
      <Chute setPalpite={setPalpite} />
    </div>
  );
}

export default App;
