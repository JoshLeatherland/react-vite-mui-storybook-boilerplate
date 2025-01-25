import React from "react";
import { Modal as MUIModal, Box } from "@mui/material";
import PropTypes from "prop-types";

function Modal({ open, onClose, children, ...props }) {
  return (
    <MUIModal open={open} onClose={onClose} {...props}>
      <Box sx={{ padding: 4, backgroundColor: "white" }}>{children}</Box>
    </MUIModal>
  );
}

export default Modal;

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
