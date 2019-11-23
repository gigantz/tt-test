import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useActions } from "../../hooks/useActions";
import { startGame } from "../../store/actions";

import Header from "../Header";
import TeetleTottle from "../TeetleTottle";
import MovingShapes from "../MovingShapes";

const Playground = () => {
  const { paused } = useSelector(state => state.game);
  const { onStartGame } = useActions({
    onStartGame: () => startGame()
  });

  useEffect(() => {
    if (!paused) {
      onStartGame();
    }
  }, [startGame]);

  return (
    <PlaygroundWrapper>
      <Header />
      <MovingShapes />

      <TeetleTottle />
    </PlaygroundWrapper>
  );
};

const PlaygroundWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  padding: 0 64px;
  margin: 0 auto;
`;

export default React.memo(Playground);
