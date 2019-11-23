import * as t from "./types";

export const startGame = () => {
  return {
    type: t.START_GAME
  };
};

export const addMovingShape = () => {
  return {
    type: t.ADD_MOVING_SHAPE
  };
};

export const addToLeft = () => {
  return {
    type: t.ADD_TO_LEFT
  };
};

export const addToRight = () => {
  return {
    type: t.ADD_TO_RIGHT
  };
};

export const calcBending = payload => {
  return {
    type: t.CALC_BENDING,
    payload
  };
};

export const moveLeft = () => {
  return {
    type: t.MOVE_LEFT
  };
};

export const moveRight = () => {
  return {
    type: t.MOVE_RIGHT
  };
};

export const gameOver = () => {
  return {
    type: t.GAME_OVER
  };
};

export const youWon = () => {
  return {
    type: t.YOU_WON
  };
};
