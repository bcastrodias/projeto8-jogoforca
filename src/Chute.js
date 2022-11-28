import { useState } from "react";

const Chute = ({ setPalpite, isGameRunning }) => {
  const [chute, setChute] = useState("");
  return (
    <div>
      <div>Já sei a palavra!</div>
      <input
        disabled={!isGameRunning}
        data-test="guess-input"
        onChange={(event) => setChute(event.target.value)}
        value={chute}
      />
      <button
        disabled={!isGameRunning}
        data-test="guess-button"
        onClick={() => setPalpite(chute)}
      >
        Chutar
      </button>
    </div>
  );
};

export default Chute;
