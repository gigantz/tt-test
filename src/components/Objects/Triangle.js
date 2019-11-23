import React from "react";
import styled from "styled-components";

const Triangle = props => (
  <TriangleStyled
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 255 255"
    {...props}
  >
    <path d="M128.151 0L255.651 255H0.651321L128.151 0Z" />
  </TriangleStyled>
);

const TriangleStyled = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default Triangle;
