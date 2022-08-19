import { graphql } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Post } from "../components/Post";
import { SCREENS } from "../styles/theme";
import Spacer from "../components/Spacer";
import { useIsMobile } from "../hooks/useIsMobile";

const PageWrapper = styled.main`
  background: var(--color-secondary-background);
  padding: 0 12px;
  //height: 100%;
  margin-bottom: auto;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 0 16px;
  }
`;

const PageContent = styled.div`
  max-width: 720px;
  margin: auto;
`;

const PostWrapper = styled.div`
  padding: 40px 0px;

  @media (min-width: ${SCREENS.DESKTOP}) {
    padding: 80px 0px;
  }
`;

const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allMdx;
  const isMobile = useIsMobile();
  return (
    <PageWrapper>
      <PageContent>
        <title>dillon.</title>
        <PostWrapper>
          {posts.map((post) => {
            return (
              <>
                <Post key={post.id} post={post} />
                <Spacer size={isMobile ? 16 : 24} />
              </>
            );
          })}
        </PostWrapper>
      </PageContent>
    </PageWrapper>
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
