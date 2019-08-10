import React from "react";
import styled from "styled-components";
import { drop } from "../../assets/index.js";

const DropBgArea = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  background: url(${drop});
  background-size: 31px 64px;
  background-position: bottom;
  opacity: 0.2;
`;

function DropBg() {
  return <DropBgArea />;
}

export default DropBg;
