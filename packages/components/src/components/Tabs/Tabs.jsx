import React from "react";
import { Tabs as MUITabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

function Tabs({ value, onChange, tabs, ...props }) {
  return (
    <MUITabs value={value} onChange={onChange} {...props}>
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} value={tab.value} />
      ))}
    </MUITabs>
  );
}

export default Tabs;

Tabs.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};
