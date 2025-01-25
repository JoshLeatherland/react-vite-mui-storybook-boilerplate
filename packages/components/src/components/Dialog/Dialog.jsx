import React from "react";
import {
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Button from "../Button";
import PropTypes from "prop-types";

function Dialog({ open, onClose, title, children, ...props }) {
  return (
    <MUIDialog open={open} onClose={onClose} {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </MUIDialog>
  );
}

export default Dialog;

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
