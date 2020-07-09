import React from "react";
import { Link } from "react-router-dom";
const NotFound = (props) => {
  return (
    <div>
      <p className="display-2">Page Not Found</p>
      <Link to="/">Go Back to home</Link>
    </div>
  );
};

export default NotFound;
