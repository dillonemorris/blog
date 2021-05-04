import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { PublishedDate } from "../components/PublishedDate";
import Spacer from "../components/Spacer";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #f3f4f6;
  border-radius: 8px;
  background-color: white;

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
`;

const Title = styled.h1`
  font-size: 26px;
`;

const PostWrapper = styled.div`
  padding: 80px 0px;
`;

const Excerpt = styled.p`
  font-size: 16px;
  color: #6b7280;
`;

const PostImage = styled.img`
  width: 140px;
`;

const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <PostWrapper>
        {data.allMdx.nodes.map(({ frontmatter, slug }) => {
          return (
            <StyledLink to={slug}>
              <div>
                <PublishedDate date={frontmatter.date} />
                <Spacer size={8} />
                <Title>{frontmatter.title}</Title>
                <Spacer size={4} />
                <Excerpt>{frontmatter.excerpt}</Excerpt>
                <Spacer size={12} />
              </div>
              <Spacer size={16} />
              <PostImage src={frontmatter.image.publicURL} />
            </StyledLink>
          );
        })}
      </PostWrapper>
    </main>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          image {
            publicURL
          }
          excerpt
        }
        slug
      }
    }
  }
`;

export default IndexPage;
