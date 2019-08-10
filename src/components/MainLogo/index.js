import React from "react";
import styled from "styled-components";
import { mainLogo } from "../../assets";

const MainLogoArea = styled.div`
  width: 185px;
  height: 234px;
  margin: auto;
  background: url(${mainLogo});
  background-repeat: no-repeat;
`;

function MainLogo() {
  return <MainLogoArea />;
}

export default MainLogo;
