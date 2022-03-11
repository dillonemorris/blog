import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";
import styled, { ThemeProvider } from "styled-components";
import { ColorModeContainer } from "../components/ColorModeContainer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { THEME_COLORS } from "../styles/theme";

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: auto;
  padding: 40px 16px 0px 16px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  //flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: THEME_COLORS }}>
      <ColorModeContainer>
          <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
      </ColorModeContainer>
    </ThemeProvider>
  );
};
