const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Letra = ({ setChutes, simbolo, chutes, disabled }) => {
  return (
    <button
      data-test="letter"
      disabled={disabled}
      onClick={() => setChutes([...chutes, simbolo])}
    >
      {simbolo.toUpperCase()}
    </button>
  );
};

const Letras = ({ chutes, setChutes, isGameRunning }) => {
  return (
    <div>
      {alfabeto.map((letter) => (
        <Letra
          simbolo={letter}
          disabled={chutes.includes(letter) || !isGameRunning}
          chutes={chutes}
          setChutes={setChutes}
        />
      ))}
    </div>
  );
};

export default Letras;
