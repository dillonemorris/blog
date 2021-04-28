import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import { MDXProvider } from "@mdx-js/react";

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title, icon, date },
  } = data.mdx;

  const components = {
    div: ({ children }) => <div>{children}</div>,
    h2: ({ children }) => (
      <h2
        style={{ width: "fit-content" }}
        className="font-bold text-gray-800 text-3xl mt-10 mb-6"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-bold text-gray-800 text-xl mb-4 mt-8">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-6 text-gray-900">{children}</p>,
    blockquote: ({ children }) => <quote>{children}</quote>,
    pre: ({ children }) => <pre children={children} />,
    a: ({ children, href }) => <Link to={href} children={children} />,
    ul: ({ children }) => <ul className="list-disc ml-4 mb-6">{children}</ul>,
  };

  return (
    <MDXProvider components={components}>
      <div className="pb-12 text-base font-semibold text-gray-900">
        <Link to="/">
          {" "}
          <span role="img" aria-label="love">
            💙
          </span>{" "}
          dillon.
        </Link>
      </div>
      <div>
        <span className="text-7xl" role="img" aria-label="unique emoji icon">
          {icon}
        </span>
        <div className="mb-8">
          <h1 className="text-gray-800 font-black text-5xl mt-12 mb-2">
            {title}
          </h1>
          <p>{date}</p>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
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
        icon
      }
    }
  }
`;
