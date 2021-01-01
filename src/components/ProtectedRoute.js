import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/Signin" />
        )
      }
    />
  );
};
export default ProtectedRoute;
