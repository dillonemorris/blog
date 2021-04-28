import { graphql, Link } from "gatsby";
import * as React from "react";

const IndexPage = ({ data }) => {
  return (
    <main>
      <title>Home Page</title>
      <h1 className="font-bold text-4xl text-gray-900 flex items-center pb-20">
        <span role="img" aria-label="love" className="text-3xl pr-2">
          💙
        </span>{" "}
        dillon.
      </h1>
      {data.allMdx.nodes.map(({ frontmatter, slug }) => {
        return (
          <Link to={slug} className="flex items-center">
            <span
              className="text-5xl"
              role="img"
              aria-label="unique emoji icon"
            >
              {frontmatter.icon}
            </span>

            <div className="flex flex-col pl-6">
              <h1 className="text-xl text-gray-900 font-bold">
                {frontmatter.title}
              </h1>
              <p>{frontmatter.date}</p>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 50)
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
          icon
        }
        slug
      }
    }
  }
`;

export default IndexPage;
