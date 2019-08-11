import React, { useState } from "react";
import styled from "styled-components";
import Wave from "../components/Wave";
import DropBg from "../components/DropBg";
import FillInfo from "./FillInfo";
import PaySuccess from "./PaySuccess";
import LandingPage from "./LandingPage";

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

const BgArea = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: -1;
`;

function Screen() {
  const [pages, setPages] = useState({
    landingPage: true,
    fillInfo: false,
    paySuccess: false
  });
  const onConfirm = target => {
    setPages({
      landingPage: false,
      fillInfo: false,
      paySuccess: false,
      [target]: true
    });
  };
  return (
    <Container>
      <LandingPage
        onConfirm={() => onConfirm("fillInfo")}
        open={pages.landingPage}
      />
      <FillInfo
        onConfirm={() => onConfirm("paySuccess")}
        open={pages.fillInfo}
      />
      <PaySuccess open={pages.paySuccess} />
      <BgArea>
        {pages.landingPage ? <DropBg /> : null}
        <Wave
          top={pages.paySuccess ? 35 : 50}
          shark={pages.paySuccess}
          sharkUnder={pages.fillInfo}
        />
      </BgArea>
    </Container>
  );
}

export default Screen;
