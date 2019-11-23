import React from "react";
import styled from "styled-components";

import Pillar from "../Objects/Pillar";
import Board from "../Objects/Board";

const TeetleTottle = () => {
  return (
    <TeetleTottleWrapper>
      <Board />
      <Pillar />
    </TeetleTottleWrapper>
  );
};

const TeetleTottleWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 40%;
  margin: 0 auto;
  position: relative;
`;

export default React.memo(TeetleTottle);
