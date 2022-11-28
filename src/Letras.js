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

const Letra = (props) => {
  return <div>{props.simbolo}</div>;
};

const Letras = () => {
  return (
    <div>
      {alfabeto.map((letter) => (
        <Letra simbolo={letter} />
      ))}
    </div>
  );
};

export default Letras;
