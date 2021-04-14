import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      <h1>404 : ERROR</h1>
      <Link to="/">Go To Dashboard</Link>
    </div>
  );
};

export default Error404;
