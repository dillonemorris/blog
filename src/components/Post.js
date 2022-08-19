import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Spacer from "./Spacer";
import { P } from "./Elements";
import { SCREENS } from "../styles/theme";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: hover 0.3s;
  padding: 12px 16px;
  background: var(--color-background);

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 16px 24px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: var(--color-primary);

  @media (min-width: ${SCREENS.DESKTOP}) {
    font-size: 34px;
  }
`;

const Excerpt = styled(P)`
  color: var(--color-secondary-text);
  font-size: 16px;

  @media (min-width: ${SCREENS.DESKTOP}) {
    font-size: revert;
  }
`;

export const Post = ({ post }) => {
  const { frontmatter, slug } = post;

  return (
    <StyledLink to={slug}>
      <div>
        <Spacer size={8} />
        <Title>{frontmatter.title}</Title>
        <Spacer size={4} />
        <Excerpt>{frontmatter.excerpt}</Excerpt>
      </div>
    </StyledLink>
  );
};
