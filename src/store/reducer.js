import * as t from "./types";
import { generateRandomShape } from "../helpers";

const initialState = {
  paused: false,
  gameOver: false,
  youWon: false,
  bending: 15,
  left: [],
  right: [],
  moving: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case t.START_GAME:
      return {
        ...state,
        ...payload,
        paused: false,
        gameOver: false,
        youWon: false,
        moving: [generateRandomShape()],
        right: [generateRandomShape()],
        left: [],
        bending: 15
      };
    case t.GAME_OVER:
      return {
        ...state,
        gameOver: true,
        paused: true
      };
    case t.YOU_WON:
      return {
        ...state,
        youWon: true,
        paused: true
      };
    case t.PAUSE_GAME:
      return {
        ...state,
        paused: true
      };
    case t.RESUME_GAME:
      return {
        ...state,
        paused: false
      };
    case t.ADD_TO_LEFT: {
      const shape = state.moving.shift();
      return {
        ...state,
        left: [...state.left, shape],
        moving: []
      };
    }
    case t.ADD_TO_RIGHT: {
      return {
        ...state,
        right: [...state.right, generateRandomShape()]
      };
    }
    case t.ADD_MOVING_SHAPE: {
      return {
        ...state,
        moving: [generateRandomShape()]
      };
    }
    case t.MOVE_LEFT: {
      const shape = { ...state.moving[0] };
      if (shape.offset < 5) {
        shape.offset = shape.offset + 1;
      }
      return {
        ...state,
        moving: [shape]
      };
    }
    case t.MOVE_RIGHT: {
      const shape = { ...state.moving[0] };
      if (shape.offset > 1) {
        shape.offset = shape.offset - 1;
      }
      return {
        ...state,
        moving: [shape]
      };
    }
    case t.CALC_BENDING:
      return {
        ...state,
        bending: payload
      };
    default:
      return state;
  }
};
