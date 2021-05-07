import React from "react";
import "./button.scss";

const Button = ({ children, ...restProps }) => {
  return (
    <div className="button" {...restProps}>
      {children}
    </div>
  );
};

export default Button;
