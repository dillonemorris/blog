import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Post } from "../components/Post";

const PostWrapper = styled.div`
  padding: 40px 0px;
`;

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <main>
      <title>dillon.</title>
      <PostWrapper>
        {posts.map((post) => {
          return <Post post={post} />;
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
            childImageSharp {
              gatsbyImageData(
                width: 180
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          imageDarkMode {
            childImageSharp {
              gatsbyImageData(
                width: 180
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
          excerpt
        }
        slug
      }
    }
  }
`;

export default IndexPage;
