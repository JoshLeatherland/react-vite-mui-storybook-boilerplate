import React from "react";
import { Button as MUIButton } from "@mui/material";
import PropTypes from "prop-types";

function Button({
  variant = "contained",
  color = "primary",
  children,
  ...props
}) {
  return (
    <MUIButton variant={variant} color={color} {...props}>
      {children}
    </MUIButton>
  );
}

export default Button;

Button.propTypes = {
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf([
    "default",
    "inherit",
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
  ]),
  children: PropTypes.node.isRequired,
};
