import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Post } from "../components/Post";
import { SCREENS } from "../styles/theme";

const PostWrapper = styled.div`
  padding: 40px 0px;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 80px 0px;
  }
`;

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  return (
    <main>
      <title>dillon.</title>
      <PostWrapper>
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
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
          excerpt
        }
        slug
      }
    }
  }
`;

export default IndexPage;
