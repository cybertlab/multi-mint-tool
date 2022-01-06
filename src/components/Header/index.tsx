/*
 * @Author: your name
 * @Date: 2021-12-22 18:51:46
 * @LastEditTime: 2021-12-31 09:50:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /mint-tool/src/components/Header/index.tsx
 */

import { useEffect } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import Container from "../Reusables/Container";

import * as S from "./styles";


export default function Header() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header: HTMLElement | null = document.querySelector("header");
    const scrollTop = window.scrollY;
    if (header) {
      scrollTop >= (isMobile ? 35 : 48)
        ? header.classList.add("isFixed")
        : header.classList.remove("isFixed");
    }
  };


  return (
    <S.Header id="header">
      <Container>
        <S.HeaderInner>
          <S.LogoWrapper href="#">
            <span>Mint tool</span>
          </S.LogoWrapper>
          <S.HeaderRight>

          </S.HeaderRight>
        </S.HeaderInner>
      </Container>
    </S.Header>
  );
}
