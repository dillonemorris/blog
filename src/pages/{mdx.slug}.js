import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import { SCREENS } from "../styles/theme";
import Spacer from "../components/Spacer";
import { H2, P, H3, A, Quote, Ul } from "../components/Elements";
import { ButtonContrastExample } from "../components/ButtonContrastExample";
import CodeSnippet from "../components/CodeSnippet";

const PageWrapper = styled.div`
  padding: 40px 16px;
  max-width: 720px;
  margin: auto;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding-top: 80px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: var(--color-text);
`;

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx;

  const components = {
    div: ({ children }) => <div>{children}</div>,
    a: ({ children, href }) => (
      <A target="blank" href={href}>
        {children}
      </A>
    ),
    h2: ({ children }) => <H2 style={{ width: "fit-content" }}>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    p: ({ children }) => <P>{children}</P>,
    ul: ({ children }) => <Ul>{children}</Ul>,
    blockquote: ({ children }) => <Quote>{children}</Quote>,
    pre: (props) => <pre {...props} />,
    code: CodeSnippet,
    ButtonContrastExample,
  };

  return (
    <MDXProvider components={components}>
      <PageWrapper>
        <Title>{title}</Title>
        <Spacer size={20} />
        <MDXRenderer>{body}</MDXRenderer>
      </PageWrapper>
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
      }
    }
  }
`;
