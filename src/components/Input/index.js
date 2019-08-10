import React from "react";
import styled from "styled-components";

const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 12px;
  margin-top: 10px;
  color: #044066;
  font-size: 16px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  input {
    height: 50px;
    padding-right: 12px;
    color: #044066;
    font-size: 16px;
    text-align: right;
    border: none;
    background: none;
  }
`;

const Input = ({ title, amount, size, max, placeHolder, placeHolder2 }) => {
  const inputs = () => {
    const items = [];
    for (let i = 0; i < amount; i++) {
      items.push(
        <input
          key={title + i}
          size={size}
          maxLength={max}
          placeHolder={placeHolder2 && i > 0 ? placeHolder2 : placeHolder}
        />
      );
    }
    return items;
  };

  return (
    <TextArea>
      <span>{title}</span>
      <div>{inputs()}</div>
    </TextArea>
  );
};

export default Input;
