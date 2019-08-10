import React from "react";
import styled from "styled-components";

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

const PaySuccess = ({ onConfirm, open }) => {
  return (
    <>
      {open ? (
        <MainArea>
          <Title>PaySuccess</Title>
        </MainArea>
      ) : null}
    </>
  );
};

export default PaySuccess;
