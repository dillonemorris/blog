import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";
import styled from "styled-components";
import Spacer from "./Spacer";
import { Link } from "gatsby";
import { Footer } from "./Footer";

const Background = styled.div`
  background-color: #fff;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 40px 8px 0px 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Emoji = styled.span`
  font-size: 18px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #111827;
`;

const Name = styled.h2`
  font-size: 24px;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <Background>
      <Wrapper>
        <LogoLink to="/">
          <Emoji role="img" aria-label="love">
            💙
          </Emoji>{" "}
          <Spacer size={6} />
          <Name>dillon.</Name>
        </LogoLink>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Background>
  );
};
