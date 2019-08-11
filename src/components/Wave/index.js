import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  wave1,
  wave2,
  wave3,
  wave4,
  wave5,
  shark,
  sharkHappy,
  sharkUnder,
  money,
  box,
  ship,
  shipBox
} from "../../assets";
import { range } from "../../utility";

const WaveArea = styled.div`
  position: absolute;
  width: 150%;
  min-width: 562px;
  height: 150vw;
  min-height: 614px;
  max-height: 1000px;
  left: -25%;
  top: ${props => props.top || 0}%;
  user-select: none;
  pointer-events: none;
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
  transition: 1s cubic-bezier(0.25, 1.02, 0.59, 1.23);
  animation: ${waveTopAni} 3s alternate infinite,
    ${waveLeftAni} 2s -1s alternate infinite;
`;

const Wave1 = styled(wave)`
  background-image: url(${wave1});
  top: 31.4%;
  animation: ${waveTopAni} 1.9s alternate infinite,
    ${waveLeftAni} 2.9s alternate infinite;
  &::before {
    position: absolute;
    content: "";
    top: 9%;
    left: 11%;
    width: 60%;
    height: 50%;
    border-radius: 20%;
    transform: rotate(20deg);
    backdrop-filter: blur(10px);
  }
`;
const Wave2 = styled(wave)`
  background-image: url(${wave2});
  top: 25%;
  animation: ${waveTopAni} 2.1s alternate infinite,
    ${waveLeftAni} 3.2s -3s alternate infinite;
  &::before {
    position: absolute;
    content: "";
    top: 9%;
    left: 22%;
    width: 60%;
    height: 50%;
    border-radius: 20%;
    transform: rotate(-11deg);
    backdrop-filter: blur(10px);
  }
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

const sharkUnderAni = keyframes`
  0% {
    margin-left: 100%;
    margin-top: 0;
    transform: scaleX(1) rotate(-20deg);
  }
  50% {
    margin-left: -200%;
    margin-top: 15%;
    transform: scaleX(1) rotate(-30deg);
  }
  51% {
    transform: scaleX(-1) rotate(-2deg);
  }
  100% {
    margin-left: 100%;
    margin-top: 0;
    transform: scaleX(-1) rotate(5deg);
  }
`;

const Shark = styled.div`
  position: absolute;
  width: 245px;
  height: 311px;
  background: url(${props => (props.happy ? sharkHappy : shark)});
  background-position: bottom;
  background-repeat: no-repeat;
  left: 50%;
  top: 20%;
  transform: translate(-50%);
  transition: 1s cubic-bezier(0.25, 1.02, 0.59, 1.23);
  ${props =>
    props.mask
      ? `
  height: 250px;
  margin-top: 61px;
  z-index: 5;
  `
      : null}
`;

const SharkUnder = styled.div`
  position: absolute;
  width: 528px;
  height: 185px;
  background: url(${sharkUnder});
  background-position: center;
  left: 50%;
  animation: ${sharkUnderAni} 10s linear infinite;
  transition: 1s cubic-bezier(0.25, 1.02, 0.59, 1.23);
`;

const moneyAni = keyframes`
  0% {
    top: -30%;
  }
  70% {
    opacity: 1;
    width: 177px;
  }
  100% {
    opacity: 0;
    width: 10px;
  }
`;

const boxAni = keyframes`
  0% {
    top: 30%;
    opacity: 0;
  }
  20% {
    top: 20%;
    opacity: 1;
  }
  50% {
    top: 20%;
    opacity: 1;
    transform: scale(1) translate(-50%, -50%);
  }
  70% {
    top: 0%;
    opacity: 1;
  }
  100% {
    top: 15%;
    opacity: 1;
    transform: scale(.8) translate(-50%, -50%);
    opacity: 0;
  }
`;

const shipAni = keyframes`
  0% {
    margin-left: -70%;;
  }
  100% {
    margin-left: 100%;
  }
`;

const Money = styled.div`
  position: absolute;
  width: 177px;
  height: 100px;
  left: 50%;
  top: 30%;
  background: url(${money});
  background-position: top;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%) rotate(90deg);
  animation: ${moneyAni} 2s ease-out forwards;
  opacity: 0;
  z-index: 3;
`;

const Box = styled.div`
  position: absolute;
  width: 58px;
  height: 58px;
  left: 50%;
  top: 0%;
  background: url(${box});
  background-position: center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  animation: ${boxAni} 2s 1.5s ease-out forwards;
  opacity: 0;
  z-index: 3;
`;

const Ship = styled.div`
  position: absolute;
  width: 132px;
  height: 133px;
  left: 50%;
  top: 0%;
  margin-left: 100%;
  background: url(${ship});
  background-position: top;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  animation: ${waveTopAni} 2.4s alternate infinite,
    ${shipAni} 9.6s linear forwards;
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${shipBox});
    opacity: ${props => (props.hasBox ? 1 : 0)};
    transition: 1s;
  }
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

const Wave = ({ top, shark, sharkUnder }) => {
  const [devRotate, setDevRotate] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setDevRotate({
        beta: range(ROT.beta, 90, 0).toFixed(0),
        gamma: range(ROT.gamma, 60, -60).toFixed(0)
      });
    }, 300);
  });

  const [animate, setAnimate] = useState({ box: false, shark: false });
  if (shark) {
    setTimeout(() => {
      setAnimate({
        box: true,
        shark: true
      });
    }, 3000);
  }
  return (
    <WaveArea top={top}>
      {shark ? (
        <>
          <Money
            style={{
              top: `${devRotate.beta / 2.5 + 43}%`,
              animationDelay: "-0.1s"
            }}
          />
          <Money
            style={{
              top: `${devRotate.beta / 2.5 + 43}%`,
              animationDelay: "-0.2s"
            }}
          />
          <Money
            style={{
              top: `${devRotate.beta / 2.5 + 43}%`,
              animationDelay: "-0.3s"
            }}
          />
          <Money
            style={{
              top: `${devRotate.beta / 2.5 + 43}%`,
              animationDelay: "-0.4s"
            }}
          />
          <Money
            style={{
              top: `${devRotate.beta / 2.5 + 43}%`,
              animationDelay: "-0.5s"
            }}
          />
          <Box
            style={{
              top: `${devRotate.beta / 2.5 + 20}%`,
              transform: `rotate(${-devRotate.gamma / 3}deg) translate(-50%)`
            }}
          />
        </>
      ) : null}
      <Wave5
        style={{
          left: `${devRotate.gamma / 6}%`,
          top: `${devRotate.beta / 4}%`,
          transform: `rotate(${-devRotate.gamma / 3}deg)`
        }}
      />
      <Wave4
        style={{
          left: `${devRotate.gamma / 5.5}%`,
          top: `${devRotate.beta / 3.5 + 6.8}%`,
          transform: `rotate(${-devRotate.gamma / 3}deg)`
        }}
      />
      {shark ? (
        <Ship
          hasBox={animate.box}
          style={{
            top: `${devRotate.beta / 3 + 5}%`,
            transform: `rotate(${-devRotate.gamma / 3}deg)`
          }}
        />
      ) : null}
      <Wave3
        style={{
          left: `${devRotate.gamma / 5}%`,
          top: `${devRotate.beta / 3 + 15.9}%`,
          transform: `rotate(${-devRotate.gamma / 3}deg)`
        }}
      />
      {sharkUnder ? (
        <SharkUnder
          style={{
            top: `${devRotate.beta / 2.5 + 22}%`
          }}
        />
      ) : null}
      <Wave2
        style={{
          left: `${devRotate.gamma / 4}%`,
          top: `${devRotate.beta / 2.5 + 25}%`,
          transform: `rotate(${-devRotate.gamma / 3}deg)`
        }}
      />
      {shark ? (
        <>
          <Shark
            happy={animate.shark}
            style={{
              top: `${devRotate.beta / 2.5 + 20}%`,
              transform: `rotate(${-devRotate.gamma / 3}deg) translate(-50%)`
            }}
          />
          <Shark
            happy={animate.shark}
            mask
            style={{
              top: `${devRotate.beta / 2.5 + 20}%`,
              transform: `rotate(${-devRotate.gamma / 3}deg) translate(-50%)`
            }}
          />
        </>
      ) : null}
      <Wave1
        style={{
          left: `${devRotate.gamma / 3}%`,
          top: `${devRotate.beta / 2 + 31.4}%`,
          transform: `rotate(${-devRotate.gamma / 3}deg)`
        }}
      />
    </WaveArea>
  );
};

export default Wave;
