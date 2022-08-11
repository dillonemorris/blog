import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ColorModeToggle } from "../components/ColorModeToggle";
import Spacer from "./Spacer";
import { HeadphoneGuy } from "./icons/HeadphoneGuy";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    <Container>
      <LogoLink to="/">
        <HeadphoneGuy />
        <Spacer size={8} />
        <Name>dillon.</Name>
      </LogoLink>
      <ColorModeToggle />
    </Container>
  );
};
