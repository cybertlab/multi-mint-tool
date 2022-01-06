import styled from "styled-components";

export const Header = styled.header`
  padding: 24px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999999999;
  &.isFixed {
    background: rgba(38, 39, 39, 0.9);
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(20px);
      z-index: -1;
    }
  }
  @media (max-width: 800px) {
    padding: 22px 0 27px;
  }
  @media (max-width: 500px) {
    padding: 18px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  span {
    max-width: 158px;
    display: block;
    font-size: 20px;
    line-height: 105%;
    text-transform: uppercase;
    margin-left: 2px;
    margin-top: 7px;
  }
  img {
    width: 60px;
  }
  @media (max-width: 800px) {
    span {
      display: none;
    }
  }
  @media (max-width: 800px) {
    img {
      width: 48px;
      margin-right: 18px;
    }
  }
  @media (max-width: 330px) {
    img {
      width: 40px;
      margin-right: 13px;
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

export const Social = styled.div`
  margin-right: 74px;
  a {
    display: flex;
    align-items: center;
    font-size: 20px;
    text-transform: uppercase;
    span {
      margin-left: 7px;
    }
    &:hover {
      color: #6db3e2;
      svg path {
        fill: #6db3e2;
      }
    }
  }
  @media (max-width: 800px) {
    span {
      display: none;
    }
  }
  @media (max-width: 500px) {
    margin-right: 20px;
    svg {
      width: 23px;
    }
  }
  @media (max-width: 330px) {
    margin-right: 15px;
    svg {
      width: 18px;
    }
  }
`;

export const Link = styled.a`
  font-size: 18px;
  line-height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 3px solid white;
  border-radius: 10rem;
  padding: 13px 30px;
  &:hover {
    color: #dfe557;
    border-color: #dfe557;
  }
  &:active {
    color: black;
    border-color: #dfe557;
    background: #dfe557;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    display: block;
    width: 150px;
    height: 37px;
    line-height: 34px;
    text-align: center;
    border: 2px solid white;
    padding: 0;
  }
  @media (max-width: 330px) {
    font-size: 12px;
    width: 140px;
  }
`;
