import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../Components/Navbar";
const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        component={(props) =>
          isAuthenticated ? (
            <div>
              <Navbar />
              <Component {...props} />{" "}
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);
