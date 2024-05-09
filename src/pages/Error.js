import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-page">
        <h1>404</h1>
        <h5>Page Not Found</h5>
        <Link className="login-btn" to="/">
          Backe To Home
        </Link>
    </div>
  );
}

export default Error;
