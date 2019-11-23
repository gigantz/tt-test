import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import MovingShape from "../MovingShape";

const Moving = () => {
  const { moving } = useSelector(state => state.game);

  return (
    <MovingWrapper>
      {moving.map(shape => (
        <MovingShape key={shape.key} {...shape} />
      ))}
    </MovingWrapper>
  );
};

const MovingWrapper = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
`;

export default Moving;
