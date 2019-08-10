import styled from "styled-components";
import { mainLogo } from "../../assets";

const MainLogo = styled.div`
  width: 250px;
  height: 234px;
  margin: auto;
  background: url(${mainLogo});
  background-repeat: no-repeat;
  background-position: top center;
  user-select: none;
  pointer-events: none;
`;

export default MainLogo;
