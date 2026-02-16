import * as React from "react";
import { Link } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 32,
  maxWidth: 320,
};

const fof = {
  marginTop: 0,
  marginBottom: 2,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={fof}>404</h1>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        There's nothing here.
        <br />
        <br />
        <br />
        <Link to="/">Go home</Link>
      </p>
    </main>
  );
};

export default NotFoundPage;
