import React from "react";
import styled from "styled-components";

const Rect = props => (
  <RectStyled
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255 255"
    {...props}
  >
    <rect width="255" height="255" />
  </RectStyled>
);

const RectStyled = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default Rect;
