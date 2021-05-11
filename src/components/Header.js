import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ColorModeToggle } from "../components/ColorModeToggle";
import Spacer from "./Spacer";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Emoji = styled.span`
  font-size: 18px;
`;

const LogoLink = styled(Link)`
  display: flex;
`;

const Name = styled.h2`
  font-size: 24px;
  color: var(--color-text);
`;

export const Header = () => {
  return (
    <Container>
      <LogoLink to="/">
        <Emoji role="img" aria-label="love">
          💙
        </Emoji>{" "}
        <Spacer size={6} />
        <Name>dillon.</Name>
      </LogoLink>
      <ColorModeToggle />
    </Container>
  );
};
