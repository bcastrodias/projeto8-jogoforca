const Jogo = ({
  palavra,
  chutes,
  chutesErrados,
  onClickPalavra,
  isGameRunning,
}) => {
  const palavraEmArray = Array.from(palavra || "");

  const palavraApagada = palavraEmArray.map((letra) => {
    if (chutes.includes(letra)) {
      return letra;
    } else {
      return "_";
    }
  });

  const palavraParaExibir = isGameRunning ? palavraApagada.join(" ") : palavra;

  return (
    <div>
      <img
        data-test="game-image"
        src={`img/assets/forca${chutesErrados.length}.png`}
      ></img>
      <button data-test="choose-word" onClick={onClickPalavra}>
        Escolher palavra
      </button>
      <div data-test="word" data-answer={palavra}>
        {" "}
        {palavraParaExibir}{" "}
      </div>
    </div>
  );
};

export default Jogo;
