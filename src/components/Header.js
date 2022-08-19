import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ColorModeToggle } from "../components/ColorModeToggle";
import Spacer from "./Spacer";
import { HeadphoneGuy } from "./icons/HeadphoneGuy";
import { SCREENS } from "../styles/theme";

const Wrapper = styled.div`
  background: var(--color-background);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  margin: auto;
  padding: 16px 12px;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 24px 16px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: baseline;
`;

const Name = styled.h2`
  font-size: 28px;
  color: var(--color-text);
`;

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <LogoLink to="/">
          <HeadphoneGuy />
          <Spacer size={8} />
          <Name>dillon.</Name>
        </LogoLink>
        <ColorModeToggle />
      </Container>
    </Wrapper>
  );
};
