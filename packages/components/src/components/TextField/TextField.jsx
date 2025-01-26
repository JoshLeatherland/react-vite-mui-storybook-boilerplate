import React from "react";
import { TextField as MUITextField } from "@mui/material";
import PropTypes from "prop-types";

function TextField({
  label,
  variant = "outlined",
  fullWidth = true,
  ...props
}) {
  return (
    <MUITextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    />
  );
}

export default TextField;

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  fullWidth: PropTypes.bool,
};
