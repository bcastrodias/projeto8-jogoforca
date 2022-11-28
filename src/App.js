import "./App.css";
import Letras from "./Letras";
import { useState } from "react";
import palavras from "./palavras";
import Chute from "./Chute";
import Jogo from "./Jogo";

function App() {
  const [palavra, setPalavra] = useState();
  const [chutes, setChutes] = useState([]);
  const chutesErrados = chutes.filter((chute) => !palavra.includes(chute));
  const [palpite, setPalpite] = useState();
  const isGameRunning = palavra && chutesErrados.length < 6 && !palpite;

  const onClickPalavra = () => {
    setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    setPalpite(undefined);
    setChutes([]);
  };

  return (
    <div className="App">
      <Jogo
        palavra={palavra}
        chutes={chutes}
        chutesErrados={chutesErrados}
        onClickPalavra={onClickPalavra}
        isGameRunning={isGameRunning}
      />
      <Letras
        chutes={chutes}
        setChutes={setChutes}
        isGameRunning={isGameRunning}
      />
      <Chute setPalpite={setPalpite} isGameRunning={isGameRunning} />
    </div>
  );
}

export default App;
