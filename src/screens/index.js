import React from "react";
import styled from "styled-components";
import Wave from "../components/Wave";
import DropBg from "../components/DropBg";
import Buttons from "../components/Buttons";
import MainLogo from "../components/MainLogo";

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-width: 375px;
  max-width: 750px;
  height: 100%;
  min-height: 812px;
  left: 50%;
  background: linear-gradient(to bottom, #d3fbff, #04518d);
  transform: translate(-50%);
  overflow: hidden;
`;

const LogoArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 64px;
`;
const BgArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
`;

function Screen() {
  return (
    <Container>
      <LogoArea>
        <MainLogo />
        <Buttons text="立即付款" />
      </LogoArea>
      <BgArea>
        <DropBg />
        <Wave top="50" />{" "}
      </BgArea>
    </Container>
  );
}

export default Screen;
