import React from "react";
import styled from "styled-components";
import Spacer from "../Spacer";
import { useThemeColor } from "../../hooks/useThemeColors";
import { GithubIcon } from "./GithubIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { SCREENS } from "../../styles/theme";

const Wrapper = styled.footer`
  background: var(--color-background);
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0px auto;
  display: flex;
  align-items: center;

  padding: 16px 12px;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 24px 16px;
  }
`;

const Icons = styled.div`
  display: flex;
`;

export const Footer = () => {
  const iconColor = useThemeColor("text");
  return (
    <Wrapper>
      <Container>
        <Icons>
          <a target="blank" href="https://github.com/dillonemorris">
            <GithubIcon color={iconColor} />
          </a>
          <Spacer size={16} />
          <a href="https://twitter.com/dilmodev">
            <LinkedInIcon color={iconColor} />
          </a>
        </Icons>
      </Container>
    </Wrapper>
  );
};
