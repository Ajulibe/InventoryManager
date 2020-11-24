import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...rest} {...props} />
        ) : //   <Redirect to="/Signin" />
        null
      }
    />
  );
};
export default ProtectedRoute;
