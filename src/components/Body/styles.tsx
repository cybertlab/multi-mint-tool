import styled from "styled-components";

export const Section = styled.section`
  margin: 50px 0 150px;
  @media (max-width: 740px) {
    margin: 350px 0 450px;
  }
`;

export const Inner = styled.div`
  position: relative;
`;

export const SubTitle = styled.h3`
  font-size: 38px;
  line-height: 160%;
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 35px;
  }
`;

export const Cost = styled.h5`
  font-size: 24px;
  line-height: 120%;
  color: #848484;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 8px;
  @media (max-width: 500px) {
    margin-bottom: 6px;
  }
`;

export const Text = styled.h4`
  font-size: 30px;
  line-height: 120%;
  color: #70c5ff;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 29px;
  @media (max-width: 500px) {
    margin-bottom: 35px;
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    cursor: pointer;
    &:hover {
      path,
      circle {
        stroke: #dfe557;
      }
    }
    &:active {
      background: #dfe557;
      border-radius: 50%;
      circle {
        stroke: #dfe557;
      }
      path {
        stroke: black;
      }
    }
  }
`;

export const Qty = styled.span`
  font-size: 60px;
  line-height: 160%;
  margin: 0 33px;
  @media (max-width: 500px) {
    font-size: 50px;
    margin: 0 35px;
  }
`;

export const Mint = styled.a`
  display: block;
  width: 299px;
  height: 88px;
  line-height: 88px;
  text-align: center;
  background: #8953b7;
  border-radius: 100px;
  font-size: 30px;
  color: black;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 38px auto 0;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 500px) {
    margin-top: 48px;
    width: 100%;
    max-width: 360px;
    height: 70px;
    font-size: 26px;
    line-height: 70px;
  }
`;

export const FirstGif = styled.img`
  width: 277px;
  position: absolute;
  top: 60px;
  left: 0;
  @media (max-width: 1150px) {
    width: 150px;
  }
  @media (max-width: 740px) {
    bottom: -206px;
    top: auto;
    left: auto;
    right: 4px;
    width: 143px;
  }
`;

export const SecondGif = styled.img`
  width: 178px;
  position: absolute;
  bottom: 0;
  left: 202px;
  transform: rotateZ(25deg);
  @media (max-width: 1150px) {
    left: 40px;
    width: 120px;
  }
  @media (max-width: 740px) {
    left: 29px;
    bottom: auto;
    top: -40%;
  }
`;

export const ThirdGif = styled.img`
  width: 212px;
  position: absolute;
  top: -90px;
  right: 0;
  transform: rotateZ(-35deg);
  @media (max-width: 1150px) {
    width: 140px;
  }
  @media (max-width: 740px) {
    width: 160px;
    top: -70%;
  }
`;

export const FourthGif = styled.img`
  width: 289px;
  position: absolute;
  bottom: 0;
  right: 20px;
  transform: rotateZ(5deg);
  @media (max-width: 1150px) {
    width: 140px;
  }
  @media (max-width: 740px) {
    width: 200px;
    left: 0;
    right: auto;
    bottom: -80%;
  }
`;
