import React from "react";
import styled from "styled-components";

const Circle = props => (
  <CircleStyled
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255 255"
    {...props}
  >
    <circle cx="127" cy="127" r="127" />
  </CircleStyled>
);

const CircleStyled = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default Circle;
