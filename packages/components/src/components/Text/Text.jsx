import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

function Text({ variant = "body1", children, ...props }) {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  );
}

export default Text;

Text.propTypes = {
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
