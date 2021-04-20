import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </div>
  );
};

export default PublicRoute;
