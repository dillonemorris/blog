import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import Spacer from "../components/Spacer";
import { H2, P, H3, A } from "../components/Elements";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostWrapper = styled.div`
  padding: 40px 0px;
`;

const Title = styled.h1`
  font-size: 44px;
  color: #111827;
`;

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title, largeImage, date },
  } = data.mdx;

  const components = {
    div: ({ children }) => <div>{children}</div>,
    a: ({ children, href }) => {
      console.log(children);
      return (
        <A target="blank" href={href}>
          {children}
        </A>
      );
    },
    h2: ({ children }) => <H2 style={{ width: "fit-content" }}>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    p: ({ children }) => <P>{children}</P>,
    blockquote: ({ children }) => <quote>{children}</quote>,
    pre: ({ children }) => <pre children={children} />,
    ul: ({ children }) => <ul>{children}</ul>,
  };

  return (
    <MDXProvider components={components}>
      <PostWrapper>
        <div>
          <GatsbyImage image={getImage(largeImage)} />
          <Title>{title}</Title>
        </div>
        <Spacer size={20} />
        <MDXRenderer>{body}</MDXRenderer>
      </PostWrapper>
    </MDXProvider>
  );
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      body
      slug
      frontmatter {
        date(formatString: "MMMM Do, YYYY")
        title
        largeImage {
          childImageSharp {
            gatsbyImageData(
              width: 220
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
