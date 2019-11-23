import React from "react";
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as t from "../../store/types";

const Header = () => {
  const { moving, paused, gameOver, youWon } = useSelector(state => state.game);
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <ButtonStyled onClick={() => dispatch({ type: t.START_GAME })}>
        Start
      </ButtonStyled>
      {paused && moving.length > 0 ? (
        <ButtonStyled
          transparent
          onClick={() => dispatch({ type: t.RESUME_GAME })}
        >
          Resume
        </ButtonStyled>
      ) : (
        <ButtonStyled onClick={() => dispatch({ type: t.PAUSE_GAME })}>
          Pause
        </ButtonStyled>
      )}
      {gameOver && <h1>Game Over 🤦‍♂️</h1>}
      {youWon && <h1>You Won! 🎉</h1>}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  padding: 0 32px;
  display: flex;
  align-items: center;

  h1 {
    margin-left: auto;
  }
`;

const ButtonStyled = styled.button`
  height: 60%;
  padding: 0 32px;
  border: none;
  font-size: 20px;
  border: none;
  margin-right: 16px;
  border-radius: 4px;
  background-color: #f1f1f1;
  :first-child {
    background-color: #6e36ca;
    color: white;
  }
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: 0 0 0 2px #6e36ca;
  }

  ${({ transparent }) =>
    transparent &&
    css`
      opacity: 0.6;
    `}
`;

export default Header;
