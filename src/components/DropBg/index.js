import styled from "styled-components";
import { drop } from "../../assets/index.js";

const DropBg = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  background: url(${drop});
  background-size: 31px 64px;
  background-position: bottom;
  opacity: 0.2;
  user-select: none;
  pointer-events: none;
`;

export default DropBg;
