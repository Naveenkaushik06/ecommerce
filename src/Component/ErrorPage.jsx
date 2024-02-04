import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1> Not Found</h1>
      This page doesn’t exist. If this is a mistake, let us know, and we will
      try to fix it!
      <Link to="/">go to home page</Link>
    </div>
  );
};
export default ErrorPage;
