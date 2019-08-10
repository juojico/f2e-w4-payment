import React from "react";
import styled from "styled-components";

const TextArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 32px;
  margin-top: 16px;
  color: white;
  border-bottom: 1px dashed white;
`;

const Text = ({ title, content }) => {
  return (
    <TextArea>
      <span>{title}</span>
      <span>{content}</span>
    </TextArea>
  );
};

export default Text;
