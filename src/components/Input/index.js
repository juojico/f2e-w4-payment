import React from "react";
import styled, { keyframes } from "styled-components";
import { iconError } from "../../assets";

const fadeOut = keyframes`
  to {
    opacity: 0;
  }
`;

const TextArea = styled.div`
  position: relative;
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
  background: ${props =>
    props.error ? "rgba(255, 187, 231, 0.3)" : "rgba(255, 255, 255, 0.3)"};
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

const Error = styled.div`
  position: absolute;
  width: 50%;
  height: 22px;
  right: 12px;
  padding-right: 1.5em;
  color: #ffa1cd;
  text-align: right;
  background: url(${iconError});
  background-repeat: no-repeat;
  background-position: right;
  animation: ${fadeOut} 2s 1s forwards;
  user-select: none;
  pointer-events: none;
`;

const Input = ({
  title,
  name,
  amount,
  size,
  max,
  defaultValue,
  placeHolder,
  placeHolder2,
  onChange,
  onBlur,
  error
}) => {
  const inputs = () => {
    const items = [];
    for (let i = 0; i < amount; i++) {
      items.push(
        <input
          key={title + i}
          name={name + (i || "")}
          size={size}
          maxLength={max}
          defaultValue={defaultValue}
          placeholder={placeHolder2 && i > 0 ? placeHolder2 : placeHolder}
          onChange={onChange}
          onBlur={onBlur}
        />
      );
    }
    return items;
  };

  return (
    <TextArea error={error}>
      {error ? <Error>格式錯誤</Error> : null}
      <span>{title}</span>
      <div>{inputs()}</div>
    </TextArea>
  );
};

export default Input;
