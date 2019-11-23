import React from "react";
import styled, { css } from "styled-components";

import Rect from "./Rect";
import Circle from "./Circle";
import Triangle from "./Triangle";
const SHAPES = [Rect, Circle, Triangle];

const Shape = React.forwardRef(
  ({ type, weight, size, offset, top, color, right, index }, ref) => {
    const ShapeComponent = SHAPES[type];
    return (
      <ShapeWrapper
        type={type}
        size={size}
        offset={offset}
        top={top || top === 0 ? top : -size}
        right={right}
        ref={ref}
        index={index}
      >
        <Label>{weight}</Label>
        <ShapeComponent fill={color} />
      </ShapeWrapper>
    );
  }
);

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const ShapeWrapper = styled.div`
  position: absolute;
  will-change: transform;

  ${({ top }) => css`
    top: ${top}px;
  `};

  ${({ offset }) => css`
    left: ${50 - offset * 10}%;
  `};

  ${({ size, index }) => css`
    width: ${size}px;
    height: ${size}px;
    z-index: ${-index};
  `};

  ${({ right, offset }) =>
    right &&
    css`
      left: initial;
      right: ${50 - offset * 10}%;
    `};

  ${({ type }) =>
    type === 2 &&
    css`
      ${Label} {
        top: 15%;
      }
    `}
`;

export default Shape;
