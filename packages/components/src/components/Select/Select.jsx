import React from "react";
import {
  Select as MUISelect,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import PropTypes from "prop-types";

function Select({ label, options, value, onChange, ...props }) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <MUISelect value={value} onChange={onChange} {...props} label={label}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
}

export default Select;

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
