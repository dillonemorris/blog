import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";
import styled from "styled-components";
import Spacer from "./Spacer";
import { Link } from "gatsby";

const Background = styled.div`
  background-color: #fff;
  height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding: 60px 8px;
`;

const Emoji = styled.span`
  font-size: 18px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Name = styled.h2`
  font-size: 24px;
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
        {children}
      </Wrapper>
    </Background>
  );
};
