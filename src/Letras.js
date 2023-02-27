import styled from "styled-components";
import { useState } from "react";

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
    <Palpite
      data-test="letter"
      disabled={disabled}
      onClick={() => setChutes([...chutes, simbolo])}
    >
      {simbolo.toUpperCase()}
    </Palpite>
  );
};

const Letras = ({ chutes, setChutes, isGameRunning }) => {
  return (
    <Container>
      {alfabeto.map((letter) => (
        <Letra
          simbolo={letter}
          disabled={chutes.includes(letter) || !isGameRunning}
          chutes={chutes}
          setChutes={setChutes}
        />
      ))}
    </Container>
  );
};

const Palpite = styled.button`
  width: 40px;
  height: 40px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: 5px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export default Letras;
