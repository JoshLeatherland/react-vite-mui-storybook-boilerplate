import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function FormField({
  label,
  variant = "outlined",
  fullWidth = true,
  ...props
}) {
  return (
    <TextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      {...props}
    />
  );
}

export default FormField;

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  fullWidth: PropTypes.bool,
};
