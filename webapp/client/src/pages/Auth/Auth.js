import React from "react";
import { Route, Redirect } from "react-router-dom";

function Auth({ children, ...rest }) {
  const isLogged = !!localStorage.getItem("companyId");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default Auth;
