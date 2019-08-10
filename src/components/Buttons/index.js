import React from "react";
import styled from "styled-components";
import { btnBg } from "../../assets/index.js";

const BtnArea = styled.div`
  width: 226px;
  height: 65px;
  margin: auto;
  margin-top: 40px;
  background: url(${btnBg});
  text-align: center;
  color: white;
  font-size: 20px;
  letter-spacing: 6px;
  line-height: 65px;
  cursor: pointer;
  filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.1));
  &:hover {
    filter: drop-shadow(2px 4px 10px rgba(0, 0, 0, 0.3));
  }
`;

const Buttons = ({ text }) => {
  return <BtnArea>{text}</BtnArea>;
};

export default Buttons;
