import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Shape from "../Objects/Shape";

const Board = () => {
  const { left, right, bending } = useSelector(state => state.game);

  return (
    <BoardStyled bending={bending} id="board">
      {left.map((shape, index) => (
        <Shape key={shape.key} index={index} {...shape} />
      ))}
      {right.map((shape, index) => (
        <Shape key={shape.key} right index={index} {...shape} />
      ))}
    </BoardStyled>
  );
};

const BoardStyled = styled.div`
  position: absolute;
  top: -0.5em;
  width: 100%;
  height: 0.5em;
  background-color: #333;
  transition: transform 0.3s linear;
  transform: rotate(${({ bending }) => bending}deg);
`;

export default React.memo(Board);
