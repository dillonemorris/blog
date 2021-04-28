import React from "react";
import { Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostsLayout = ({ pageContext, data }) => {
  const { mdx } = data;
  const { previous, next } = pageContext;

  const components = {
    div: ({ children }) => <div>{children}</div>,
    h2: ({ children }) => <h2>{children}</h2>,
    p: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => <quote>{children}</quote>,
    pre: ({ children }) => <pre children={children} />,
    a: ({ children, href }) => <Link to={href} children={children} />,
    ol: ({ children }) => <ol>{children}</ol>,
    ul: ({ children }) => <ul>{children}</ul>,
  };

  const { title, date } = mdx.frontmatter;

  console.log(data);

  return (
    <MDXProvider components={components}>
      <h1 className="font-extrabold">{title}</h1>
      <div>
        <div className="text-blue-500">
          {date} &bull; {mdx.timeToRead} min read
        </div>
      </div>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <div>
        {previous && (
          <div>
            <Link to={previous.fields.slug}>{previous.frontmatter.title}</Link>
          </div>
        )}
        {next && (
          <div>
            <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
          </div>
        )}
      </div>
    </MDXProvider>
  );
};

export default PostsLayout;
