import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";
import styled, { ThemeProvider } from "styled-components";
import { ColorModeContainer } from "../components/ColorModeContainer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { THEME_COLORS } from "../styles/theme";

const Background = styled.div`
  background-color: var(--color-background);
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 720px;
  width: 100%;
  margin: auto;
  padding: 40px 16px 0px 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1 0 auto;
`;

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: THEME_COLORS }}>
      <ColorModeContainer>
        <Background>
          <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
        </Background>
      </ColorModeContainer>
    </ThemeProvider>
  );
};
