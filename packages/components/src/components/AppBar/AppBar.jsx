import React from "react";
import { AppBar as MUIAppBar, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

function AppBar({ title, children, ...props }) {
  return (
    <MUIAppBar {...props}>
      <Toolbar>
        {title && <Typography variant="h6">{title}</Typography>}
        {children}
      </Toolbar>
    </MUIAppBar>
  );
}

export default AppBar;

AppBar.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
