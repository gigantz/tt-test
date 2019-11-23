import { all, takeEvery, put, select } from "redux-saga/effects";
import { MAX_BENDING } from "../constants";
import { ADD_TO_LEFT } from "./types";
import { calcBending, addMovingShape, addToRight, gameOver } from "./actions";

function sumUpSide(shapes) {
  return shapes.reduce((acc, shape) => (acc += shape.weight * shape.offset), 0);
}

function* boardBending() {
  const { left, right } = yield select(state => state.game);
  const leftSum = sumUpSide(left);
  const rightSum = sumUpSide(right);

  const bending =
    leftSum > rightSum
      ? ((leftSum - rightSum) / leftSum) * -100
      : ((rightSum - leftSum) / rightSum) * 100;

  if (bending >= MAX_BENDING) {
    yield put(calcBending(MAX_BENDING));
    yield put(gameOver());
  } else if (bending <= -MAX_BENDING) {
    yield put(calcBending(-MAX_BENDING));
    yield put(gameOver());
  } else {
    yield put(calcBending(bending));
    yield put(addMovingShape());
    yield put(addToRight());
  }
}

function* gameSaga() {
  yield takeEvery(ADD_TO_LEFT, boardBending);
}

export default function* rootSaga() {
  yield all([gameSaga()]);
}

// Idea to implement You Won
// function* result() {
//   const { left, right, bending } = yield select(state => state.game);
//   const leftSum = sumUpSide(left);
//   const rightSum = sumUpSide(right);

//   if (Math.abs(leftSum - rightSum) >= 20 && bending <= MAX_BENDING) {
//     yield put(youWon());
//   }
// }
