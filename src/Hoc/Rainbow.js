import React from "react";

const Rainbow = (Component) => {
  const colors = [
    "danger",
    "warning",
    "primary",
    "success",
    "muted",
    "secondary",
  ];
  const randColor = colors[Math.floor(Math.random() * colors.length)];
  const classname = "text-" + randColor;
  return (props) => {
    return (
      <div className={classname}>
        <Component {...props} />
      </div>
    );
  };
};

export default Rainbow;
