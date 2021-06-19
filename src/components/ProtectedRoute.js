// ProtectedRoute.js

import React from "react";
import { Route, Redirect } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {
  let loggedIn;
  const localIn = localStorage.getItem("isLogin");

  if (localIn === 'true') {
    loggedIn = true;
  }
  else {
    loggedIn = false;
  }

  return (
    <Route exact>
      {() =>
        loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;
