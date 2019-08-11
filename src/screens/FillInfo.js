import React, { useState } from "react";
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
  const [info, setInfo] = useState({});
  const [vali, setVali] = useState({
    card: true,
    day: true,
    csc: true,
    name: true,
    address: true,
    phone: true
  });

  const onChange = e => {
    setInfo({ [e.target.name]: e.target.value });

    console.log("TCL: FillInfo -> info", info);
  };

  const onBlur = e => {
    const name = e.target.name;
    const val = e.target.value;
    const valL = val.length;
    switch (e.target.name) {
      case "card":
        if (valL === 4 && !isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }
      case "day":
        if (valL === 2 && !isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }
      case "csc":
        if (valL === 3 && !isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }
      case "name":
        if (valL > 2 && isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }
      case "address":
        if (valL > 8 && isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }
      case "phone":
        if (valL === 10 && !isNaN(val)) {
          return setVali({ ...vali, [name]: true });
        } else {
          return setVali({ ...vali, [name]: false });
        }

      default:
        break;
    }
  };

  const onCheck = () => {
    const allVali = Object.keys(vali);
    const allValiPass = allVali.every(item => vali[item] === true);
    if (allValiPass) {
      onConfirm();
    }
  };

  return (
    <>
      {open ? (
        <MainArea>
          <Title>填寫資料</Title>
          <TextArea>
            <Input
              title="卡號"
              name="card"
              amount="4"
              size="1"
              max="4"
              defaultValue="1234"
              placeHolder="0000"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.card === false}
            />
            <Input
              title="到期日"
              name="day"
              amount="2"
              size="1"
              max="2"
              defaultValue="12"
              placeHolder="MM"
              placeHolder2="YY"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.day === false}
            />
            <Input
              title="CSC"
              name="csc"
              amount="1"
              size="1"
              max="3"
              defaultValue="123"
              placeHolder="000"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.csc === false}
            />
            <Input
              title="姓名"
              name="name"
              amount="1"
              size="10"
              max="5"
              defaultValue="林 沙予"
              placeHolder="請輸入性名"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.name === false}
            />
            <Input
              title="地址"
              name="address"
              amount="1"
              size="22"
              max="20"
              defaultValue="台北市中正區忠孝東路123號"
              placeHolder="請輸入地址"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.address === false}
            />
            <Input
              title="電話"
              name="phone"
              amount="1"
              size="20"
              max="10"
              defaultValue="0912345678"
              placeHolder="請輸入電話"
              onChange={onChange}
              onBlur={onBlur}
              error={vali.phone === false}
            />
          </TextArea>
          <Buttons text="立即付款" onClick={onCheck} />
        </MainArea>
      ) : null}
    </>
  );
};

export default FillInfo;
