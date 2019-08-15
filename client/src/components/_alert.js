import React from "react";

const Alert = () => {
  return (
    <div
      className="flash flash-danger alert alert-dismissible fade show"
      role="alert"
    >
      <span>
        <strong>Oops!</strong> There was a problem processing your form. Check
        errors below.
      </span>
    </div>
  );
};

export default Alert;
