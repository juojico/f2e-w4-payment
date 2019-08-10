import styled from "styled-components";
import { shark, sharkUnder } from "../../assets";

const Shark = styled.div`
  width: 185px;
  height: 234px;
  margin: auto;
  background: url(${shark});
  background-repeat: no-repeat;
  user-select: none;
  pointer-events: none;
`;

export default Shark;
