import React from "react";
import { Typography as MUITypography } from "@mui/material";
import PropTypes from "prop-types";

function Typography({ variant = "body1", children, ...props }) {
  return (
    <MUITypography variant={variant} {...props}>
      {children}
    </MUITypography>
  );
}

export default Typography;

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
    "overline",
    "button",
    "inherit",
  ]),
  children: PropTypes.node.isRequired,
};
