import React from "react";
import styled from "styled-components";
import Text from "../components/Text";
import Buttons from "../components/Buttons";
import MainLogo from "../components/MainLogo";

const MainArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 64px;
`;

const TextArea = styled.div`
  padding: 0 50px;
`;

const LandingPage = ({ onConfirm, open }) => {
  return (
    <>
      {open ? (
        <MainArea>
          <MainLogo />
          <TextArea>
            <Text title="商家" content="@Shiyaucheng" />
            <Text title="商品" content="XBox360內附三款遊戲" />
            <Text title="金額" content="USD 500" />
          </TextArea>
          <Buttons text="立即付款" onClick={onConfirm} />
        </MainArea>
      ) : null}
    </>
  );
};

export default LandingPage;
