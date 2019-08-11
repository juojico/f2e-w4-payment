import React from "react";
import styled from "styled-components";

const MainArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 64px;
`;

const TextArea = styled.div`
  position: absolute;
  width: 100%;
  top: 65%;
  left: 50%;
  color: white;
  text-align: center;
  padding: 20px;
  transform: translate(-50%);
  letter-spacing: 0.25em;
  h1 {
    margin-top: 0;
    font-size: 50px;
    font-weight: 400;
  }
  h3 {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const TextAreaSuccess = styled.div`
  position: absolute;
  width: 100%;
  left: 50%;
  color: white;
  text-align: center;
  transform: translate(-50%);
  letter-spacing: 0.25em;
  font-size: 45px;
  font-weight: 400;
`;
const SuccessIcon = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin: auto;
  margin-bottom: 12px;
  background: white;
  border-radius: 100%;
  box-shadow: 0 2px 16px rgba(0, 0, 119, 0.22);
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 5px;
    height: 26px;
    top: 30%;
    left: 55%;
    background: #c6e74e;
    transform: rotate(45deg);
  }
  &::after {
    height: 13px;
    top: 43%;
    left: 33%;
    transform: rotate(-45deg);
  }
`;

const PaySuccess = ({ onConfirm, open }) => {
  return (
    <>
      {open ? (
        <MainArea>
          <TextArea>
            <h3>確定支付金額</h3>
            <h1>USD 500</h1>
          </TextArea>
          <TextAreaSuccess>
            <SuccessIcon />
            付款成功
          </TextAreaSuccess>
        </MainArea>
      ) : null}
    </>
  );
};

export default PaySuccess;
