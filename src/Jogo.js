import styled from "styled-components";

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
      <Escolha data-test="choose-word" onClick={onClickPalavra}>
        Escolher palavra
      </Escolha>
      <div data-test="word" data-answer={palavra}>
        {" "}
        {palavraParaExibir}{" "}
      </div>
    </div>
  );
};

export default Jogo;

const Escolha = styled.button`
  width: 200px;
  height: 60px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #27ae60;
`;
