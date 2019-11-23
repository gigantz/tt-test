import React from "react";
import styled from "styled-components";

const Pillar = () => (
  <PillarStyled xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 256">
    <path d="M105 0L210 256H0L105 0Z"></path>
  </PillarStyled>
);

const PillarStyled = styled.svg`
  position: relative;
  display: block;
  width: 100%;
  height: 50%;
  margin: 0 auto;
  fill: #eee;
`;

export default Pillar;
