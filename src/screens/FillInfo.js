import React from "react";
import styled from "styled-components";
import Buttons from "../components/Buttons";
import Input from "../components/Input";

const MainArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 64px;
`;

const Title = styled.div`
  font-size: 20px;
  color: #044066;
  text-align: center;
  letter-spacing: 1em;
`;

const TextArea = styled.div`
  padding: 20px 50px 0 50px;
`;

const FillInfo = ({ onConfirm, open }) => {
  return (
    <>
      {open ? (
        <MainArea>
          <Title>填寫資料</Title>
          <TextArea>
            <Input
              title="卡號"
              amount="4"
              size="1"
              max="4"
              placeHolder="0000"
            />
            <Input
              title="到期日"
              amount="2"
              size="1"
              max="2"
              placeHolder="MM"
              placeHolder2="YY"
            />
            <Input title="CSC" amount="1" size="1" max="3" placeHolder="000" />
            <Input
              title="姓名"
              amount="1"
              size="10"
              max="5"
              placeHolder="請輸入性名"
            />
            <Input
              title="地址"
              amount="1"
              size="20"
              max="20"
              placeHolder="請輸入地址"
            />
            <Input
              title="電話"
              amount="1"
              size="20"
              max="10"
              placeHolder="請輸入電話"
            />
          </TextArea>
          <Buttons text="立即付款" onClick={onConfirm} />
        </MainArea>
      ) : null}
    </>
  );
};

export default FillInfo;
