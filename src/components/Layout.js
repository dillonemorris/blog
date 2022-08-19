import React from "react";
import "../styles/globals.css";
import "../fonts/fonts.css";
import styled, { ThemeProvider } from "styled-components";
import { ColorModeContainer } from "../components/ColorModeContainer";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { THEME_COLORS, SCREENS } from "../styles/theme";

const PageWrapper = styled.div`
  height: 100%;
  margin: auto;
  width: 100%;
  border-top: 4px solid var(--color-primary);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={{ colors: THEME_COLORS, screens: SCREENS }}>
      <ColorModeContainer>
        <PageWrapper>
          <Wrapper>
            <Header />
            <Content>{children}</Content>
            <Footer />
          </Wrapper>
        </PageWrapper>
      </ColorModeContainer>
    </ThemeProvider>
  );
};
