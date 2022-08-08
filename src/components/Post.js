import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Spacer from "./Spacer";
import { P } from "./Elements";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: hover 0.3s;
  padding: 24px 0px;
`;

const Title = styled.h1`
  font-size: 34px;
  color: var(--color-primary);
`;

const Excerpt = styled(P)`
  color: var(--color-secondary-text);
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
