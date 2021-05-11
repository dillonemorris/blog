import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Spacer from "../components/Spacer";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: hover 0.3s;
  padding: 24px 0px;
`;

const Title = styled.h1`
  font-size: 26px;
  color: var(--color-text);
`;

const Excerpt = styled.p`
  font-size: 16px;
  color: var(--color-secondary-text);
`;

export const PostCard = ({ post }) => {
  const { frontmatter, slug } = post;
  return (
    <StyledLink to={slug}>
      <div>
        <Spacer size={8} />
        <Title>{frontmatter.title}</Title>
        <Spacer size={4} />
        <Excerpt>{frontmatter.excerpt}</Excerpt>
        <Spacer size={12} />
      </div>
      <Spacer size={16} />
      <GatsbyImage
        alt={`Illustration for ${frontmatter.title}`}
        image={getImage(frontmatter.image)}
      />
    </StyledLink>
  );
};
