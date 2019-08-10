import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { wave1, wave2, wave3, wave4, wave5 } from "../../assets";

const WaveArea = styled.div`
  position: absolute;
  width: 150%;
  min-width: 562px;
  height: 150vw;
  min-height: 614px;
  max-height: 1000px;
  left: -25%;
  top: ${props => props.top || 0}%;
`;

const waveTopAni = keyframes`
  to {
    margin-top: 30px;
  }
`;
const waveLeftAni = keyframes`
  from {
    margin-left: -50px;
  }
  to {
    margin-left: 50px;
  }
`;
const wave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: top;
  transition: 2s;
  animation: ${waveTopAni} 3s alternate infinite,
    ${waveLeftAni} 2s -1s alternate infinite;
`;

const Wave1 = styled(wave)`
  background-image: url(${wave1});
  top: 31.4%;
  animation: ${waveTopAni} 1.9s alternate infinite,
    ${waveLeftAni} 2.9s alternate infinite;
`;
const Wave2 = styled(wave)`
  background-image: url(${wave2});
  top: 25%;
  animation: ${waveTopAni} 2.1s alternate infinite,
    ${waveLeftAni} 3.2s -3s alternate infinite;
`;
const Wave3 = styled(wave)`
  background-image: url(${wave3});
  top: 15.9%;
  animation: ${waveTopAni} 2.4s alternate infinite,
    ${waveLeftAni} 4s alternate infinite;
`;
const Wave4 = styled(wave)`
  background-image: url(${wave4});
  top: 6.8%;
  animation: ${waveTopAni} 2.7s alternate infinite,
    ${waveLeftAni} 4.5s -4s alternate infinite;
`;
const Wave5 = styled(wave)`
  background-image: url(${wave5});
  animation: ${waveTopAni} 3s alternate infinite,
    ${waveLeftAni} 5s alternate infinite;
`;

let ROT = {};

window.addEventListener(
  "deviceorientation",
  function(event) {
    ROT = {
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    };
  },
  false
);

const Wave = ({ top }) => {
  const [devRotate, setDevRotate] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setDevRotate({ ...ROT });
    }, 500);
  });
  return (
    <WaveArea top={top}>
      <Wave5
        style={{
          left: `${devRotate.gamma / 6}%`,
          top: `${devRotate.beta / 9}%`,
          transform: `rotate(${-devRotate.gamma / 5}deg)`
        }}
      />
      <Wave4
        style={{
          left: `${devRotate.gamma / 5.5}%`,
          top: `${devRotate.beta / 8.5 + 6.8}%`,
          transform: `rotate(${-devRotate.gamma / 5}deg)`
        }}
      />
      <Wave3
        style={{
          left: `${devRotate.gamma / 5}%`,
          top: `${devRotate.beta / 8 + 15.9}%`,
          transform: `rotate(${-devRotate.gamma / 5}deg)`
        }}
      />
      <Wave2
        style={{
          left: `${devRotate.gamma / 4}%`,
          top: `${devRotate.beta / 7 + 25}%`,
          transform: `rotate(${-devRotate.gamma / 5}deg)`
        }}
      />
      <Wave1
        style={{
          left: `${devRotate.gamma / 3}%`,
          top: `${devRotate.beta / 6 + 31.4}%`,
          transform: `rotate(${-devRotate.gamma / 5}deg)`
        }}
      />
    </WaveArea>
  );
};

export default Wave;
