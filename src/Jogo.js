const Jogo = ({ palavra, chutes, chutesErrados, onClickPalavra }) => {
  const palavraEmArray = Array.from(palavra || "");

  const palavraApagada = palavraEmArray.map((letra) => {
    if (chutes.includes(letra)) {
      return letra;
    } else {
      return "_";
    }
  });

  const palavraParaExibir = palavraApagada.join(" ");

  return (
    <div>
      <img src={`img/assets/forca${chutesErrados.length}.png`}></img>
      <button onClick={onClickPalavra}>Escolher palavra</button>
      {palavraParaExibir}
    </div>
  );
};

export default Jogo;
