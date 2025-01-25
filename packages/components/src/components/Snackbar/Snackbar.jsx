import React from "react";
import { Snackbar as MUISnackbar, SnackbarContent } from "@mui/material";
import PropTypes from "prop-types";

function Snackbar({ open, onClose, message, ...props }) {
  return (
    <MUISnackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      {...props}
    >
      <SnackbarContent message={message} />
    </MUISnackbar>
  );
}

export default Snackbar;

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};
