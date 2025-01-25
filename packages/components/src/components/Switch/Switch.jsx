import React from "react";
import { Switch as MUISwitch } from "@mui/material";
import PropTypes from "prop-types";

function Switch({ checked, onChange, ...props }) {
  return <MUISwitch checked={checked} onChange={onChange} {...props} />;
}

export default Switch;

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
