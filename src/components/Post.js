import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Spacer from "./Spacer";
import { P } from "./Elements";
import { useIsDarkModeEnabled } from "../hooks/useIsDarkModeEnabled";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 8px;
  transition: hover 0.3s;
  padding: 24px 0px;
`;

const Title = styled.h1`
  font-size: 34px;
  color: var(--color-text);
`;

const Excerpt = styled(P)`
  color: var(--color-secondary-text);
`;

export const Post = ({ post }) => {
  const { frontmatter, slug } = post;
  const imageLightMode = getImage(frontmatter.image);
  const imageDarkMode = getImage(frontmatter.imageDarkMode);
  const isDarkModeEnabled = useIsDarkModeEnabled();
  const image = isDarkModeEnabled ? imageDarkMode : imageLightMode;

  return (
    <StyledLink to={slug}>
      <div>
        <Spacer size={8} />
        <Title>{frontmatter.title}</Title>
        <Spacer size={4} />
        <Excerpt>{frontmatter.excerpt}</Excerpt>
      </div>
      <Spacer size={24} />
      <GatsbyImage
        alt={`Illustration for ${frontmatter.title}`}
        image={image}
      />
    </StyledLink>
  );
};
